import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  return <ContentPage locale={locale} eyebrow={pt ? "A nossa história" : "Our story"} title={pt ? "A Faina, com sabor a mar" : "Faina, with a taste of the sea"} intro={pt ? "Cozinha portuguesa, produto fresco e uma ligação natural à Praia da Vagueira." : "Portuguese cooking, fresh produce and a natural connection to Vagueira Beach."}><section className="content-split section-shell"><div className="content-split__image"><Image src={images.about} alt={pt ? "Sónia Neves e Armindo no Restaurante Faina" : "Sónia Neves and Armindo at Faina Restaurant"} fill sizes="(max-width: 720px) 100vw, 50vw" /></div><div><h2>{pt ? "Uma história à mesa" : "A story at the table"}</h2><p>{pt ? "A Faina nasceu de uma paixão pela cozinha portuguesa e pelo produto fresco. Ao longo dos anos, o projeto foi crescendo até encontrar na Praia da Vagueira a sua casa à mesa." : "Faina grew from a passion for Portuguese cooking and fresh produce. Over the years, the project evolved until finding its home at the table in Praia da Vagueira."}</p><p>{pt ? "Em 2025, Sónia Neves e Armindo abriram o Restaurante Faina na Praia da Vagueira. A nossa cozinha parte do produto fresco e do prazer de receber, num lugar ligado ao Atlântico e à memória da Arte Xávega." : "In 2025, Sónia Neves and Armindo opened Faina Restaurant in Praia da Vagueira. Our Portuguese cooking begins with fresh produce and the pleasure of welcoming guests, in a place connected to the Atlantic and the local Arte Xávega tradition."}</p><Link className="button button--ink" href={pt ? "/pt/contactos" : "/en/contact"}>{pt ? "Visite-nos" : "Visit us"}<ArrowDownRight /></Link></div></section></ContentPage>;
}
