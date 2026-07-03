import type { Metadata } from "next";
import { LegalDocument } from "@daric/ui";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: legal.terms.intro,
};

export default function TermsPage() {
  return <LegalDocument doc={legal.terms} />;
}
