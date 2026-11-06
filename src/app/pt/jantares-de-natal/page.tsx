import type { Metadata } from "next";
import { ChristmasPage } from "@/components/ChristmasPage";
export const metadata: Metadata = { title: "Jantares de Natal em Aveiro e Vagueira | Restaurante Faina", description: "Jantares de Natal para famílias, amigos e empresas na Praia da Vagueira, Vagos. Consulte opções para grupos e reserve antecipadamente.", alternates: { canonical: "/pt/jantares-de-natal", languages: { "pt-PT": "/pt/jantares-de-natal", "en-GB": "/en/christmas-dinners", "x-default": "/pt/jantares-de-natal" } } };
export default function JantaresDeNatal() { return <ChristmasPage locale="pt" />; }
