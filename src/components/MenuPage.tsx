import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, reservationUrl, type Locale } from "@/content/site";
import { menuItems } from "@/content/menu";

export function MenuPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const title = locale === "pt" ? "A nossa ementa" : "Our menu";
  const subtitle = locale === "pt" ? "Uma carta guiada pela disponibilidade do mar e pelo gosto de bem receber." : "A menu led by what the sea brings us and a love of generous hospitality.";
  return <main className="menu-page"><SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} /><section className="menu-hero section-shell"><p className="eyebrow">Faina Restaurante</p><h1>{title}</h1><p className="lead">{subtitle}</p><small>{locale === "pt" ? "Os pratos, preços e disponibilidade podem ser atualizados facilmente em content/menu.ts." : "Dishes, prices and availability can be updated easily in content/menu.ts."}</small></section><section className="menu-full section-shell">{menuItems.map((item, index) => <article key={item.category}><span>0{index + 1}</span><div><h2>{item.category}</h2><h3>{item.name}</h3><p>{item.description}</p></div><strong>{item.price}</strong></article>)}</section><section className="menu-cta"><div className="section-shell"><p className="eyebrow eyebrow--gold">Faina à mesa</p><h2>{locale === "pt" ? "Reserve o seu lugar" : "Reserve your table"}</h2><a className="button button--gold" href={reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowDownRight /></a><Link className="text-link text-link--light" href={`/${locale}`}>{locale === "pt" ? "Voltar ao início" : "Back home"}</Link></div></section><Footer locale={locale} text={t.footer} /></main>;
}
