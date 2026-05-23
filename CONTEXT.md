# Project Context — yunusardaguney.com

> AI agents: read this + `product.md` before implementing features.

## What this is

Single-page portfolio for **Yunus Arda Güney** — Software & AI Automation Engineer. Goal: visitor understands who you are, what you build, and how to contact you in ~30 seconds.

Not a blog. Project-focused showcase.

## Tech

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router), React 19 |
| Styling | Tailwind CSS 4, dark theme |
| Content | Static TS files |
| Hosting | Vercel |
| Analytics | Vercel Analytics (per product spec) |

## Page sections (order)

1. **Nav** — anchor links: Projeler, Hakkımda, İletişim
2. **Hero** — name, role, tagline, CTAs (Projeler scroll, GitHub, Mail)
3. **Projects** — grid/cards from `projects.ts`
4. **About** — photo, 3 paragraphs, tech badges
5. **Contact** — email, GitHub, LinkedIn
6. **Footer**

## Content sources

- `src/config/site.ts` — identity, nav, social, about text, tech stack
- `src/data/projects.ts` — MODÜ-GRID, RandevuAsistanim, Solveny (v1 list)
- `public/me.jpg`, `public/projects/{id}.png` — assets with skeleton fallbacks

## v1 exclusions

Blog, CMS, i18n, login, repo links required, backend services.

## Design tokens

- Background: zinc-950 / zinc-900
- Accent: emerald (borders, links, focus rings)
- Typography: Geist (layout.tsx)

## Commands

```bash
npm run dev
npm run build
npm run lint
```

Full spec: **`product.md`**
