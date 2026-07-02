"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import { Section, Eyebrow, Reveal, Button, FormField, Input, Select } from "@daric/ui";
import { config } from "@/config/medical.config";
import { useI18n } from "@/lib/i18n";
import { timeSlots } from "@/lib/appointment";

const PROVIDER_NAMES: Record<string, string> = {
  nexhealth: "NexHealth", zocdoc: "Zocdoc", link: "our booking partner",
};

/** Internal appointment request form — POSTs to config.appointment.endpoint, or demos. */
function BookingForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [range, setRange] = useState({ min: "", max: "" });

  useEffect(() => {
    const today = new Date();
    const max = new Date();
    max.setDate(today.getDate() + config.appointment.advanceDays);
    const iso = (d: Date) => d.toISOString().split("T")[0];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRange({ min: iso(today), max: iso(max) });
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    if (config.appointment.endpoint) {
      try {
        await fetch(config.appointment.endpoint, {
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
      <div className="flex flex-col items-center gap-4 rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" strokeWidth={1.5} />
        <h3 className="text-2xl font-bold">{t("booking.successTitle")}</h3>
        <p className="max-w-xs text-sm text-muted">{t("booking.successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={t("form.name")} htmlFor="b-name" required>
          <Input id="b-name" name="name" required />
        </FormField>
        <FormField label={t("form.phone")} htmlFor="b-phone" required>
          <Input id="b-phone" name="phone" type="tel" required />
        </FormField>
      </div>
      <FormField label={t("form.email")} htmlFor="b-email" required>
        <Input id="b-email" name="email" type="email" required />
      </FormField>
      <FormField label={t("form.reason")} htmlFor="b-reason" required>
        <Select id="b-reason" name="reason" defaultValue={config.appointment.reasons[0]} required>
          {config.appointment.reasons.map((r) => <option key={r} value={r}>{r}</option>)}
        </Select>
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label={t("form.date")} htmlFor="b-date" required>
          <Input id="b-date" name="date" type="date" required min={range.min} max={range.max} />
        </FormField>
        <FormField label={t("form.time")} htmlFor="b-time" required>
          <Select id="b-time" name="time" defaultValue="" required>
            <option value="" disabled>—</option>
            {timeSlots().map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
        </FormField>
      </div>
      <label className="flex items-center gap-2.5 text-sm text-muted">
        <input type="checkbox" name="newPatient" className="h-4 w-4 rounded border-input accent-[var(--color-primary)]" />
        {t("form.newPatient")}
      </label>
      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" />{t("form.submitting")}</>) : t("form.submit")}
      </Button>
    </form>
  );
}

/** Booking — internal form or external provider CTA, based on config. */
export function Booking() {
  const { l, t } = useI18n();
  const { provider, url } = config.appointment;
  const isInternal = provider === "internal";

  return (
    <Section id="booking" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>{t("bookAppointment")}</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready when you are</h2>
          <p className="text-pretty leading-relaxed text-muted">{l(config.brand.description)}</p>
          <ul className="mt-2 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted">
            <li>· Same-day and next-day appointments</li>
            <li>· Friendly reminders by text and email</li>
            <li>· New patients always welcome</li>
          </ul>
          {config.contact.emergencyPhone && (
            <a href={`tel:${config.contact.emergencyPhone.replace(/[^+\d]/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <Phone className="h-4 w-4" /> {t("emergency")} {config.contact.emergencyPhone}
            </a>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          {isInternal ? (
            <BookingForm />
          ) : (
            <div className="flex flex-col items-center gap-5 rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background p-10 text-center">
              <p className="text-muted">Appointments are booked through {PROVIDER_NAMES[provider] ?? "our booking partner"}.</p>
              <Button href={url || "#"} size="lg">{t("bookAppointment")}</Button>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
