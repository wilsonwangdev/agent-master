# agent-master

An AI Native knowledge base for agent practitioners. Both a learning resource and deployable infrastructure for making any agent environment agent-ready.

## Project Architecture

```
content/     — Source content (Markdown, bilingual EN/ZH)
  concepts/  — Core concept articles (harness engineering, context engineering, etc.)
  guides/    — Practical how-to guides
  curated/   — Curated blog articles with commentary
  evangelism/ — AI Native evangelism content
specs/       — SPEC-driven engineering documents
skills/      — Agent-usable skill definitions (quality-gated)
rules/       — Agent rules and constraints (quality-gated)
references/  — Git submodules to authoritative external repos
journal/     — Failure records and agent evolution log
build/       — Static site build system (Node ESM, marked only)
site/        — Generated output (gitignored)
```

## Setup

```bash
npm install       # also activates git hooks via husky
npm run build     # generates site/ from content/
```

## Safety

- `.gitguard` contains patterns that pre-commit hook (husky) will reject.
- Never write usernames, emails, tokens, or account names from tool output into project files.
- When PII is discovered, add the pattern to `.gitguard` before committing.
- See `rules/pii-protection.md` for the full rule.

## Git Workflow

- Never push directly to `main`. Always: branch → commit → push → PR.
- Branch from `main`, name with prefix: `infra/`, `content/`, `build/`, `rule/`, `spec/`
- One concern per branch and per PR. If changes are unrelated, split them.
- Atomic commits: one logical change, prefixed message explaining why.
- After PR merge: `npm run clean-branches` to delete merged local branches.
- Before starting work: `git fetch -p && git branch -v` to check stale branches.
- See `rules/git-workflow.md` for the full rule.

## Content Conventions

- Each content piece lives in its own directory with `en.md` and `zh.md`
- Frontmatter: `title`, `lang`, `pair`, `lastUpdated`, `status` (draft|published)
- All content must come from authoritative, verified sources
- Empty structure > low-quality placeholder content

## Commit Conventions

Atomic commits with prefixes:
- `content:` — content additions or edits
- `build:` — build system changes
- `infra:` — project infrastructure (CI/CD, settings, configs)
- `skill:` — skill definitions
- `rule:` — rule definitions
- `spec:` — SPEC documents
- `ref:` — reference/submodule updates
- `journal:` — failure records and evolution notes

## Key Pointers

- Specs define decisions before implementation → `specs/`
- Skills and rules have quality gates → see their README files
- Journal captures failures for agent self-evolution → `journal/`
- Roadmap shows what to work on next → `ROADMAP.md`
- Contribution guidelines → `CONTRIBUTING.md`
- This repo dogfoods its own practices
