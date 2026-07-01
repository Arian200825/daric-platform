"use client";

import { Navbar, type NavItem } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { useI18n } from "@/lib/i18n";
import { bookHref } from "@/lib/booking";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** SiteHeader — composes the shared Navbar with hotel config + i18n. */
export function SiteHeader() {
  const { l, t } = useI18n();

  const items: NavItem[] = config.sections
    .filter((s) => s.enabled && s.inNav)
    .map((s) => ({ label: l(s.navLabel ?? s.id), href: `#${s.id}` }));

  return (
    <Navbar
      brand={config.brand.name}
      items={items}
      cta={{ label: t("bookNow"), href: bookHref() }}
      rightSlot={<LanguageSwitcher />}
      labels={{ open: t("openMenu"), close: t("closeMenu") }}
    />
  );
}
