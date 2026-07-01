"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/cn";
import { Button } from "./Button";

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Navbar — transparent over the hero, solid on scroll, with an accessible
 * mobile menu. Presentational: pass a brand, resolved nav items, an optional
 * CTA, and an optional right-hand slot (e.g. a language switcher).
 */
export function Navbar({
  brand,
  items,
  cta,
  rightSlot,
  labels = { open: "Open menu", close: "Close menu" },
}: {
  brand: ReactNode;
  items: NavItem[];
  cta?: NavItem;
  rightSlot?: ReactNode;
  labels?: { open: string; close: string };
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a href="#hero" className="font-display text-2xl tracking-tight text-foreground">
          {brand}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {rightSlot && <span className="hidden sm:flex">{rightSlot}</span>}
          {cta && (
            <Button href={cta.href} size="sm" className="hidden sm:inline-flex">
              {cta.label}
            </Button>
          )}
          <button
            type="button"
            aria-label={open ? labels.close : labels.open}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm uppercase tracking-[0.15em] text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between pt-3">
                {rightSlot}
                {cta && (
                  <Button href={cta.href} size="sm" onClick={() => setOpen(false)}>
                    {cta.label}
                  </Button>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
