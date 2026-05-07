---
description: Mine commit history for coding conventions via finder/verifier specialists, with proposed CLAUDE.md updates
allowed-tools: Bash(git log:*), Bash(git diff:*), Bash(git show:*), Bash(git rev-list:*), Bash(wc:*), Read, Grep, Glob, Task
---

You are orchestrating commit-history mining to extract coding conventions and propose CLAUDE.md updates. The work is split: a finder specialist surfaces candidate conventions from history, then a verifier specialist grounds each candidate in current codebase evidence. You synthesize the verified results.

**This command is strictly read-only until the user explicitly approves changes.** Propose CLAUDE.md updates as text. Only edit CLAUDE.md after explicit user approval of specific proposals.

## Step 1: Set up shared context

Read CLAUDE.md and any nested CLAUDE.md files. Note documented conventions to avoid duplicating them. Measure CLAUDE.md size (line count, section count) for the bloat check later.

If $ARGUMENTS contains a time range (e.g., "3 months", "6 weeks"), use it. Otherwise default to 3 months.

Run `git log --since="<range>" --no-merges --oneline | wc -l` to count commits in scope. Apply these gates:

- **Fewer than ~30 commits**: history is too thin for meaningful inference. Tell the user and stop.
- **30-200 commits**: proceed normally.
- **More than ~200 commits**: stop and ask whether to narrow the range, scope to specific paths/authors, or proceed with sampling. Don't silently sample.

## Step 2: Build the shared context briefing

Create a briefing both specialists will receive:

- The time range
- The total commit count in scope
- The full CLAUDE.md contents (so neither specialist proposes duplicates)
- The list of nested CLAUDE.md files and their scopes
- A note that this is convention mining, not bug-fix or feature analysis

## Step 3: Dispatch the finder specialist

Use the Task tool to dispatch:

```
You are a convention-finder specialist mining git history for evidence of coding conventions. Your job is to surface candidate conventions for verification - you do NOT need to confirm they're followed in the rest of the codebase. A separate verifier specialist will do that.

[shared context briefing]

## What to look for

Examine commits in the time range. Run `git log --since="<range>" --pretty=format:"%h %an %s" --no-merges` for the list. Prioritize commits whose messages contain: refactor, rename, cleanup, style, lint, conform, standardize, consistency, convention, format, restructure, simplify, extract, inline, replace, migrate, deprecate, "address review", "PR feedback".

For each candidate commit, run `git show <hash>` and examine the diff.

**Focus on lines that were edited, not lines added.** Convention enforcement looks like:
- Old pattern → new pattern (a substitution)
- Reorganization without behavior change
- Renaming
- Replacing a function call with a different one
- Changing how something is structured

**Skip:**
- Pure feature additions (no signal about conventions)
- Bug fixes that change behavior (the old code was wrong, not non-conforming)
- Dependency bumps and lockfile changes
- Generated code
- Performance optimizations and forced upstream migrations (functional, not stylistic)

## What constitutes a candidate

A candidate convention needs:
- At least one clear instance in the diffs you examined
- A statement that can be expressed as "in this codebase, do X instead of Y"
- Evidence the change was deliberate (commit message, comment, or visible pattern)

## Multi-author check

For each candidate, run `git log --pretty=format:"%h %an" <relevant commits>` and note how many distinct authors enforced the pattern. A pattern enforced by one person is a preference; multiple authors signals a team convention.

## What NOT to propose

- Language defaults (using `const`, async/await, ES modules, etc.)
- Framework defaults (functional React components, hooks usage)
- Things any linter or formatter handles
- Anything already in the CLAUDE.md provided in your briefing
- Vague guidance ("write clear code", "be consistent")
- Patterns you only saw once unless the commit message explicitly states a rule

## Output format

For each candidate, return:

```
CANDIDATE: <short name>
Pattern: <what to do, what not to do, in imperative voice>
Evidence:
- <commit hash>: <one-line description>, diff snippet showing old → new
- <commit hash>: <description>, diff snippet
- (more as relevant)
  Authors enforcing: <count> distinct authors
  Initial confidence: high / medium / low (based on number of instances and clarity of intent)
  Scope guess: repo-wide / specific subtree (<which>) / specific file type
  Notes: <anything ambiguous, anti-pattern concerns, etc.>
