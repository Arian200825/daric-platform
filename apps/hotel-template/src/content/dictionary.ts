import type { Locale } from "@/config/types";

/**
 * UI string dictionaries — fixed interface text per locale. Section *content*
 * lives in src/content/site-content.ts; this is only chrome.
 * To add a language: add its code to config.i18n.locales and an entry here.
 */
export type DictKey =
  | "bookNow"
  | "bookStay"
  | "exploreRooms"
  | "viewDetails"
  | "checkAvailability"
  | "callUs"
  | "getDirections"
  | "openMenu"
  | "closeMenu"
  | "allRooms"
  | "perNight"
  | "from"
  | "guests"
  | "night"
  | "sizeSqm"
  | "checkIn"
  | "checkOut"
  | "roomType"
  | "hours"
  | "findUs"
  | "form.name"
  | "form.email"
  | "form.phone"
  | "form.message"
  | "form.notes"
  | "form.submit"
  | "form.send"
  | "form.submitting"
  | "booking.successTitle"
  | "booking.successBody"
  | "contact.successTitle"
  | "contact.successBody"
  | "contact.title";

type Dictionary = Record<DictKey, string>;

const en: Dictionary = {
  bookNow: "Book now",
  bookStay: "Book your stay",
  exploreRooms: "Explore rooms",
  viewDetails: "View details",
  checkAvailability: "Check availability",
  callUs: "Call us",
  getDirections: "Get directions",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  allRooms: "All",
  perNight: "per night",
  from: "From",
  guests: "Guests",
  night: "night",
  sizeSqm: "m²",
  checkIn: "Check-in",
  checkOut: "Check-out",
  roomType: "Room type",
  hours: "Hours",
  findUs: "Find us",
  "form.name": "Full name",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.message": "Message",
  "form.notes": "Special requests",
  "form.submit": "Request booking",
  "form.send": "Send message",
  "form.submitting": "Sending…",
  "booking.successTitle": "Enquiry received",
  "booking.successBody": "Thank you — our reservations team will confirm availability by email shortly.",
  "contact.successTitle": "Message sent",
  "contact.successBody": "Thank you — we'll be in touch shortly.",
  "contact.title": "Get in touch",
};

const fr: Dictionary = {
  bookNow: "Réserver",
  bookStay: "Réservez votre séjour",
  exploreRooms: "Découvrir les chambres",
  viewDetails: "Voir les détails",
  checkAvailability: "Vérifier les disponibilités",
  callUs: "Appelez-nous",
  getDirections: "Itinéraire",
  openMenu: "Ouvrir le menu",
  closeMenu: "Fermer le menu",
  allRooms: "Tout",
  perNight: "par nuit",
  from: "À partir de",
  guests: "Personnes",
  night: "nuit",
  sizeSqm: "m²",
  checkIn: "Arrivée",
  checkOut: "Départ",
  roomType: "Type de chambre",
  hours: "Horaires",
  findUs: "Nous trouver",
  "form.name": "Nom complet",
  "form.email": "E-mail",
  "form.phone": "Téléphone",
  "form.message": "Message",
  "form.notes": "Demandes spéciales",
  "form.submit": "Demander une réservation",
  "form.send": "Envoyer le message",
  "form.submitting": "Envoi…",
  "booking.successTitle": "Demande reçue",
  "booking.successBody": "Merci — notre équipe des réservations confirmera la disponibilité par e-mail sous peu.",
  "contact.successTitle": "Message envoyé",
  "contact.successBody": "Merci — nous vous répondrons sous peu.",
  "contact.title": "Nous contacter",
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr };
