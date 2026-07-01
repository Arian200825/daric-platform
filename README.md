# Daric Platform

Daric's monorepo: a **shared design system** (`@daric/ui`) and the industry
website **templates** that build on it. One kit, many premium templates — so
new templates ship faster and stay consistent.

```
daric-platform/
  packages/
    daric-ui/          @daric/ui — shared design system (tokens + components)
  apps/
    hotel-template/    Luxury hotel & resort template (first consumer)
```

Built with **Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion**.

## The shared design system — `@daric/ui`

The reusable layer every template imports, so we stop re-writing the same UI:

| Group | Exports |
| ----- | ------- |
| **Design tokens** | `themeCss()` generator + `styles/tokens.css` (CSS-variable contract) |
| **Animation utilities** | `fadeUp`, `staggerContainer`, `Reveal`, … |
| **Buttons** | `Button` (variants + sizes, link or button) |
| **Cards** | `Card` |
| **Forms** | `FormField`, `Input`, `Textarea`, `Select` |
| **Navigation** | `Navbar` (scroll-aware, mobile menu, prop-driven) |
| **Footer** | `Footer` |
| **Galleries** | `Gallery` (responsive mosaic, graceful fallbacks) |
| **CTA** | `CTABanner` |
| **Layout / content** | `Container`, `Section`, `Eyebrow`, `SectionHeading`, `Media` |

Components are **presentational** (no app coupling). Each template owns its
content, config, and i18n, and passes resolved props in — which is what keeps
the kit reusable across industries.

## Getting started

```bash
npm install                       # installs all workspaces + links @daric/ui
npm run dev -w apps/hotel-template # http://localhost:3000
npm run build -w apps/hotel-template
```

## Theming

Each template defines a palette in its config and injects it via
`themeCss(theme)` from `@daric/ui`. Components read CSS variables
(`bg-background`, `text-primary`, `rounded-[var(--radius)]`, …), so a template
re-themes from one object.

> **Tailwind note:** each app's `globals.css` imports the shared token layer and
> adds `@source "…/daric-ui/src";` so Tailwind scans the shared components.

## Adding a new industry template

1. `apps/<name>` — scaffold a Next app (static export like `hotel-template`).
2. Add `"@daric/ui": "*"` to its deps; set `transpilePackages: ["@daric/ui"]`.
3. Import primitives from `@daric/ui`; keep content in `src/content`, config in
   `src/config`. Reuse the section-registry pattern.

The existing standalone agency and restaurant templates can migrate onto
`@daric/ui` incrementally.
