import type { Metadata } from "next";
import { MenuPage } from "@/components/MenuPage";
export const metadata: Metadata = { title: "Menu | Faina Restaurant — Praia da Vagueira", description: "Explore Faina Restaurant's menu in Praia da Vagueira: fresh fish, shellfish, seafood rice, stews, salt cod, meat, vegetarian options and desserts.", alternates: { canonical: "/en/menu", languages: { "pt-PT": "/pt/ementa", "en-GB": "/en/menu", "x-default": "/pt/ementa" } } };
export default function Menu() { return <MenuPage locale="en" />; }
