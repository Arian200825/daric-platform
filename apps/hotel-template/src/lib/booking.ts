import { config } from "@/config/hotel.config";

/** Guest-count options from 1 to the configured maximum. */
export function guestOptions(): number[] {
  return Array.from({ length: config.booking.maxGuests }, (_, i) => i + 1);
}

/** Where the "Book now" CTA points: external engine or the on-page booking form. */
export function bookHref(): string {
  const b = config.booking;
  if (b.provider !== "internal" && b.url) return b.url;
  return "#booking";
}

export const booking = config.booking;
