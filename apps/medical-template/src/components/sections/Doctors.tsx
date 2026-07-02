"use client";

import { Section, SectionHeading, Reveal, Media, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Doctors — friendly profile cards (photo, name, role, credentials, bio). */
export function Doctors() {
  const { l } = useI18n();
  const doctors = content.doctors;

  return (
    <Section id="doctors" className="bg-surface">
      <SectionHeading eyebrow={l(doctors.eyebrow)} title={l(doctors.title)} intro={doctors.intro ? l(doctors.intro) : undefined} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {doctors.doctors.map((doc, i) => (
          <Reveal as="article" key={doc.name} delay={i * 0.08} variants={staggerItem}
            className="flex flex-col overflow-hidden rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background">
            <Media src={doc.image} alt={doc.name} gradient={doc.gradient} className="aspect-[4/3]" />
            <div className="flex flex-1 flex-col gap-2 p-6">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-xl font-bold tracking-tight">{doc.name}</h3>
                {doc.credentials && <span className="text-xs font-medium text-muted">{doc.credentials}</span>}
              </div>
              <p className="text-sm font-semibold text-primary">{l(doc.role)}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{l(doc.bio)}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
