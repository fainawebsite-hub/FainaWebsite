import type { Locale } from "./site";

export const GOOGLE_REVIEW_URL = "https://share.google/HjS6QZ3ojMtoBEwia";

export type GuestReview = {
  name: string;
  source: "Google" | "Tripadvisor";
  rating: 5;
  quote: string;
  context?: string;
};

// Apenas avaliações publicadas e confirmadas. Acrescentar futuras avaliações aqui.
export const guestReviews: readonly GuestReview[] = [
  {
    name: "Alice Lima",
    source: "Google",
    rating: 5,
    quote: "O arroz de marisco estava simplesmente delicioso, com os sabores bem equilibrados e ingredientes frescos. O atendimento foi excelente.",
  },
  {
    name: "Tiago Domingos",
    source: "Google",
    rating: 5,
    quote: "Melhor polvo que já comi. Caldeirada de enguias espetacular.",
    context: "Jantar em família, ambiente acolhedor e staff bastante atencioso.",
  },
  {
    name: "Daniel Ferreira",
    source: "Google",
    rating: 5,
    quote: "Food was delicious! Champagne sangria for the win. Tiago provided excellent service. Would definitely dine here again.",
  },
  {
    name: "San Mac",
    source: "Google",
    rating: 5,
    quote: "We tried the seafood here and came back the next day for more. The service is excellent and the food is delicious. They serve fresh fish caught the very same day.",
  },
  {
    name: "Teresa Cipriano",
    source: "Google",
    rating: 5,
    quote: "Great Portuguese food with a modern twist. Fresh food with great house wine. Friendly service.",
  },
  {
    name: "José Paulo",
    source: "Tripadvisor",
    rating: 5,
    quote: "Um lugar a regressar sempre que se procura peixe fresco.",
  },
  {
    name: "Tiago",
    source: "Tripadvisor",
    rating: 5,
    quote: "Uma experiência a repetir.",
  },
  {
    name: "Diana S.",
    source: "Tripadvisor",
    rating: 5,
    quote: "Gostámos imenso. Passámos um momento muito agradável em família.",
  },
  {
    name: "Gabriel",
    source: "Tripadvisor",
    rating: 5,
    quote: "Um dos melhores restaurantes da Praia da Vagueira, onde a tradição da região chega à mesa, acompanhada de qualidade e simpatia.",
  },
];

export const reviewsCopy: Record<Locale, {
  eyebrow: string;
  title: string;
  intro: string;
  place: string;
  originalLanguage: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  googleCta: string;
  reservationCta: string;
}> = {
  pt: {
    eyebrow: "Quem passa pela nossa mesa",
    title: "O que dizem de nós",
    intro: "À mesa da Faina, são os nossos clientes que contam melhor a experiência.",
    place: "Faina Restaurante · Praia da Vagueira, Vagos, Aveiro",
    originalLanguage: "",
    ctaEyebrow: "Gostou da sua visita?",
    ctaTitle: "Partilhe a sua experiência no Google.",
    ctaText: "A sua opinião ajuda outras pessoas a descobrir a Faina.",
    googleCta: "Deixar uma review",
    reservationCta: "Reservar mesa",
  },
  en: {
    eyebrow: "From our guests",
    title: "What our guests say",
    intro: "At Faina, our guests tell the experience best.",
    place: "Faina Restaurante · Praia da Vagueira, Vagos, Aveiro",
    originalLanguage: "Original in Portuguese",
    ctaEyebrow: "Enjoyed your visit?",
    ctaTitle: "Share your experience on Google.",
    ctaText: "Your feedback helps other guests discover Faina.",
    googleCta: "Leave a review",
    reservationCta: "Book a table",
  },
};
