"use client";

import { ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Insurance — accepted providers (reduces cost anxiety → more bookings). */
export function Insurance() {
  const { l } = useI18n();
  const insurance = content.insurance;

  return (
    <Section id="insurance" className="bg-surface">
      <SectionHeading eyebrow={l(insurance.eyebrow)} title={l(insurance.title)} intro={insurance.intro ? l(insurance.intro) : undefined} align="center" />

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
        {insurance.providers.map((p, i) => (
          <Reveal as="div" key={p} delay={(i % 4) * 0.05}
            className="flex items-center justify-center gap-2 rounded-[var(--radius)] border border-border bg-background px-4 py-5 text-center text-sm font-semibold text-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0 text-accent" />
            {p}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
