import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  actions?: ReactNode;
  image?: { src: string; alt: string };
  className?: string;
};

/** Shared editorial masthead for every interior page. */
export function PageHero({ eyebrow, title, intro, actions, image, className }: PageHeroProps) {
  return <section className={`page-hero section-shell${image ? " page-hero--split" : ""}${className ? ` ${className}` : ""}`}>
    <div className="page-hero__content">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{intro}</p>
      {actions && <div className="page-hero__actions">{actions}</div>}
    </div>
    {image && <div className="page-hero__image"><Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 720px) 100vw, 44vw" /></div>}
  </section>;
}
