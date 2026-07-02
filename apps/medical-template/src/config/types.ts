import type { ThemeColors } from "@daric/ui";

/**
 * Dental / Medical Master Template — typed contracts for config + content.
 * Everything the site renders is described here and edited via config/content.
 */

export type Locale = string;
export type LocalizedString = string | Partial<Record<Locale, string>>;

/* ------------------------------- Appointments ------------------------------- */

export type AppointmentProvider = "internal" | "link" | "nexhealth" | "zocdoc";

export interface AppointmentConfig {
  provider: AppointmentProvider;
  /** External booking URL (link/nexhealth/zocdoc). */
  url?: string;
  /** POST target for the internal form; empty = demo mode. */
  endpoint?: string;
  /** Treatments offered in the booking dropdown. */
  reasons: string[];
  advanceDays: number;
}

/* --------------------------------- Business --------------------------------- */

export interface Address {
  street: string;
  city: string;
  region?: string;
  postalCode?: string;
  country: string;
}

export interface BusinessHours {
  days: LocalizedString;
  hours: LocalizedString;
}

/* --------------------------------- Sections --------------------------------- */

export type SectionId =
  | "hero"
  | "about"
  | "doctors"
  | "treatments"
  | "gallery"
  | "reviews"
  | "insurance"
  | "faq"
  | "booking"
  | "location"
  | "contact";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  inNav?: boolean;
  navLabel?: LocalizedString;
}

/* ------------------------------- Root config -------------------------------- */

export interface MedicalConfig {
  brand: {
    name: string;
    tagline: LocalizedString;
    description: LocalizedString;
    /** e.g. "Established 2009" or a trust line. */
    since?: string;
  };
  url: string;
  contact: {
    phone: string;
    /** Emergency / after-hours line (optional). */
    emergencyPhone?: string;
    email: string;
    address: Address;
    mapEmbedUrl?: string;
  };
  hours: BusinessHours[];
  socials: { label: string; href: string }[];
  i18n: { defaultLocale: Locale; locales: Locale[] };
  appointment: AppointmentConfig;
  theme: { colors: ThemeColors; radius: number; fonts: { display: string; body: string } };
  sections: SectionConfig[];
  seo: { ogImage?: string; keywords: string[] };
  /** Daric backlinks — this template is a Daric sales asset. */
  daric: { url: string; contactUrl: string };
}

/* --------------------------------- Content ---------------------------------- */

export interface HeroContent {
  eyebrow: LocalizedString;
  headline: LocalizedString;
  subheadline: LocalizedString;
  /** Small trust badges under the CTA, e.g. "Same-day appointments". */
  highlights: LocalizedString[];
  backgroundImage?: string;
}

export interface AboutContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  image?: string;
  stats: { value: string; label: LocalizedString }[];
}

export interface Doctor {
  name: string;
  role: LocalizedString;
  credentials?: string;
  bio: LocalizedString;
  image?: string;
  gradient?: [string, string];
}

export interface DoctorsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  doctors: Doctor[];
}

export interface Treatment {
  icon: string;
  name: LocalizedString;
  description: LocalizedString;
}

export interface TreatmentsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  items: Treatment[];
}

export interface BeforeAfterPair {
  label: LocalizedString;
  beforeGradient: [string, string];
  afterGradient: [string, string];
  beforeImage?: string;
  afterImage?: string;
}

export interface GalleryContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  pairs: BeforeAfterPair[];
}

export interface Review {
  quote: LocalizedString;
  author: string;
  source?: string;
  rating?: number;
}

export interface ReviewsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: Review[];
}

export interface InsuranceContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  providers: string[];
}

export interface FaqContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: { question: LocalizedString; answer: LocalizedString }[];
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  doctors: DoctorsContent;
  treatments: TreatmentsContent;
  gallery: GalleryContent;
  reviews: ReviewsContent;
  insurance: InsuranceContent;
  faq: FaqContent;
}
