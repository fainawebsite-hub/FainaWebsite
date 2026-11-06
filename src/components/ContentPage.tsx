import type { ReactNode } from "react";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { SeasonalAnnouncement } from "@/components/SeasonalAnnouncement";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, type Locale } from "@/content/site";

type ContentPageProps = { locale: Locale; eyebrow: string; title: string; intro: string; children: ReactNode; heroImage?: { src: string; alt: string }; heroActions?: ReactNode };

export function ContentPage({ locale, eyebrow, title, intro, children, heroImage, heroActions }: ContentPageProps) {
  const t = copy[locale];
  return <main className="content-page"><SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} /><SeasonalAnnouncement locale={locale} /><section className={`content-page__hero section-shell${heroImage ? " content-page__hero--visual" : ""}`}><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p>{heroActions && <div className="content-page__hero-actions">{heroActions}</div>}</div>{heroImage && <div className="content-page__hero-image"><Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="(max-width: 720px) 100vw, 44vw" /></div>}</section>{children}<Footer locale={locale} text={t.footer} /></main>;
}
