import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { HomeScrollReset } from "@/components/HomeScrollReset";
import { Reveal } from "@/components/Reveal";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { SeasonalAnnouncement } from "@/components/SeasonalAnnouncement";
import { SiteHeader } from "@/components/SiteHeader";
import { business } from "@/content/business";
import { images } from "@/content/images";
import { copy, type Locale } from "@/content/site";

export function generateStaticParams() { return [{ locale: "pt" }, { locale: "en" }]; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale !== "en";
  const title = isPt ? "Faina Restaurante | Peixe Fresco e Marisco na Praia da Vagueira" : "Faina Restaurant | Fresh Fish & Seafood in Praia da Vagueira";
  const description = isPt ? "Restaurante Faina na Praia da Vagueira, Vagos. Cozinha portuguesa, peixe fresco do mercado, marisco, caldeiradas e reservas online." : "Faina Restaurant in Praia da Vagueira, Vagos. Portuguese cooking, fresh market fish, seafood, stews and online reservations.";
  return { title, description, alternates: { canonical: `/${locale}`, languages: { "pt-PT": "/pt", "en-GB": "/en", "x-default": "/pt" } }, openGraph: { title, description, type: "website", locale: isPt ? "pt_PT" : "en_GB", images: [images.hero] }, twitter: { card: "summary_large_image", title, description } };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "pt";
  const pt = locale === "pt";
  const t = copy[locale];
  const menuHref = pt ? "/pt/ementa" : "/en/menu";
  const aboutHref = pt ? "/pt/sobre" : "/en/about";
  const photoAlt = pt ? "Momentos à mesa no Faina Restaurante" : "Moments at the table at Faina Restaurant";
  const heroAlt = pt ? "Mesa com pratos de peixe e marisco no Restaurante Faina, Praia da Vagueira" : "Table with fish and seafood dishes at Faina Restaurant, Praia da Vagueira";
  const experience = pt
    ? { eyebrow: "À mesa na Faina", title: "Peixe fresco, mesa cheia e sabores para partilhar.", text: "Na Praia da Vagueira, servimos cozinha portuguesa feita para partilhar, do peixe do dia aos arrozes, mariscos e clássicos da nossa mesa.", menu: "Ver ementa", story: "Conhecer a Faina" }
    : { eyebrow: "At the Faina table", title: "Fresh fish, a full table and flavours made for sharing.", text: "In Praia da Vagueira, we serve Portuguese cooking made for sharing, from the catch of the day to rice dishes, shellfish and classics from our table.", menu: "See the menu", story: "Meet Faina" };
  const dishes = pt
    ? { eyebrow: "Escolhidos da nossa mesa", title: "Sabores que contam a nossa história.", cta: "Ver a ementa", items: [["Polvo", images.gallery[0]], ["Arroz de marisco", images.home.categories.rice], ["Peixe fresco", images.gallery[14]]] }
    : { eyebrow: "Selected from our table", title: "Flavours that tell our story.", cta: "See the menu", items: [["Octopus", images.gallery[0]], ["Seafood rice", images.home.categories.rice], ["Fresh fish", images.gallery[14]]] };
  const story = pt
    ? { eyebrow: "Faina Restaurante", title: "Da Vagueira para a mesa", first: "Na Praia da Vagueira, junto ao Atlântico, Sónia Neves e Armindo dão vida à Faina, um restaurante onde o peixe fresco, o marisco e os sabores da cozinha portuguesa são os protagonistas.", second: "A proximidade ao mar sente-se à mesa. Produto fresco, receitas com tradição e sabores genuínos, preparados para mostrar o melhor da Vagueira em cada prato.", cta: "Conhecer a nossa história" }
    : { eyebrow: "Faina Restaurant", title: "From Vagueira to the table", first: "In Praia da Vagueira, beside the Atlantic, Sónia Neves and Armindo bring Faina to life, a restaurant where fresh fish, shellfish and the flavours of Portuguese cooking take centre stage.", second: "The closeness of the sea is felt at the table. Fresh produce, traditional recipes and genuine flavours are prepared to bring the best of Vagueira to every dish.", cta: "Discover our story" };
  const galleryPhotos = images.gallery;
  const jsonLd = { "@context": "https://schema.org", "@type": "Restaurant", name: business.name, url: business.url, logo: `${business.url}${images.logo}`, telephone: business.phone, email: business.email, address: { "@type": "PostalAddress", ...business.address }, servesCuisine: ["Portuguese", "Seafood", "Fish"], acceptsReservations: true, menu: `${business.url}/pt/ementa`, sameAs: [business.instagram, business.facebook, business.tiktok], image: `${business.url}${images.hero}`, openingHoursSpecification: business.openingHoursSpecification };

  return <main id="inicio">
    <HomeScrollReset />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <SiteHeader locale={locale} nav={t.nav} reserve={t.reserve} />
    <SeasonalAnnouncement locale={locale} />

    <section className="home-hero" aria-labelledby="home-hero-title">
      <Image className="home-hero__image" src={images.home.heroBackground} alt={heroAlt} fill priority sizes="100vw" />
      <div className="home-hero__overlay" aria-hidden="true" />
      <div className="home-hero__content section-shell"><Reveal><p className="eyebrow">{t.heroKicker}</p><h1 id="home-hero-title">{t.heroTitle.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="hero-text">{t.heroText}</p><div className="hero-actions"><Link className="button button--ink" href={menuHref}>{t.viewMenu}<ArrowDownRight /></Link><a className="text-link" href={business.reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div></Reveal></div>
    </section>
    <div className="faina-separator faina-separator--blue" aria-hidden="true"><Image src={images.separator} alt="" width={1920} height={140} sizes="100vw" /></div>

    <section className="home-experience section-shell" aria-labelledby="experience-title">
      <Reveal className="home-experience__copy"><p className="eyebrow">{experience.eyebrow}</p><h2 id="experience-title">{experience.title}</h2><p className="lead">{experience.text}</p><div className="home-experience__actions"><Link className="button button--ink" href={menuHref}>{experience.menu}<ArrowDownRight /></Link><Link className="text-link" href={aboutHref}>{experience.story}<ArrowDownRight /></Link></div></Reveal>
      <div className="home-experience__photos" aria-label={photoAlt}>
        <Reveal delay={0.05} className="home-experience__photo home-experience__photo--main"><Image src={images.home.experience} alt={pt ? "Sala do Restaurante Faina na Praia da Vagueira" : "Dining room at Faina Restaurant in Praia da Vagueira"} fill sizes="(max-width: 720px) 100vw, 46vw" /></Reveal>
        <Reveal delay={0.12} className="home-experience__photo home-experience__photo--food"><Image src={images.home.categories.rice} alt={pt ? "Arroz de marisco servido à mesa na Faina" : "Seafood rice served at Faina"} fill sizes="(max-width: 720px) 76vw, 25vw" /></Reveal>
        <Reveal delay={0.18} className="home-experience__photo home-experience__photo--team"><Image src={images.gallery[4]} alt={pt ? "Equipa do Restaurante Faina" : "Faina Restaurant team"} fill sizes="(max-width: 720px) 70vw, 20vw" /></Reveal>
      </div>
    </section>

    <section id="ementa" className="home-dishes" aria-labelledby="dishes-title">
      <div className="section-shell"><Reveal className="home-dishes__intro"><p className="eyebrow eyebrow--light">{dishes.eyebrow}</p><h2 id="dishes-title">{dishes.title}</h2></Reveal><div className="home-dishes__grid">{dishes.items.map(([title, src], index) => <Reveal key={title} delay={index * 0.08} className={`home-dish home-dish--${index + 1}`}><Link href={menuHref}><Image src={src} alt={`${title}, ${photoAlt}`} fill sizes="(max-width: 720px) 100vw, 33vw" /><span className="home-dish__shade" aria-hidden="true" /><span className="home-dish__label"><strong>{title}</strong><small>{dishes.cta}<ArrowDownRight /></small></span></Link></Reveal>)}</div><Reveal delay={0.2} className="home-dishes__cta"><Link className="text-link text-link--light" href={menuHref}>{dishes.cta}<ArrowDownRight /></Link></Reveal></div>
    </section>

    <section id="restaurante" className="home-story section-shell" aria-labelledby="story-title">
      <Reveal className="home-story__image"><Image src={images.about} alt={pt ? "Sónia Neves e Armindo no Restaurante Faina" : "Sónia Neves and Armindo at Faina Restaurant"} fill sizes="(max-width: 720px) 100vw, 48vw" /></Reveal>
      <Reveal delay={0.1} className="home-story__copy"><p className="eyebrow">{story.eyebrow}</p><h2 id="story-title">{story.title}</h2><p>{story.first}</p><p>{story.second}</p><Link className="text-link" href={aboutHref}>{story.cta}<ArrowDownRight /></Link></Reveal>
    </section>

    <section id="galeria" className="gallery home-gallery" aria-labelledby="gallery-title"><div className="section-shell"><Reveal><p className="eyebrow eyebrow--light">{pt ? "Vagueira à mesa" : "Vagueira at the table"}</p><h2 id="gallery-title">{t.galleryTitle}</h2></Reveal></div><GalleryCarousel images={galleryPhotos} alt={photoAlt} /></section>
    <ReviewsSection locale={locale} />

    <section id="contactos" className="location home-location" aria-labelledby="location-title"><div className="section-shell location-inner"><Reveal><p className="eyebrow">Praia da Vagueira</p><h2 id="location-title">{pt ? "Encontre-nos na Vagueira." : "Find us in Vagueira."}</h2><address>{business.name}<br />{business.address.streetAddress}<br />{business.address.addressLocality}, {business.address.addressRegion}<br />{business.country}</address><div className="opening-hours"><h3>{pt ? "Horário" : "Opening hours"}</h3><dl>{business.hours.map((entry) => <div key={entry.day.pt}><dt>{entry.day[locale]}</dt><dd>{entry.hours[locale]}</dd></div>)}</dl></div><div className="location-links"><a className="button button--gold" href={business.reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a><a className="text-link text-link--light" href="https://www.google.com/maps/search/?api=1&query=Faina+Restaurante+Praia+da+Vagueira" target="_blank" rel="noreferrer"><MapPin />{pt ? "Abrir no Google Maps" : "Open in Google Maps"}</a><a className="text-link text-link--light" href={`tel:${business.phone}`}><Phone />{t.call}: {business.displayPhone}</a></div></Reveal><iframe title="Mapa para Faina Restaurante na Praia da Vagueira" src="https://www.google.com/maps?q=Faina+Restaurante+Praia+da+Vagueira&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
    <Footer locale={locale} text={t.footer} />
    <div className="mobile-action-bar"><a href={`tel:${business.phone}`}><Phone />{t.call}</a><a href={business.reservationUrl} target="_blank" rel="noreferrer">{t.reserve}<ArrowUpRight /></a></div>
  </main>;
}
