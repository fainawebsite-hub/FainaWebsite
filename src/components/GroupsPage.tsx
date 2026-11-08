import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { business } from "@/content/business";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function GroupsPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const menuHref = pt ? "/pt/ementa" : "/en/menu";
  const blocks = pt ? [
    ["Para partilhar", "Refeições de grupo", "Almoços e jantares para reunir família, amigos ou associações à mesa."],
    ["Momentos especiais", "Celebrações e datas especiais", "Aniversários, encontros familiares, Natal, Páscoa e outras ocasiões especiais para celebrar na Praia da Vagueira."],
    ["Para equipas", "Jantares de empresa", "Almoços, jantares e encontros profissionais para reunir a equipa à mesa."],
    ["À sua medida", "Menus para grupos", "Fale connosco sobre as opções disponíveis e encontre a solução mais adequada para o seu grupo."],
  ] : [
    ["Made for sharing", "Group meals", "Lunches and dinners to bring family, friends or associations together at the table."],
    ["Special moments", "Celebrations and special dates", "Birthdays, family gatherings, Christmas, Easter and other special occasions to celebrate in Praia da Vagueira."],
    ["For teams", "Company dinners", "Lunches, dinners and professional gatherings to bring the team together."],
    ["Made for you", "Group menus", "Talk to us about available options and find the right solution for your group."],
  ];
  const copy = pt ? {
    eyebrow: "Faina para partilhar",
    title: "Grupos e celebrações na Praia da Vagueira",
    intro: "Reúna família, amigos ou colegas à mesa da Faina. Na Praia da Vagueira recebemos grupos para almoços, jantares, aniversários, celebrações e encontros de empresa.",
    quickEyebrow: "Vamos organizar a sua mesa?",
    quickTitle: "Fale connosco sobre o seu grupo",
    quickText: "Se está a planear um almoço de grupo, um jantar, uma celebração ou um encontro de empresa na Praia da Vagueira, fale connosco e encontraremos a melhor opção para a sua ocasião.",
    sectionEyebrow: "Grupos na Faina",
    sectionTitle: "Uma mesa para cada ocasião",
    sectionText: "De encontros em família a jantares de empresa, a Faina recebe grupos na Praia da Vagueira com propostas pensadas para diferentes ocasiões.",
    finalEyebrow: "Vamos preparar a sua mesa?",
    finalTitle: "Fale connosco sobre a sua ocasião",
    finalText: "Para grupos na Praia da Vagueira, fale connosco e indique a data, o número de pessoas e o tipo de celebração.",
    talk: "Falar connosco", contact: "Contactar a Faina", menu: "Ver ementa", reserve: "Reservar mesa", information: "Pedir informações",
  } : {
    eyebrow: "Faina for sharing",
    title: "Groups and celebrations in Praia da Vagueira",
    intro: "Bring family, friends or colleagues together at Faina. In Praia da Vagueira, we welcome groups for lunches, dinners, birthdays, celebrations and company gatherings.",
    quickEyebrow: "Shall we organise your table?",
    quickTitle: "Talk to us about your group",
    quickText: "If you are planning a group lunch, dinner, celebration or company gathering in Praia da Vagueira, talk to us and we will find the best option for your occasion.",
    sectionEyebrow: "Groups at Faina",
    sectionTitle: "A table for every occasion",
    sectionText: "From family gatherings to company dinners, Faina welcomes groups in Praia da Vagueira with options designed for different occasions.",
    finalEyebrow: "Shall we prepare your table?",
    finalTitle: "Talk to us about your occasion",
    finalText: "For groups in Praia da Vagueira, tell us the date, number of guests and type of celebration.",
    talk: "Talk to us", contact: "Contact Faina", menu: "See the menu", reserve: "Book a table", information: "Request information",
  };

  return <ContentPage locale={locale} eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} heroClassName="page-hero--groups" heroImage={{ src: images.groups.hero, alt: pt ? "Mesa preparada para grupos no Restaurante Faina" : "Table prepared for groups at Faina Restaurant" }} heroActions={<><a className="button button--ink groups-button-icon" href={"mailto:" + business.email}><Mail />{copy.talk}</a><Link className="text-link" href={menuHref}>{copy.menu}</Link></>}><div className="groups-page"><section className="groups-quick-cta section-shell"><div><p className="eyebrow">{copy.quickEyebrow}</p><h2>{copy.quickTitle}</h2><p>{copy.quickText}</p></div><div className="groups-quick-cta__actions"><a className="button button--ink groups-button-icon" href={"mailto:" + business.email}><Mail />{copy.contact}</a><Link className="text-link" href={menuHref}>{copy.menu}</Link></div></section><section className="groups-intro section-shell"><p className="eyebrow">{copy.sectionEyebrow}</p><h2>{copy.sectionTitle}</h2><p>{copy.sectionText}</p></section><section className="group-options section-shell">{blocks.map(([eyebrow, title, description], index) => <article key={title} className={index === blocks.length - 1 ? "group-option--featured" : ""}><p className="group-options__eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p>{index === blocks.length - 1 && <a className="button button--gold groups-button-icon" href={"mailto:" + business.email}><Mail />{copy.information}</a>}</article>)}</section><section className="information-cta groups-final-cta"><div className="section-shell"><p className="eyebrow eyebrow--gold">{copy.finalEyebrow}</p><h2>{copy.finalTitle}</h2><p>{copy.finalText}</p><div><a className="button button--gold groups-button-icon" href={"mailto:" + business.email}><Mail />{copy.contact}</a><a className="text-link text-link--light groups-contact-link" href={"tel:" + business.phone}><Phone />{business.displayPhone}</a><a className="text-link text-link--light" href={business.reservationUrl} target="_blank" rel="noreferrer">{copy.reserve}</a></div></div></section></div></ContentPage>;
}
