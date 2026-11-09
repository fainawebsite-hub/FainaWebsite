import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const story = pt
    ? {
        eyebrow: "A Faina",
        title: "Entre o mar e a tradição",
        first: "A Faina começou há vários anos com uma ligação simples à cozinha portuguesa e ao produto fresco. Com o tempo, o projeto cresceu, passou pelo catering e por uma food truck e encontrou na Praia da Vagueira o lugar para dar um novo passo.",
        second: "Hoje, Sónia Neves e Armindo recebem à mesa uma cozinha marcada pelo mar, com peixe fresco, marisco, caldeiradas e sabores portugueses preparados com respeito pelo produto.",
        third: "Uma história que continua a crescer na Vagueira, sempre com a frescura e o sabor no centro de cada prato.",
      }
    : {
        eyebrow: "Faina",
        title: "Between the sea and tradition",
        first: "Faina began several years ago with a simple connection to Portuguese cooking and fresh produce. Over time, the project grew, took shape through catering and a food truck, and found Praia da Vagueira as the place for its next step.",
        second: "Today, Sónia Neves and Armindo welcome guests to a kitchen shaped by the sea, with fresh fish, shellfish, stews and Portuguese flavours prepared with respect for the ingredients.",
        third: "A story that continues to grow in Vagueira, always with freshness and flavour at the heart of every dish.",
      };
  return <ContentPage locale={locale} eyebrow={pt ? "A nossa história" : "Our story"} title={pt ? "Entre o mar e a tradição" : "Between the sea and tradition"} intro={pt ? "Cozinha portuguesa, produto fresco e uma ligação natural à Praia da Vagueira." : "Portuguese cooking, fresh produce and a natural connection to Vagueira Beach."} heroImage={{ src: images.aboutPage.hero, alt: pt ? "Entrada do Restaurante Faina na Praia da Vagueira, Vagos" : "Entrance to Faina Restaurant in Praia da Vagueira, Vagos", sizes: "100vw" }} heroClassName="page-hero--about" heroAfter={<div className="faina-about-separator" aria-hidden="true"><Image src={images.separator} alt="" width={1920} height={140} sizes="100vw" /></div>}><section className="content-split about-story section-shell"><div className="content-split__image"><Image src={images.aboutPage.owners} alt={pt ? "Sónia Neves e Armindo no Restaurante Faina" : "Sónia Neves and Armindo at Faina Restaurant"} fill sizes="(max-width: 720px) 100vw, 55vw" /></div><div><p className="eyebrow">{story.eyebrow}</p><h2>{story.title}</h2><p>{story.first}</p><p>{story.second}</p><p>{story.third}</p><Link className="button button--ink" href={pt ? "/pt/contactos" : "/en/contact"}>{pt ? "Visite-nos" : "Visit us"}<ArrowDownRight /></Link></div></section></ContentPage>;
}
