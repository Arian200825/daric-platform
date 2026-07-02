import type { MedicalConfig } from "./types";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  DENTAL / MEDICAL MASTER TEMPLATE — control panel
 * ───────────────────────────────────────────────────────────────────────────
 *  Rebrand the whole site here. To clone for a new client:
 *    1. Edit the values below (brand, colors, hours, appointment provider…).
 *    2. Replace content in src/content/* (doctors, treatments, reviews, …).
 *    3. Drop images in /public/images and reference them by path.
 *  No component code changes. See README → "Customizing for a client".
 *
 *  Placeholder brand: "Brightwell" — a modern dental & medical practice.
 *  Visual identity: bright, clean, trustworthy — white / soft blue / teal.
 */
export const config: MedicalConfig = {
  brand: {
    name: "Brightwell",
    tagline: "Care you can trust.",
    description:
      "Brightwell is a modern dental & medical practice delivering calm, confident, patient-first care for the whole family.",
    since: "Caring for families since 2009",
  },

  url: "https://example-clinic.com",

  contact: {
    phone: "+1 (415) 555-0147",
    emergencyPhone: "+1 (415) 555-0150",
    email: "hello@brightwell.example",
    address: {
      street: "220 Parkview Avenue, Suite 300",
      city: "San Francisco",
      region: "CA",
      postalCode: "94114",
      country: "United States",
    },
    mapEmbedUrl:
      "https://www.google.com/maps?q=San+Francisco+California&output=embed",
  },

  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 2:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Google", href: "https://google.com" },
  ],

  i18n: { defaultLocale: "en", locales: ["en", "es"] },

  appointment: {
    provider: "internal", // "internal" | "link" | "nexhealth" | "zocdoc"
    url: "",
    endpoint: "",
    reasons: [
      "Dental check-up & clean",
      "Cosmetic consultation",
      "Orthodontics",
      "Emergency dental",
      "General medical visit",
      "Health screening",
    ],
    advanceDays: 90,
  },

  // Bright, clean, trustworthy healthcare identity.
  theme: {
    colors: {
      background: "#ffffff", // white
      surface: "#f1f6fb", // light blue-gray
      foreground: "#14344d", // deep slate blue (high readability)
      muted: "#5e7183", // slate gray
      primary: "#2f74e0", // soft medical blue
      onPrimary: "#ffffff",
      accent: "#0ea5a5", // teal
      border: "rgba(20, 52, 77, 0.10)",
    },
    radius: 0.75, // rounded, friendly, approachable
    fonts: { display: "jakarta", body: "lexend" },
  },

  sections: [
    { id: "hero", enabled: true, inNav: false },
    { id: "about", enabled: true, inNav: true, navLabel: "About" },
    { id: "doctors", enabled: true, inNav: true, navLabel: "Our Team" },
    { id: "treatments", enabled: true, inNav: true, navLabel: "Treatments" },
    { id: "gallery", enabled: true, inNav: true, navLabel: "Results" },
    { id: "reviews", enabled: true, inNav: false },
    { id: "insurance", enabled: true, inNav: false },
    { id: "faq", enabled: true, inNav: true, navLabel: "FAQ" },
    { id: "booking", enabled: true, inNav: false },
    { id: "location", enabled: true, inNav: false },
    { id: "contact", enabled: true, inNav: true, navLabel: "Contact" },
  ],

  seo: {
    ogImage: "/images/og.jpg",
    keywords: [
      "dentist",
      "dental clinic",
      "family dentistry",
      "cosmetic dentistry",
      "medical practice",
      "appointment booking",
    ],
  },

  daric: {
    url: "https://arian200825.github.io/daric-agency/",
    contactUrl: "https://arian200825.github.io/daric-agency/contact/",
  },
};
