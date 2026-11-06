import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SeasonalAnnouncement } from "@/components/SeasonalAnnouncement";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, type Locale } from "@/content/site";

type ContentPageProps = { locale: Locale; eyebrow: string; title: string; intro: string; children: ReactNode; heroImage?: { src: string; alt: string }; heroActions?: ReactNode };

export function ContentPage({ locale, eyebrow, title, intro, children, heroImage, heroActions }: ContentPageProps) {
  const t = copy[locale];
  return <main className="content-page"><SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} /><SeasonalAnnouncement locale={locale} /><PageHero eyebrow={eyebrow} title={title} intro={intro} actions={heroActions} image={heroImage} />{children}<Footer locale={locale} text={t.footer} /></main>;
}
