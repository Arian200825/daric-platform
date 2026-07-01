import type { Locale, LocalizedString } from "@/config/types";
import { config } from "@/config/hotel.config";

/**
 * Resolve a LocalizedString to a plain string for the given locale.
 *   localize("Welcome", "fr") → "Welcome"
 *   localize({ en: "Welcome", fr: "Bienvenue" }, "fr") → "Bienvenue"
 * Falls back to the default locale, then the first value, so it never renders blank.
 */
export function localize(value: LocalizedString, locale: Locale): string {
  if (typeof value === "string") return value;
  return (
    value[locale] ??
    value[config.i18n.defaultLocale] ??
    Object.values(value)[0] ??
    ""
  );
}
