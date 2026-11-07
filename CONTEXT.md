# Project Context — yunusardaguney.com

> AI agents: read this + `product.md` before implementing features.

## What this is

Single-page portfolio for **Yunus Arda Güney** — Software & AI Automation Engineer. Goal: visitor understands who you are, what you build, and how to contact you in ~30 seconds.

Not a blog. Project-focused showcase.

## Tech

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router), React 19 |
| Styling | Tailwind CSS 4, dark blue cloud theme |
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

## Current visual direction — supplied fixed blue artwork, November 2026

The user selected a blue classical engraving and requested that it stay fixed behind the scrolling content. This supersedes the two-scene cloud transition.

- `public/backgrounds/blue-engraving-v2.webp` is a WebP conversion of the user-supplied attachment. No external artwork was fetched. Prior draft assets remain unused.
- `SiteBackground` is a server component: one decorative `next/image`, fixed to the viewport, plus a static navy shade for white text contrast. No scroll listener, parallax, fade, scale or background scene change. Mobile uses a center crop and uniform shade.
- User requested the typography and opening alignment of burkankale.com: self-hosted Cormorant Garamond for name/body, IBM Plex Mono for labels and underlined navigation. Live reference inspected at 390/768/1440: desktop 1060px centered container, hero padding 95px/75px, name clamp up to136px with .92 line height, 670px intro measure at25px. Mobile uses65px name at390px (scales down to55px at320px to keep the first name on one line) and22px intro. Native 44px link targets retained. Real copy remains in `src/config/site.ts` and `src/data/projects.ts`.
- On desktop, the project introduction follows the active project (index, name and problem summary) while scrolling in either direction. Desktop uses a sticky left column. Below1024px, the introduction is a transparent normal-flow “Seçili çalışmalar” heading; the active-project panel is hidden and tracking is paused. Each project title appears once in its entry. Card text remains server-rendered and readable without JavaScript. No entry/exit motion is added. Profile and project screenshots have not been supplied.

## Commands

```bash
npm run dev
npm run build
npm run lint
```

Full spec: **`product.md`**

## Working draft status — 8 November 2026

The fixed background is implemented locally. Build/lint passed; browser checks at 390/768/1440 verified fixed position across scroll, responsive crop, loaded artwork, readability and no horizontal overflow. Real-device performance remains NOT_RUN. Final aesthetic acceptance remains with the user. No deployment was performed.

Typography revision (8 November): build/lint/diff-check PASS. Reference and local opening start coordinates checked at390/768/1440; all local fonts loaded. Added320px correction to keep the name on two lines. Full desktop/mobile layouts, active-project text,44px nav targets and keyboard focus inspected. Physical-device profiling remains NOT_RUN.

Responsive correction (8 November): removed the opaque220px sticky focus panel below1024px after user screenshot feedback. Narrow layouts now have a42px (mobile) or50px (tablet) normal-flow section heading, and project names appear once per entry. Build/lint/diff-check PASS; browser320/390/768/1024/1440 checks and desktop forward/reverse tracking passed.

Background variant (8 November): latest user-supplied engraving converted to `blue-engraving-v2.webp` and selected in SiteBackground. Original variant retained unused. Build/lint/diff-check PASS;1440/390 loaded image, contrast and fixed scroll position reviewed.

Publication (8 November): user authorized pushing the selected portfolio and making the site public. Release scope includes current website source, self-hosted font files/licenses and blue-engraving-v2.webp; discarded artwork/background drafts and local task records are excluded. Hosting and live-domain verification are in progress.
