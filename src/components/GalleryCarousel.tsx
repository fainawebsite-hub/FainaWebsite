"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type GalleryCarouselProps = { images: readonly string[]; alt: string };

export function GalleryCarousel({ images, alt }: GalleryCarouselProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const move = (direction: -1 | 1) => {
    const element = viewport.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * element.clientWidth * 0.78, behavior: reduced ? "auto" : "smooth" });
  };

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reduced || images.length < 2) return;
    const timer = window.setInterval(() => {
      const element = viewport.current;
      if (!element) return;
      const end = element.scrollWidth - element.clientWidth;
      if (end - element.scrollLeft < 12) element.scrollTo({ left: 0, behavior: "auto" });
      else element.scrollBy({ left: element.clientWidth * 0.78, behavior: "smooth" });
    }, 5200);
    return () => window.clearInterval(timer);
  }, [images.length, paused, reduced]);

  return <div className="gallery-carousel" aria-label={alt} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <div ref={viewport} className="gallery-carousel__viewport" tabIndex={0} aria-label={alt} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerCancel={() => setPaused(false)}>
      <div className="gallery-carousel__track">
        {images.map((src, index) => <figure className="gallery-carousel__slide" key={src}><Image src={src} alt={`${alt} ${index + 1}`} fill sizes="(max-width: 720px) 84vw, (max-width: 1100px) 43vw, 25vw" /></figure>)}
      </div>
    </div>
    <div className="gallery-carousel__controls" aria-label="Navegação da galeria"><button type="button" onClick={() => move(-1)} aria-label="Ver fotografias anteriores"><ArrowLeft /></button><button type="button" onClick={() => move(1)} aria-label="Ver mais fotografias"><ArrowRight /></button></div>
  </div>;
}
