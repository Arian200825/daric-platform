"use client";

import { Section, SectionHeading, Reveal, Media, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Gallery — before & after pairs (real-results proof, builds confidence). */
export function Gallery() {
  const { l, t } = useI18n();
  const gallery = content.gallery;

  return (
    <Section id="gallery" className="bg-surface">
      <SectionHeading eyebrow={l(gallery.eyebrow)} title={l(gallery.title)} intro={gallery.intro ? l(gallery.intro) : undefined} />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {gallery.pairs.map((pair, i) => (
          <Reveal as="figure" key={l(pair.label)} delay={i * 0.08} variants={staggerItem}
            className="overflow-hidden rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background">
            <div className="grid grid-cols-2">
              <div className="relative">
                <Media src={pair.beforeImage} alt={`${l(pair.label)} — ${t("before")}`} gradient={pair.beforeGradient} className="aspect-square" />
                <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted backdrop-blur">
                  {t("before")}
                </span>
              </div>
              <div className="relative border-l border-border">
                <Media src={pair.afterImage} alt={`${l(pair.label)} — ${t("after")}`} gradient={pair.afterGradient} className="aspect-square" />
                <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-on-primary">
                  {t("after")}
                </span>
              </div>
            </div>
            <figcaption className="p-5 text-center text-sm font-semibold">{l(pair.label)}</figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
