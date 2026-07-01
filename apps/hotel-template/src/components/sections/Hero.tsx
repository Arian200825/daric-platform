"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Media, Button, staggerContainer, staggerItem } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";
import { bookHref } from "@/lib/booking";

/** Hero — cinematic full-viewport opener with a booking prompt. */
export function Hero() {
  const { l, t } = useI18n();
  const hero = content.hero;

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <Media
        src={hero.backgroundImage}
        alt=""
        gradient={["#1b2432", "#0a0b0e"]}
        eager
        className="absolute inset-0 -z-10"
        imgClassName="scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/60 via-background/35 to-background" aria-hidden />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center"
      >
        {config.brand.stars && (
          <motion.div variants={staggerItem} className="mb-5 flex gap-1" aria-label={`${config.brand.stars} star hotel`}>
            {Array.from({ length: config.brand.stars }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" strokeWidth={0} />
            ))}
          </motion.div>
        )}
        <motion.span variants={staggerItem} className="text-xs uppercase tracking-luxe text-primary">
          {l(hero.eyebrow)}
        </motion.span>
        <motion.h1 variants={staggerItem} className="mt-6 text-balance text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          {l(hero.headline)}
        </motion.h1>
        <motion.p variants={staggerItem} className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {l(hero.subheadline)}
        </motion.p>
        <motion.div variants={staggerItem} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Button href={bookHref()} size="lg">{t("bookStay")}</Button>
          <Button href="#rooms" size="lg" variant="outline">{t("exploreRooms")}</Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 h-10 w-px -translate-x-1/2 rule-gold opacity-60" aria-hidden />
    </section>
  );
}
