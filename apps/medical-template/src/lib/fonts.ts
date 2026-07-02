import { Plus_Jakarta_Sans, Lexend } from "next/font/google";

/**
 * Modern, highly-readable sans pairing — chosen for a healthcare brand:
 *  - Plus Jakarta Sans (display): friendly, professional, confidence-inspiring
 *  - Lexend (body): engineered for reading proficiency (great for accessibility)
 * Deliberately distinct from the other Daric templates (no serif). Swap here to
 * rebrand type; the site reads --font-display / --font-body.
 */
export const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const fontVariables = `${displayFont.variable} ${bodyFont.variable}`;
