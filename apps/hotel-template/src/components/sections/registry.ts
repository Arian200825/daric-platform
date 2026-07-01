import type { ComponentType } from "react";
import type { SectionId } from "@/config/types";
import { Hero } from "./Hero";
import { Rooms } from "./Rooms";
import { Suites } from "./Suites";
import { Dining } from "./Dining";
import { Spa } from "./Spa";
import { Experiences } from "./Experiences";
import { GallerySection } from "./GallerySection";
import { Booking } from "./Booking";
import { Reviews } from "./Reviews";
import { Faq } from "./Faq";
import { Awards } from "./Awards";
import { Sustainability } from "./Sustainability";
import { Location } from "./Location";
import { Contact } from "./Contact";

/**
 * Section registry — maps a SectionId to its component. The page renders from
 * config.sections, so adding a section = add a component + an entry here.
 */
export const sectionRegistry: Record<SectionId, ComponentType> = {
  hero: Hero,
  rooms: Rooms,
  suites: Suites,
  dining: Dining,
  spa: Spa,
  experiences: Experiences,
  gallery: GallerySection,
  booking: Booking,
  reviews: Reviews,
  faq: Faq,
  awards: Awards,
  sustainability: Sustainability,
  location: Location,
  contact: Contact,
};
