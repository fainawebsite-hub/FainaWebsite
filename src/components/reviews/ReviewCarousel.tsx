"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { GuestReview } from "@/content/reviews";
import type { Locale } from "@/content/site";

type ReviewCarouselProps = { locale: Locale; reviews: readonly GuestReview[]; originalLanguage: string };

export function ReviewCarousel({ locale, reviews, originalLanguage }: ReviewCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [animated, setAnimated] = useState(true);
  const dragStart = useRef<number | null>(null);
  const labels = locale === "pt"
    ? { carousel: "Avaliações de clientes", review: "Avaliação", outOf: "de", previous: "Ver avaliação anterior", next: "Ver próxima avaliação", rating: "em 5 estrelas" }
    : { carousel: "Guest reviews", review: "Review", outOf: "of", previous: "View previous review", next: "View next review", rating: "out of 5 stars" };
  const slides = reviews.length > 1 ? [...reviews, reviews[0]] : reviews;
  const move = (direction: -1 | 1) => {
    if (direction === 1) {
      if (active < reviews.length) setActive((current) => current + 1);
    }
    else if (active === 0) {
      setAnimated(false);
      setActive(reviews.length);
      requestAnimationFrame(() => requestAnimationFrame(() => { setAnimated(true); setActive(reviews.length - 1); }));
    } else setActive((current) => current - 1);
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced || reviews.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => current < reviews.length ? current + 1 : current), 7500);
    return () => window.clearInterval(timer);
  }, [paused, reduced, reviews.length]);

  const finishSlide = () => {
    if (active !== reviews.length) return;
    setAnimated(false);
    setActive(0);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
  };
  if (!reviews.length) return null;
  return <div className="review-feature" role="region" aria-roledescription="carousel" aria-label={labels.carousel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <div className="review-feature__viewport" onPointerDown={(event) => { dragStart.current = event.clientX; setPaused(true); event.currentTarget.setPointerCapture(event.pointerId); }} onPointerUp={(event) => { const start = dragStart.current; dragStart.current = null; setPaused(false); if (start === null) return; const distance = event.clientX - start; if (Math.abs(distance) > 42) move(distance > 0 ? -1 : 1); }} onPointerCancel={() => { dragStart.current = null; setPaused(false); }}>
      <div className={`review-feature__track${animated && !reduced ? " is-animated" : ""}`} style={{ transform: `translateX(-${active * 100}%)` }} onTransitionEnd={finishSlide}>
        {slides.map((review, index) => <article className="review-feature__slide" key={`${review.source}-${review.name}-${index}`} aria-hidden={index !== active && !(active === reviews.length && index === 0)}><div className="review-feature__content"><p className="review-feature__source">{review.source} review</p><p className="review-feature__mark" aria-hidden="true">”</p><div className="review-feature__rating" aria-label={`${review.rating} ${labels.rating}`}><span aria-hidden="true">★★★★★</span><span className="sr-only">{review.rating} {labels.rating}</span></div><blockquote><p>“{review.quote}”</p>{review.context && <p className="review-feature__context">{review.context}</p>}<footer><cite>{review.name}</cite>{originalLanguage && <small>{originalLanguage}</small>}</footer></blockquote></div></article>)}
      </div>
    </div>
    <div className="review-feature__navigation"><button type="button" onClick={() => move(-1)} aria-label={labels.previous}><ArrowLeft /></button><span aria-label={`${labels.review} ${(active % reviews.length) + 1} ${labels.outOf} ${reviews.length}`}>{String((active % reviews.length) + 1).padStart(2, "0")} <i aria-hidden="true" /> {String(reviews.length).padStart(2, "0")}</span><button type="button" onClick={() => move(1)} aria-label={labels.next}><ArrowRight /></button></div>
  </div>;
}
