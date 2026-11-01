import type { Metadata } from "next";
import { MenuPage } from "@/components/MenuPage";
export const metadata: Metadata = { title: "Ementa | Faina Restaurante", description: "Ementa do Faina Restaurante na Praia da Vagueira.", alternates: { canonical: "/pt/ementa", languages: { "pt-PT": "/pt/ementa", "en-GB": "/en/menu" } } };
export default function Ementa() { return <MenuPage locale="pt" />; }
