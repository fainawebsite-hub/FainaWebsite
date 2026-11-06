import type { Metadata } from "next";
import { ChristmasPage } from "@/components/ChristmasPage";
export const metadata: Metadata = { title: "Christmas Dinners in Aveiro and Vagueira | Faina Restaurant", description: "Christmas dinners for families, friends and companies in Praia da Vagueira, Vagos. Ask about group options and book ahead.", alternates: { canonical: "/en/christmas-dinners", languages: { "pt-PT": "/pt/jantares-de-natal", "en-GB": "/en/christmas-dinners", "x-default": "/pt/jantares-de-natal" } } };
export default function ChristmasDinners() { return <ChristmasPage locale="en" />; }
