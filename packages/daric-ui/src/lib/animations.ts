import type { Variants } from "framer-motion";

/**
 * Shared motion variants — one tunable source of truth for all Daric templates.
 * Tasteful and reduced-motion safe (global CSS neutralizes motion when the user
 * prefers reduced motion).
 */
const EASE = [0.16, 1, 0.3, 1] as const; // smooth, no overshoot

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export const viewportOnce = { once: true, margin: "-70px" } as const;
