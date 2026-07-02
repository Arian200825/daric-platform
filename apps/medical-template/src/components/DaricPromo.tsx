import { CTABanner } from "@daric/ui";
import { config } from "@/config/medical.config";

/**
 * DaricPromo — turns this demo into a Daric lead-gen asset. Owner-facing CTA
 * (for clinic owners, not patients) routing to the Daric agency contact page.
 */
export function DaricPromo() {
  return (
    <div className="border-t border-border">
      <CTABanner
        title="Get a custom clinic website"
        description="Like what you see? This is a Daric template. We design and build bespoke, conversion-focused websites for dental and medical practices — yours could be next."
        primary={{ label: "Get a Custom Clinic Website", href: config.daric.contactUrl }}
        secondary={{ label: "Request a Site Like This", href: config.daric.contactUrl }}
      />
    </div>
  );
}
