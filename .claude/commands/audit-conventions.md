---
description: Audit codebase for coding conventions via parallel category specialists, with proposed CLAUDE.md additions
allowed-tools: Bash(find:*), Bash(wc:*), Bash(ls:*), Bash(git log:*), Bash(git ls-files:*), Read, Grep, Glob, Task
---

You are orchestrating a static-analysis audit of the codebase to discover coding conventions. The work is split: a sampler determines what to look at, multiple category specialists scan in parallel for different convention categories, then a synthesizer filters and ranks the results.

**This command is strictly read-only.** Propose changes as text. Never edit CLAUDE.md.

## Step 1: Sampling and feasibility

If $ARGUMENTS contains a path or area name, scope to that subtree. Otherwise audit the whole repo.

Run `git ls-files | wc -l` and count source files in scope (`find <scope> -type f \( -name "*.ts" -o ... \)`).

Feasibility:
- Fewer than ~20 source files: stop, codebase too small.
- More than ~2000: ask user whether to narrow scope or proceed with sampling.

Identify major directories within scope via `ls -la <scope>`.

**Stratified sampling:**
- ~5-10 files per major directory
- Weight toward recently-modified files: `git log --pretty=format: --name-only --since="6 months ago" -- <dir> | grep -v '^$' | sort -u | head -10`
- Include at least one test file per directory if tests exist
- Skip generated, lockfiles, vendored, build output, snapshots
- Cap total sample at ~60 files

State the sampled files explicitly. Read CLAUDE.md and nested CLAUDE.md files in scope.

## Step 2: Build shared context briefing

Each category specialist receives:

