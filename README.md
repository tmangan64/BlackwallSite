# [SYSTEM] — Personal Site

A cyberpunk/retrofuturist terminal-aesthetic personal site built with [Astro](https://astro.build).

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # output → ./dist
```

## Structure

```
src/
├── content/
│   ├── projects/   ← .md files, one per project
│   └── blog/       ← .md files, one per article
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── projects/[slug].astro
│   └── blog/[slug].astro
└── styles/
    └── global.css
```

## Adding Content

### New Project

Create `src/content/projects/my-project.md`:

```md
---
title: "My Project"
description: "Short description shown in the card."
date: "2025-01-01"
tags: ["tag1", "tag2"]
status: "active"       # active | stable | wip | archived
github: "https://github.com/..."
url: "https://..."
---

Your markdown content here.
```

### New Article

Create `src/content/blog/my-article.md`:

```md
---
title: "My Article"
description: "Short description shown in the list."
date: "2025-01-01"
tags: ["tag1", "tag2"]
---

Your markdown content here.
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Source → GitHub Actions**
3. The `.github/workflows/deploy.yml` workflow handles the rest

Update `astro.config.mjs` with your actual site URL:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',   // or '/repo-name/' if deploying to a project page
});
```

## Customization

- **Identity**: Edit the `SYSTEM` logo text and `NODE_ID` in `BaseLayout.astro`
- **Colors**: CSS variables in `src/styles/global.css` under `:root`
- **Fonts**: Currently using `Share Tech Mono`, `Orbitron`, and `VT323` from Google Fonts
