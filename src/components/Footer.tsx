import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { images } from "@/content/images";
import type { Locale } from "@/content/site";

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.8l.4-3.1h-3.2V7.95c0-.9.25-1.52 1.57-1.52H17V3.66c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.25V9.9H7.62V13h2.78v8h3.3Z" fill="currentColor" /></svg>;
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.72 5.05a5.45 5.45 0 0 1-3.37-1.17A5.7 5.7 0 0 1 11.33.9h-3.1v14.3a2.58 2.58 0 1 1-1.77-2.45V9.61a5.74 5.74 0 1 0 4.87 5.67V8.02a8.43 8.43 0 0 0 4.94 1.59V6.52c.15.01.3.02.45.02Z" fill="currentColor" /></svg>;
}

export function Footer({ locale, text }: { locale: Locale; text: string }) {
  const menu = locale === "pt" ? "/pt/ementa" : "/en/menu";
  return <><div className="faina-separator faina-separator--white" aria-hidden="true"><Image src={images.separator} alt="" width={1920} height={140} sizes="100vw" /></div><footer className="site-footer"><div className="footer-top"><div><Image className="footer-logo" src={images.logo} alt="Faina" width={132} height={132}/><p>{text}</p></div><div><h3>{locale === "pt" ? "Explorar" : "Explore"}</h3><Link href={`/${locale}`}>{locale === "pt" ? "Início" : "Home"}</Link><Link href={locale === "pt" ? "/pt/sobre" : "/en/about"}>{locale === "pt" ? "O restaurante" : "The restaurant"}</Link><Link href={menu}>{locale === "pt" ? "Ementa" : "Menu"}</Link><Link href={locale === "pt" ? "/pt/grupos-eventos" : "/en/groups-events"}>{locale === "pt" ? "Grupos" : "Groups"}</Link><Link href={`/${locale}#galeria`}>{locale === "pt" ? "Galeria" : "Gallery"}</Link><Link href={locale === "pt" ? "/pt/jantares-de-natal" : "/en/christmas-dinners"}>{locale === "pt" ? "Natal" : "Christmas"}</Link></div><div><h3>{locale === "pt" ? "Contactos" : "Contact"}</h3><a href={`tel:${business.phone}`}>{business.displayPhone}</a><a href={`mailto:${business.email}`}>{business.email}</a><div className="socials"><a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a><a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a><a href={business.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><TikTokIcon /></a></div></div></div><div className="footer-bottom"><span>© 2026 Faina Restaurante. {locale === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span><span><a href="#">{locale === "pt" ? "Política de Privacidade" : "Privacy Policy"}</a><a href="#">{locale === "pt" ? "Livro de Reclamações" : "Complaints Book"}</a></span><a href="https://hospocreative.com" target="_blank" rel="noreferrer">Website by Hospo Creative</a></div></footer></>;
}
