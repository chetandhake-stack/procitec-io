# DESIGN_TOKENS.md

## Purpose
Provide a concrete, implementation-ready design token system for Procitec.io.

Use these tokens consistently across all components.
Do NOT introduce arbitrary values outside this system.

---

## Color Tokens

### Brand
--color-primary: #8b3dff;
--color-primary-hover: #7a2fe0;
--color-primary-foreground: #ffffff;

--color-accent: #e1511b;
--color-accent-hover: #c94315;
--color-accent-foreground: #ffffff;

### Neutrals
--color-background: #ffffff;
--color-surface: #f8fafc;
--color-muted-surface: #f1f5f9;

--color-text-primary: #0f172a;
--color-text-secondary: #475569;
--color-text-muted: #64748b;

--color-border: #e2e8f0;
--color-border-strong: #cbd5f5;

---

## Typography Tokens

--font-family-base: ui-sans-serif, system-ui, -apple-system, sans-serif;

--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-md: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
--font-size-3xl: 30px;
--font-size-4xl: 36px;
--font-size-5xl: 48px;

--line-height-tight: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.7;

--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

---

## Spacing Tokens

--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;

---

## Radius Tokens

--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;

---

## Shadow Tokens

--shadow-soft: 0 1px 3px rgba(0,0,0,0.06);
--shadow-medium: 0 4px 10px rgba(0,0,0,0.08);
--shadow-elevated: 0 10px 25px rgba(0,0,0,0.12);

---

## Button Tokens

### Sizes
--button-height-sm: 32px;
--button-height-md: 40px;
--button-height-lg: 48px;

--button-padding-x: 16px;

### Variants

Primary:
- background: var(--color-primary)
- color: var(--color-primary-foreground)

Secondary:
- background: transparent
- border: 1px solid var(--color-border)

---

## Container Tokens

--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;

---

## Z-index Tokens

--z-header: 50;
--z-modal: 100;
--z-dropdown: 60;

---

## Motion Tokens

--transition-fast: 150ms ease;
--transition-normal: 250ms ease;

---

## Implementation Rules

- Map these tokens into Tailwind config (theme.extend)
- Or use CSS variables in globals.css
- Do NOT hardcode values in components
- Always use tokens

---

## Final Principle

Tokens = consistency

If tokens are followed strictly:
- UI becomes predictable
- Design becomes scalable
- Codex output becomes clean
