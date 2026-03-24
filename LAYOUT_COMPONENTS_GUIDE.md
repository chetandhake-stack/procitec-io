# LAYOUT_COMPONENTS_GUIDE.md

## Purpose
This guide defines the shared layout and UI support components for Procitec.io.

## Included Components
- `components/ui/SectionHeader.tsx`
- `components/ui/Input.tsx`
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

## Usage Guidance

### SectionHeader
Use for section intros across pages:
- hero-adjacent section intros
- product section titles
- credibility / CTA lead-ins

Rules:
- keep eyebrow optional
- keep heading concise
- description should stay readable and scannable

### Input
Use for:
- contact form
- demo request form
- support form

Rules:
- use label consistently
- preserve hint/error messaging
- do not create random alternate input styles

### Header
Use as the global site header.

Rules:
- keep navigation clean
- preserve strong CTA
- maintain sticky behavior
- do not overload with links

### Footer
Use as the global site footer.

Rules:
- keep concise
- include product and platform links
- include corporate site link
- avoid dumping excessive content

## Implementation Reminder
These components depend on your design tokens and Tailwind theme classes being configured:
- `primary`
- `primary-hover`
- `accent`
- `text-text-primary`
- `text-text-secondary`
- `text-text-muted`
- `border-border`
- `bg-surface`
- `bg-muted`
- `shadow-soft`

## Recommended Next Refactor
After adding these components:
1. update `src/app/layout.tsx` to use `Header` and `Footer`
2. replace ad hoc section titles with `SectionHeader`
3. build forms using `Input`
