"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Section, Eyebrow, Reveal, Button, FormField, Input, Textarea } from "@daric/ui";
import { config } from "@/config/medical.config";
import { useI18n } from "@/lib/i18n";

/** Contact — general enquiry form + direct contact details. */
export function Contact() {
  const { t } = useI18n();
  const { contact } = config;
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 600)); // demo; wire per client
    setStatus("success");
    form.reset();
  }

  return (
    <Section id="contact" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>{t("contact.title")}</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">We&apos;re here to help</h2>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-center gap-3 text-muted">
              <Phone className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`} className="hover:text-foreground">{contact.phone}</a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <Mail className="h-5 w-5 text-primary" strokeWidth={1.75} />
              <a href={`mailto:${contact.email}`} className="hover:text-foreground">{contact.email}</a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <MapPin className="h-5 w-5 text-primary" strokeWidth={1.75} />
              {contact.address.street}, {contact.address.city}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[calc(var(--radius)+0.25rem)] border border-border bg-background p-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold">{t("contact.successTitle")}</h3>
              <p className="max-w-xs text-sm text-muted">{t("contact.successBody")}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label={t("form.name")} htmlFor="c-name" required>
                  <Input id="c-name" name="name" required />
                </FormField>
                <FormField label={t("form.email")} htmlFor="c-email" required>
                  <Input id="c-email" name="email" type="email" required />
                </FormField>
              </div>
              <FormField label={t("form.message")} htmlFor="c-message" required>
                <Textarea id="c-message" name="message" rows={5} required />
              </FormField>
              <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2 self-start">
                {status === "submitting" ? (<><Loader2 className="h-4 w-4 animate-spin" />{t("form.submitting")}</>) : t("form.send")}
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
