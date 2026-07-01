import { CTABanner } from "@daric/ui";
import { config } from "@/config/hotel.config";

/**
 * DaricPromo — the sales CTA that turns this demo into a lead-gen asset.
 * Shown to hotel owners viewing the template; routes them to the Daric agency
 * contact page. (Copy is intentionally owner-facing, not guest-facing.)
 */
export function DaricPromo() {
  return (
    <div className="border-t border-border">
      <CTABanner
        title="Get a custom hotel website"
        description="Like what you see? This is a Daric template. We design and build bespoke, conversion-focused websites for luxury hotels and resorts — yours could be next."
        primary={{ label: "Get a Custom Hotel Website", href: config.daric.contactUrl }}
        secondary={{ label: "Request a Site Like This", href: config.daric.contactUrl }}
      />
    </div>
  );
}
