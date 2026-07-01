import { Playfair_Display, Inter } from "next/font/google";

/**
 * Font pairing — elegant high-contrast serif display + clean modern sans body.
 * (Deliberately distinct from the restaurant's Cormorant + Jost.) Swap families
 * here to rebrand type; the site reads --font-display / --font-body. Only the
 * active pairing is bundled (keeps Lighthouse high).
 */
export const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${displayFont.variable} ${bodyFont.variable}`;
