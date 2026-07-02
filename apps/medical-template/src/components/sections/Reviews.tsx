"use client";

import { Star, Quote } from "lucide-react";
import { Section, SectionHeading, Reveal, staggerItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Reviews — patient testimonials with ratings. */
export function Reviews() {
  const { l } = useI18n();
  const reviews = content.reviews;

  return (
    <Section id="reviews">
      <SectionHeading eyebrow={l(reviews.eyebrow)} title={l(reviews.title)} />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.items.map((r, i) => (
          <Reveal as="article" key={i} delay={i * 0.08} variants={staggerItem}
            className="flex flex-col gap-4 rounded-[calc(var(--radius)+0.25rem)] border border-border bg-surface p-7">
            <Quote className="h-7 w-7 text-primary/30" strokeWidth={1.5} />
            {r.rating && (
              <div className="flex gap-0.5" aria-label={`${r.rating} out of 5`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" strokeWidth={0} />
                ))}
              </div>
            )}
            <blockquote className="flex-1 leading-relaxed text-foreground">{l(r.quote)}</blockquote>
            <footer className="text-sm">
              <p className="font-semibold">{r.author}</p>
              {r.source && <p className="text-xs text-muted">{r.source}</p>}
            </footer>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
