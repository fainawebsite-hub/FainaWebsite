import { Mail, Phone } from "lucide-react";
import { ContentPage } from "@/components/ContentPage";
import { business } from "@/content/business";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

export function ChristmasPage({ locale }: { locale: Locale }) {
  const pt = locale === "pt";
  const copy = pt ? {
    heroEyebrow: "Natal na Faina",
    heroTitle: "O sabor do Natal na Praia da Vagueira",
    heroText: "Na Praia da Vagueira, reúna família, amigos ou colegas à mesa da Faina para celebrar o Natal com cozinha portuguesa, sabores do mar e um ambiente feito para partilhar.",
    benefitsEyebrow: "Jantares de Natal",
    benefitsTitle: "Tudo o que precisa para celebrar",
    benefitsText: "Da reunião em família ao jantar de empresa, fale diretamente com a nossa equipa e prepare a sua celebração de Natal na Faina.",
    finalEyebrow: "Reserve com antecedência",
    finalTitle: "Fale connosco sobre o seu jantar de Natal",
    finalText: "Indique-nos a data pretendida, o número de pessoas e o tipo de celebração. A equipa da Faina confirma consigo a disponibilidade e as opções para o grupo.",
    request: "Pedir informações", contact: "Contactar a Faina", contacts: "Ver contactos", reserve: "Reservar mesa",
  } : {
    heroEyebrow: "Christmas at Faina",
    heroTitle: "The taste of Christmas in Praia da Vagueira",
    heroText: "In Praia da Vagueira, bring family, friends or colleagues together at Faina to celebrate Christmas with Portuguese cooking, flavours of the sea and a welcoming setting made for sharing.",
    benefitsEyebrow: "Christmas dinners",
    benefitsTitle: "Everything you need to celebrate",
    benefitsText: "From a family gathering to a company dinner, speak directly with our team and plan your Christmas celebration at Faina.",
    finalEyebrow: "Book ahead",
    finalTitle: "Talk to us about your Christmas dinner",
    finalText: "To organise your Christmas dinner at Faina, tell us your preferred date, number of guests and type of celebration. Our team will confirm availability and options for the group with you.",
    request: "Request information", contact: "Contact Faina", contacts: "View contact details", reserve: "Book a table",
  };
  const benefits = pt ? [
    ["À mesa", "Grupos e celebrações", "Família, amigos e equipas encontram na Faina um espaço para celebrar o Natal à mesa, na Praia da Vagueira."],
    ["Para cada grupo", "Menus de Natal", "Fale diretamente com a nossa equipa para conhecer as opções, condições e disponibilidade para o seu grupo."],
    ["Planeie com tempo", "Reserva antecipada", "Indique-nos a data pretendida e o número de pessoas para verificarmos a disponibilidade e prepararmos a sua celebração."],
  ] : [
    ["At the table", "Groups and celebrations", "Family, friends and teams find a place at Faina to celebrate Christmas around the table in Praia da Vagueira."],
    ["For every group", "Christmas menus", "Speak directly with our team to learn about the options, arrangements and availability for your group."],
    ["Plan ahead", "Advance booking", "Tell us your preferred date and number of guests so we can check availability and prepare your celebration."],
  ];

  return (
    <ContentPage
      locale={locale}
      eyebrow={copy.heroEyebrow}
      title={copy.heroTitle}
      intro={copy.heroText}
      heroClassName="page-hero--christmas"
      heroImage={{
        src: images.christmasPage.poster,
        alt: pt ? "Poster dos jantares de Natal do Restaurante Faina" : "Faina Restaurant Christmas dinner poster",
        sizes: "(max-width: 720px) min(100vw - 48px, 330px), 360px",
      }}
      heroActions={<><a className="button button--gold christmas-button-icon" href={"mailto:" + business.email}><Mail />{copy.request}</a><a className="text-link christmas-link-icon" href={business.reservationUrl} target="_blank" rel="noreferrer">{copy.reserve}</a></>}
    >
      <div className="christmas-page">
        <section className="christmas-benefits section-shell">
          <div className="christmas-benefits__intro"><p className="eyebrow">{copy.benefitsEyebrow}</p><h2>{copy.benefitsTitle}</h2><p>{copy.benefitsText}</p></div>
          <div className="christmas-benefits__grid">{benefits.map(([eyebrow, title, text]) => <article key={title}><p className="christmas-benefits__eyebrow">{eyebrow}</p><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className="information-cta christmas-final-cta"><div className="section-shell"><p className="eyebrow eyebrow--gold">{copy.finalEyebrow}</p><h2>{copy.finalTitle}</h2><p>{copy.finalText}</p><div><a className="button button--gold christmas-button-icon" href={"mailto:" + business.email}><Mail />{copy.contact}</a><a className="text-link text-link--light christmas-link-icon" href={"tel:" + business.phone}><Phone />{business.displayPhone}</a><a className="text-link text-link--light" href={business.reservationUrl} target="_blank" rel="noreferrer">{copy.reserve}</a></div></div></section>
      </div>
    </ContentPage>
  );
}
