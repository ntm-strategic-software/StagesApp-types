---
description: Thorough code review of branch changes, with proposed CLAUDE.md updates when new conventions are inferred
allowed-tools: Bash(git diff:*), Bash(git log:*), Bash(git status:*), Bash(git merge-base:*), Bash(git show:*), Bash(git branch:*), Bash(git rev-parse:*), Bash(wc:*), Bash(ls:*), Bash(cd:*), Bash(gh issue comment:*), Bash(gh issue list:*), Read, Grep, Glob, AskUserQuestion
---

You are performing a thorough code review of all changes in the current branch compared to the base branch. Act as a senior engineer reviewing a teammate's PR. Be direct and specific - flag real issues, don't pad with praise.

**This command is strictly read-only.** Do not modify any files, including CLAUDE.md. If you propose changes, output them as text for the user to apply manually.

## Step 1: Determine the base branch

Try to find the base branch in this order:
1. If $ARGUMENTS contains a branch name, use it as the base.
2. Try `git merge-base HEAD main`, then `git merge-base HEAD master`, then `git merge-base HEAD develop`, then `git merge-base HEAD trunk`.
3. If none of those work or the merge-base is HEAD itself (meaning you're on the base branch), stop and ask the user which branch to compare against. Do not guess or proceed with a wrong base - a review against the wrong base is worse than no review.

Confirm the base by running `git rev-parse --abbrev-ref <base>` and `git log <base>..HEAD --oneline` to verify there are actually commits to review. If the branch has no commits ahead of base, say so and stop.

## Step 2: Warn about uncommitted changes

Run `git status` to check for uncommitted changes (staged or unstaged). If any exist, warn the user that the review only analyzes committed changes (`git diff base...HEAD`) and their working copy modifications will be excluded. Use AskUserQuestion to offer: (a) "Proceed anyway" — review committed changes only, (b) "Stop" — let me commit first. Do not silently skip uncommitted work.

## Step 3: Check diff size and decide scope

Run `git diff <base>...HEAD --stat` and evaluate:

- **Under 500 lines / under 15 files**: review everything thoroughly.
- **500-2000 lines / 15-30 files**: review thoroughly but expect to spend more attention on high-risk files (auth, data models, payment, security-adjacent code, anything in core paths).
- **Over 2000 lines or over 30 files**: stop and ask the user how to proceed. Options to offer: (a) review only specific paths, (b) review the highest-risk files and skim the rest, (c) review file-by-file in separate passes, (d) proceed anyway with the understanding that coverage will be uneven.

**Always exclude these from the review** (mention they were excluded in the Coverage section):
- Lockfiles: `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `Gemfile.lock`, `poetry.lock`, `Cargo.lock`
- Generated files: anything matching `*.generated.*`, `*.gen.ts`, `*.pb.go`, snapshot test files
- Build output: `dist/`, `build/`, `out/`, `.next/`, `coverage/`
- Vendored dependencies: `node_modules/`, `vendor/`
- Binary assets: images, fonts, compiled binaries
- Files matched by patterns in the project's `.gitignore` that ended up tracked anyway

## Step 4: Gather context

- `git diff <base>...HEAD` for the full diff (excluding the paths above)
- `git log <base>..HEAD --oneline` for commit history
- Read CLAUDE.md and any nested CLAUDE.md files relevant to the changed paths. Keep their conventions in mind throughout the review.

The commit messages describe intent, but verify the actual changes match. If the diff includes unrelated changes not mentioned in any commit message, flag that as scope creep in the review.

## Step 5: Cross-repo context gathering and coordinated analysis

This is a shared types library consumed by two sibling repos. Before reviewing, understand how the changed types are actually used by looking at the consumer codebases for context. **Never suggest changes to or modify files in sibling repos — they are read-only context.**

Sibling repos (relative to this repo's root):
- `../StagesApp-mobile`
- `../StagesApp-desktop`

### Procedure

1. From the diff gathered in Step 3, identify the key types, interfaces, enums, constants, and functions that were added or changed.

2. For each sibling repo, determine the right branch for context:
   - First check the repo's master/main branch. Grep for imports or usage of the changed types.
   - If master doesn't seem to have corresponding code (e.g., the types are new and not yet consumed on master), list the repo's branches with `git -C <repo-path> branch` and look for a branch name that relates to the current StagesApp-types branch or the feature being worked on.
   - Use `git -C <repo-path> log <branch> --oneline -10` to confirm the branch has relevant work.
   - Then search that branch for usage: `git -C <repo-path> grep <symbol> <branch> -- '*.ts' '*.tsx'`

3. Read the relevant consumer code (using `git -C <repo-path> show <branch>:<filepath>`) to understand:
   - How the changed types are imported and used
   - What assumptions consumers make about field names, types, and default values
   - Whether the changes are backwards-compatible with existing consumer code
   - Whether new types/fields have corresponding consumer code ready on a feature branch

4. Use this context during the review (Steps 7-10) to catch:
   - Type changes that would break consumers (renamed fields, changed types, removed exports)
   - Default values that don't match what consumers expect
   - Missing fields or enum values that consumers already reference on feature branches
   - Inconsistencies between the type definitions here and how they're used in practice

5. **Coordinated analysis**: When a matching branch is found in a sibling repo (same issue number or feature name), go beyond noting it exists — actually read the sibling's implementation of any shared protocol, IPC contract, or type usage touched by the branch under review. Specifically:
   - Verify field names, message shapes, capability flags, and negotiation flows match between the two sides.
   - Flag mismatches (e.g., one side sends an auth header the other side never checks, or a config option set on the server but not the client).

Include a **Cross-repo context** subsection in the Coverage section noting which repos/branches were checked, what consumer usage was found, and any contract alignment findings. If a sibling repo is unavailable or has no relevant usage, note that too.

**Reminder: This step is strictly read-only. Do not suggest changes to StagesApp-mobile or StagesApp-desktop. Only use them to inform your review of StagesApp-types.**

## Step 6: Mandatory secret scan

Before any other review work, scan the diff for accidentally committed secrets. Look for:

- API key patterns: long random strings assigned to variables named `api_key`, `apiKey`, `token`, `secret`, `password`, etc.
- AWS access keys (`AKIA...`), GCP service account JSON, Azure connection strings
- JWT tokens (three base64 segments separated by dots)
- Database connection strings with embedded credentials
- Contents of `.env`, `.env.local`, `.env.production`, or similar
- Private keys (`-----BEGIN ... PRIVATE KEY-----`)
- Hardcoded credentials in config files

False positives are acceptable - flagging a fake-looking string is fine. If anything is flagged, treat it as **automatically blocking** regardless of other findings, and put it at the top of the review.

## Step 7: Review against these criteria

For each changed file, evaluate:

**Correctness**
- Does the code do what the commit messages claim?
- Logic errors, off-by-one issues, incorrect conditionals?
- Edge cases handled (null/undefined, empty arrays, network failures, concurrent calls)?
- Obvious bugs a fresh reader would catch?

**Security** (in addition to the secret scan above)
- Injection risks (SQL, command, XSS)?
- Auth/authorization checks where needed?
- User input validated and sanitized?
- Sensitive data logged or exposed in errors?
- Dependencies added with known vulnerabilities or suspicious provenance?

**Error handling**
- Errors caught and handled meaningfully, or swallowed?
- Async operations and promises handled correctly (no unhandled rejections)?
- Error messages avoid leaking internals to end users?

**Consistency with codebase**
- Code matches existing patterns and conventions in this repo?
- New dependencies justified, or could existing utilities be reused?
- Naming, file structure, and style consistent with neighbors?
- **Anything in CLAUDE.md being violated? Cite the specific CLAUDE.md rule.**

**Testing**
- Tests for new behavior and changed behavior?
- Tests actually verify logic, or just exercise it?
- Edge cases and error paths tested?

**Performance & resources**
- Obvious N+1 queries, unbounded loops, memory leaks?
- Blocking the event loop in Node, or causing re-renders in React Native?
- Large dependencies added for small purposes?

**Readability & maintainability**
- Understandable without extensive comments?
- Functions appropriately sized and single-purpose?
- Dead code, commented-out blocks, debug statements left in?
- TODOs or FIXMEs added without tracking?

## Step 8: Self-check before writing the review

Before producing output, verify your own work:

- Am I citing specific file paths and line numbers for every issue, not just general complaints?
- Am I distinguishing things I'm certain about from things I'm guessing at? Use phrases like "this looks like" or "I'm not sure but" when uncertain.
- Am I flagging anything that's just personal preference rather than an actual problem? Cut those.
- Am I flagging anything a linter would catch? Cut those unless they reveal a missing lint rule worth adding.
- Am I treating commit message claims as proof? Verify against the diff.

## Step 9: Write the review

Use these exact section headers in this order. Mark empty sections with "None." Do not omit sections.

### Coverage
Brief: which files were reviewed thoroughly, which were skimmed, which were excluded (and why - generated, vendored, lockfile, etc.). If the diff was capped or scoped down in step 3, restate the scope here.

### Summary
2-3 sentences: what this branch does, overall assessment, recommendation (approve / approve with minor changes / needs work / blocked on major issues).

### Blocking issues
Must-fix before merge. Format each as:
- **File:line** - <problem>. <Suggested fix.>

Secrets found in step 6 always go here.

### Non-blocking issues
Worth addressing but not blockers. Same format.

### Questions for the author
Things you can't determine from the diff alone where the author's intent matters.

### What's good
Brief - genuinely well-done things. Skip if nothing stands out; do not manufacture praise.

## Step 10: Look for new convention signals

After completing the review, scan the diff one more time for **convention learning opportunities**. Look at lines that were *edited* (not added) for evidence of deliberate pattern choices.

Strict limits on what to propose:
- **Maximum two convention additions per review.** If you find more candidates, list only the strongest two and note that others existed.
- Only propose conventions where the PR demonstrates *deliberate choice*, not incidental usage. Evidence of intent includes: commit messages stating a rule, multiple instances within the PR, edits that explicitly replace the alternative pattern, or comments in the code explaining why.
- A one-line PR that happens to use one pattern over another is not evidence of a convention. Skip.
- Do not propose conventions that contradict existing CLAUDE.md without flagging the contradiction.

If you find candidates, add this section:

### Proposed CLAUDE.md updates

For each (max 2):

```
**[Convention name]** (confidence: high/medium/low)
<Proposed rule statement, in the imperative style of existing CLAUDE.md>

Evidence in this PR: <file:line references>
Why I think this is a convention: <brief reasoning>
```

If no new conventions are evident, omit this section entirely.

## Step 11: Offer to post results to GitHub

After presenting the review, offer to post the results as a comment on the related GitHub issue. Use AskUserQuestion to ask:

1. **Issue number**: Try to infer the issue number from the branch name (e.g., `gh1287` → issue #1287). If you can't determine it, ask the user for the issue number. Offer "Skip — don't post" as an option.
2. If the user provides an issue number (or confirms the inferred one), post the review as a comment using `gh issue comment`.

Format the comment as follows:
- Use a `## Code Review` heading
- Include the **Summary** section
- Combine **Blocking issues** and **Non-blocking issues** into a single list where each issue is a GitHub-flavored markdown checkbox (`- [ ]`) so the author can check them off as they address each one. Prefix blocking issues with `**[Blocking]**` and non-blocking with `**[Non-blocking]**`.
- Include **Questions for the author** as a numbered list
- If cross-repo observations exist, include them as a separate section
- Omit the Coverage, What's good, and Proposed CLAUDE.md updates sections from the comment (keep the comment focused on actionable items)
- End with: `*Posted by `/review-branch`*`

## Final rules

- This command is read-only. Never edit CLAUDE.md or any other file from this command. Propose changes as text only.
- Cite specific file paths and line numbers for every issue.
- If uncertain whether something is a bug, say so rather than asserting.
- Don't flag style nits a linter would catch.
- Don't suggest rewrites of working code without concrete reason.

<!--
Optional hardenings to consider enabling once you've used this for a few weeks:

- Tone matching: if your team's reviewer has a specific style (terse, question-driven, example-heavy), encode it here so reviews feel consistent with what the team expects.

- Multi-author convention check: when proposing conventions, run `git log --pretty=format:"%h %an %s" -- <path>` on affected files to verify the pattern is enforced by multiple authors, not just one person's preference.

- Risk-tier flagging: maintain a list of high-risk paths (auth, payment, data models, migrations) and automatically escalate any change in those paths to require extra scrutiny in the review.

- Test-coverage delta: if the project has coverage tooling, compare coverage before and after to flag changes that reduce coverage.
-->
