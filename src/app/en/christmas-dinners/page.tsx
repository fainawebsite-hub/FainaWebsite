import type { Metadata } from "next";
import { ChristmasPage } from "@/components/ChristmasPage";
export const metadata: Metadata = { title: "Christmas Dinners in Praia da Vagueira | Faina Restaurant", description: "Christmas dinners at Faina in Praia da Vagueira. Bring family, friends or colleagues together and speak with us about groups and availability.", alternates: { canonical: "/en/christmas-dinners", languages: { "pt-PT": "/pt/jantares-de-natal", "en-GB": "/en/christmas-dinners", "x-default": "/pt/jantares-de-natal" } } };
export default function ChristmasDinners() { return <ChristmasPage locale="en" />; }
