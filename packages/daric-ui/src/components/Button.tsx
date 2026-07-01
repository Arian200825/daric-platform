import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-on-primary hover:brightness-110",
  outline:
    "border border-primary/50 text-foreground hover:border-primary hover:bg-primary/10",
  ghost: "text-foreground hover:text-primary",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-[15px]",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** When set, renders an anchor (handles in-page anchors + external links). */
  href?: string;
  children: ReactNode;
}

/** Button — the shared CTA primitive. Anchor when `href` is set, else button. */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
