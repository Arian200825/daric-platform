"use client";

import { Award } from "lucide-react";
import { Section, SectionHeading, Reveal, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Awards — accolades grid. Builds trust for conversion. */
export function Awards() {
  const { l } = useI18n();
  const awards = content.awards;

  return (
    <Section id="awards">
      <SectionHeading eyebrow={l(awards.eyebrow)} title={l(awards.title)} align="center" />
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {awards.items.map((a, i) => (
          <Reveal as="div" key={i} delay={i * 0.06} variants={staggerItem}
            className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-border bg-surface p-7 text-center">
            <Award className="h-8 w-8 text-primary" strokeWidth={1.25} />
            <p className="font-display text-lg leading-tight">{l(a.title)}</p>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">
              {l(a.org)}{a.year ? ` · ${a.year}` : ""}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
