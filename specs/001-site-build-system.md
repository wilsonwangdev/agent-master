---
id: "001"
title: "Site Build System"
status: accepted
created: 2026-04-23
---

# SPEC 001: Site Build System

## Decision

Build the static site from scratch using a single Node ESM script (`build/build.mjs`) with `marked` as the only dependency.

## Rationale

- No framework overhead — the site is purely informational, no routing/interactivity needed
- Agent-friendly: the build system is a single readable file, easy for agents to understand and modify
- Markdown source files remain the primary interface for both humans and agents
- Dogfoods AI Native principles: minimal dependencies, clear boundaries, atomic structure

## How It Works

1. Scans `content/**/*.md` for source files
2. Parses YAML frontmatter via regex (no library)
3. Converts Markdown to HTML via `marked`
4. Injects into HTML templates via string replacement
5. Outputs to `site/` mirroring content directory structure
6. Copies static assets (CSS, JS) to `site/assets/`
7. Generates index pages per language with section listings

## Constraints

- Zero client-side framework — vanilla HTML/CSS/JS only
- Single stylesheet, dark mode via `prefers-color-scheme`
- Root `/index.html` redirects to `/en/`
