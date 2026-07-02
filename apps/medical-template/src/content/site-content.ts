import type { SiteContent } from "@/config/types";

/**
 * SITE CONTENT — all section copy in one place. Replace for a real client; no
 * component changes needed. Any field accepts a plain string OR a { en, es, … }
 * map (a few are localized below to demonstrate the pattern).
 */
export const content: SiteContent = {
  hero: {
    eyebrow: { en: "Dental & medical care · San Francisco", es: "Atención dental y médica · San Francisco" },
    headline: { en: "Healthier smiles, calmer visits", es: "Sonrisas más sanas, visitas más tranquilas" },
    subheadline: {
      en: "Modern, gentle care for the whole family — with same-day appointments and a team that puts you first.",
      es: "Atención moderna y delicada para toda la familia — con citas el mismo día y un equipo que le pone primero.",
    },
    highlights: ["Same-day appointments", "Most insurance accepted", "Gentle, anxiety-free care"],
    backgroundImage: "/images/hero.jpg",
  },

  about: {
    eyebrow: "About Brightwell",
    title: { en: "Care that feels different", es: "Una atención diferente" },
    paragraphs: [
      "For over fifteen years, Brightwell has cared for families across the city with one simple belief: healthcare should feel calm, clear, and genuinely kind.",
      "From routine cleanings to advanced treatments, our team combines modern technology with a gentle, unhurried approach — so every visit leaves you confident and cared for.",
    ],
    image: "/images/about.jpg",
    stats: [
      { value: "15+", label: "Years of care" },
      { value: "12k", label: "Happy patients" },
      { value: "4.9★", label: "Average rating" },
      { value: "6", label: "Specialists" },
    ],
  },

  doctors: {
    eyebrow: "Our team",
    title: { en: "Meet the doctors", es: "Conozca a los doctores" },
    intro: "Experienced, friendly, and here for you — meet the people behind your care.",
    doctors: [
      {
        name: "Dr. Sarah Chen",
        role: { en: "Lead Dentist & Founder", es: "Dentista principal y fundadora" },
        credentials: "DDS, FICOI",
        bio: "Cosmetic and restorative specialist with a gentle chairside manner and 15 years of experience.",
        gradient: ["#dbeafe", "#eff6ff"],
      },
      {
        name: "Dr. James Okafor",
        role: { en: "Orthodontist", es: "Ortodoncista" },
        credentials: "DMD, MS",
        bio: "Aligners and braces for all ages, with a focus on comfortable, predictable results.",
        gradient: ["#ccfbf1", "#f0fdfa"],
      },
      {
        name: "Dr. Priya Nair",
        role: { en: "General Physician", es: "Médica general" },
        credentials: "MD",
        bio: "Family medicine and preventive health screenings, delivered with warmth and clarity.",
        gradient: ["#e0e7ff", "#eef2ff"],
      },
    ],
  },

  treatments: {
    eyebrow: "Treatments",
    title: { en: "Everything under one roof", es: "Todo bajo un mismo techo" },
    intro: "Comprehensive dental and medical services for every stage of life.",
    items: [
      { icon: "smile", name: "General Dentistry", description: "Check-ups, cleanings, fillings, and preventive care to keep smiles healthy." },
      { icon: "sparkles", name: "Cosmetic Dentistry", description: "Whitening, veneers, and smile makeovers tailored to you." },
      { icon: "alignment", name: "Orthodontics", description: "Clear aligners and braces for children, teens, and adults." },
      { icon: "implant", name: "Implants & Restorative", description: "Natural-looking implants, crowns, and bridges that last." },
      { icon: "shield", name: "Preventive & Family Care", description: "Gentle care for every age, from first visits to check-ups." },
      { icon: "stethoscope", name: "Medical & Screenings", description: "General medical visits and preventive health screenings." },
    ],
  },

  gallery: {
    eyebrow: "Real results",
    title: { en: "Before & after", es: "Antes y después" },
    intro: "A few of the smiles we've helped transform — real patients, real care.",
    pairs: [
      { label: "Teeth whitening", beforeGradient: ["#cbd5e1", "#e2e8f0"], afterGradient: ["#dbeafe", "#eff6ff"] },
      { label: "Porcelain veneers", beforeGradient: ["#cbd5e1", "#e2e8f0"], afterGradient: ["#ccfbf1", "#f0fdfa"] },
      { label: "Clear-aligner alignment", beforeGradient: ["#cbd5e1", "#e2e8f0"], afterGradient: ["#e0e7ff", "#eef2ff"] },
    ],
  },

  reviews: {
    eyebrow: "Patient stories",
    title: { en: "Trusted by thousands", es: "La confianza de miles" },
    items: [
      {
        quote: "I used to dread the dentist. The team at Brightwell completely changed that — calm, kind, and painless from start to finish.",
        author: "Maria G.",
        source: "Google review",
        rating: 5,
      },
      {
        quote: "They fit my daughter in the same day for an emergency and treated us like family. We won't go anywhere else.",
        author: "David R.",
        source: "Google review",
        rating: 5,
      },
      {
        quote: "Modern, spotless, and genuinely caring. My whitening results are incredible and the whole process was effortless.",
        author: "Aisha K.",
        source: "Google review",
        rating: 5,
      },
    ],
  },

  insurance: {
    eyebrow: "Insurance & payment",
    title: { en: "Most plans accepted", es: "Aceptamos la mayoría de los seguros" },
    intro: "We work with major providers and offer flexible payment plans — so quality care stays affordable.",
    providers: [
      "Delta Dental", "Cigna", "Aetna", "MetLife", "Guardian", "United Healthcare", "Blue Cross", "Humana",
    ],
  },

  faq: {
    eyebrow: "Good to know",
    title: "Frequently asked questions",
    items: [
      {
        question: "Are you accepting new patients?",
        answer: "Yes — we welcome new patients of all ages and often have same-day and next-day appointments available.",
      },
      {
        question: "Do you take my insurance?",
        answer: "We accept most major dental and medical plans and will happily verify your coverage before your visit. Flexible payment plans are also available.",
      },
      {
        question: "I'm nervous about visiting. Can you help?",
        answer: "Absolutely. Gentle, anxiety-free care is at the heart of what we do — from a calm environment to sedation options for those who need them.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer: "Just a photo ID, your insurance card if you have one, and a list of any medications. We'll take care of the rest.",
      },
      {
        question: "Do you handle dental emergencies?",
        answer: "Yes — we reserve time daily for urgent care. Call our emergency line and we'll see you as quickly as possible.",
      },
    ],
  },
};
