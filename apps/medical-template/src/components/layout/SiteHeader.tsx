"use client";

import { Navbar, type NavItem } from "@daric/ui";
import { config } from "@/config/medical.config";
import { useI18n } from "@/lib/i18n";
import { bookHref } from "@/lib/appointment";
import { LanguageSwitcher } from "./LanguageSwitcher";

/** SiteHeader — composes the shared Navbar with medical config + i18n. */
export function SiteHeader() {
  const { l, t } = useI18n();

  const items: NavItem[] = config.sections
    .filter((s) => s.enabled && s.inNav)
    .map((s) => ({ label: l(s.navLabel ?? s.id), href: `#${s.id}` }));

  return (
    <Navbar
      brand={config.brand.name}
      items={items}
      cta={{ label: t("bookAppointment"), href: bookHref() }}
      rightSlot={<LanguageSwitcher />}
      labels={{ open: t("openMenu"), close: t("closeMenu") }}
    />
  );
}