```

Cap output at 10 candidates. If you found more, list the 10 strongest and note that others exist. The verifier will narrow further.

If history is too thin or no clear candidates emerge, say so honestly.
```

## Step 4: Dispatch the verifier specialist

After the finder returns its candidates, dispatch the verifier with the candidates plus the shared briefing:

```
You are a convention-verifier specialist. The finder specialist has surfaced candidate conventions from commit history. Your job is to verify each candidate against the *current* state of the codebase, then return a filtered, evidence-grounded list ready for proposal.

[shared context briefing]

[finder's candidate list]

You have Read, Grep, and Glob. Use them.

## For each candidate, verify

**1. Greppable adoption check.** Identify a greppable form of the new pattern and the old pattern. Examples:
- "use `logger.info()` over `console.log()`" → grep for both
- "use `import type {}` for type imports" → grep for both
- "named exports only" → grep for `export default` vs `export const|function|class`

If the convention isn't greppable (e.g., "extract repeated logic into helpers"), note that and lower confidence by one tier - don't drop the candidate, but flag that adoption can't be measured automatically.

Run grep across the codebase, excluding lockfiles, generated, dist/build, vendor, node_modules, snapshots. Limit to relevant file extensions.

Compute the adoption ratio: new pattern occurrences / (new + old) total occurrences.

**2. Apply the adoption thresholds:**
- **>70% follow new pattern**: convention is established. Keep candidate at finder's confidence.
- **30-70%**: in-progress migration. Confidence: medium maximum. Note partial adoption with actual numbers.
- **<30%**: pattern not actually followed. Either drop, or downgrade to "aspirational" with low confidence and explicit note.

**3. Scope verification.** If the pattern only appears in specific paths (e.g., 90% adoption in `src/api/` but 10% elsewhere), the convention is scoped, not repo-wide. Adjust scope statement.

**4. Recency check.** If a pattern has low adoption but the oldest enforcing commit is recent (last few weeks of range), low adoption is expected during rollout. Note this and don't penalize confidence as harshly.

**5. CLAUDE.md duplicate check.** Quote the relevant section of existing CLAUDE.md or state "no existing section addresses this." If the candidate duplicates or contradicts an existing rule, flag it.

**6. Anti-pattern check.** For each candidate that survives, ask: "Would I recommend this to someone starting a fresh project in this stack?" If no, flag as potential anti-pattern - propose with a note rather than as a clean recommendation.

## Output format

Return a verified list. For each candidate that passes verification:

```
VERIFIED CONVENTION: <name>
Pattern: <statement>
Final confidence: high / medium / low
Scope: <repo-wide / specific path / file type>
Codebase adoption: <X of Y occurrences = Z%>
Authors: <count from finder>
Recent vs older: <note if there's a meaningful split>
Existing CLAUDE.md coverage: <quoted section or "not addressed">
Anti-pattern flag: yes / no (with reason if yes)
Suggested CLAUDE.md location: <existing section name or "new section: <name>">
Evidence:
- <commit hash>: <description>
- <file:line in current code showing pattern in use>
- <file:line in current code showing the violation pattern, if any remain>
```

For candidates that fail verification (low adoption, no time-based excuse, only one author):

```
DROPPED CANDIDATE: <name>
Reason: <low adoption / single author / contradicts existing rule / anti-pattern>
Adoption: <X of Y occurrences>
Notes: <anything worth surfacing for the user even though we're not proposing it>
```

Cap final proposals at 5 high-confidence + 3 medium/low. If more pass, return the strongest. The orchestrator will further filter.
```

## Step 5: Cleanup and bloat analysis

