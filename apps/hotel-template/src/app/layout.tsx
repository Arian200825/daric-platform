import type { Metadata, Viewport } from "next";
import "./globals.css";
import { themeCss } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { localize } from "@/lib/localize";
import { fontVariables } from "@/lib/fonts";
import { LocaleProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const defaultLocale = config.i18n.defaultLocale;
const tagline = localize(config.brand.tagline, defaultLocale);
const description = localize(config.brand.description, defaultLocale);
// Deploy URL for absolute OG/canonical links; falls back to the client domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || config.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${config.brand.name} — ${tagline}`,
    template: `%s — ${config.brand.name}`,
  },
  description,
  applicationName: config.brand.name,
  keywords: config.seo.keywords,
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: config.brand.name,
    title: `${config.brand.name} — ${tagline}`,
    description,
    ...(config.seo.ogImage ? { images: [{ url: config.seo.ogImage }] } : {}),
  },
  twitter: { card: "summary_large_image", title: `${config.brand.name} — ${tagline}`, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: config.theme.colors.background };

// Hotel structured data for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Resort",
  name: config.brand.name,
  description,
  url: config.url,
  telephone: config.contact.phone,
  email: config.contact.email,
  ...(config.brand.stars ? { starRating: { "@type": "Rating", ratingValue: config.brand.stars } } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: config.contact.address.street,
    addressLocality: config.contact.address.city,
    addressRegion: config.contact.address.region,
    postalCode: config.contact.address.postalCode,
    addressCountry: config.contact.address.country,
  },
  checkinTime: config.checkTimes.checkIn,
  checkoutTime: config.checkTimes.checkOut,
  ...(config.seo.ogImage ? { image: config.seo.ogImage } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning className={fontVariables}>
      <body className="min-h-dvh antialiased">
        <style dangerouslySetInnerHTML={{ __html: themeCss(config.theme) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary">
          Skip to content
        </a>
        <LocaleProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
