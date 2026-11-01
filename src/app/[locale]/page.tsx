import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { copy, reservationUrl, restaurant, type Locale } from "@/content/site";
import { menuItems } from "@/content/menu";

export function generateStaticParams() { return [{ locale: "pt" }, { locale: "en" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale !== "en";
  const title = isPt ? "Faina Restaurante | Peixe fresco na Praia da Vagueira" : "Faina Restaurant | Fresh seafood in Vagueira";
  const description = isPt ? "Restaurante na Praia da Vagueira com cozinha portuguesa, peixe fresco e marisco." : "A Vagueira Beach restaurant serving Portuguese cooking, fresh fish and shellfish.";
  return { title, description, alternates: { canonical: `/${locale}`, languages: { "pt-PT": "/pt", "en-GB": "/en" } }, openGraph: { title, description, type: "website", locale: isPt ? "pt_PT" : "en_GB" }, twitter: { card: "summary_large_image", title, description } };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "pt";
  const t = copy[locale];
  const menuHref = locale === "pt" ? "/pt/ementa" : "/en/menu";
  const highlights = locale === "pt" ? [["Peixe fresco", "O melhor do mar, todos os dias."], ["Marisco", "Produto fresco, preparado com simplicidade."], ["Bons vinhos", "Uma seleção pensada para acompanhar cada momento."]] : [["Fresh fish", "The best of the sea, every day."], ["Shellfish", "Fresh produce, simply prepared."], ["Good wine", "A selection made for every moment."]];
  const seaCards = locale === "pt" ? ["Peixe fresco", "Marisco", "Arrozes", "Especialidades da casa"] : ["Fresh fish", "Shellfish", "Rice dishes", "House specialities"];
  const galleryPhotos = Array.from({ length: 11 }, (_, index) => `/images/gallery/faina-vagueira-${String(index + 1).padStart(2, "0")}.jpg`);
  const photoAlt = locale === "pt" ? "Momentos à mesa no Faina Restaurante" : "Moments at the table at Faina Restaurant";
  const jsonLd = { "@context": "https://schema.org", "@type": "Restaurant", name: restaurant.name, telephone: restaurant.phone, email: restaurant.email, areaServed: "Vagueira, Aveiro, Portugal", servesCuisine: ["Portuguese", "Seafood", "Fish"], sameAs: [restaurant.instagram, restaurant.facebook], url: restaurant.siteUrl };
  return <main id="inicio">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} />
    <section className="hero section-shell"><div className="hero-copy"><Reveal><p className="eyebrow script">{t.heroKicker}</p><h1>{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="hero-text">{t.heroText}</p><div className="hero-actions"><Link className="button button--ink" href={menuHref}>{t.viewMenu}<ArrowDownRight /></Link><a className="text-link" href={reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div></Reveal></div><Reveal delay={0.1} className="hero-visual"><div className="hero-photo"><Image src={galleryPhotos[0]} alt={photoAlt} fill priority sizes="(max-width: 720px) 100vw, 45vw" /></div></Reveal></section>
    <section className="intro section-shell"><Reveal><p className="eyebrow">Da Vagueira</p><h2>{t.introTitle}</h2><p className="lead">{t.introText}</p></Reveal><div className="highlight-grid">{highlights.map(([title, body], i) => <Reveal key={title} delay={i * 0.09}><article className="highlight"><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article></Reveal>)}</div></section>
    <section id="restaurante" className="story section-shell"><Reveal className="story-image"><div className="photo-frame"><Image src="/images/faina-equipa.jpg" alt="Equipa Faina no restaurante" width={900} height={400} /></div></Reveal><Reveal delay={0.1} className="story-copy"><p className="eyebrow">Faina Restaurante</p><h2>{t.storyTitle}</h2><p>{t.storyText}</p><a className="text-link" href="#contactos">{t.discover}<ArrowDownRight /></a></Reveal></section>
    <section className="sea"><div className="section-shell"><Reveal><p className="eyebrow eyebrow--light">A nossa seleção</p><h2>{t.seaTitle}</h2><p className="lead">{t.seaText}</p></Reveal><div className="sea-grid">{seaCards.map((card, i) => <Reveal key={card} delay={i * 0.08}><article className="sea-card"><div className="sea-card__image"><Image src={galleryPhotos[i + 1]} alt={`${card} — ${photoAlt}`} fill sizes="(max-width: 720px) 45vw, 24vw" /></div><h3>{card}</h3><span>0{i + 1}</span></article></Reveal>)}</div></div></section>
    <section id="ementa" className="menu-preview section-shell"><div><Reveal><p className="eyebrow">Faina à mesa</p><h2>{t.menuTitle}</h2><p className="lead">{t.menuText}</p><Link className="button button--outline" href={menuHref}>{t.fullMenu}<ArrowDownRight /></Link></Reveal></div><Reveal delay={0.1} className="menu-list">{menuItems.slice(0, 4).map((item) => <div key={item.category} className="menu-list__item"><span>{item.category}</span><strong>{item.name}</strong><p>{item.description}</p></div>)}</Reveal></section>
    <section id="natal" className="christmas"><div className="section-shell christmas-inner"><Reveal><p className="eyebrow eyebrow--gold">Temporada de celebração</p><h2>{t.christmasTitle}</h2><p>{t.christmasText}</p><div className="hero-actions"><a className="button button--gold" href={reservationUrl} target="_blank" rel="noreferrer">{t.christmasCta}<ArrowUpRight /></a><a className="text-link text-link--light" href={`mailto:${restaurant.email}`}>{t.talk}<ArrowUpRight /></a></div></Reveal><div className="christmas-photo"><Image src={galleryPhotos[6]} alt={photoAlt} fill sizes="(max-width: 720px) 100vw, 34vw" /></div></div></section>
    <section className="moments section-shell"><Reveal><div><p className="eyebrow">Faina, com tempo</p><h2>{t.momentsTitle}</h2><p className="lead">{t.momentsText}</p><a className="button button--ink" href={reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div></Reveal><Reveal delay={0.1}><div className="menu-reference"><Image src="/images/faina-menu-reference.webp" alt="Ementa Faina numa mesa do restaurante" fill sizes="(max-width: 800px) 100vw, 42vw" /></div></Reveal></section>
    <section id="galeria" className="gallery section-shell"><Reveal><p className="eyebrow">Vagueira à mesa</p><h2>{t.galleryTitle}</h2></Reveal><div className="gallery-grid">{galleryPhotos.map((src, i) => <div key={src} className={`gallery-item gallery-item--${i + 1}`}><Image src={src} alt={photoAlt} fill sizes="(max-width: 720px) 50vw, (max-width: 980px) 33vw, 25vw" /></div>)}</div></section>
    <section id="contactos" className="location"><div className="section-shell location-inner"><Reveal><p className="eyebrow eyebrow--light">Praia da Vagueira</p><h2>{t.locationTitle}</h2><address>Faina Restaurante<br />Praia da Vagueira<br />Aveiro, Portugal</address><div className="location-links"><a className="button button--gold" href="https://www.google.com/maps/search/?api=1&query=Faina+Restaurante+Praia+da+Vagueira" target="_blank" rel="noreferrer"><MapPin />{t.directions}</a><a className="text-link text-link--light" href={`tel:${restaurant.phone}`}><Phone />{t.call}: {restaurant.displayPhone}</a></div></Reveal><iframe title="Mapa para Faina Restaurante na Praia da Vagueira" src="https://www.google.com/maps?q=Faina+Restaurante+Praia+da+Vagueira&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
    <Footer locale={locale} text={t.footer} />
  </main>;
}
