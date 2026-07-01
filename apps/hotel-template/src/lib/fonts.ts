import { Cormorant_Garamond, Jost } from "next/font/google";

/**
 * Font pairing — elegant serif display + clean sans body. Swap the families
 * here to rebrand type; the site reads --font-display / --font-body. Only the
 * active pairing is bundled (keeps Lighthouse high).
 */
export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${displayFont.variable} ${bodyFont.variable}`;
