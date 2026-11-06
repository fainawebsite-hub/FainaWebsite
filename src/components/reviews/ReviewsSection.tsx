import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { business } from "@/content/business";
import { GOOGLE_REVIEW_URL, guestReviews, reviewsCopy } from "@/content/reviews";
import type { Locale } from "@/content/site";
import { ReviewRow } from "./ReviewRow";

export function ReviewsSection({ locale }: { locale: Locale }) {
  const t = reviewsCopy[locale];
  const googleReviews = guestReviews.filter((review) => review.source === "Google");
  const tripadvisorReviews = guestReviews.filter((review) => review.source === "Tripadvisor");

  return <section id="avaliacoes" className="reviews-section" aria-labelledby="reviews-title">
    <div className="section-shell">
      <Reveal className="reviews-section__intro"><p className="eyebrow">{t.eyebrow}</p><h2 id="reviews-title">{t.title}</h2><p className="lead">{t.intro}</p><p className="reviews-section__place">{t.place}</p></Reveal>
      <Reveal delay={0.08} className="reviews-section__rows"><ReviewRow label="Google Reviews" reviews={googleReviews} originalLanguage={t.originalLanguage} /><ReviewRow label="Tripadvisor" reviews={tripadvisorReviews} originalLanguage={t.originalLanguage} reverse /></Reveal>
      <Reveal delay={0.16} className="reviews-cta"><div><p className="eyebrow eyebrow--gold">{t.ctaEyebrow}</p><h3>{t.ctaTitle}</h3><p>{t.ctaText}</p></div><div className="reviews-cta__actions"><a className="button button--gold" href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">{t.googleCta}<ArrowUpRight /></a><a className="text-link text-link--light" href={business.reservationUrl} target="_blank" rel="noreferrer">{t.reservationCta}<ArrowUpRight /></a></div></Reveal>
    </div>
  </section>;
}
