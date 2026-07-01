"use client";

import { Check } from "lucide-react";
import { Section, SectionHeading, Reveal, Media, Button, cn, formatPrice } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Suites — flagship suites as an editorial alternating showcase. */
export function Suites() {
  const { l, t } = useI18n();
  const suites = content.suites;
  const symbol = config.currency.symbol;

  return (
    <Section id="suites" className="bg-surface">
      <SectionHeading eyebrow={l(suites.eyebrow)} title={l(suites.title)} intro={suites.intro ? l(suites.intro) : undefined} />

      <div className="mt-16 flex flex-col gap-16 sm:gap-24">
        {suites.suites.map((suite, i) => {
          const imageRight = i % 2 === 1;
          return (
            <div key={l(suite.name)} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <Reveal className={cn(imageRight && "lg:order-2")}>
                <Media src={suite.image} alt={l(suite.name)} gradient={suite.gradient}
                  className="aspect-[5/4] rounded-[var(--radius)]" imgClassName="transition-transform duration-700 hover:scale-105" />
              </Reveal>
              <Reveal delay={0.1} className={cn("flex flex-col gap-5", imageRight && "lg:order-1")}>
                <h3 className="font-display text-3xl sm:text-4xl">{l(suite.name)}</h3>
                <p className="text-pretty leading-relaxed text-muted">{l(suite.description)}</p>
                <ul className="grid grid-cols-2 gap-2.5">
                  {suite.features.map((f) => (
                    <li key={l(f)} className="flex items-center gap-2 text-sm text-muted">
                      <Check className="h-4 w-4 shrink-0 text-primary" />{l(f)}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-5 pt-2">
                  {typeof suite.pricePerNight === "number" && (
                    <p className="text-sm text-muted">
                      {t("from")}{" "}
                      <span className="font-display text-2xl text-foreground">{formatPrice(suite.pricePerNight, symbol)}</span>
                      <span className="text-xs"> / {t("night")}</span>
                    </p>
                  )}
                  <Button href="#booking">{t("bookNow")}</Button>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
