import type { SiteContent } from "@/config/types";

/**
 * SITE CONTENT — all section copy in one place. Replace for a real client; no
 * component changes needed. Any field accepts a plain string OR a { en, fr, … }
 * map (a few are localized below to demonstrate the pattern).
 */
export const content: SiteContent = {
  hero: {
    eyebrow: { en: "Five-star resort & spa · Miami Beach", fr: "Resort & spa cinq étoiles · Miami Beach" },
    headline: { en: "Where the sea meets stillness", fr: "Là où la mer rencontre le calme" },
    subheadline: {
      en: "Sculpted suites, restorative wellness, and effortless service on a private stretch of shoreline.",
      fr: "Des suites sculptées, un bien-être réparateur et un service sans effort sur une plage privée.",
    },
    backgroundImage: "/images/hero.jpg",
  },

  rooms: {
    eyebrow: "Accommodation",
    title: { en: "Rooms & suites", fr: "Chambres & suites" },
    intro: {
      en: "Every room opens to light, air, and the sea — designed as a private retreat.",
      fr: "Chaque chambre s'ouvre sur la lumière, l'air et la mer — pensée comme une retraite privée.",
    },
    rooms: [
      {
        name: "Deluxe Garden Room",
        category: "Rooms",
        categoryKey: "rooms",
        description: "A serene retreat framing the resort gardens, with a private terrace.",
        pricePerNight: 420,
        capacity: 2,
        sizeSqm: 42,
        bed: "King or Twin",
        amenities: ["Private terrace", "Rain shower", "Nespresso", "55\" 4K TV"],
        gradient: ["#2b3040", "#12141a"],
      },
      {
        name: "Deluxe Ocean Room",
        category: "Rooms",
        categoryKey: "rooms",
        description: "Full sea views, floor-to-ceiling glass, and a soaking tub for two.",
        pricePerNight: 560,
        capacity: 2,
        sizeSqm: 48,
        bed: "King",
        amenities: ["Ocean view", "Soaking tub", "Balcony", "Minibar"],
        gradient: ["#33415a", "#12141a"],
      },
      {
        name: "Junior Suite",
        category: "Suites",
        categoryKey: "suites",
        description: "A separate lounge, wraparound terrace, and sunrise over the water.",
        pricePerNight: 820,
        capacity: 3,
        sizeSqm: 68,
        bed: "King + Sofa",
        amenities: ["Separate lounge", "Wraparound terrace", "Espresso bar", "Butler service"],
        gradient: ["#3a4a63", "#12141a"],
      },
      {
        name: "Family Room",
        category: "Rooms",
        categoryKey: "rooms",
        description: "Generous space for families, with connecting options and garden access.",
        pricePerNight: 640,
        capacity: 4,
        sizeSqm: 58,
        bed: "King + Twins",
        amenities: ["Connecting rooms", "Garden access", "Kids amenities", "Two bathrooms"],
        gradient: ["#2f3a4d", "#12141a"],
      },
    ],
  },

  suites: {
    eyebrow: "Signature suites",
    title: { en: "For the grandest stays", fr: "Pour les séjours les plus prestigieux" },
    intro: "Two flagship suites, each a residence unto itself.",
    suites: [
      {
        name: "Ocean Suite",
        description:
          "A 120 m² sanctuary with panoramic sea views, a private plunge pool, and a marble spa bath.",
        pricePerNight: 1650,
        features: ["120 m²", "Private plunge pool", "Panoramic sea view", "Dedicated butler"],
        gradient: ["#3b4a66", "#12141a"],
      },
      {
        name: "Presidential Suite",
        description:
          "The pinnacle: two bedrooms, a grand terrace, private gym, and around-the-clock service.",
        pricePerNight: 3200,
        features: ["Two bedrooms", "Grand terrace", "Private gym", "24h personal service"],
        gradient: ["#4a3f5e", "#12141a"],
      },
    ],
  },

  dining: {
    eyebrow: "Dining",
    title: { en: "Tastes of the coast", fr: "Saveurs de la côte" },
    intro: "Three destinations, from sunrise to the last glass of the night.",
    venues: [
      {
        name: "Salt & Citrus",
        cuisine: "Mediterranean · Seafood",
        description: "Wood-fired seafood and garden vegetables, served beside the water.",
        hours: "Dinner · 18:00 – 23:00",
        gradient: ["#2e3a44", "#12141a"],
      },
      {
        name: "The Orangery",
        cuisine: "All-day · Breakfast",
        description: "A light-filled room for leisurely breakfasts and afternoon tea.",
        hours: "07:00 – 17:00",
        gradient: ["#3d4230", "#12141a"],
      },
      {
        name: "Horizon Bar",
        cuisine: "Cocktails · Small plates",
        description: "Rooftop cocktails and small plates as the sun sinks into the sea.",
        hours: "16:00 – 01:00",
        gradient: ["#42364a", "#12141a"],
      },
    ],
  },

  spa: {
    eyebrow: "Spa & wellness",
    title: { en: "Restore, unhurried", fr: "Se ressourcer, sans hâte" },
    paragraphs: [
      "Our 1,400 m² spa is a world apart — thermal pools, a hammam, and treatment suites overlooking the sea.",
      "Every journey begins with a consultation and ends, quietly, with you feeling entirely yourself again.",
    ],
    treatments: [
      { name: "Signature Aurelia Ritual", duration: "120 min", price: 340 },
      { name: "Marine Restorative Massage", duration: "90 min", price: 260 },
      { name: "Sea-Salt Body Renewal", duration: "60 min", price: 190 },
      { name: "Couple's Retreat", duration: "120 min", price: 620 },
    ],
    image: "/images/spa.jpg",
  },

  experiences: {
    eyebrow: "Experiences",
    title: { en: "Days worth remembering", fr: "Des journées inoubliables" },
    intro: "Curated by our concierge, on the water and beyond.",
    items: [
      {
        title: "Private Sunset Sail",
        description: "A crewed yacht, chilled Champagne, and the coastline at golden hour.",
        gradient: ["#33445e", "#12141a"],
      },
      {
        title: "Coastal Cellar Tasting",
        description: "A guided journey through our cellar with the head sommelier.",
        gradient: ["#4a3a2e", "#12141a"],
      },
      {
        title: "Sunrise Beach Yoga",
        description: "Begin the day with the tide, led by our resident instructor.",
        gradient: ["#2f4740", "#12141a"],
      },
    ],
  },

  gallery: {
    eyebrow: "The resort",
    title: { en: "A sense of place", fr: "Un lieu à part" },
    images: [
      { alt: "The shoreline at dawn", gradient: ["#33415a", "#0a0b0e"] },
      { alt: "Suite terrace", gradient: ["#4a3f5e", "#12141a"] },
      { alt: "The spa thermal pool", gradient: ["#2e4a4a", "#0a0b0e"] },
      { alt: "Rooftop bar at dusk", gradient: ["#5a4632", "#12141a"] },
      { alt: "Poolside cabanas", gradient: ["#3a4a63", "#0a0b0e"] },
      { alt: "Private dining", gradient: ["#42364a", "#12141a"] },
    ],
  },

  reviews: {
    eyebrow: "Acclaim",
    title: { en: "What guests say", fr: "Ce que disent nos hôtes" },
    items: [
      {
        quote:
          "The most restorative week we've ever spent. Faultless service, and a spa we didn't want to leave.",
        author: "Condé Nast Traveler",
        source: "Reader Review",
        rating: 5,
      },
      {
        quote:
          "From the welcome to the last sunset, Aurelia anticipates everything. Simply the finest stay on the coast.",
        author: "Isabelle & Marc",
        source: "Guest",
        rating: 5,
      },
      {
        quote: "A rare hotel that feels both grand and genuinely warm. We're already planning our return.",
        author: "Travel + Leisure",
        source: "Feature",
        rating: 5,
      },
    ],
  },

  faq: {
    eyebrow: "Good to know",
    title: "Frequently asked",
    items: [
      {
        question: "What are check-in and check-out times?",
        answer: "Check-in is from 15:00 and check-out is by 12:00. Early check-in and late check-out can be arranged subject to availability.",
      },
      {
        question: "Is airport transfer available?",
        answer: "Yes — private chauffeur transfers can be arranged for any arrival. Contact our concierge with your flight details.",
      },
      {
        question: "Are children welcome?",
        answer: "Absolutely. We offer family rooms, kids' amenities, and a supervised children's club during peak seasons.",
      },
      {
        question: "Do you accommodate dietary requirements?",
        answer: "Our kitchens cater to all dietary needs and allergies. Please let us know in advance so we can prepare.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "Flexible rates may be cancelled up to 48 hours before arrival. Specific terms are confirmed with your booking.",
      },
    ],
  },

  awards: {
    eyebrow: "Recognition",
    title: { en: "Honoured worldwide", fr: "Reconnu dans le monde entier" },
    items: [
      { title: "Five-Star Award", org: "Forbes Travel Guide", year: "2025" },
      { title: "Best Resort Spa", org: "World Spa Awards", year: "2024" },
      { title: "Gold List", org: "Condé Nast Traveler", year: "2024" },
      { title: "Top 50 Hotels", org: "Travel + Leisure", year: "2023" },
    ],
  },

  sustainability: {
    eyebrow: "Sustainability",
    title: { en: "Luxury, lightly held", fr: "Un luxe responsable" },
    statement:
      "We believe true luxury respects the place it inhabits. Aurelia is committed to protecting the coastline that makes it possible.",
    commitments: [
      { title: "Powered by renewables", description: "100% of our electricity is sourced from renewable energy." },
      { title: "Ocean-first operations", description: "Single-use plastics eliminated across the resort and reef restoration supported year-round." },
      { title: "Local & seasonal", description: "Our kitchens partner with regional growers and fishers within 100 miles." },
      { title: "Water stewardship", description: "Greywater recycling and low-flow systems cut our freshwater use by 40%." },
    ],
  },
};
