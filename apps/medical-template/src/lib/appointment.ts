import { config } from "@/config/medical.config";

/** Appointment time slots, every 30 minutes across clinic hours. */
export function timeSlots(startHour = 8, endHour = 17, stepMinutes = 30): string[] {
  const slots: string[] = [];
  for (let m = startHour * 60; m <= endHour * 60; m += stepMinutes) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    const ampm = h < 12 ? "AM" : "PM";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    slots.push(`${h12}:${String(min).padStart(2, "0")} ${ampm}`);
  }
  return slots;
}

/** Where the "Book" CTA points: external provider or the on-page form. */
export function bookHref(): string {
  const a = config.appointment;
  if (a.provider !== "internal" && a.url) return a.url;
  return "#booking";
}

export const appointment = config.appointment;
