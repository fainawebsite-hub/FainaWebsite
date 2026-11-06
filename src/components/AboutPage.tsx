import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  return <ContentPage locale={locale} eyebrow={pt ? "A nossa história" : "Our story"} title={pt ? "A Faina, com sabor a mar" : "Faina, with a taste of the sea"} intro={pt ? "Cozinha portuguesa, produto fresco e uma ligação natural à Praia da Vagueira." : "Portuguese cooking, fresh produce and a natural connection to Vagueira Beach."}><section className="content-split section-shell"><div className="content-split__image"><Image src={images.about} alt={pt ? "Sónia Neves e Armindo no Restaurante Faina" : "Sónia Neves and Armindo at Faina Restaurant"} fill sizes="(max-width: 720px) 100vw, 50vw" /></div><div><h2>{pt ? "De Faina Take Away ao restaurante" : "From Faina Take Away to the restaurant"}</h2><p>{pt ? "A Faina começou como Faina Take Away e durante cerca de sete anos cresceu entre takeaway, catering e food truck. Em 2025, Sónia Neves e Armindo abriram o Restaurante Faina na Praia da Vagueira." : "Faina began as Faina Take Away and, for around seven years, grew through takeaway, catering and a food truck. In 2025, Sónia Neves and Armindo opened Faina Restaurant in Praia da Vagueira."}</p><p>{pt ? "A nossa cozinha portuguesa parte do produto fresco e do prazer de receber. A Arte Xávega faz parte da paisagem e da memória cultural da Vagueira, uma vila profundamente ligada ao Atlântico." : "Our Portuguese cooking starts with fresh produce and the pleasure of welcoming guests. Arte Xávega is part of Vagueira's landscape and cultural memory, a village deeply connected to the Atlantic."}</p><Link className="button button--ink" href={pt ? "/pt/contactos" : "/en/contact"}>{pt ? "Visite-nos" : "Visit us"}<ArrowDownRight /></Link></div></section></ContentPage>;
}
