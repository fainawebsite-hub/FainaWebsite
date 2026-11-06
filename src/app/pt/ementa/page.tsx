import type { Metadata } from "next";
import { MenuPage } from "@/components/MenuPage";
export const metadata: Metadata = { title: "Ementa | Restaurante Faina — Praia da Vagueira", description: "Consulte a ementa do Restaurante Faina na Praia da Vagueira: peixe fresco, marisco, arroz de marisco, caldeiradas, bacalhau, carnes, opções vegetarianas e sobremesas.", alternates: { canonical: "/pt/ementa", languages: { "pt-PT": "/pt/ementa", "en-GB": "/en/menu", "x-default": "/pt/ementa" } } };
export default function Ementa() { return <MenuPage locale="pt" />; }
