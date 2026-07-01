"use client";

import { useMemo, useState } from "react";
import { Users, Maximize, BedDouble } from "lucide-react";
import { Section, SectionHeading, Reveal, Media, Button, cn, formatPrice, staggerItem } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { content } from "@/content/site-content";
import { useI18n } from "@/lib/i18n";

/** Rooms — the Room Explorer: filter by category, browse cards, book. */
export function Rooms() {
  const { l, t } = useI18n();
  const rooms = content.rooms;
  const symbol = config.currency.symbol;
  const [active, setActive] = useState("all");

  // Unique categories (stable key + localized label) for the filter tabs.
  const categories = useMemo(() => {
    const seen = new Map<string, string>();
    rooms.rooms.forEach((r) => {
      if (!seen.has(r.categoryKey)) seen.set(r.categoryKey, l(r.category));
    });
    return [...seen.entries()].map(([key, label]) => ({ key, label }));
  }, [rooms.rooms, l]);

  const visible = rooms.rooms.filter((r) => active === "all" || r.categoryKey === active);

  return (
    <Section id="rooms">
      <SectionHeading eyebrow={l(rooms.eyebrow)} title={l(rooms.title)} intro={rooms.intro ? l(rooms.intro) : undefined} />

      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {[{ key: "all", label: t("allRooms") }, ...categories].map((c) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setActive(c.key)}
            aria-pressed={active === c.key}
            className={cn(
              "rounded-[var(--radius)] px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors",
              active === c.key ? "bg-primary text-on-primary" : "border border-border text-muted hover:text-foreground"
            )}
          >
            {c.label}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((room, i) => (
          <Reveal as="article" key={l(room.name)} delay={(i % 3) * 0.06} variants={staggerItem}
            className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
            <Media src={room.image} alt={l(room.name)} gradient={room.gradient} className="aspect-[4/3]"
              imgClassName="transition-transform duration-700 group-hover:scale-105" />
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-primary">{l(room.category)}</p>
                <h3 className="mt-1 font-display text-2xl">{l(room.name)}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{l(room.description)}</p>

              <ul className="flex flex-wrap gap-4 text-xs text-muted">
                <li className="inline-flex items-center gap-1.5"><Maximize className="h-4 w-4 text-primary" />{room.sizeSqm} {t("sizeSqm")}</li>
                <li className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" />{room.capacity}</li>
                <li className="inline-flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-primary" />{l(room.bed)}</li>
              </ul>

              <ul className="flex flex-wrap gap-1.5">
                {room.amenities.map((a) => (
                  <li key={l(a)} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted">{l(a)}</li>
                ))}
              </ul>

              <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-4">
                <p className="text-sm text-muted">
                  {t("from")}{" "}
                  <span className="font-display text-2xl text-foreground">{formatPrice(room.pricePerNight, symbol)}</span>
                  <span className="text-xs"> / {t("night")}</span>
                </p>
                <Button href="#booking" size="sm">{t("bookNow")}</Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
