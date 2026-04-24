---
id: "006"
title: "Content Generalization — Separating Universal Guidance from Project-Specific Practice"
status: accepted
created: 2026-04-25
---

# SPEC 006: Content Generalization

## Problem

The project serves two audiences through the same artifacts:

1. **External readers** — practitioners looking for universal agent-ready / harness engineering guidance
2. **Project agents** — AI agents operating within this specific repository

Content, skills, and rules currently mix project-specific details (file names, scripts, config objects) with universal principles. This creates three problems:

- Guides read like project documentation rather than reusable knowledge
- Skills and rules reference project-specific tooling, making them non-portable
- Agent context files contain universal advice that should be in content, and project-specific instructions that should stay in agent context

## Three-Layer Model

All artifacts in this project belong to exactly one of three layers:

### Layer 1: Universal Content (`content/`)

Audience: any practitioner, any project.

Rules:
- No references to `agent-master`, `build.mjs`, `SITE` config, `npm run clean-branches`, or any project-specific file/script
- Use generic examples: "your build script", "the project's entry point", "a config object"
- When illustrating a concept with a real example, use clearly marked callout blocks (e.g., "Example from a static site project:") rather than weaving project details into the main narrative
- The test: could someone with a completely different tech stack read this and find it useful?

### Layer 2: Distributable Tools (`skills/`, `rules/`, quickstart prompt)

Audience: practitioners who want to adopt specific practices in their own projects.

Rules:
- Must work in any repository without modification, OR clearly document what needs to be adapted
- No hardcoded file paths, script names, or project-specific config references
- Use parameterized descriptions: "your build directory", "the project's config file"
- Skills that are inherently project-specific (e.g., checking `build.mjs` line count) belong in Layer 3, not here
- The test: could someone install this skill into a different project and have it work?

### Layer 3: Project Practice (`AGENTS.md`, `journal/`, `.claude/`, project-specific skills)

Audience: agents and humans working on this specific repository.

Rules:
- Can and should reference specific files, scripts, and conventions
- This is where `build.mjs`, `npm run clean-branches`, `SITE` config, Lighthouse baselines, etc. belong
- Journal entries naturally reference project specifics — this is correct
- AGENTS.md is inherently project-specific — this is correct
- The test: does this only make sense in the context of this repository?

## Current Violations

### Content that should be generalized

| File | Issue |
|------|-------|
| `content/guides/skills-ecosystem/` | "For agent-master, skills should be treated as both..." — project name in universal guide |
| `content/guides/proactive-agent-review/` | "Example: `skills/build-code-review.md` in this project checks for..." — project-specific skill reference |
| `content/guides/proactive-agent-review/` | References to `build/*` files and PostToolUse hooks on specific paths |

### Skills that should be split or parameterized

| File | Issue |
|------|-------|
| `skills/build-code-review.md` | References `build/build.mjs`, `SITE` config object, 300-line threshold — all project-specific |

This skill should be split into:
- A **generic build review skill** (Layer 2) with parameterized paths and thresholds
- A **project-specific instance** (Layer 3) that fills in the parameters for this repo

### Rules that should be parameterized

| File | Issue |
|------|-------|
| `rules/git-workflow.md` | `npm run clean-branches` is a project-specific script |

The rule's principles are universal; the specific commands should be marked as "adapt to your project."

## Implementation Plan

### Phase 1: Add layer markers to AGENTS.md

Add a "Content Layers" section to AGENTS.md explaining the three-layer model. This gives agents the context to make correct layer decisions when creating new content.

### Phase 2: Generalize existing content

For each guide in `content/guides/`:
- Replace project-specific references with generic descriptions
- Move project-specific examples into clearly marked callout blocks
- Ensure the main narrative reads as universal guidance

### Phase 3: Split skills into generic + project-specific

- Create a generic `skills/build-review.md` that works for any project
- Keep a project-specific version in `.claude/skills/` or reference it from AGENTS.md
- Same pattern for any future skills

### Phase 4: Parameterize rules

- Mark project-specific commands in rules with "adapt to your project" annotations
- Keep the universal principles as the main content

## Boundary Principle

When in doubt about which layer something belongs to, ask:

> If I copy this file into a completely different project, does it still make sense?

- Yes → Layer 1 or Layer 2
- Only with adaptation → Layer 2 (with clear adaptation notes)
- No → Layer 3

## Agent Guidance

Add to AGENTS.md:

> When creating content, skills, or rules, identify which layer it belongs to before writing. Universal content must not reference project-specific files, scripts, or configurations. If you need to illustrate with a project example, use a clearly separated callout block.
