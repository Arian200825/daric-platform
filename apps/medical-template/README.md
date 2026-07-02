# Daric — Dental / Medical Master Template

A bright, trustworthy, fully **content-driven** website template for dental
clinics and private medical practices, built on the shared `@daric/ui` design
system with its **own healthcare visual identity** (white / soft blue / teal,
modern readable sans, rounded + accessible).

**Sections:** Hero · About · Meet the Doctors · Treatments · Before & After ·
Reviews · Insurance · FAQ · Appointment Booking · Location · Contact — each
toggleable and reorderable from config.

Mobile-first · SEO (metadata + `Dentist` JSON-LD + OG image + favicon) ·
accessible · static-export fast · multilingual-ready (EN/ES demoed).

## Run it (from the monorepo root)

```bash
npm install
npm run dev -w apps/medical-template      # http://localhost:3000
npm run build -w apps/medical-template    # static export → out/
```

## Customizing for a client (the 4 steps)

Everything lives in **two folders** — no component edits.

### 1. `src/config/medical.config.ts` — the control panel
- **brand** — name, tagline, description, trust line
- **contact / hours** — phone, emergency line, email, address, map embed
- **theme.colors** — the whole palette (injected as CSS variables). `theme.radius`
  sets roundness.
- **appointment.provider** — `"internal"` (built-in form) · `"nexhealth"` ·
  `"zocdoc"` · `"link"` (+ `url` / `endpoint`), plus the list of visit reasons
- **i18n** (`defaultLocale` + `locales`) · **sections** (order, `enabled`, `inNav`)

### 2. `src/content/site-content.ts` — the words
All section content: hero, about + stats, doctors, treatments (with icon keys),
before/after pairs, reviews, insurance providers, FAQ. UI strings live in
`src/content/dictionary.ts`.

### 3. `/public/images` — the pictures
Drop files in and reference them by path. Until an image exists, a soft branded
gradient placeholder renders automatically — so the site always looks finished.

### 4. Fonts (optional) — `src/lib/fonts.ts`
Swap the two `next/font/google` families. Only the active pair is bundled.

## Conversion & lead-gen
The appointment form is the primary conversion path (same-day booking, new-patient
checkbox, reason dropdown). Insurance + reviews + doctor bios build trust. Forms
POST to a configured endpoint or run in demo mode — wire to your PMS/booking
engine per client. The footer credits **Daric** and a closing CTA routes clinic
owners to the Daric agency.

## Deployment
Static export (`output: "export"`). Build with `NEXT_PUBLIC_BASE_PATH=/<repo>`
for GitHub Pages project sites and `NEXT_PUBLIC_SITE_URL=<origin>` for absolute
OG/canonical URLs; omit both for a custom domain / Vercel.
