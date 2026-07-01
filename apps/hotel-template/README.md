# Daric — Hotel Master Template

A luxury, fully **content-driven** hotel & resort website template by Daric,
built on the shared `@daric/ui` design system. Clone it, edit config + content,
drop in images, and ship a bespoke five-star site in a day.

**Sections:** Cinematic Hero · Room Explorer · Suites · Dining · Spa & Wellness ·
Experiences · Gallery · Booking · Reviews · FAQ · Awards · Sustainability ·
Location · Contact — each toggleable and reorderable from config.

Mobile-first · SEO (metadata + `Resort` JSON-LD) · accessible · static-export
fast · multilingual-ready.

## Run it (from the monorepo root)

```bash
npm install
npm run dev -w apps/hotel-template      # http://localhost:3000
npm run build -w apps/hotel-template    # static export → apps/hotel-template/out
```

## Customizing for a client (the 4 steps)

Everything lives in **two folders** — no component edits.

### 1. `src/config/hotel.config.ts` — the control panel
- **brand** — name, tagline, description, star rating
- **contact / checkTimes** — phone, email, address, map embed, check-in/out
- **theme.colors** — the whole palette (injected as CSS variables → recolors the
  site). `theme.radius` sets corner roundness.
- **booking.provider** — `"internal"` (built-in enquiry form) · `"synxis"` ·
  `"cloudbeds"` · `"link"` (+ `url` / `endpoint`)
- **currency**, **i18n** (`defaultLocale` + `locales`)
- **sections** — order, `enabled`, and `inNav` for each section

### 2. `src/content/site-content.ts` — the words
All section content: rooms (with price, capacity, size, amenities), suites,
dining, spa treatments, experiences, gallery, reviews, FAQ, awards,
sustainability. UI strings live in `src/content/dictionary.ts`.

### 3. `/public/images` — the pictures
Drop files in and reference them by path. Until an image exists, an elegant
gradient placeholder renders automatically — so the site always looks finished.

### 4. Fonts (optional) — `src/lib/fonts.ts`
Swap the two `next/font/google` families. Only the active pair is bundled.

## Localization
Any content field is a plain string **or** a `{ en, fr, … }` map. Add a locale
in the config + a `dictionary.ts` entry; the `<LanguageSwitcher>` toggles it.

## Booking & forms
The booking enquiry and contact forms POST to a configured endpoint, else run in
demo mode. Point them at your PMS/booking engine or a serverless function per
client.

## Deployment
Configured for **static export** (`output: "export"`). Build with
`NEXT_PUBLIC_BASE_PATH=/<repo>` for GitHub Pages project sites, or without it for
a custom domain / Vercel.
