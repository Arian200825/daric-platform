"use client";

import { Section, SectionHeading, Reveal, Media, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Experiences — curated activities as image cards. */
export function Experiences() {
  const { l } = useI18n();
  const exp = content.experiences;

  return (
    <Section id="experiences">
      <SectionHeading eyebrow={l(exp.eyebrow)} title={l(exp.title)} intro={exp.intro ? l(exp.intro) : undefined} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {exp.items.map((item, i) => (
          <Reveal as="article" key={l(item.title)} delay={i * 0.08} variants={staggerItem}
            className="group relative overflow-hidden rounded-[var(--radius)] border border-border">
            <Media src={item.image} alt={l(item.title)} gradient={item.gradient} className="aspect-[3/4]"
              imgClassName="transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
              <h3 className="font-display text-2xl">{l(item.title)}</h3>
              <p className="text-sm leading-relaxed text-muted">{l(item.description)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
