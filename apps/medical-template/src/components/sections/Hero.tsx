"use client";

import { motion } from "framer-motion";
import { Check, Phone, CalendarCheck } from "lucide-react";
import { Container, Button, Media, staggerContainer, staggerItem } from "@daric/ui";
import { config } from "@/config/medical.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { bookHref } from "@/lib/appointment";

/**
 * Hero — bright, welcoming, split two-column composition (text + image) with
 * soft blue/teal shapes. Distinct healthcare hero: reassuring, not dramatic.
 */
export function Hero() {
  const { l, t } = useI18n();
  const hero = content.hero;
  const phone = config.contact.phone;

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border bg-surface">
      {/* Soft decorative shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute right-[-8%] top-[-12%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-6%] h-[360px] w-[360px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-start gap-6">
          <motion.span variants={staggerItem} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            <CalendarCheck className="h-4 w-4" /> {l(hero.eyebrow)}
          </motion.span>

          <motion.h1 variants={staggerItem} className="text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {l(hero.headline)}
          </motion.h1>

          <motion.p variants={staggerItem} className="max-w-lg text-pretty text-lg leading-relaxed text-muted">
            {l(hero.subheadline)}
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-col gap-3 sm:flex-row">
            <Button href={bookHref()} size="lg">
              <CalendarCheck className="h-4 w-4" /> {t("bookAppointment")}
            </Button>
            <Button href={`tel:${phone.replace(/[^+\d]/g, "")}`} size="lg" variant="outline">
              <Phone className="h-4 w-4" /> {phone}
            </Button>
          </motion.div>

          <motion.ul variants={staggerItem} className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {hero.highlights.map((h) => (
              <li key={l(h)} className="inline-flex items-center gap-2 text-sm text-foreground">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {l(h)}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[calc(var(--radius)+1.5rem)] bg-gradient-to-br from-primary/15 to-accent/15" aria-hidden />
          <Media
            src={hero.backgroundImage}
            alt="Welcoming dental and medical practice"
            gradient={["#dbeafe", "#f0fdfa"]}
            eager
            className="aspect-[4/3] rounded-[calc(var(--radius)+1rem)]"
          />
        </motion.div>
      </Container>
    </section>
  );
}
