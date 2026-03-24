# Procitec.io

Procitec.io is the **product platform website** for Procitec applications.

This repository is **not** the corporate website and should not duplicate `procitec.in`.
Its role is to present Procitec applications such as EAM and EMS, guide users to product entry points, and support discovery, trust, and conversion.

## Domain Strategy
- `procitec.in` → Corporate website, solutions, SEO, blog, WordPress
- `procitec.io` → Product platform website
- `eam.procitec.io` → EAM application
- `ems.procitec.io` → EMS application

## Stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Core Goals
- present Procitec applications clearly
- drive qualified industrial users deeper into product pages
- support mobile-first conversion
- maintain a premium industrial B2B design language
- stay consistent across all UI

## Local Development
```bash
npm install
npm run dev
```

Open:
```text
http://localhost:3000
```

## Build
```bash
npm run build
```

## AI / Codex Workflow
Before making changes, read:
- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `DESIGN_RULES.md`
- `CONTENT_GUIDE.md`
- `DESIGN_TOKENS.md`
- `UI_STANDARDIZATION_SYSTEM.md`
- `TAILWIND_THEME_IMPLEMENTATION.md`

## Recommended Component Foundation
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `components/layout/Container.tsx`

## Key Rules
- do not duplicate the corporate website
- do not use random colors, shadows, or spacing
- do not design desktop first and patch mobile later
- do not use startup-hype copy

## Priority Build Order
1. design tokens + Tailwind theme
2. reusable UI primitives
3. homepage
4. applications page
5. platform page
6. support + contact
