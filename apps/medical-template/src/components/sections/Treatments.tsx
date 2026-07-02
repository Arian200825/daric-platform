"use client";

import { Smile, Sparkles, Braces, Bone, ShieldCheck, Stethoscope, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, Reveal, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

// Map content icon keys → lucide icons (keeps content free of imports).
const ICONS: Record<string, LucideIcon> = {
  smile: Smile,
  sparkles: Sparkles,
  alignment: Braces,
  implant: Bone,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
};

/** Treatments — services grid with friendly icons. */
export function Treatments() {
  const { l } = useI18n();
  const treatments = content.treatments;

  return (
    <Section id="treatments">
      <SectionHeading eyebrow={l(treatments.eyebrow)} title={l(treatments.title)} intro={treatments.intro ? l(treatments.intro) : undefined} />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.items.map((item, i) => {
          const Icon = ICONS[item.icon] ?? Smile;
          return (
            <Reveal as="div" key={l(item.name)} delay={(i % 3) * 0.06} variants={staggerItem}
              className="flex h-full flex-col gap-4 rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background p-7 transition-shadow duration-200 hover:shadow-[0_16px_40px_-24px_rgba(20,52,77,0.35)]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius)] bg-primary/10 text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="text-lg font-bold tracking-tight">{l(item.name)}</h3>
              <p className="text-sm leading-relaxed text-muted">{l(item.description)}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
