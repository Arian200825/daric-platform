import type { LegalDoc } from "../lib/legal";
import { Container } from "./Container";

/**
 * LegalDocument — renders a Privacy / Terms document. Purely presentational;
 * inherits the host template's theme tokens so it matches each brand.
 */
export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Legal</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">{doc.title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated {doc.updated}</p>
        <p className="mt-6 leading-relaxed text-muted">{doc.intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
