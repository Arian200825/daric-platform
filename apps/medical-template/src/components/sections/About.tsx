"use client";

import { Section, Eyebrow, Reveal, Media } from "@daric/ui";
import { content } from "@/content/site-content";
import { config } from "@/config/medical.config";
import { useI18n } from "@/lib/i18n";

/** About — practice narrative with reassuring stats. */
export function About() {
  const { l } = useI18n();
  const about = content.about;

  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Media
            src={about.image}
            alt={l(about.title)}
            gradient={["#dbeafe", "#f0fdfa"]}
            className="aspect-[4/3] rounded-[calc(var(--radius)+0.5rem)]"
          />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-5">
          <Eyebrow>{l(about.eyebrow)}</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{l(about.title)}</h2>
          {config.brand.since && (
            <p className="text-sm font-medium text-primary">{config.brand.since}</p>
          )}
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted">{l(p)}</p>
          ))}

          <dl className="mt-3 grid grid-cols-2 gap-5 border-t border-border pt-8 sm:grid-cols-4">
            {about.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <dd className="text-3xl font-bold text-primary">{s.value}</dd>
                <dt className="text-xs text-muted">{l(s.label)}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
