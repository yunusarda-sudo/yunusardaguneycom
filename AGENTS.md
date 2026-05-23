# yunusardaguney.com — Agent Instructions

Kişisel portföy sitesi. AI workflow: [humanstack/vibe-coding-template](https://github.com/humanstack/vibe-coding-template) (frontend-only uyarlaması).

## Architecture

- **Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **Content**: Static — no CMS, no backend, no auth (v1)
- **Spec**: `product.md` (full requirements), `CONTEXT.md` (quick reference)

## File layout

```
src/app/          → page, layout, globals
src/components/   → nav, hero, projects, about, contact, footer
src/config/       → site.ts
src/data/         → projects.ts
src/types/        → project.ts
public/           → me.jpg, projects/*.png
```

## Standards

- TypeScript for all source files
- Server components by default; `'use client'` only when needed
- Dark theme: zinc backgrounds, emerald accents
- Content in `site.ts` / `projects.ts`, not hardcoded in components
- Mobile-first, anchor nav: `#projects`, `#about`, `#contact`

## Project data

```ts
// src/types/project.ts
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
  year?: number;
}
```

Sort: `featured` first, then `year` descending.

## Component pattern

```tsx
import { siteConfig } from "@/config/site";

export function SectionName() {
  return (
    <section id="section-id" className="border-t border-zinc-800/80 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* content from siteConfig / props */}
      </div>
    </section>
  );
}
```

## Workflow

```bash
npm install
npm run dev      # localhost:3000
npm run build
npm run lint
```

Deploy: Vercel → `yunusardaguney.com`

## Out of scope (v1)

Blog, i18n, CMS, user auth, FastAPI, Supabase, API routes for data.

## Before shipping

1. `npm run build` passes
2. Matches `product.md` scope
3. Images or skeletons work for profile + projects

Use `.cursor/rules/` for detailed patterns. Reference `@react-component-template` for new sections.
