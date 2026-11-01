import Image from "next/image";
import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";
import { restaurant, type Locale } from "@/content/site";

export function Footer({ locale, text }: { locale: Locale; text: string }) {
  const menu = locale === "pt" ? "/pt/ementa" : "/en/menu";
  return <footer className="site-footer"><div className="footer-top"><div><Image className="footer-logo" src="/images/faina-logo.png" alt="Faina" width={110} height={110}/><p>{text}</p></div><div><h3>{locale === "pt" ? "Explorar" : "Explore"}</h3><Link href={`/${locale}`}>{locale === "pt" ? "Início" : "Home"}</Link><Link href={`/${locale}#restaurante`}>{locale === "pt" ? "O restaurante" : "The restaurant"}</Link><Link href={menu}>{locale === "pt" ? "Ementa" : "Menu"}</Link><Link href={`/${locale}#natal`}>Natal</Link></div><div><h3>{locale === "pt" ? "Contactos" : "Contact"}</h3><a href={`tel:${restaurant.phone}`}>{restaurant.displayPhone}</a><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a><div className="socials"><a href={restaurant.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a><a href={restaurant.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><MessageCircle /></a></div></div></div><div className="footer-bottom"><span>© 2026 Faina Restaurante. {locale === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span><span><a href="#">{locale === "pt" ? "Política de Privacidade" : "Privacy Policy"}</a><a href="#">{locale === "pt" ? "Livro de Reclamações" : "Complaints Book"}</a></span><a href="https://hospocreative.com" target="_blank" rel="noreferrer">Website by Hospo Creative</a></div></footer>;
}
