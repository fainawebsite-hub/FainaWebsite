import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { FainaTileRail } from "@/components/FainaTileRail";
import { LocalFaq } from "@/components/LocalFaq";
import { Reveal } from "@/components/Reveal";
import { SeasonalAnnouncement } from "@/components/SeasonalAnnouncement";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { business } from "@/content/business";
import { images } from "@/content/images";
import { copy, type Locale } from "@/content/site";
import { menuItems } from "@/content/menu";

export function generateStaticParams() { return [{ locale: "pt" }, { locale: "en" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale !== "en";
  const title = isPt ? "Faina Restaurante | Peixe Fresco e Marisco na Praia da Vagueira" : "Faina Restaurant | Fresh Fish & Seafood in Praia da Vagueira";
  const description = isPt ? "Restaurante Faina na Praia da Vagueira, Vagos. Cozinha portuguesa, peixe fresco do mercado, marisco, caldeiradas e reservas online." : "Faina Restaurant in Praia da Vagueira, Vagos. Portuguese cooking, fresh market fish, seafood, stews and online reservations.";
  return { title, description, alternates: { canonical: `/${locale}`, languages: { "pt-PT": "/pt", "en-GB": "/en" } }, openGraph: { title, description, type: "website", locale: isPt ? "pt_PT" : "en_GB" }, twitter: { card: "summary_large_image", title, description } };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "pt";
  const t = copy[locale];
  const menuHref = locale === "pt" ? "/pt/ementa" : "/en/menu";
  const highlights = locale === "pt" ? [["Peixe fresco", "Peixe do mercado, escolhido de acordo com a disponibilidade."], ["Marisco", "Dos clássicos da costa aos pratos pensados para partilhar."], ["Cozinha portuguesa", "Receitas tradicionais preparadas com respeito pelo produto."]] : [["Fresh fish", "Market fish, selected according to availability."], ["Seafood", "From coastal classics to dishes made for sharing."], ["Portuguese cooking", "Traditional recipes prepared with respect for the ingredient."]];
  const seaCards = locale === "pt" ? ["Peixe fresco", "Marisco", "Arrozes e caldeiradas", "Especialidades da casa"] : ["Fresh fish", "Seafood", "Rice dishes and stews", "House specialities"];
  const galleryPhotos = images.gallery;
  const photoAlt = locale === "pt" ? "Momentos à mesa no Faina Restaurante" : "Moments at the table at Faina Restaurant";
  const callLabel = locale === "pt" ? "Ligar" : "Call";
  const reservationUrl = business.reservationUrl;
  const restaurant = business;
  // Alias temporário de marcação: todas as faixas usam o único componente FainaTileRail.
  const BrandTileStrip = FainaTileRail;
  const jsonLd = { "@context": "https://schema.org", "@type": "Restaurant", name: business.name, url: business.url, telephone: business.phone, email: business.email, address: { "@type": "PostalAddress", ...business.address }, servesCuisine: ["Portuguese", "Seafood", "Fish"], acceptsReservations: true, hasMenu: `${business.url}${menuHref}`, sameAs: [business.instagram, business.facebook], image: images.hero };
  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} /><SeasonalAnnouncement locale={locale} />
    <section className="hero section-shell"><div className="hero-copy"><Reveal><p className="eyebrow">{t.heroKicker}</p><h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="hero-text">{t.heroText}</p><div className="hero-actions"><Link className="button button--ink" href={menuHref}>{t.viewMenu}<ArrowDownRight /></Link><a className="text-link" href={reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div></Reveal></div><Reveal delay={0.1} className="hero-visual"><div className="hero-photo"><Image src={images.hero} alt={photoAlt} fill priority sizes="(max-width: 720px) 100vw, 45vw" /></div></Reveal></section>
    <div className="faina-separator faina-separator--blue" aria-hidden="true"><Image src={images.separator} alt="" width={1920} height={140} sizes="100vw" /></div>
    <section className="intro section-shell brand-section brand-section--intro"><BrandTileStrip side="left" /><Reveal><p className="eyebrow">Da Vagueira</p><h2>{t.introTitle}</h2><p className="lead">{t.introText}</p></Reveal><div className="highlight-grid">{highlights.map(([title, body], i) => <Reveal key={title} delay={i * 0.09}><article className="highlight"><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div></section>
    <section id="restaurante" className="story section-shell"><Reveal className="story-image"><div className="photo-frame"><Image src={images.about} alt="Sónia Neves e Armindo, fundadores do Faina Restaurante" width={900} height={400} /></div></Reveal><Reveal delay={0.1} className="story-copy"><SectionHeader eyebrow="Faina Restaurante" title={t.storyTitle}><p>{t.storyText}</p><p>Na Vagueira, a Arte Xávega continua a marcar a paisagem e a ligação da vila ao Atlântico.</p></SectionHeader><a className="text-link" href="#contactos">{t.discover}<ArrowDownRight /></a></Reveal></section>
    <section className="sea brand-section brand-section--sea"><BrandTileStrip side="right" opacity={0.88} /><div className="section-shell"><Reveal><p className="eyebrow eyebrow--light">A nossa seleção</p><h2>{t.seaTitle}</h2><p className="lead">{t.seaText}</p></Reveal><div className="sea-grid">{seaCards.map((card, i) => <Reveal key={card} delay={i * 0.08}><article className="sea-card"><div className="sea-card__image"><Image src={galleryPhotos[i + 1]} alt={`${card}, ${photoAlt}`} fill sizes="(max-width: 720px) 45vw, 24vw" /></div><div className="sea-card__meta"><span>0{i + 1}</span><h3>{card}</h3></div></article></Reveal>)}</div></div></section>
    <section id="ementa" className="menu-preview section-shell brand-section brand-section--menu"><BrandTileStrip side="right" opacity={0.18} className="brand-tile--detail" /><div><Reveal><p className="eyebrow">Faina à mesa</p><h2>{t.menuTitle}</h2><p className="lead">{t.menuText}</p><Link className="button button--outline" href={menuHref}>{t.fullMenu}<ArrowDownRight /></Link></Reveal></div><Reveal delay={0.1} className="menu-list">{menuItems.slice(0, 4).map((item) => <div key={item.category} className="menu-list__item"><span>{item.category}</span><strong>{item.name}</strong><p>{item.description}</p></div>)}</Reveal></section>
    <section id="natal" className="christmas"><div className="section-shell christmas-inner"><Reveal><p className="eyebrow eyebrow--gold">Temporada de celebração</p><h2>{t.christmasTitle}</h2><p>{t.christmasText}</p><div className="hero-actions"><a className="button button--gold" href={reservationUrl} target="_blank" rel="noreferrer">{t.christmasCta}<ArrowUpRight /></a><a className="text-link text-link--light" href={`mailto:${restaurant.email}`}>{t.talk}<ArrowUpRight /></a></div></Reveal><div className="christmas-photo"><Image src={images.christmas} alt={photoAlt} fill sizes="(max-width: 720px) 100vw, 34vw" /></div></div></section>
    <section className="moments section-shell"><Reveal><div><p className="eyebrow">Faina, com tempo</p><h2>{t.momentsTitle}</h2><p className="lead">{t.momentsText}</p><a className="button button--ink" href={reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div></Reveal><Reveal delay={0.1}><div className="menu-reference"><Image src={images.moments} alt="Momento à mesa no Faina Restaurante" fill sizes="(max-width: 800px) 100vw, 42vw" /></div></Reveal></section>
    <section id="galeria" className="gallery section-shell"><Reveal><p className="eyebrow">Vagueira à mesa</p><h2>{t.galleryTitle}</h2></Reveal><div className="gallery-grid">{galleryPhotos.map((src, i) => <div key={src} className={`gallery-item gallery-item--${i + 1}`}><Image src={src} alt={photoAlt} fill sizes="(max-width: 720px) 50vw, (max-width: 980px) 33vw, 25vw" /></div>)}</div></section>
    <section id="contactos" className="location brand-section brand-section--location"><BrandTileStrip side="left" opacity={0.88} /><div className="section-shell location-inner"><Reveal><p className="eyebrow eyebrow--light">Praia da Vagueira</p><h2>{t.locationTitle}</h2><address>Faina Restaurante<br />Largo Parracho Branco<br />Praia da Vagueira, Vagos<br />Aveiro, Portugal</address><div className="location-links"><a className="button button--gold" href="https://www.google.com/maps/search/?api=1&query=Faina+Restaurante+Praia+da+Vagueira" target="_blank" rel="noreferrer"><MapPin />{t.directions}</a><a className="text-link text-link--light" href={`tel:${restaurant.phone}`}><Phone />{t.call}: {restaurant.displayPhone}</a></div></Reveal><iframe title="Mapa para Faina Restaurante na Praia da Vagueira" src="https://www.google.com/maps?q=Faina+Restaurante+Praia+da+Vagueira&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
    {locale === "pt" && <LocalFaq />}
    <div className="faina-separator faina-separator--white" aria-hidden="true"><Image src={images.separator} alt="" width={1920} height={140} sizes="100vw" /></div>
    <Footer locale={locale} text={t.footer} />
    <div className="mobile-action-bar"><a href={`tel:${restaurant.phone}`}><Phone />{callLabel}</a><a href={reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div>
  </main>;
}
