import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { business } from "@/content/business";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function ChristmasPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  return <ContentPage locale={locale} eyebrow={pt ? "Época festiva" : "Festive season"} title={pt ? "Jantares de Natal na Faina" : "Christmas dinners at Faina"} intro={pt ? "Jantares de Natal para famílias, amigos e empresas na Praia da Vagueira, Vagos. Consulte as opções para grupos e reserve antecipadamente." : "Christmas dinners for families, friends and companies in Praia da Vagueira, Vagos. Ask about group options and book ahead."}><section className="content-split section-shell content-split--reverse"><div><h2>{pt ? "Uma mesa para celebrar" : "A table made for celebrating"}</h2><p>{pt ? "A Faina recebe grupos para celebrações de Natal. Menus, disponibilidade e condições são confirmados diretamente com a nossa equipa." : "Faina welcomes groups for Christmas celebrations. Menus, availability and arrangements are confirmed directly with our team."}</p><a className="button button--ink" href={business.reservationUrl} target="_blank" rel="noreferrer">{pt ? "Reservar mesa" : "Book a table"}<ArrowUpRight /></a></div><div className="content-split__image"><Image src={images.christmas} alt={pt ? "Mesa preparada para um jantar de Natal na Faina" : "Table prepared for a Christmas dinner at Faina"} fill sizes="(max-width: 720px) 100vw, 50vw" /></div></section></ContentPage>;
}
