import type { Metadata } from "next";
import { LegalDocument } from "@daric/ui";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: legal.privacy.intro,
};

export default function PrivacyPage() {
  return <LegalDocument doc={legal.privacy} />;
}
