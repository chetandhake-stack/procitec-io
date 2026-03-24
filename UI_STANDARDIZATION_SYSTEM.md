# UI_STANDARDIZATION_SYSTEM.md

## Purpose
Define a unified design system for Procitec.io so every screen, section, component, and interaction speaks the same visual language.

Goal:
- Consistent UI across the website
- Faster development with Codex
- Better trust and professionalism
- Easier maintenance and future scaling

This file should be treated as a mandatory implementation guide.

---

## Core Principle

A good website should feel like one system, not a collection of unrelated sections.

Users should feel:
- visual consistency
- predictable interactions
- stable hierarchy
- professional polish

Every UI decision must support:
- clarity
- trust
- usability
- brand identity

---

## Standardization Strategy

### 1. Create a Design Token System
All core UI values must be standardized as reusable tokens.

Standardize:
- colors
- typography
- spacing
- border radius
- shadows
- button styles
- card styles
- form styles
- table styles
- icon sizing
- layout widths
- section spacing
- transitions

Do NOT hardcode random values repeatedly in components.

---

## Brand Tokens

### Primary Colors
- Primary brand: #8b3dff
- Secondary accent: #e1511b

### Neutral Palette
Use a professional neutral scale for:
- backgrounds
- text
- borders
- muted content
- cards

Suggested neutral usage:
- Background: white / very light neutral
- Primary text: dark slate
- Secondary text: muted slate
- Borders: light gray/slate
- Surface cards: white
- Alternate section background: very light neutral

### Usage Rules
- Purple = brand emphasis, key actions, selected states
- Orange = limited accent for important highlights only
- Neutrals = default foundation
- Do not use many random colors
- Do not visually overload the UI

---

## Typography System

### Font Behavior
Use one clean, modern sans-serif font system across the site.

### Heading Scale
Define standard heading sizes:

- H1: Homepage hero titles
- H2: Section titles
- H3: Card titles / subsection titles
- H4: Minor subheadings

### Body Text
Standardize:
- primary body text
- secondary body text
- small helper text
- label text

### Rules
- Maintain consistent line-height
- Avoid very long paragraphs
- Keep strong visual hierarchy
- Use consistent font weights
- Do not invent ad hoc text styles per section

---

## Spacing System

Create one spacing scale and reuse it everywhere.

Example spacing rhythm:
- xs
- sm
- md
- lg
- xl
- 2xl
- 3xl

Use spacing tokens for:
- section padding
- card padding
- grid gaps
- button padding
- margins between headings and text
- form spacing

### Rules
- Bigger sections need bigger vertical spacing
- Keep internal spacing consistent within components
- Avoid cramped layouts
- Avoid arbitrary margin values

---

## Border Radius System

Define fixed corner styles:
- small radius for inputs and small elements
- medium radius for cards and buttons
- large radius only for major visual surfaces if needed

### Rules
- Do not mix many random corner styles
- Avoid excessive roundness
- Maintain industrial, professional feel

---

## Shadow System

Shadows must be subtle and consistent.

Define shadow levels:
- none
- soft
- medium
- elevated

### Rules
- Use soft shadows for cards and dropdowns
- Keep shadows understated
- Avoid heavy “floating app” shadows
- Use shadow changes for hover only when useful

---

## Layout System

### Max Width
Define standard content widths:
- narrow content
- standard content
- wide content

### Grid Rules
Use consistent layout patterns:
- 1-column mobile
- 2-column tablet where needed
- 3-column desktop for cards/grids only when useful

### Section Structure
Each section should follow:
- section wrapper
- container
- heading block
- content block

### Rules
- Keep alignment consistent
- Avoid changing layout logic randomly between sections
- Use repeatable section patterns

---

## Button System

Buttons must follow a strict standardized pattern.

### Button Variants
Create standard variants only:

#### 1. Primary Button
Use for:
- Open EAM
- Book Demo
- Talk to Expert

Style:
- primary brand background
- high contrast text
- strong hover state

#### 2. Secondary Button
Use for:
- View Applications
- Learn platform details

Style:
- border + neutral background or subtle surface

#### 3. Ghost/Text Button
Use sparingly for secondary links

#### 4. Accent Button
Use rarely for highlight CTA if truly needed

### Button Size Variants
- small
- medium
- large

