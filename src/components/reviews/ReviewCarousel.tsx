"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { GuestReview } from "@/content/reviews";

type ReviewCarouselProps = { reviews: readonly GuestReview[]; originalLanguage: string };

export function ReviewCarousel({ reviews, originalLanguage }: ReviewCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const review = reviews[active];
  const move = (direction: -1 | 1) => setActive((current) => (current + direction + reviews.length) % reviews.length);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced || reviews.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % reviews.length), 7500);
    return () => window.clearInterval(timer);
  }, [paused, reduced, reviews.length]);

  if (!review) return null;
  return <div className="review-feature" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <div className="review-feature__content" key={`${review.source}-${review.name}`} aria-live="polite">
      <p className="review-feature__source">{review.source} review</p>
      <p className="review-feature__mark" aria-hidden="true">”</p>
      <div className="review-feature__rating" aria-label={`${review.rating} em 5 estrelas`}><span aria-hidden="true">★★★★★</span><span className="sr-only">{review.rating} em 5 estrelas</span></div>
      <blockquote><p>“{review.quote}”</p>{review.context && <p className="review-feature__context">{review.context}</p>}<footer><cite>{review.name}</cite>{originalLanguage && <small>{originalLanguage}</small>}</footer></blockquote>
    </div>
    <div className="review-feature__navigation"><button type="button" onClick={() => move(-1)} aria-label="Ver avaliação anterior"><ArrowLeft /></button><span aria-label={`Avaliação ${active + 1} de ${reviews.length}`}>{String(active + 1).padStart(2, "0")} <i aria-hidden="true" /> {String(reviews.length).padStart(2, "0")}</span><button type="button" onClick={() => move(1)} aria-label="Ver próxima avaliação"><ArrowRight /></button></div>
  </div>;
}
