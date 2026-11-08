import type { Metadata } from "next";
import { ChristmasPage } from "@/components/ChristmasPage";
export const metadata: Metadata = { title: "Jantares de Natal na Praia da Vagueira | Faina Restaurante", description: "Jantares de Natal na Faina, na Praia da Vagueira. Reúna família, amigos ou colegas à mesa e fale connosco sobre menus, grupos e disponibilidade.", alternates: { canonical: "/pt/jantares-de-natal", languages: { "pt-PT": "/pt/jantares-de-natal", "en-GB": "/en/christmas-dinners", "x-default": "/pt/jantares-de-natal" } } };
export default function JantaresDeNatal() { return <ChristmasPage locale="pt" />; }
