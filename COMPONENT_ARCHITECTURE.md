# COMPONENT_ARCHITECTURE.md

## Purpose
Define the component architecture for Procitec.io so UI remains scalable, consistent, and easy for Codex to extend.

## Top-Level Structure
```text
src/
├─ app/
├─ components/
│  ├─ layout/
│  ├─ sections/
│  └─ ui/
├─ lib/
```

## Component Layers

### 1. Layout Components
Used for shared page structure.

Examples:
- `Container`
- `Header`
- `Footer`
- `PageShell`

### 2. UI Primitives
Reusable foundational building blocks.

Examples:
- `Button`
- `Card`
- `Input`
- `Table`
- `SectionHeader`
- `Badge`

### 3. Section Components
Page-level assemblies built from primitives.

Examples:
- `HeroSection`
- `ApplicationsSection`
- `HowItWorksSection`
- `CredibilitySection`
- `CTASection`

### 4. Page Composition
Pages should compose sections, not re-invent layout logic.

## Rules
- keep primitives generic and reusable
- keep section components content-aware
- prefer composition over duplication
- reuse `Container` for width and padding consistency
- reuse `Button` variants rather than custom one-off buttons

## Prop Design Rules
- keep props minimal and explicit
- prefer semantic prop names
- expose `className` for extension only when needed
- avoid over-abstracting too early

## Styling Rules
- use design tokens and standardized Tailwind classes
- do not hardcode arbitrary values casually
- keep hover, focus, and disabled states consistent

## Accessibility Rules
- use semantic HTML
- visible focus states are mandatory
- buttons and links must be distinguishable
- maintain readable contrast

## Recommended Foundation Components
First components to implement:
1. `Container`
2. `Button`
3. `Card`
4. `SectionHeader`
5. `Input`
6. `Table`
