import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

interface Action {
  label: string;
  href: string;
}

/**
 * CTABanner — reusable closing call-to-action. Presentational: pass resolved
 * copy + actions. Used at the foot of pages to drive conversion.
 */
export function CTABanner({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description?: string;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-surface px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted sm:text-lg">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} size="lg" variant="outline">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
