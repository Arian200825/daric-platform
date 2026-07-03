import { buildLegalDocs } from "@daric/ui";
import { config } from "@/config/medical.config";

/** Privacy + Terms generated from config — swap facts in one place. */
export const legal = buildLegalDocs({
  brand: config.brand.name,
  email: config.contact.email,
  location: `${config.contact.address.city}, ${config.contact.address.region}`,
});
