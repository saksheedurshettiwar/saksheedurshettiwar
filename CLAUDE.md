# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # run ESLint
npm run start    # serve production build
```

There are no tests in this project.

## Architecture

This is a Next.js 16 portfolio site for a product designer, using the App Router (`src/app/`), React 19, Tailwind CSS v4, Framer Motion, and React Three Fiber for 3D.

**Routing layout:**
- `/` — homepage (`src/app/page.tsx`) — hero with 3D Lanyard, project cards, stats
- `/case-studies/` — listing page + individual deep-dive pages per project
- `/about`, `/experiments` — standalone pages
- `src/app/layout.tsx` — root layout; wraps all pages with `<Navbar>` and `<Footer>`, sets `pt-[52px]` on main to clear the fixed nav

**Key architectural notes:**

- `next.config.ts` sets `typescript.ignoreBuildErrors: true` — TypeScript errors will not fail the build.
- The `Lanyard` component (`src/app/Lanyard.tsx`) is a physics-simulated 3D badge card using Three.js + Rapier. It must be loaded client-side only: `dynamic(() => import("./Lanyard"), { ssr: false })`. It loads `public/card.glb` and `public/lanyard.png`.
- There is a duplicate `Lanyard.tsx` in both `src/app/` (with the physics implementation) and `src/components/` — the homepage imports from `src/app/Lanyard.tsx`.
- Tailwind v4 is configured via `postcss.config.mjs`; there is no `tailwind.config.*` file — v4 uses CSS-first config via `@import "tailwindcss"` in `globals.css`.
- All page-level components that use hooks or motion must have `"use client"` at the top.
- Case study images and assets live in `public/case-studies/` and `public/`; the resume PDF is served from `public/`.
- The `AnimatedSection` scroll-reveal wrapper is defined locally in both `src/app/page.tsx` and `src/components/CaseStudyCard.tsx` — it is not a shared component.
