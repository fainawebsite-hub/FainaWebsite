import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
export const metadata: Metadata = { title: "About Faina | Faina Restaurant, Praia da Vagueira", description: "Discover Faina Restaurant, Portuguese cooking and its connection to Praia da Vagueira, Vagos.", alternates: { canonical: "/en/about", languages: { "pt-PT": "/pt/sobre", "en-GB": "/en/about", "x-default": "/pt/sobre" } } };
export default function About() { return <AboutPage locale="en" />; }
