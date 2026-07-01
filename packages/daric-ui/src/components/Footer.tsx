import type { ReactNode } from "react";

export interface FooterSocial {
  label: string;
  href: string;
}

/**
 * Footer — shared shell. The `children` fill the top content grid (templates
 * compose their own columns); the bottom bar shows brand + note + socials.
 */
export function Footer({
  brand,
  note,
  socials = [],
  children,
}: {
  brand: string;
  note?: string;
  socials?: FooterSocial[];
  children?: ReactNode;
}) {
  const year = "2025";
  return (
    <footer className="border-t border-border bg-surface">
      {children && (
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4">
          {children}
        </div>
      )}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <p>
            © {year} {brand}. {note ?? "All rights reserved."}
          </p>
          <div className="flex gap-4 uppercase tracking-[0.15em]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