- The audit scope (whole repo or specific subtree)
- The sampled file list
- The contents of all sampled files (read them once and pass the contents)
- Existing CLAUDE.md contents (so specialists don't propose duplicates)
- A note that this is static analysis, not commit-history mining
- The instruction to focus only on their specific category

Reading 60 files into context is heavy but each specialist needs them. Reading once and passing to all specialists is cheaper than each specialist re-reading.

## Step 3: Dispatch category specialists in parallel

Use the Task tool to dispatch all five specialists simultaneously - they have no dependencies on each other. Each gets the shared briefing plus their category prompt.

### Specialist 1: Structure and organization

```
You are a structure-and-organization convention specialist. Examine the sampled files for patterns related to project structure, file organization, and module boundaries. Other specialists handle naming, error handling, testing, and stack-specific patterns - stay in your lane.

[shared context briefing]

## What to look for

- File and directory naming patterns (kebab-case vs camelCase vs PascalCase, by file type)
- Where tests live (alongside source, in `__tests__/`, in top-level `test/`)
- Where types live (inline, `types.ts`, `*.types.ts`, central `types/` directory)
- Module export style (named only, default, barrel files)
- File-internal structure (constants → types → helpers → main, or other patterns)
- Import organization (grouping, sorting, blank-line separation)
- Where exports live within a file (top, bottom, alongside definitions)
- File header conventions if any

## What NOT to propose

- Language/framework defaults
- Anything any linter/formatter would handle
- Existing CLAUDE.md rules
- Vague guidance

## Output format

For each finding:

```
FINDING: <short name>
Category: structure
Observed pattern: <description>
Sample evidence: <X of Y sampled files exhibit this>
Exceptions: <specific files that don't follow it, if any>
Recent vs older: <note if there's a split>
Greppable verification: <yes/no, and grep pattern if yes>
Anti-pattern flag: yes / no
```

Return at most 6 findings.
```

### Specialist 2: Naming conventions

```
You are a naming-convention specialist. Examine the sampled files for patterns related to identifier naming. Other specialists handle structure, error handling, testing, and stack-specific patterns - stay in your lane.

[shared context briefing]

## What to look for

- Variable naming patterns (boolean prefixes like `is`/`has`/`should`)
- Function naming (verb-first, getter style, handler prefixes)
- Event handler naming (`on*` props, `handle*` implementations)
- Constant naming (SCREAMING_SNAKE, camelCase, PascalCase)
- TS types vs interfaces - which is preferred and for what
- Generic type parameter naming (single letter, descriptive, T-prefixed)
- File-level naming alignment (does main export match filename)
- React component naming patterns
- Hook naming (`use*` prefix, descriptive suffix)

## What NOT to propose

- Language/framework defaults
- Linter-handled rules
- Existing CLAUDE.md rules

## Output format

Same structure as Specialist 1, with category: naming. Return at most 6 findings.
```

### Specialist 3: Error handling and resilience

```
You are an error-handling and resilience convention specialist. Examine the sampled files for patterns related to errors, failure modes, and recovery. Other specialists handle structure, naming, testing, and stack-specific patterns - stay in your lane.

[shared context briefing]

## What to look for

- How errors are thrown (plain Error, custom error classes, error codes, Result types)
- Try/catch shape and placement
- Logging on error (which logger, what fields, what level)
- Error propagation patterns (rethrow, swallow-and-log, transform)
- API error response shape (backend) and status code conventions
- Async error handling patterns
- Retry and timeout patterns
- Validation approach (schema library, manual, decorators)

## What NOT to propose

- Generic "handle errors" advice
- Patterns that exist in only one or two files
- Existing CLAUDE.md rules

## Output format

Same structure, category: error-handling. Return at most 6 findings.
```

### Specialist 4: Testing patterns

```
You are a testing-conventions specialist. Examine the sampled files (especially the test files included in the sample) for testing patterns. Other specialists handle structure, naming, error handling, and stack-specific patterns - stay in your lane.

[shared context briefing]

## What to look for

- Test file naming (`*.test.ts`, `*.spec.ts`, in `__tests__/`)
- Test framework (Jest, Vitest, Mocha, native test runners)
- Test structure (describe/it nesting, BDD style, flat tests)
- Mocking approach (manual mocks, library mocks, dependency injection)
- Fixture and test data patterns
- Setup/teardown conventions
- Assertion style preferences
- How async code is tested
- Coverage of error paths in existing tests

## What NOT to propose

- "Write more tests" generically
- Coverage targets
- Existing CLAUDE.md rules

## Output format

Same structure, category: testing. Return at most 5 findings.
```

### Specialist 5: Stack-specific patterns

```
You are a stack-specific patterns specialist. Examine the sampled files for conventions tied to the specific tech stack (Node.js backend, React Native frontend, or whatever this codebase uses). Other specialists handle structure, naming, error handling, and testing - stay in your lane.

[shared context briefing]

## What to look for

For Node.js backend:
- Framework conventions (Express, Fastify, NestJS routing patterns)
- Where business logic lives vs. route handlers
- Database access patterns (ORM, query builder, raw SQL, repository pattern)
- Auth/middleware patterns
- Configuration loading (env vars, config module, schema validation)
- Background job patterns

For React Native frontend:
- State management approach (Context, Redux, Zustand, React Query, etc.)
- Where API calls live (in components, hooks, service modules)
- Data fetching patterns (hooks, queries, mutations)
- Navigation patterns
- Component composition patterns
- Styling approach (StyleSheet, styled-components, etc.)

For shared/general:
- Utility function patterns (in-house vs. lodash/ramda)
- HTTP client patterns
- Date library if any
- Logging patterns

## What NOT to propose

- Framework defaults that any developer would know
- Existing CLAUDE.md rules
- Patterns that aren't actually consistent in the sample

## Output format

Same structure, category: stack-specific. Return at most 6 findings.
```

## Step 4: Dispatch the synthesizer specialist

After all category specialists return, dispatch a synthesizer with their combined output:

```
You are a convention-synthesizer specialist. Five category specialists have returned findings about coding conventions in this codebase. Your job is to filter, verify, and rank them into a final proposal list.

[combined findings from all category specialists]

[shared context briefing including existing CLAUDE.md]

You have Grep and Glob to verify findings against the codebase if specialists provided greppable patterns.

## Filter aggressively

**Cut language and framework defaults.** Anything any competent developer in this stack would already know.

**Cut linter-handled rules.** Check the project for `.eslintrc*`, `.prettierrc*`, `tsconfig.json`, `biome.json`. Anything those configs already enforce - cut.

**Cut weak patterns.** Require ~70% adoption in samples for "established," 40-70% for "in-progress" (note explicitly), drop below 40%.

**Verify with grep where possible.** If a finding includes a greppable pattern, run it across the full scope (not just sample) and report actual ratio. Update confidence based on real adoption.

**Cut anti-patterns from main proposals.** Anything flagged as anti-pattern goes to a separate "potential anti-patterns" list, not into proposed conventions.

**Cut overly vague guidance.** Conventions should be specific enough that Claude can apply them mechanically.

**Cut duplicates and conflicts with existing CLAUDE.md.** Note duplicates, flag conflicts.

## Output format

Return three lists:

**PROPOSED CONVENTIONS** (cap at 8 high-confidence + 4 medium):
```
**[Name]** (confidence: high/medium, scope: <where>)
Pattern: <statement>
Codebase adoption: <X of Y in sample, plus full-scope grep ratio if available>
Recent vs older: <if relevant>
Evidence:
- <file:line>: <snippet>
- <file:line>: <snippet>
  Suggested CLAUDE.md location: <existing section or "new section: <name>">
```

**OBSERVED BUT NOT PROPOSED** (low adoption, single-author concerns, ambiguous):
```
[Name]: <brief description>
Reason not proposed: <low adoption / ambiguous / etc.>
```

**POTENTIAL ANTI-PATTERNS**:
```
[Name]: <description>
Why concerning: <reasoning>
Codebase adoption: <if relevant>
```

**LINTER OVERLAP** (conventions you noticed but the linter handles):
```
[Name]: <description>
Enforced by: <ESLint rule, Prettier setting, etc.>
```
```

## Step 5: Final synthesis and output

After the synthesizer returns, format the final review using these section headers. Mark empty sections with "None."

### Audit scope
- Repository or subtree audited
- Source file count in scope
- Sample size (with directory breakdown)
- Specialists run

### Conventions already in CLAUDE.md
Confirms checking was done.

### Proposed additions to CLAUDE.md
Cap at 12 (8 high + 4 medium). Format from synthesizer's output.

### Patterns observed but not strongly established
From synthesizer.

### Potential anti-patterns
From synthesizer.

### Linter/formatter overlap
From synthesizer.

### Coverage gaps
Categories where no clear convention emerged because:
- Pattern not represented in sample
- Codebase genuinely inconsistent
- Category not applicable to this codebase

This tells the user where the audit was inconclusive.

## Final rules

- Category specialists run in parallel - they have no dependencies.
- Synthesizer runs sequentially after all category specialists return.
- Cap total proposals at 12 high+medium combined.
- Every proposal needs concrete file:line evidence.
- Read-only. Never edit CLAUDE.md.
- Skip language/framework defaults and linter-enforced rules.
- This command is heavy. Don't run it weekly.

<!--
Optional improvements:
- Add a "convention drift" specialist that compares this audit's findings to a stored previous audit (if one exists). Tracks how conventions shift over time.
- Add architecture-level specialist for cross-cutting concerns: module boundaries, layering rules, what's allowed to import what. Harder to detect from sample-based reads; may need explicit dependency analysis.
- Cross-language splits: if the repo has multiple languages (TS + Python, etc.), audit them separately - their conventions don't transfer.
-->
