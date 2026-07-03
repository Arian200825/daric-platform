/**
 * Reusable legal-document builder for Daric templates.
 *
 * Generates plain-language Privacy Policy + Terms of Service from a few facts.
 * These are sensible starting templates for a small business site — NOT legal
 * advice. Each client should have them reviewed before launch.
 */

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: "privacy" | "terms";
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

export interface LegalInput {
  /** Public-facing business name. */
  brand: string;
  /** Contact email for privacy / legal requests. */
  email: string;
  /** e.g. "Lisbon, Portugal" — where the business operates. */
  location?: string;
  /** Effective date, human-readable. */
  updated?: string;
}

export function buildLegalDocs({
  brand,
  email,
  location = "our operating jurisdiction",
  updated = "3 July 2026",
}: LegalInput): { privacy: LegalDoc; terms: LegalDoc } {
  const privacy: LegalDoc = {
    slug: "privacy",
    title: "Privacy Policy",
    updated,
    intro: `This policy explains what information ${brand} collects through this website, how it is used, and the choices you have. We keep data collection to the minimum needed to respond to you and run the site.`,
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Details you submit through our contact or reservation/booking forms — such as your name, email, phone number, and the message or request you send.",
          "Basic technical and usage data (for example pages viewed and general location) collected automatically to keep the site secure and understand how it is used.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "To respond to your enquiry, confirm a booking or reservation, and provide the service you requested.",
          "To improve the website and our services, and — only where permitted — to send you information you have asked for. We do not sell your personal information.",
        ],
      },
      {
        heading: "Cookies & analytics",
        body: [
          "The site may use essential cookies to function and, if enabled, privacy-respecting analytics to measure traffic in aggregate. You can control cookies through your browser settings.",
        ],
      },
      {
        heading: "Data sharing & retention",
        body: [
          "We share information only with the service providers that help us operate this site (such as hosting, email, and form processing), and only as needed to deliver the service.",
          "We keep personal information only as long as necessary for the purpose it was collected or as required by law.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          `You may request access to, correction of, or deletion of your personal information. Contact us at ${email} and we will respond within a reasonable time.`,
        ],
      },
      {
        heading: "Contact",
        body: [
          `${brand} operates from ${location}. For any privacy question or request, email ${email}.`,
        ],
      },
    ],
  };

  const terms: LegalDoc = {
    slug: "terms",
    title: "Terms of Service",
    updated,
    intro: `These terms govern your use of the ${brand} website. By using the site you agree to them. Please read them carefully.`,
    sections: [
      {
        heading: "Use of the site",
        body: [
          "You may use this website for lawful purposes only. You agree not to misuse it, attempt to disrupt it, or access it in any way that breaks applicable law.",
        ],
      },
      {
        heading: "Bookings, reservations & enquiries",
        body: [
          "Submitting a form is a request, not a confirmed contract, until we confirm it with you directly. We make reasonable efforts to keep prices, availability, and details accurate but do not guarantee they are error-free.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          `The content, branding, and design of this site belong to ${brand} or its licensors and may not be copied or reused without permission.`,
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "The site is provided “as is”. To the fullest extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of the site.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these terms? Email ${email}.`],
      },
    ],
  };

  return { privacy, terms };
}
