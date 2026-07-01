# @daric/ui

Daric's shared design system — presentational primitives + composed UI reused
across industry templates (hotel, restaurant, agency, …).

Consumed as a workspace package. Components are **presentational**: templates
own content, config, and i18n, and pass resolved props in.

## Contents
- **Tokens:** `themeCss()` generator, `ThemeColors`/`ThemeConfig`, `styles/tokens.css`
- **Utilities:** `cn`, `formatPrice`, animation variants
- **Primitives:** `Container`, `Section`, `Reveal`, `Eyebrow`, `SectionHeading`, `Media`
- **Interactive:** `Button`, `Card`, `FormField`, `Input`, `Textarea`, `Select`
- **Composed:** `Gallery`, `CTABanner`, `Accordion`, `Navbar`, `Footer`

## Usage

```tsx
import { Button, Section, SectionHeading, themeCss } from "@daric/ui";
```

Consuming apps must:
1. Add `transpilePackages: ["@daric/ui"]` to `next.config.ts`.
2. In `globals.css`: `@import "…/daric-ui/src/styles/tokens.css";` and
   `@source "…/daric-ui/src";` so Tailwind scans the shared components.
3. Inject a theme once: `<style>{themeCss(theme)}</style>` in the root layout.
