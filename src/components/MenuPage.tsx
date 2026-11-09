import Link from "next/link";
import Image from "next/image";
import { HomeLink } from "@/components/HomeLink";
import { ArrowDownRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { business } from "@/content/business";
import { images } from "@/content/images";
import { menuCategories } from "@/content/menu";
import { copy, type Locale } from "@/content/site";

export function MenuPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const isPt = locale === "pt";
  const title = isPt ? "A nossa ementa" : "Our menu";
  const subtitle = isPt ? "Cozinha portuguesa guiada pela costa, pelo mercado e pelo prazer de bem receber." : "Portuguese cooking guided by the coast, the market and generous hospitality.";
  const availability = isPt ? "Peixe e marisco variam com a lota e a disponibilidade do dia. Confirme connosco as sugestões e os respetivos preços." : "Fish and seafood vary with the daily catch and availability. Please ask us about the day's suggestions and prices.";
  return (
    <main className="menu-page">
      <SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} />
      <section className="menu-hero section-shell"><p className="eyebrow">Faina Restaurante</p><h1>{title}</h1><p className="lead">{subtitle}</p><p className="menu-service">{isPt ? "Almoços · Jantares · Grupos" : "Lunch · Dinner · Groups"}</p></section>
      <nav className="menu-nav" aria-label={isPt ? "Categorias da ementa" : "Menu categories"}><div className="section-shell">{menuCategories.map((category) => <a key={category.id} href={`#${category.id}`}>{category.title[locale]}</a>)}</div></nav>
      <aside className="menu-availability section-shell" aria-label={isPt ? "Disponibilidade" : "Availability"}><p>{availability}</p><a className="button button--ink" href={business.reservationUrl} target="_blank" rel="noreferrer">{t.reserve}</a></aside>
      <section className="menu-categories">
        {menuCategories.map((category) => <section id={category.id} className="menu-category" key={category.id}><div className="section-shell menu-category__inner"><header><div><p className="eyebrow">{isPt ? "Faina à mesa" : "Faina at the table"}</p><h2>{category.title[locale]}</h2><p>{category.intro[locale]}</p>{category.availability && <small>{category.availability[locale]}</small>}</div></header><ul>{category.items.map((item) => <li key={item.name.pt}><span>{item.name[locale]}</span><strong>{item.price}</strong></li>)}</ul></div></section>)}
      </section>
      <div className="faina-separator faina-separator--blue menu-desserts-separator" aria-hidden="true"><Image src={images.separator} alt="" width={1920} height={140} sizes="100vw" /></div>
      <section className="menu-cta"><div className="section-shell"><p className="eyebrow eyebrow--gold">Faina à mesa</p><h2>{isPt ? "Reserve o seu lugar" : "Reserve your table"}</h2><p>{isPt ? "Para almoços, jantares e grupos, fale connosco." : "For lunch, dinner and groups, get in touch."}</p><a className="button button--gold" href={business.reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowDownRight /></a><HomeLink className="text-link text-link--light" href={`/${locale}`}>{isPt ? "Voltar ao início" : "Back home"}</HomeLink></div></section>
      <Footer locale={locale} text={t.footer} />
    </main>
  );
}
