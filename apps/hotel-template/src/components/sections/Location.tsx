"use client";

import { Section, Eyebrow, Reveal, Button } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { useI18n } from "@/lib/i18n";

/** Location — map, address, check times, and a directions link. */
export function Location() {
  const { t } = useI18n();
  const { contact, checkTimes } = config;
  const addr = contact.address;

  const q = encodeURIComponent(`${addr.street}, ${addr.city} ${addr.postalCode ?? ""}, ${addr.country}`);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <Section id="location">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{t("findUs")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">Getting here</h2>
          <address className="not-italic text-muted">
            <p className="text-lg text-foreground">{addr.street}</p>
            <p>{addr.city}{addr.region ? `, ${addr.region}` : ""} {addr.postalCode}</p>
            <p>{addr.country}</p>
          </address>
          <p className="text-sm text-muted">
            {t("checkIn")}: {checkTimes.checkIn} · {t("checkOut")}: {checkTimes.checkOut}
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button href={directionsUrl} variant="outline" size="sm">{t("getDirections")}</Button>
            <Button href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} variant="ghost" size="sm">{t("callUs")}</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[320px] overflow-hidden rounded-[var(--radius)] border border-border">
          {contact.mapEmbedUrl ? (
            <iframe title={`Map to ${config.brand.name}`} src={contact.mapEmbedUrl} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[320px] w-full grayscale-[0.3]" />
          ) : (
            <div className="flex h-full min-h-[320px] items-center justify-center bg-surface text-sm text-muted">
              Add a map embed URL in the config.
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
