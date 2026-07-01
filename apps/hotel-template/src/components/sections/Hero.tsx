"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Media, Button, fadeUp, staggerContainer, staggerItem } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { guestOptions } from "@/lib/booking";

const fieldWrap = "flex flex-col gap-1";
const fieldLabel = "text-[10px] uppercase tracking-[0.16em] text-muted";
const fieldInput =
  "bg-transparent text-sm text-foreground focus-visible:outline-none [color-scheme:light]";

/** Hero — bright, cinematic full-viewport opener with a prominent booking bar. */
export function Hero() {
  const { l, t } = useI18n();
  const hero = content.hero;

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Media
        src={hero.backgroundImage}
        alt=""
        gradient={["#cfdde2", "#eae3d5"]}
        eager
        className="absolute inset-0 -z-10"
        imgClassName="ken-burns"
      />
      {/* Soft ivory scrim — legible top (nav) and bottom, airy middle. */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/15 to-background/90" aria-hidden />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center"
      >
        {config.brand.stars && (
          <motion.div variants={staggerItem} className="mb-5 flex gap-1.5" aria-label={`${config.brand.stars} star hotel`}>
            {Array.from({ length: config.brand.stars }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" strokeWidth={0} />
            ))}
          </motion.div>
        )}
        <motion.span variants={staggerItem} className="text-xs uppercase tracking-luxe text-primary">
          {l(hero.eyebrow)}
        </motion.span>
        <motion.h1 variants={staggerItem} className="mt-6 text-balance text-5xl leading-[1.03] sm:text-6xl lg:text-7xl">
          {l(hero.headline)}
        </motion.h1>
        <motion.p variants={staggerItem} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {l(hero.subheadline)}
        </motion.p>

        {/* Availability bar — the primary conversion path. */}
        <motion.div
          variants={fadeUp}
          className="mt-10 w-full max-w-2xl rounded-[var(--radius)] border border-border bg-background/85 p-3 backdrop-blur-md shadow-[0_20px_60px_-30px_rgba(30,42,48,0.5)]"
        >
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-end">
            <div className={`${fieldWrap} flex-1 px-3 text-left`}>
              <label htmlFor="hero-in" className={fieldLabel}>{t("checkIn")}</label>
              <input id="hero-in" type="date" className={fieldInput} aria-label={t("checkIn")} />
            </div>
            <div className="hidden w-px self-stretch bg-border sm:block" aria-hidden />
            <div className={`${fieldWrap} flex-1 px-3 text-left`}>
              <label htmlFor="hero-out" className={fieldLabel}>{t("checkOut")}</label>
              <input id="hero-out" type="date" className={fieldInput} aria-label={t("checkOut")} />
            </div>
            <div className="hidden w-px self-stretch bg-border sm:block" aria-hidden />
            <div className={`${fieldWrap} px-3 text-left`}>
              <label htmlFor="hero-guests" className={fieldLabel}>{t("guests")}</label>
              <select id="hero-guests" defaultValue="2" className={fieldInput} aria-label={t("guests")}>
                {guestOptions().map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <Button href="#booking" size="lg" className="sm:ml-1">{t("checkAvailability")}</Button>
          </div>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href="#rooms"
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
        >
          {t("exploreRooms")} <ArrowRight className="h-3.5 w-3.5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
