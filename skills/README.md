# Skills

Reusable agent skills following the [Agent Skills](https://agentskills.io) open standard.

Each skill is a directory containing a `SKILL.md` entry point with YAML frontmatter. This format is compatible with Claude Code, Cursor, GitHub Copilot, and other agent runtimes that support the standard.

## Structure

```
skills/
  <skill-name>/
    SKILL.md          # Required: frontmatter + instructions
    scripts/          # Optional: executable helpers
    references/       # Optional: supporting docs
```

## Installation

From this repository:

```bash
gh skill install wilsonwangdev/agent-master-handbook <skill-name>
```

Or copy the `<skill-name>/` directory into your project's `.claude/skills/` (or equivalent).

## Quality Gate

A skill can only be added here when it meets ALL of the following:

1. Follows the Agent Skills standard (`SKILL.md` with YAML frontmatter)
2. Has been tested in at least one mainstream agent environment
3. Solves a real, recurring need — not a one-off task
4. Does not duplicate functionality available through standard tool capabilities
5. Is Layer 2 compliant: works in any repository without modification
