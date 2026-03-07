# my-site

A personal wiki and knowledge platform built with [Astro](https://astro.build).
Inspired by the design philosophy of [Hundred Rabbits](https://100r.co).

## Setup

```bash
npm install
npm run dev       # localhost:4321
npm run build     # static output to ./dist
npm run preview   # preview the build
```

## Adding content

All content lives in `src/content/`. Each section is a collection:

| Section | Directory | Fields |
|---------|-----------|--------|
| Knowledge | `src/content/knowledge/` | title, description, date, tags |
| Articles | `src/content/articles/` | title, description, date, tags |
| Projects | `src/content/projects/` | title, description, date, tags, status, url |
| Resources | `src/content/resources/` | title, description, tags, url, type |

### Example frontmatter

```md
---
title: Your Title Here
description: One sentence description.
date: 2024-03-01
tags: [tag1, tag2]
---

Content in Markdown here.
```

### Projects

Projects have an additional `status` field: `active`, `complete`, or `archived`.

### Resources

Resources have a `type` field (e.g. `website`, `software`, `book`, `tool`) which groups entries on the index page. If a `url` is provided, the resource card links directly to it.

### Drafts

Set `draft: true` in frontmatter to hide an entry from all pages.

## Customisation

- **Site title**: edit `src/layouts/BaseLayout.astro`, change `const siteTitle`
- **About text**: edit `src/pages/about.astro`
- **Colours / typography**: edit `src/styles/global.css`
- **Nav items**: edit the `navItems` array in `src/layouts/BaseLayout.astro`

## Design

Monochrome, text-first, wiki-style.
IBM Plex Mono + IBM Plex Sans.
No JavaScript required for reading.
No tracking. No analytics.
