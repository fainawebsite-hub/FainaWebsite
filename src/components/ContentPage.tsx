import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { SeasonalAnnouncement } from "@/components/SeasonalAnnouncement";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, type Locale } from "@/content/site";

type ContentPageProps = { locale: Locale; eyebrow: string; title: string; intro: string; children: ReactNode };

export function ContentPage({ locale, eyebrow, title, intro, children }: ContentPageProps) {
  const t = copy[locale];
  return <main className="content-page"><SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} /><SeasonalAnnouncement locale={locale} /><section className="content-page__hero section-shell"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{intro}</p></section>{children}<Footer locale={locale} text={t.footer} /></main>;
}
