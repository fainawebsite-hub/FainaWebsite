import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
export const metadata: Metadata = { title: "Contactos | Restaurante Faina, Praia da Vagueira", description: "Contactos, localização e horários do Restaurante Faina na Praia da Vagueira, Vagos, Aveiro.", alternates: { canonical: "/pt/contactos", languages: { "pt-PT": "/pt/contactos", "en-GB": "/en/contact", "x-default": "/pt/contactos" } } };
export default function Contactos() { return <ContactPage locale="pt" />; }
