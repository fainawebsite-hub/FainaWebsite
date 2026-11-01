import type { Metadata } from "next";
import { MenuPage } from "@/components/MenuPage";
export const metadata: Metadata = { title: "Menu | Faina Restaurant", description: "Faina Restaurant menu in Vagueira Beach.", alternates: { canonical: "/en/menu", languages: { "pt-PT": "/pt/ementa", "en-GB": "/en/menu" } } };
export default function Menu() { return <MenuPage locale="en" />; }
