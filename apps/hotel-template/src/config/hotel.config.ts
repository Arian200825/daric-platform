import type { HotelConfig } from "./types";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  HOTEL MASTER TEMPLATE — control panel
 * ───────────────────────────────────────────────────────────────────────────
 *  Rebrand the whole site here. To clone for a new client:
 *    1. Edit the values below (brand, colors, booking provider, hours…).
 *    2. Replace content in src/content/* (rooms, suites, dining, …).
 *    3. Drop images in /public/images and reference them by path.
 *  No component code changes. See README → "Customizing for a client".
 *
 *  Placeholder brand: "Aurelia" — a five-star resort & spa.
 */
export const config: HotelConfig = {
  brand: {
    name: "Aurelia",
    tagline: "A coastal sanctuary.",
    description:
      "Aurelia is a five-star resort & spa where the sea meets quiet luxury — sculpted suites, restorative wellness, and effortless service.",
    stars: 5,
  },

  url: "https://example-hotel.com",

  contact: {
    phone: "+1 (305) 555-0180",
    email: "stay@aurelia.example",
    address: {
      street: "1 Shoreline Drive",
      city: "Miami Beach",
      region: "FL",
      postalCode: "33139",
      country: "United States",
    },
    mapEmbedUrl:
      "https://www.google.com/maps?q=Miami+Beach+Florida&output=embed",
  },

  checkTimes: { checkIn: "15:00", checkOut: "12:00" },

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],

  i18n: { defaultLocale: "en", locales: ["en", "fr"] },

  booking: {
    provider: "internal", // "internal" | "link" | "synxis" | "cloudbeds"
    url: "",
    endpoint: "",
    maxGuests: 6,
    roomTypes: ["Deluxe Room", "Junior Suite", "Ocean Suite", "Presidential Suite"],
    advanceDays: 365,
  },

  currency: { code: "USD", symbol: "$" },

  theme: {
    colors: {
      background: "#0a0b0e",
      surface: "#12141a",
      foreground: "#f2efe6",
      muted: "#9ba0ac",
      primary: "#c6a15b",
      onPrimary: "#14100a",
      accent: "#c6a15b",
      border: "rgba(242, 239, 230, 0.12)",
    },
    radius: 0.4,
    fonts: { display: "cormorant", body: "jost" },
  },

  sections: [
    { id: "hero", enabled: true, inNav: false },
    { id: "rooms", enabled: true, inNav: true, navLabel: "Rooms" },
    { id: "suites", enabled: true, inNav: true, navLabel: "Suites" },
    { id: "dining", enabled: true, inNav: true, navLabel: "Dining" },
    { id: "spa", enabled: true, inNav: true, navLabel: "Spa" },
    { id: "experiences", enabled: true, inNav: true, navLabel: "Experiences" },
    { id: "gallery", enabled: true, inNav: true, navLabel: "Gallery" },
    { id: "booking", enabled: true, inNav: false },
    { id: "reviews", enabled: true, inNav: false },
    { id: "faq", enabled: true, inNav: false },
    { id: "awards", enabled: true, inNav: false },
    { id: "sustainability", enabled: true, inNav: false },
    { id: "location", enabled: true, inNav: false },
    { id: "contact", enabled: true, inNav: true, navLabel: "Contact" },
  ],

  seo: {
    ogImage: "/images/og.jpg",
    keywords: [
      "luxury hotel",
      "5 star resort",
      "spa resort",
      "beach resort",
      "suites",
      "hotel booking",
    ],
  },
};
