import type { Metadata } from "next";
import { GroupsPage } from "@/components/GroupsPage";
export const metadata: Metadata = { title: "Groups and Events | Faina Restaurant, Vagueira", description: "Group meals, celebrations and company dinners at Faina Restaurant in Praia da Vagueira, Vagos.", alternates: { canonical: "/en/groups-events", languages: { "pt-PT": "/pt/grupos-eventos", "en-GB": "/en/groups-events", "x-default": "/pt/grupos-eventos" } } };
export default function GroupsEvents() { return <GroupsPage locale="en" />; }
