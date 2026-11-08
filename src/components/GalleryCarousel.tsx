"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type GalleryCarouselProps = { images: readonly string[]; alt: string };

export function GalleryCarousel({ images, alt }: GalleryCarouselProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const firstSlide = useRef<HTMLElement>(null);
  const duplicateStart = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const galleryImages = images.length > 1 ? [...images, ...images] : images;
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
      const loopDistance = (duplicateStart.current?.offsetLeft ?? 0) - (firstSlide.current?.offsetLeft ?? 0);
      if (element && loopDistance > 0) {
        element.scrollLeft += 0.32;
        if (element.scrollLeft >= loopDistance) element.scrollLeft -= loopDistance;
      }
    }, 16);
    return () => window.clearInterval(timer);
  }, [images.length, paused, reduced]);

  return <div className="gallery-carousel" aria-label={alt} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
    <div ref={viewport} className="gallery-carousel__viewport" tabIndex={0} aria-label={alt} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerCancel={() => setPaused(false)}>
      <div className="gallery-carousel__track">
        {galleryImages.map((src, index) => {
          const duplicate = index >= images.length;
          return <figure className="gallery-carousel__slide" key={`${src}-${index}`} aria-hidden={duplicate} ref={index === 0 ? firstSlide : index === images.length ? duplicateStart : undefined}><Image src={src} alt={duplicate ? "" : `${alt} ${index + 1}`} fill sizes="(max-width: 720px) 84vw, (max-width: 1100px) 43vw, 25vw" /></figure>;
        })}
      </div>
    </div>
    <div className="gallery-carousel__controls" aria-label="Navegação da galeria"><button type="button" onClick={() => move(-1)} aria-label="Ver fotografias anteriores"><ArrowLeft /></button><button type="button" onClick={() => move(1)} aria-label="Ver mais fotografias"><ArrowRight /></button></div>
  </div>;
}
