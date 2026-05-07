Start the GitHub issue watcher agent. Use CronCreate to schedule a recurring job every 10 minutes that:

1. Runs: gh issue list --repo ntm-strategic-software/StagesApp-mobile --assignee sburson34 --state open --json number,title
2. For each issue, checks if .claude/plans/gh-{number}.md already exists. Skips issues that already have plan files.
3. For each NEW issue (no plan file):
   a) Reads full issue details: gh issue view {number} --repo ntm-strategic-software/StagesApp-mobile --json title,body,labels,comments
   b) Reads CLAUDE.md for project conventions
   c) Explores the relevant codebase to understand what's involved
   d) Writes a plan to .claude/plans/gh-{number}.md with sections: Issue Summary, Analysis, Implementation Plan, Files to Modify, Testing Strategy. Sets Status to PENDING_APPROVAL.
4. Reports: "Checked N issues. Created plans for: [list]. Already tracked: [list]."

IMPORTANT: Only create plan files. Never implement changes or create branches. The user must explicitly approve each plan first.