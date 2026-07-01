import type { ReactNode } from "react";
import { cn } from "../lib/cn";

/** Card — base surface. `interactive` adds a hover lift + accent border. */
export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius)] border border-border bg-surface p-6 sm:p-8",
        interactive &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
        className
      )}
    >
      {children}
    </div>
  );
}
