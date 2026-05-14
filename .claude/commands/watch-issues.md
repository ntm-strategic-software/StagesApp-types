Start the GitHub issue watcher agent. Use CronCreate to schedule a recurring job every 10 minutes that:

1. Detects the current repo and assignee:
   - Repo: `gh repo view --json nameWithOwner --jq .nameWithOwner`
   - Assignee: `gh api user --jq .login`
2. Runs: gh issue list --repo <repo> --assignee <assignee> --state open --json number,title
3. For each issue, checks if .claude/plans/gh-{number}.md already exists. Skips issues that already have plan files.
4. For each NEW issue (no plan file):
   a) Reads full issue details: gh issue view {number} --repo <repo> --json title,body,labels,comments
   b) Reads CLAUDE.md for project conventions
   c) Explores the relevant codebase to understand what's involved
   d) Writes a plan to .claude/plans/gh-{number}.md with sections: Issue Summary, Analysis, Implementation Plan, Files to Modify, Testing Strategy. Sets Status to PENDING_APPROVAL.
5. Reports: "Checked N issues. Created plans for: [list]. Already tracked: [list]."

IMPORTANT: Only create plan files. Never implement changes or create branches. The user must explicitly approve each plan first.
