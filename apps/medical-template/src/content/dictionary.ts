import type { Locale } from "@/config/types";

/**
 * UI string dictionaries — fixed interface text per locale. Section *content*
 * lives in src/content/site-content.ts; this is only chrome.
 */
export type DictKey =
  | "book"
  | "bookAppointment"
  | "requestAppointment"
  | "callUs"
  | "callNow"
  | "getDirections"
  | "openMenu"
  | "closeMenu"
  | "before"
  | "after"
  | "hours"
  | "findUs"
  | "emergency"
  | "form.name"
  | "form.email"
  | "form.phone"
  | "form.date"
  | "form.time"
  | "form.reason"
  | "form.message"
  | "form.newPatient"
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
  book: "Book",
  bookAppointment: "Book an appointment",
  requestAppointment: "Request appointment",
  callUs: "Call us",
  callNow: "Call now",
  getDirections: "Get directions",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  before: "Before",
  after: "After",
  hours: "Opening hours",
  findUs: "Find us",
  emergency: "Dental emergency?",
  "form.name": "Full name",
  "form.email": "Email",
  "form.phone": "Phone",
  "form.date": "Preferred date",
  "form.time": "Preferred time",
  "form.reason": "Reason for visit",
  "form.message": "Message",
  "form.newPatient": "I'm a new patient",
  "form.submit": "Request appointment",
  "form.send": "Send message",
  "form.submitting": "Sending…",
  "booking.successTitle": "Request received",
  "booking.successBody":
    "Thank you — our front desk will call to confirm your appointment shortly.",
  "contact.successTitle": "Message sent",
  "contact.successBody": "Thank you — we'll be in touch shortly.",
  "contact.title": "Get in touch",
};

const es: Dictionary = {
  book: "Reservar",
  bookAppointment: "Reservar una cita",
  requestAppointment: "Solicitar cita",
  callUs: "Llámenos",
  callNow: "Llamar ahora",
  getDirections: "Cómo llegar",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  before: "Antes",
  after: "Después",
  hours: "Horario",
  findUs: "Encuéntrenos",
  emergency: "¿Emergencia dental?",
  "form.name": "Nombre completo",
  "form.email": "Correo electrónico",
  "form.phone": "Teléfono",
  "form.date": "Fecha preferida",
  "form.time": "Hora preferida",
  "form.reason": "Motivo de la visita",
  "form.message": "Mensaje",
  "form.newPatient": "Soy paciente nuevo",
  "form.submit": "Solicitar cita",
  "form.send": "Enviar mensaje",
  "form.submitting": "Enviando…",
  "booking.successTitle": "Solicitud recibida",
  "booking.successBody":
    "Gracias — nuestra recepción le llamará para confirmar su cita en breve.",
  "contact.successTitle": "Mensaje enviado",
  "contact.successBody": "Gracias — nos pondremos en contacto en breve.",
  "contact.title": "Contáctenos",
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
