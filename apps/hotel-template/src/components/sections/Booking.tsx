"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Section, Eyebrow, Reveal, Button, FormField, Input, Select } from "@daric/ui";
import { config } from "@/config/hotel.config";
import { useI18n } from "@/lib/i18n";
import { guestOptions } from "@/lib/booking";

const PROVIDER_NAMES: Record<string, string> = {
  synxis: "SynXis", cloudbeds: "Cloudbeds", link: "our booking partner",
};

/** Internal booking enquiry form — POSTs to config.booking.endpoint, or demos. */
function BookingForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [range, setRange] = useState({ min: "", max: "" });

  useEffect(() => {
    const today = new Date();
    const max = new Date();
    max.setDate(today.getDate() + config.booking.advanceDays);
    const iso = (d: Date) => d.toISOString().split("T")[0];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRange({ min: iso(today), max: iso(max) });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    if (config.booking.endpoint) {
      try {
        await fetch(config.booking.endpoint, {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data),
        });
      } catch { /* fall through; wire real error handling per client */ }
    } else {
      await new Promise((r) => setTimeout(r, 600));
    }
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[var(--radius)] border border-border bg-background p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
        <h3 className="text-2xl">{t("booking.successTitle")}</h3>
        <p className="max-w-xs text-sm text-muted">{t("booking.successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-[var(--radius)] border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={t("checkIn")} htmlFor="b-in" required>
          <Input id="b-in" name="checkIn" type="date" required min={range.min} max={range.max} />
        </FormField>
        <FormField label={t("checkOut")} htmlFor="b-out" required>
          <Input id="b-out" name="checkOut" type="date" required min={range.min} max={range.max} />
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={t("guests")} htmlFor="b-guests" required>
          <Select id="b-guests" name="guests" defaultValue="2" required>
            {guestOptions().map((n) => <option key={n} value={n}>{n}</option>)}
          </Select>
        </FormField>
        <FormField label={t("roomType")} htmlFor="b-room" required>
          <Select id="b-room" name="roomType" defaultValue={config.booking.roomTypes[0]} required>
            {config.booking.roomTypes.map((r) => <option key={r} value={r}>{r}</option>)}
          </Select>
        </FormField>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={t("form.name")} htmlFor="b-name" required>
          <Input id="b-name" name="name" required />
        </FormField>
        <FormField label={t("form.email")} htmlFor="b-email" required>
          <Input id="b-email" name="email" type="email" required />
        </FormField>
      </div>
      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" />{t("form.submitting")}</>) : t("form.submit")}
      </Button>
    </form>
  );
}

/** Booking — internal form or external provider CTA, based on config. */
export function Booking() {
  const { l, t } = useI18n();
  const { provider, url } = config.booking;
  const isInternal = provider === "internal";

  return (
    <Section id="booking" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{t("bookStay")}</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">{t("checkAvailability")}</h2>
          <p className="text-pretty leading-relaxed text-muted">{l(config.brand.description)}</p>
          <ul className="mt-2 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted">
            <li>· Best rate guaranteed when you book direct</li>
            <li>· Complimentary room upgrade, subject to availability</li>
            <li>· Flexible cancellation on selected rates</li>
          </ul>
          <a href={`tel:${config.contact.phone.replace(/[^+\d]/g, "")}`} className="text-sm text-primary hover:underline">
            {config.contact.phone}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {isInternal ? (
            <BookingForm />
          ) : (
            <div className="flex flex-col items-center gap-5 rounded-[var(--radius)] border border-border bg-background p-10 text-center">
              <p className="text-muted">Reservations are handled through {PROVIDER_NAMES[provider] ?? "our booking partner"}.</p>
              <Button href={url || "#"} size="lg">{t("bookNow")}</Button>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
