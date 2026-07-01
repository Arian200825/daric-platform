"use client";

import { Section, Eyebrow, Reveal, Media, formatPrice } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Spa — wellness narrative + a treatments menu. */
export function Spa() {
  const { l } = useI18n();
  const spa = content.spa;
  const symbol = config.currency.symbol;

  return (
    <Section id="spa" className="bg-surface">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Media src={spa.image} alt={l(spa.title)} gradient={["#2e4a4a", "#12141a"]}
            className="aspect-[4/5] rounded-[var(--radius)]" />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <Eyebrow>{l(spa.eyebrow)}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">{l(spa.title)}</h2>
          {spa.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted">{l(p)}</p>
          ))}
          <ul className="mt-2 flex flex-col divide-y divide-border border-t border-border">
            {spa.treatments.map((tr) => (
              <li key={l(tr.name)} className="flex items-baseline justify-between gap-4 py-3">
                <span className="text-foreground">{l(tr.name)}</span>
                <span className="flex items-baseline gap-3 text-sm text-muted">
                  <span>{l(tr.duration)}</span>
                  {typeof tr.price === "number" && (
                    <span className="font-display text-lg text-foreground">{formatPrice(tr.price, symbol)}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
