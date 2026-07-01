"use client";

import { Leaf } from "lucide-react";
import { Section, Eyebrow, Reveal } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Sustainability — statement + concrete commitments. */
export function Sustainability() {
  const { l } = useI18n();
  const s = content.sustainability;

  return (
    <Section id="sustainability" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{l(s.eyebrow)}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">{l(s.title)}</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted">{l(s.statement)}</p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {s.commitments.map((c, i) => (
            <Reveal as="div" key={i} delay={i * 0.06}
              className="flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-background p-6">
              <Leaf className="h-6 w-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-foreground">{l(c.title)}</h3>
              <p className="text-sm leading-relaxed text-muted">{l(c.description)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
