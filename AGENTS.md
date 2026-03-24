# AGENTS.md

## Repo Purpose
This repository is for **Procitec.io**, the product platform website for Procitec applications.

This repository is **NOT** for:
- the corporate website at `procitec.in`
- the EAM application backend
- the EMS application backend
- WordPress development

The purpose of this repo is to build and maintain a **public-facing product platform website** for Procitec applications such as:
- EAM
- EMS
- future industrial software applications

---

## Product Positioning
Procitec.io should feel like:
- a modern industrial software platform
- clear and trustworthy
- structured and product-focused
- premium but restrained

It should **not** feel like:
- a generic startup SaaS template
- a flashy landing page with hype language
- a clone of the corporate website

---

## Read These Files First
Before making any changes, read and follow these files in the project root:

1. `PROJECT_BRIEF.md`
2. `DESIGN_RULES.md`
3. `CONTENT_GUIDE.md`
4. `AI_CONTEXT.md`
5. `DEVELOPMENT_ROADMAP.md`
6. `ARCHITECTURE.md`
7. `CODEX_RULES.md`
8. `ENGAGEMENT_STRATEGY.md`
9. `SEO_AI_STRATEGY.md`
10. `MOBILE_EXPERIENCE_STRATEGY.md`
11. `MOBILE_HOMEPAGE_LAYOUT.md`
12. `UI_STANDARDIZATION_SYSTEM.md`
13. `DESIGN_TOKENS.md`

If any of these files conflict, prioritize in this order:
1. `AGENTS.md`
2. `PROJECT_BRIEF.md`
3. `DESIGN_TOKENS.md`
4. `UI_STANDARDIZATION_SYSTEM.md`
5. `DESIGN_RULES.md`
6. all other guidance files

---

## Tech Stack
Use and preserve this stack unless explicitly instructed otherwise:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Avoid introducing unnecessary dependencies.

---

## Domain Strategy
Respect this architecture:

- `procitec.in` = company / corporate / SEO / WordPress
- `procitec.io` = product platform website
- `eam.procitec.io` = EAM application/product entry
- `ems.procitec.io` = EMS application/product entry

Do not blur the roles of these domains.

---

## Design Language
Follow these principles:

- clean, industrial, premium B2B
- mobile-first
- strong hierarchy
- restrained motion
- clear CTA structure
- consistent tokens, spacing, radius, and shadows
- reusable UI primitives

Use:
- primary brand color: `#8b3dff`
- secondary accent: `#e1511b` sparingly

Avoid:
- visual clutter
- unnecessary gradients
- cartoonish roundness
- random color usage
- inconsistent component styling

---

## Content Rules
Write for:
- industrial buyers
- plant heads
- maintenance managers
- energy managers
- technical decision-makers

Tone should be:
- clear
- direct
- credible
- engineering-led
- business-friendly

Avoid:
- hype
- buzzwords
- vague “digital transformation” language
- generic startup filler copy

Prefer:
- problem → solution → outcome structure
- short paragraphs
- structured headings
- clear CTAs
- FAQ sections where useful

---

## Mobile-First Rules
This site must work extremely well on mobile.

When building UI:
- design mobile first
- keep hero concise
- keep CTA visible above the fold
- use thumb-friendly tap targets
- reduce clutter
- use single-column structure where appropriate
- keep performance strong

Do not design desktop first and “fix mobile later”.

---

## SEO and AI Discoverability Rules
Public pages must be optimized for:
- SEO
- AI readability
- structured discoverability

Every important public page should include:
- clear page title
- meta description
- proper H1/H2/H3 hierarchy
- structured sections
- internal linking
- FAQ where appropriate

Content should be easy for both:
- humans scanning quickly
- AI systems extracting clear answers

Avoid keyword stuffing.

---

## UI Standardization Rules
Maintain one shared design system.

All UI should use:
- standardized colors
- standardized spacing
- standardized typography
- standardized radius
- standardized shadows
- standardized component variants

Prefer reusable components for:
- Button
- Card
- Container
- SectionHeader
- Input
- Table
- CTA blocks
- Navigation elements

Do not introduce one-off visual patterns unless absolutely necessary.

---

## Component and Styling Rules
When building components:

- prefer reusable components over repeated markup
- use existing tokens before creating new values
- avoid hardcoded arbitrary design values
- keep components small and composable
- maintain accessibility and visible focus states
- use semantic HTML

Before creating a new component or style variant, check:
1. does a similar component already exist?
2. can this be solved by extending an existing variant?
3. does it follow tokens and standardization rules?

---

## Work Style
Work incrementally.

Preferred workflow:
1. understand the task
2. inspect relevant existing files
3. make focused changes
4. keep changes reviewable
5. explain what changed and why

Do not:
- rebuild the whole site in one step
- introduce broad refactors without need
- generate large amounts of speculative code
- create major new patterns casually

---

## Homepage Priorities
The homepage should prioritize:

1. immediate clarity
2. strong product-platform positioning
3. clear applications entry points
4. mobile usability
5. CTA visibility
6. trust and credibility

Recommended section flow:
- Header
- Hero
- Applications overview
- Problem/Solution sections
- How it works
- Credibility section
- CTA section
- Footer

---

## Implementation Preferences
When coding:
- use TypeScript properly
- keep file structure clean
- use Tailwind consistently
- avoid deeply nested complexity
- preserve performance

Prefer:
- server components where appropriate
- lightweight client components only when needed
- minimal JS for purely presentational sections

---

## Quality Checklist
Before finishing any task, verify:

### Design
- consistent spacing
- consistent color use
- consistent shadows and radius
- clear hierarchy
- no visual clutter

### UX
- mobile works well
- CTA is visible and clear
- navigation is simple
- content is scannable

### Engineering
- code is modular
- no unnecessary dependencies
- no repeated styling chaos
- no arbitrary token drift

### SEO
- headings are structured
- metadata is sensible
- internal links make sense
- content is understandable

---

## When Unsure
If there is uncertainty:
- choose clarity over cleverness
- choose consistency over novelty
- choose maintainability over decoration
- choose mobile usability over visual complexity

---

## Final Principle
This website should feel like a serious industrial software platform.

Every design, content, and engineering decision should reinforce:
- trust
- clarity
- professionalism
- product readiness
- scalability