After the verifier returns, do these passes yourself (no specialist needed - they're meta-analyses on CLAUDE.md, not on the proposals):

**Cleanup scan.** Look at existing CLAUDE.md for:
- Duplicate rules (same concept stated twice)
- Contradictions (one section says X, another says not-X)
- Stale rules (commit history shows the codebase has moved on)
- Vague guidance that doesn't actually guide decisions
- Examples that no longer match current code

List these in a "Cleanup opportunities" section if any are found.

**Bloat check.** Apply these size guides as advisory, not mechanical:
- Under 200 lines: healthy
- 200-500: substantial, watch organization
- 500-1000: large, reorganization recommended
- Over 1000: too large, splitting or pruning needed

Also check structural problems regardless of total size:
- Any single section over ~150 lines
- More than ~10 top-level sections
- "Misc" or "Other" sections mixing unrelated concerns

If thresholds are exceeded, suggest concrete restructuring strategies:
- **Split into nested CLAUDE.md** (specify which sections move where)
- **Extract to imported files** via `@path/to/file.md` syntax (only for sections >50 lines that are reference material, not active guidance)
- **Prune linter-overlap content** (rules the project's linter/formatter already enforces)
- **Consolidate related rules** (specific section pairs that should merge)

Be specific about what moves where. "Consider splitting" is not actionable.

If CLAUDE.md is healthy, just say so briefly.

## Step 6: Output the unified proposal

Use these exact section headers. Mark empty sections with "None."

### Mining scope
- Time range
- Commit count in scope
- Multi-author distribution (rough breakdown)
- Specialists run

### Conventions already documented
Brief list confirming the finder/verifier checked against existing CLAUDE.md.

### Proposed additions to CLAUDE.md
Cap at 5 high + 3 medium/low. For each verified convention from step 4:

```
**[Convention name]** (confidence: high/medium/low, scope: <where>)
<Rule statement>

Codebase adoption: <X of Y occurrences = Z%> (<brief interpretation>)
Authors enforcing: <count>
Evidence:
  - <commit hash>: <description>
  - <file:line in current code>: <snippet>
  - (more as relevant)
Suggested CLAUDE.md location: <where>
```

### Patterns enforced but not broadly adopted
Failed candidates from the verifier (low adoption, single author, etc.). The user can decide whether to formalize, expand enforcement, or ignore.

### Potential anti-patterns
Verified patterns flagged as ones you wouldn't recommend to a fresh project. Listed for awareness, not as proposals.

### Cleanup opportunities
Duplicates, contradictions, stale content in existing CLAUDE.md. Specific line references.

### Bloat assessment
Size, structure, and concrete restructuring recommendations if needed. If healthy, just state size and "no restructuring needed."

## Step 7: Wait for user approval before any edits

Stop here. Do not edit CLAUDE.md.

The user reviews the proposal and tells you which to apply. Only then, in a follow-up turn, edit CLAUDE.md - applying changes in this order:

1. Cleanup (remove approved duplicates, fix contradictions, prune approved stale content)
2. Restructuring (splits, extractions, consolidations) if approved
3. Add new conventions in appropriate sections

Even on approval, never delete more than 20% of existing CLAUDE.md content in a single run, and never delete sections labeled with "important," "warning," "do not," "always," "never" without explicit per-section confirmation.

## Final rules

- Specialists run sequentially: finder, then verifier (verifier needs finder's candidates).
- The orchestrator handles synthesis, cleanup analysis, and bloat analysis - not re-mining.
- Total proposals capped at 8 (5 high + 3 medium/low).
- Every proposal must include both commit-history evidence and current-codebase evidence.
- Read-only until explicit user approval of specific changes.

<!--
Optional improvements:
- Run finder and verifier in parallel by having finder return candidates with greppable patterns embedded, so verifier can start immediately rather than waiting. Currently sequential because verifier needs the candidate list.
- Add a third specialist for "consistency with previous mining runs" that compares this run's proposals to a stored history of past proposals. Useful for tracking convention drift over time.
-->
