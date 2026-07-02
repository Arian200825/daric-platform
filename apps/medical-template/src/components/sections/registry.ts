import type { ComponentType } from "react";
import type { SectionId } from "@/config/types";
import { Hero } from "./Hero";
import { About } from "./About";
import { Doctors } from "./Doctors";
import { Treatments } from "./Treatments";
import { Gallery } from "./Gallery";
import { Reviews } from "./Reviews";
import { Insurance } from "./Insurance";
import { Faq } from "./Faq";
import { Booking } from "./Booking";
import { Location } from "./Location";
import { Contact } from "./Contact";

/**
 * Section registry — maps a SectionId to its component. The page renders from
 * config.sections, so adding a section = add a component + an entry here.
 */
export const sectionRegistry: Record<SectionId, ComponentType> = {
  hero: Hero,
  about: About,
  doctors: Doctors,
  treatments: Treatments,
  gallery: Gallery,
  reviews: Reviews,
  insurance: Insurance,
  faq: Faq,
  booking: Booking,
  location: Location,
  contact: Contact,
};
