"use client";

import { Section, Eyebrow, Reveal, Button } from "@daric/ui";
import { config } from "@/config/medical.config";
import { useI18n } from "@/lib/i18n";

/** Location — map, hours, and a directions link. */
export function Location() {
  const { l, t } = useI18n();
  const { contact, hours } = config;
  const addr = contact.address;

  const q = encodeURIComponent(`${addr.street}, ${addr.city} ${addr.postalCode ?? ""}, ${addr.country}`);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <Section id="location">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{t("findUs")}</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Visit our practice</h2>
          <address className="not-italic text-muted">
            <p className="text-lg text-foreground">{addr.street}</p>
            <p>{addr.city}{addr.region ? `, ${addr.region}` : ""} {addr.postalCode}</p>
          </address>

          <dl className="flex flex-col gap-2 border-t border-border pt-6 text-sm">
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{t("hours")}</dt>
            {hours.map((h, i) => (
              <div key={i} className="flex justify-between gap-4">
                <dd className="text-muted">{l(h.days)}</dd>
                <dd className="font-medium text-foreground">{l(h.hours)}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-2 flex flex-wrap gap-3">
            <Button href={directionsUrl} variant="outline" size="sm">{t("getDirections")}</Button>
            <Button href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} variant="ghost" size="sm">{t("callNow")}</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[320px] overflow-hidden rounded-[calc(var(--radius)+0.25rem)] border border-border">
          {contact.mapEmbedUrl ? (
            <iframe title={`Map to ${config.brand.name}`} src={contact.mapEmbedUrl} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[320px] w-full" />
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
