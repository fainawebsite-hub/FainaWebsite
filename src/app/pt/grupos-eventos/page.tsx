import type { Metadata } from "next";
import { GroupsPage } from "@/components/GroupsPage";
export const metadata: Metadata = { title: "Grupos e Eventos | Restaurante Faina, Vagueira", description: "Refeições de grupo, celebrações e jantares de empresa no Restaurante Faina, na Praia da Vagueira, Vagos.", alternates: { canonical: "/pt/grupos-eventos", languages: { "pt-PT": "/pt/grupos-eventos", "en-GB": "/en/groups-events", "x-default": "/pt/grupos-eventos" } } };
export default function GruposEventos() { return <GroupsPage locale="pt" />; }
