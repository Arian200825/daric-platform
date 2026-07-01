"use client";

import { Section, SectionHeading, Accordion, type AccordionItem } from "@daric/ui";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Faq — wraps the shared Accordion with resolved Q&A. */
export function Faq() {
  const { l } = useI18n();
  const faq = content.faq;

  const items: AccordionItem[] = faq.items.map((i) => ({
    question: l(i.question),
    answer: l(i.answer),
  }));

  return (
    <Section id="faq" className="bg-surface">
      <SectionHeading eyebrow={l(faq.eyebrow)} title={l(faq.title)} />
      <div className="mt-12">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
