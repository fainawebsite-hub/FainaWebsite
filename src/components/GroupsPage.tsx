import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { business } from "@/content/business";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function GroupsPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const menuHref = pt ? "/pt/ementa" : "/en/menu";
  const blocks = pt ? [
    ["Refeições de grupo", "Almoços e jantares para reunir família, amigos ou associações à mesa."],
    ["Celebrações", "Aniversários, encontros familiares e momentos especiais preparados à medida de cada ocasião."],
    ["Jantares de empresa", "Uma mesa junto ao mar para equipas, empresas e encontros profissionais."],
    ["Épocas festivas", "Natal, Páscoa e outras datas especiais com opções pensadas para grupos."],
    ["Menus para grupos", "Consulte connosco as opções disponíveis, preços e condições para a sua data."],
  ] : [
    ["Group meals", "Lunches and dinners for family, friends and associations gathered around the table."],
    ["Celebrations", "Birthdays, family gatherings and special moments shaped around each occasion."],
    ["Company dinners", "A table by the sea for teams, businesses and professional get-togethers."],
    ["Festive seasons", "Christmas, Easter and special dates with options designed for groups."],
    ["Group menus", "Ask us about available options, prices and arrangements for your chosen date."],
  ];
  return <ContentPage locale={locale} eyebrow={pt ? "Faina para partilhar" : "Faina to share"} title={pt ? "Grupos e celebrações na Praia da Vagueira" : "Groups and celebrations in Praia da Vagueira"} intro={pt ? "Reúna família, amigos ou colegas à mesa da Faina. Na Praia da Vagueira recebemos grupos para almoços, jantares, aniversários, celebrações e encontros de empresa." : "Bring family, friends or colleagues together at Faina. In Praia da Vagueira, we welcome groups for lunches, dinners, birthdays, celebrations and company gatherings."} heroImage={{ src: images.gallery[16], alt: pt ? "Restaurante Faina para grupos e celebrações em Vagos" : "Faina Restaurant for groups and celebrations in Vagos" }} heroActions={<><a className="button button--ink" href={`mailto:${business.email}`}><Mail />{pt ? "Falar connosco" : "Talk to us"}</a><Link className="text-link" href={menuHref}>{pt ? "Ver ementa" : "See the menu"}<ArrowDownRight /></Link></>}><section className="group-options section-shell">{blocks.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{description}</p></article>)}</section><section className="information-cta"><div className="section-shell"><p className="eyebrow eyebrow--gold">{pt ? "Vamos preparar a sua mesa?" : "Shall we prepare your table?"}</p><h2>{pt ? "Fale connosco sobre a sua ocasião" : "Tell us about your occasion"}</h2><p>{pt ? "Para restaurante para grupos na Praia da Vagueira, Vagos e Aveiro, confirme connosco a data, o número de pessoas e o tipo de celebração." : "For group dining in Praia da Vagueira, Vagos and Aveiro, tell us the date, number of guests and type of occasion."}</p><div><a className="button button--gold" href={`mailto:${business.email}`}><Mail />{pt ? "Contactar a Faina" : "Contact Faina"}</a><a className="text-link text-link--light" href={`tel:${business.phone}`}><Phone />{business.displayPhone}</a><a className="text-link text-link--light" href={business.reservationUrl} target="_blank" rel="noreferrer">{pt ? "Reservar mesa" : "Book a table"}<ArrowUpRight /></a></div></div></section></ContentPage>;
}
