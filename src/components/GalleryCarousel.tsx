"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

type GalleryCarouselProps = { images: readonly string[]; alt: string };

export function GalleryCarousel({ images, alt }: GalleryCarouselProps) {
  const viewport = useRef<HTMLDivElement>(null);
  const move = (direction: -1 | 1) => {
    const element = viewport.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollBy({ left: direction * element.clientWidth * 0.78, behavior: reduced ? "auto" : "smooth" });
  };

  return <div className="gallery-carousel" aria-label={alt}>
    <div ref={viewport} className="gallery-carousel__viewport" tabIndex={0} aria-label={alt}>
      <div className="gallery-carousel__track">
        {images.map((src, index) => <figure className="gallery-carousel__slide" key={src}><Image src={src} alt={`${alt} ${index + 1}`} fill sizes="(max-width: 720px) 84vw, (max-width: 1100px) 43vw, 25vw" /></figure>)}
      </div>
    </div>
    <div className="gallery-carousel__controls" aria-label="Navegação da galeria"><button type="button" onClick={() => move(-1)} aria-label="Ver fotografias anteriores"><ArrowLeft /></button><button type="button" onClick={() => move(1)} aria-label="Ver mais fotografias"><ArrowRight /></button></div>
  </div>;
}
