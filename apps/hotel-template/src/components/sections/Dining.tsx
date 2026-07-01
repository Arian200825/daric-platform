"use client";

import { Section, SectionHeading, Reveal, Media, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Dining — the hotel's restaurants & bars as image cards. */
export function Dining() {
  const { l } = useI18n();
  const dining = content.dining;

  return (
    <Section id="dining">
      <SectionHeading eyebrow={l(dining.eyebrow)} title={l(dining.title)} intro={dining.intro ? l(dining.intro) : undefined} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {dining.venues.map((v, i) => (
          <Reveal as="article" key={l(v.name)} delay={i * 0.08} variants={staggerItem}
            className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
            <Media src={v.image} alt={l(v.name)} gradient={v.gradient} className="aspect-[3/2]"
              imgClassName="transition-transform duration-700 group-hover:scale-105" />
            <div className="flex flex-1 flex-col gap-2 p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-primary">{l(v.cuisine)}</p>
              <h3 className="font-display text-2xl">{l(v.name)}</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">{l(v.description)}</p>
              {v.hours && <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted">{l(v.hours)}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
