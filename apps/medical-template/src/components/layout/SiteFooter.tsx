"use client";

import { Footer } from "@daric/ui";
import { config } from "@/config/medical.config";
import { useI18n } from "@/lib/i18n";

/** SiteFooter — composes the shared Footer with medical columns + Daric backlink. */
export function SiteFooter() {
  const { l, t } = useI18n();
  const { brand, contact, hours, socials, sections } = config;
  const navItems = sections.filter((s) => s.enabled && s.inNav);

  return (
    <Footer
      brand={brand.name}
      socials={socials}
      builtBy={{ label: "Built by Daric", href: config.daric.url }}
    >
      {/* Brand */}
      <div className="lg:col-span-2">
        <p className="font-display text-2xl font-semibold">{brand.name}</p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{l(brand.description)}</p>
      </div>

      {/* Explore */}
      <nav aria-label="Footer" className="flex flex-col gap-2.5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Explore</p>
        {navItems.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="text-sm text-muted transition-colors hover:text-foreground">
            {l(s.navLabel ?? s.id)}
          </a>
        ))}
      </nav>

      {/* Visit */}
      <div className="flex flex-col gap-2.5 text-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{t("findUs")}</p>
        <address className="not-italic text-muted">
          {contact.address.street}
          <br />
          {contact.address.city}{contact.address.region ? `, ${contact.address.region}` : ""} {contact.address.postalCode}
        </address>
        <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="text-muted hover:text-foreground">
          {contact.phone}
        </a>
        <p className="mt-1 text-xs text-muted">{l(hours[0].days)}: {l(hours[0].hours)}</p>
      </div>
    </Footer>
  );
}
