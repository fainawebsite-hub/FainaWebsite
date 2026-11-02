"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const items = [
  ["Onde fica o Restaurante Faina?", "A Faina fica no Largo Parracho Branco, na Praia da Vagueira, concelho de Vagos, distrito de Aveiro."],
  ["É possível reservar mesa?", "Sim. Pode reservar online através do botão Reservar Mesa ou contactar a Faina pelo 234 794 060."],
  ["A Faina tem esplanada?", "Sim, o restaurante dispõe de esplanada."],
  ["Há estacionamento perto?", "Existe estacionamento de rua gratuito nas proximidades."],
];

export function LocalFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="local-faq section-shell" aria-labelledby="faq-title"><div><p className="eyebrow">Informação útil</p><h2 id="faq-title">Antes de chegar</h2></div><div className="faq-list">{items.map(([question, answer], index) => <article key={question} className="faq-item"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>{question}<ChevronDown /></button>{open === index && <p>{answer}</p>}</article>)}</div></section>;
}
