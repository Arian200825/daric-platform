/**
 * @daric/ui — Daric's shared design system.
 * Presentational primitives + composed UI reused across industry templates.
 */

// Utilities
export { cn } from "./lib/cn";
export { formatPrice } from "./lib/format";
export * from "./lib/animations";
export { themeCss, type ThemeColors, type ThemeConfig } from "./lib/tokens";

// Layout primitives
export { Container } from "./components/Container";
export { Section } from "./components/Section";
export { Reveal } from "./components/Reveal";

// Content primitives
export { Eyebrow } from "./components/Eyebrow";
export { SectionHeading } from "./components/SectionHeading";
export { Media } from "./components/Media";

// Interactive primitives
export { Button } from "./components/Button";
export { Card } from "./components/Card";
export { FormField, Input, Textarea, Select } from "./components/Field";

// Composed components
export { Gallery, type GalleryItem } from "./components/Gallery";
export { CTABanner } from "./components/CTA";
export { Accordion, type AccordionItem } from "./components/Accordion";
export { Navbar, type NavItem } from "./components/Navbar";
export { Footer, type FooterSocial } from "./components/Footer";
