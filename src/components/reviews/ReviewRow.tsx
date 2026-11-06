"use client";

import { useEffect, useRef, useState } from "react";
import type { GuestReview } from "@/content/reviews";
import { ReviewCard } from "./ReviewCard";

type ReviewRowProps = {
  label: string;
  reviews: readonly GuestReview[];
  originalLanguage: string;
  reverse?: boolean;
};

export function ReviewRow({ label, reviews, originalLanguage, reverse = false }: ReviewRowProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = viewport.current;
    if (!element || reduced) return;
    let frame = 0;
    let previous = performance.now();
    if (!initialised.current && reverse) {
      element.scrollLeft = element.scrollWidth / 2;
      initialised.current = true;
    }
    const animate = (now: number) => {
      const delta = now - previous;
      previous = now;
      const midpoint = element.scrollWidth / 2;
      if (!paused && midpoint > element.clientWidth) {
        const distance = delta * 0.012;
        if (reverse) {
          element.scrollLeft -= distance;
          if (element.scrollLeft <= 0) element.scrollLeft += midpoint;
        } else {
          element.scrollLeft += distance;
          if (element.scrollLeft >= midpoint) element.scrollLeft -= midpoint;
        }
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [paused, reduced, reverse]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);
  const repeated = [...reviews, ...reviews];
  return <div className="review-row" aria-label={label} onMouseEnter={pause} onMouseLeave={resume} onPointerDown={pause} onPointerUp={resume} onFocusCapture={pause} onBlurCapture={resume}>
    <p className="review-row__label">{label}</p>
    <div ref={viewport} className="review-row__viewport" tabIndex={0}>
      <div className="review-row__track">
        {repeated.map((review, index) => <div key={`${review.source}-${review.name}-${index}`} className="review-row__card" aria-hidden={index >= reviews.length}><ReviewCard review={review} originalLanguage={originalLanguage} /></div>)}
      </div>
    </div>
  </div>;
}
