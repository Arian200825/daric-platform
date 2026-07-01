"use client";

import { Footer } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { useI18n } from "@/lib/i18n";

/** SiteFooter — composes the shared Footer with hotel columns + config. */
export function SiteFooter() {
  const { l, t } = useI18n();
  const { brand, contact, checkTimes, socials, sections } = config;
  const navItems = sections.filter((s) => s.enabled && s.inNav);

  return (
    <Footer
      brand={brand.name}
      socials={socials}
      builtBy={{ label: "Built by Daric", href: config.daric.url }}
    >
      {/* Brand */}
      <div className="lg:col-span-2">
        <p className="font-display text-3xl">{brand.name}</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          {l(brand.description)}
        </p>
      </div>

      {/* Explore */}
      <nav aria-label="Footer" className="flex flex-col gap-2.5">
        <p className="text-xs uppercase tracking-luxe text-primary">Explore</p>
        {navItems.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {l(s.navLabel ?? s.id)}
          </a>
        ))}
      </nav>

      {/* Contact */}
      <div className="flex flex-col gap-2.5 text-sm">
        <p className="text-xs uppercase tracking-luxe text-primary">{t("findUs")}</p>
        <address className="not-italic text-muted">
          {contact.address.street}
          <br />
          {contact.address.city}
          {contact.address.region ? `, ${contact.address.region}` : ""} {contact.address.postalCode}
        </address>
        <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="text-muted hover:text-foreground">
          {contact.phone}
        </a>
        <a href={`mailto:${contact.email}`} className="text-muted hover:text-foreground">
          {contact.email}
        </a>
        <p className="mt-2 text-xs text-muted">
          {t("checkIn")} {checkTimes.checkIn} · {t("checkOut")} {checkTimes.checkOut}
        </p>
      </div>
    </Footer>
  );
}
