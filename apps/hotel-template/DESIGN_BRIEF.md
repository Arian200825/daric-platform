# Design Brief — Daric Hotel Master Template

**Status:** For approval (no implementation until approved).
**Primary goal:** Increase **direct bookings**.
**Design mandate:** A luxury resort identity that feels **completely different** from
the Restaurant Master Template — and from the current dark "Aurelia" hotel build,
which will be re-skinned to this new direction.

---

## 1. Positioning & mood

A bright, airy, ocean-inspired luxury resort. Where the restaurant is a dark,
intimate, candlelit room, the hotel is **open air, daylight, and horizon**. The
feeling is **escape** — space to breathe, calm, and quiet exclusivity.

**Mood words:** Luxury · Relaxation · Exclusivity · Escape.

## 2. Identity contrast (the point of difference)

| | Restaurant (existing) | Hotel (new direction) |
|---|---|---|
| Brightness | Dark, low-key | **Light, bright** |
| Temperature | Warm | **Cool, fresh** |
| Signature color | Gold on near-black | **Ocean blue on ivory** |
| Feeling | Intimate, enclosed | **Spacious, open** |
| Density | Rich, layered | **Minimal, restful** |
| Imagery | Close-up, moody plates | **Wide landscapes, natural light** |

## 3. Color palette (light theme — the default and only theme)

| Token | Role | Hex |
|---|---|---|
| **Ivory** | `background` — primary canvas | `#F8F5EF` |
| **Ivory Raise** | `surface` — cards, alternating sections | `#FBF9F4` / sand-tint `#F1EADD` |
| **Sand** | warm secondary / dividers / hover | `#E4D7BE` |
| **Ocean Blue** | `primary` / `accent` — CTAs, links, focus | `#15687E` |
| **Ocean Tint** | soft accent washes, hover | `#3E8DA3` |
| **Soft Gray** | `muted` — secondary text | `#6E7580` |
| **Slate Ink** | `foreground` — body text (not pure black) | `#1E2A30` |
| **Border** | hairlines | `rgba(30,42,48,0.12)` |
| onPrimary | text on ocean CTAs | `#F8F5EF` |

**Contrast (WCAG AA verified intent):** Slate Ink on Ivory ≈ 12:1; Ocean Blue on
Ivory ≈ 5.7:1 (AA for text + UI); white on Ocean Blue ≈ 5.9:1 (AA for buttons);
Soft Gray on Ivory ≈ 4.6:1 (AA for secondary text).

> Single light theme by design — a bright resort shouldn't ship a dark mode. (Easy
> to add later via the shared token system if a client wants one.)

## 4. Typography

- **Headings — elegant serif:** **Playfair Display** (high-contrast, timeless
  hospitality elegance). Deliberately different from the restaurant's Cormorant
  Garamond. Used large and airy with generous line-height.
- **Body — clean modern sans:** **Inter** (neutral, highly legible, calm).
  Different from the restaurant's geometric Jost.
- Scale is generous: large display sizes, restrained body, lots of breathing room.
  Letter-spaced uppercase eyebrows in Ocean Blue.

## 5. Animation — slow, cinematic, smooth, minimal

- **Durations:** 0.9s–1.4s (vs the restaurant's 0.6–0.8s). Longer, calmer.
- **Easing:** gentle `cubic-bezier(0.16, 1, 0.3, 1)` — no bounce, no spring.
- **Hero:** slow Ken-Burns drift on the landscape image (subtle scale, ~12s),
  soft fade-up of headline.
- **Reveals:** long, low-travel fade-ups as sections enter — sparing, never busy.
- **Minimal:** motion supports calm, it never performs. Full `prefers-reduced-motion`
  support (instant final state).

## 6. Layout & visual style

- **Spacious:** larger section padding (≈ +30% vs restaurant), wider gutters,
  more whitespace. Content breathes.
- **Large landscape photography:** full-bleed hero + full-width image bands
  between sections. Imagery leads; text is minimal and supportive.
- **Minimal text:** short, evocative copy. One idea per section.
- **Grid:** clean, editorial, generous — 2-up and 3-up with air around cards;
  soft hairline borders, gentle rounded corners.
- **Imagery direction:** wide coastal/resort shots, natural daylight, negative
  space, muted natural tones (sea, sand, sky) that harmonize with the palette.

## 7. Premium booking experience (primary goal: direct bookings)

Conversion is the north star. The booking experience is elevated and omnipresent:

- **Hero availability bar** — Check-in / Check-out / Guests + "Check availability"
  in Ocean Blue, front and centre on arrival.
- **Sticky "Book" affordance** — a calm, persistent path to book as the guest scrolls.
- **Direct-booking incentives** — best-rate guarantee, complimentary upgrade,
  flexible cancellation surfaced at the booking step (reduces OTA leakage).
- **Low-friction enquiry** — clean, minimal fields; reassuring success state.
- **Trust reinforcement** — awards, star rating, and reviews positioned to support
  the booking decision.
- Booking backend stays **provider-configurable** (internal form · SynXis ·
  Cloudbeds · link).

## 8. Section-by-section visual direction (14 sections, unchanged in scope)

1. **Cinematic Hero** — full-viewport landscape, slow zoom, minimal headline,
   availability bar.
2. **Room Explorer** — bright, image-led cards on ivory; calm filter tabs.
3. **Suites** — full-width alternating image/text bands, lots of air.
4. **Dining** — light editorial cards.
5. **Spa & Wellness** — serene split layout, soft imagery, treatments list.
6. **Experiences** — wide image cards, natural-light feel.
7. **Gallery** — spacious mosaic of landscapes.
8. **Booking** — the centerpiece; elegant form + direct-booking perks.
9. **Reviews** — airy quote cards.
10. **FAQ** — clean accordion, plenty of whitespace.
11. **Awards** — restrained badge row (trust).
12. **Sustainability** — light, calm commitments (fits ocean/escape narrative).
13. **Location** — bright map + arrival details.
14. **Contact** — minimal, reassuring.

## 9. Engineering (Daric standards + shared architecture)

- Built on **`@daric/ui`** (shared design system) — reuses Button, Card, Forms,
  Navbar, Footer, Gallery, CTA, Accordion, animation utilities, and the design-token
  contract. **New identity ships mostly through the token values + fonts + imagery +
  motion timings**, not new components — proving the shared system's payoff.
- Content-driven (config + content files), TypeScript, mobile-first, accessible,
  SEO (Resort JSON-LD), static-export fast, multilingual-ready.
- Where the airy identity needs it, a small number of shared primitives may gain
  optional props (e.g. slower motion preset, full-bleed image band) — additive, no
  breaking changes to existing consumers.

---

### Approval
On approval, I re-skin the hotel template to this brief (tokens, fonts, motion,
layout spacing, imagery treatment, and the elevated booking experience), then
test, build, document, commit, and deploy.
