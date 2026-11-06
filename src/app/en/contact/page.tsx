import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
export const metadata: Metadata = { title: "Contact | Faina Restaurant, Praia da Vagueira", description: "Contact details, location and opening hours for Faina Restaurant in Praia da Vagueira, Vagos, Aveiro.", alternates: { canonical: "/en/contact", languages: { "pt-PT": "/pt/contactos", "en-GB": "/en/contact", "x-default": "/pt/contactos" } } };
export default function Contact() { return <ContactPage locale="en" />; }
