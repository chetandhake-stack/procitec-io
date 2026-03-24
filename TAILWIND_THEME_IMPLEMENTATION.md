# TAILWIND_THEME_IMPLEMENTATION.md

## Purpose
This guide explains how to implement the Procitec design system using Tailwind CSS.

Goal:
- Convert DESIGN_TOKENS.md into Tailwind config
- Ensure consistent UI across the project
- Avoid hardcoded styles
- Enable reusable component system

---

## Step 1: Extend Tailwind Theme

Edit `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b3dff",
        "primary-hover": "#7a2fe0",
        accent: "#e1511b",
        "accent-hover": "#c94315",

        background: "#ffffff",
        surface: "#f8fafc",
        muted: "#f1f5f9",

        text: {
          primary: "#0f172a",
          secondary: "#475569",
          muted: "#64748b",
        },

        border: "#e2e8f0",
      },

      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
      },

      boxShadow: {
        soft: "0 1px 3px rgba(0,0,0,0.06)",
        medium: "0 4px 10px rgba(0,0,0,0.08)",
        elevated: "0 10px 25px rgba(0,0,0,0.12)",
      },

      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px",
        20: "80px",
      },

      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Step 2: Create Base Styles

Edit `globals.css`:

```css
body {
  @apply bg-background text-text-primary antialiased;
}
```

---

## Step 3: Standard UI Classes

### Buttons

```tsx
export const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "border border-border text-text-primary hover:bg-muted",
};
```

---

### Card

```tsx
export const card = "bg-white shadow-soft rounded-md p-6";
```

---

### Container

```tsx
export const container = "mx-auto max-w-6xl px-6";
```

---

## Step 4: Component Strategy

Create reusable components:

- Button
- Card
- Container
- SectionHeader
- Input
- Table

Keep all styling aligned with tokens.

---

## Step 5: Usage Rules

DO:
- Use Tailwind classes based on tokens
- Keep styles consistent
- Reuse components

DO NOT:
- Hardcode colors or spacing
- Create random variants
- Mix inconsistent styles

---

## Step 6: Codex Instructions

When working with Codex:

```text
Use Tailwind theme from TAILWIND_THEME_IMPLEMENTATION.md.
Do not introduce new colors or spacing values.
Use existing tokens and reusable components.
```

---

## Final Principle

Tailwind is not just utility classes.

It is your design system engine.

If configured correctly:
- UI becomes consistent
- Development becomes faster
- Codex becomes reliable
