import Image from "next/image";

type GalleryCarouselProps = { images: readonly string[]; alt: string };

export function GalleryCarousel({ images, alt }: GalleryCarouselProps) {
  const loopedImages = [...images, ...images];
  return <div className="gallery-carousel" aria-label={alt}><div className="gallery-carousel__track">{loopedImages.map((src, index) => <figure className="gallery-carousel__slide" key={`${src}-${index}`}><Image src={src} alt={index < images.length ? alt : ""} fill sizes="(max-width: 720px) 78vw, (max-width: 1100px) 42vw, 29vw" /></figure>)}</div></div>;
}
