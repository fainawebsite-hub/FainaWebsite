"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  ["Onde fica o Restaurante Faina?", "A Faina fica no Largo Parracho Branco, na Praia da Vagueira, concelho de Vagos, distrito de Aveiro."],
  ["Onde comer peixe fresco na Praia da Vagueira?", "A Faina serve peixe fresco do mercado, preparado de acordo com a disponibilidade diária."],
  ["A Faina serve marisco?", "Sim. A ementa inclui marisco e pratos de mar, sujeitos à lota e disponibilidade."],
  ["A Faina tem opções vegetarianas?", "Sim. A ementa inclui sugestões vegetarianas."],
  ["É possível reservar para grupos?", "Sim. Contacte a Faina para confirmar disponibilidade e opções para grupos."],
  ["A Faina tem esplanada?", "Sim, o restaurante dispõe de esplanada."],
  ["Há estacionamento perto?", "Existe estacionamento de rua gratuito nas proximidades."],
  ["Como posso reservar mesa?", "Pode reservar online através do botão Reservar Mesa ou contactar a Faina pelo 234 794 060."],
];

export function LocalFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="local-faq section-shell" aria-labelledby="faq-title"><div><p className="eyebrow">Informação útil</p><h2 id="faq-title">Antes de chegar</h2></div><div className="faq-list">{items.map(([question, answer], index) => <article key={question} className="faq-item"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>{question}<ChevronDown /></button>{open === index && <p>{answer}</p>}</article>)}</div></section>;
}