### Button Rules
- Consistent height
- Consistent padding
- Consistent radius
- Consistent font weight
- Clear disabled state
- Clear hover/focus state
- No random button styles per page

---

## Card System

Cards should feel part of one family.

### Standard Card Structure
- title
- supporting text
- optional icon
- optional CTA
- consistent padding
- consistent border/shadow

### Card Types
- application cards
- feature cards
- stats/info cards
- credibility cards

### Rules
- Same spacing rhythm
- Same radius family
- Same shadow language
- Same heading/body ratio
- Avoid decorative clutter

---

## Form System

All forms must be standardized.

### Standard Elements
- input fields
- textareas
- selects
- checkboxes/radios if needed
- labels
- helper text
- error states
- success states

### Rules
- Same height for similar inputs
- Same border style
- Same focus style
- Same label style
- Clear validation feedback
- Clear button alignment

---

## Table System

Even if tables are minimal on the public site, define them now for consistency.

### Table Style
- clean header row
- subtle borders
- comfortable cell padding
- readable text alignment
- optional zebra striping only if useful

### Rules
- No dense cramped rows
- Keep actions aligned
- Maintain same typography scale
- Use responsive behavior on mobile
- Convert complex tables into stacked cards on smaller screens if needed

---

## Icon System

### Rules
- Use one icon family only
- Keep consistent stroke weight/style
- Standard icon sizes:
  - small
  - medium
  - large
- Align icons consistently with text and cards
- Do not mix random icon packs

---

## Motion System

Motion should reinforce polish, not distract.

### Standard Motion
- button hover transitions
- card hover transitions
- menu open/close transitions
- section reveal transitions if used

### Rules
- Keep durations consistent
- Use subtle motion only
- Avoid over-animation
- Avoid animation that delays access to content

---

## Interaction States

Every interactive element must define:
- default
- hover
- focus
- active
- disabled

### Rules
- Focus states must be visible
- Hover should feel responsive but not flashy
- Active states should feel intentional

---

## Section Design Language

Every homepage or page section should visually belong to the same brand system.

Standardize:
- heading pattern
- subheading width
- section spacing
- CTA placement
- background treatment
- card presentation
- divider logic

### Rules
- Do not redesign every section from scratch
- Build sections from reusable primitives
- Maintain a recognizable Procitec visual language

---

## Tailwind Implementation Recommendation

Create standardized reusable classes and components.

### Recommended Approach
1. Define theme values in Tailwind config or CSS variables
2. Create reusable UI components:
   - Button
   - Card
   - SectionHeader
   - Container
   - Input
   - Table
3. Use utility classes consistently
4. Avoid repeating long ad hoc class strings everywhere

### Suggested Component Files
- components/ui/button.tsx
- components/ui/card.tsx
- components/ui/input.tsx
- components/ui/table.tsx
- components/ui/section-header.tsx
- components/layout/container.tsx

---

## Codex Implementation Rules

When generating UI, Codex must:

- use existing design tokens
- reuse existing components
- avoid introducing new colors casually
- avoid inventing one-off shadows, radius, or spacing values
- maintain consistency across pages

Before creating a new style pattern, Codex should ask:
- does a reusable component already exist?
- does this follow the established system?
- can this be solved with an existing variant?

---

## Quality Checklist

Before approving a page, check:

### Visual Consistency
- Are colors consistent?
- Are shadows consistent?
- Are radii consistent?
- Are headings consistent?
- Are buttons consistent?

### Component Consistency
- Are cards from the same family?
- Are forms standardized?
- Are tables aligned with the system?

### Interaction Consistency
- Do hover states feel related?
- Do focus states look uniform?
- Do buttons behave similarly?

### Layout Consistency
- Are containers aligned?
- Is spacing rhythm maintained?
- Are section patterns repeatable?

---

## Recommended Process

### Step 1
Build the design system first:
- tokens
- button
- card
- input
- section header
- container

### Step 2
Refactor homepage to use only system components

### Step 3
Build all future pages using these primitives

### Step 4
Audit every page for inconsistency

---

## Final Principle

Consistency builds trust.

A standardized interface makes Procitec.io feel:
- more premium
- more reliable
- easier to use
- easier to scale

If every button, card, table, form, and section speaks the same design language,
the entire website will feel intentional and professional.
