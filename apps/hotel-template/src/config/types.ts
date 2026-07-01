import type { ThemeColors } from "@daric/ui";

/**
 * Hotel Master Template — typed contracts for config + content.
 * Everything the site renders is described here and edited via config/content.
 */

export type Locale = string;
export type LocalizedString = string | Partial<Record<Locale, string>>;

/* --------------------------------- Booking ---------------------------------- */

export type BookingProvider = "internal" | "link" | "synxis" | "cloudbeds";

export interface BookingConfig {
  provider: BookingProvider;
  /** External booking-engine URL (link/synxis/cloudbeds). */
  url?: string;
  /** POST target for the internal enquiry form; empty = demo mode. */
  endpoint?: string;
  maxGuests: number;
  /** Room-type options offered in the booking form. */
  roomTypes: string[];
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
  | "rooms"
  | "suites"
  | "dining"
  | "spa"
  | "experiences"
  | "gallery"
  | "booking"
  | "reviews"
  | "faq"
  | "awards"
  | "sustainability"
  | "location"
  | "contact";

export interface SectionConfig {
  id: SectionId;
  enabled: boolean;
  inNav?: boolean;
  navLabel?: LocalizedString;
}

/* ------------------------------- Root config -------------------------------- */

export interface HotelConfig {
  brand: {
    name: string;
    tagline: LocalizedString;
    description: LocalizedString;
    /** Star rating shown in the hero/footer, e.g. 5. */
    stars?: number;
  };
  url: string;
  contact: {
    phone: string;
    email: string;
    address: Address;
    mapEmbedUrl?: string;
  };
  checkTimes: { checkIn: string; checkOut: string };
  socials: { label: string; href: string }[];
  i18n: { defaultLocale: Locale; locales: Locale[] };
  booking: BookingConfig;
  currency: { code: string; symbol: string };
  theme: { colors: ThemeColors; radius: number; fonts: { display: string; body: string } };
  sections: SectionConfig[];
  seo: { ogImage?: string; keywords: string[] };
}

/* --------------------------------- Content ---------------------------------- */

export interface HeroContent {
  eyebrow: LocalizedString;
  headline: LocalizedString;
  subheadline: LocalizedString;
  backgroundImage?: string;
}

export interface Room {
  name: LocalizedString;
  category: LocalizedString;
  /** Category key used for filtering (stable, non-localized). */
  categoryKey: string;
  description: LocalizedString;
  pricePerNight: number;
  capacity: number;
  sizeSqm: number;
  bed: LocalizedString;
  amenities: LocalizedString[];
  image?: string;
  gradient?: [string, string];
}

export interface RoomsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  rooms: Room[];
}

export interface Suite {
  name: LocalizedString;
  description: LocalizedString;
  pricePerNight?: number;
  features: LocalizedString[];
  image?: string;
  gradient?: [string, string];
}

export interface SuitesContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  suites: Suite[];
}

export interface DiningVenue {
  name: LocalizedString;
  cuisine: LocalizedString;
  description: LocalizedString;
  hours?: LocalizedString;
  image?: string;
  gradient?: [string, string];
}

export interface DiningContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  venues: DiningVenue[];
}

export interface SpaContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  paragraphs: LocalizedString[];
  treatments: { name: LocalizedString; duration: LocalizedString; price?: number }[];
  image?: string;
}

export interface ExperienceItem {
  title: LocalizedString;
  description: LocalizedString;
  image?: string;
  gradient?: [string, string];
}

export interface ExperiencesContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  intro?: LocalizedString;
  items: ExperienceItem[];
}

export interface GalleryImage {
  src?: string;
  alt: LocalizedString;
  gradient?: [string, string];
}

export interface GalleryContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  images: GalleryImage[];
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

export interface FaqContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: { question: LocalizedString; answer: LocalizedString }[];
}

export interface AwardsContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  items: { title: LocalizedString; org: LocalizedString; year?: string }[];
}

export interface SustainabilityContent {
  eyebrow: LocalizedString;
  title: LocalizedString;
  statement: LocalizedString;
  commitments: { title: LocalizedString; description: LocalizedString }[];
}

export interface SiteContent {
  hero: HeroContent;
  rooms: RoomsContent;
  suites: SuitesContent;
  dining: DiningContent;
  spa: SpaContent;
  experiences: ExperiencesContent;
  gallery: GalleryContent;
  reviews: ReviewsContent;
  faq: FaqContent;
  awards: AwardsContent;
  sustainability: SustainabilityContent;
}
