import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
export const metadata: Metadata = { title: "Sobre a Faina | Restaurante Faina, Praia da Vagueira", description: "Conheça a história do Restaurante Faina, a cozinha portuguesa e a ligação à Praia da Vagueira, Vagos.", alternates: { canonical: "/pt/sobre", languages: { "pt-PT": "/pt/sobre", "en-GB": "/en/about", "x-default": "/pt/sobre" } } };
export default function Sobre() { return <AboutPage locale="pt" />; }
