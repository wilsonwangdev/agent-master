---
id: "002"
title: "Bilingual Strategy"
status: accepted
created: 2026-04-23
---

# SPEC 002: Bilingual Strategy

## Decision

Maintain Chinese and English content as sibling files (`en.md` / `zh.md`) within the same directory.

## Rationale

- Each content piece is a directory, making it a self-contained unit
- Translations are co-located, making it easy to verify completeness
- Build system generates `/en/` and `/zh/` URL trees, each with cross-links to the paired translation
- Agents can work on one language without affecting the other

## Frontmatter Schema

```yaml
title: "Page Title"
lang: en|zh
pair: zh.md|en.md
lastUpdated: YYYY-MM-DD
status: draft|published|hidden
```

## Rules

- Every published content piece must have both `en.md` and `zh.md`
- Draft content may exist in one language only
- The `pair` field must point to the sibling translation file
