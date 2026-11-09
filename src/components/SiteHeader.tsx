"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { HomeLink } from "@/components/HomeLink";
import { business } from "@/content/business";
import { images } from "@/content/images";

type Props = { locale: "pt" | "en"; nav: readonly (readonly [string, string])[]; reserve: string };

export function SiteHeader({ locale, nav, reserve }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pt = locale === "pt";
  useEffect(() => { const listener = () => setScrolled(window.scrollY > 20); listener(); window.addEventListener("scroll", listener, { passive: true }); return () => window.removeEventListener("scroll", listener); }, []);
  const menu = locale === "pt" ? "/pt/ementa" : "/en/menu";
  const home = `/${locale}`;
  const destination = (name: string, href: string) => href === "#inicio" ? home : name.toLowerCase().includes("ementa") || name === "Menu" ? menu : `${home}${href}`;
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <HomeLink href={home} className="brand" aria-label="Faina Restaurante, página inicial"><Image src={images.logo} alt="Faina" width={108} height={108} priority /></HomeLink>
    <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(([name, href]) => { const target = destination(name, href); return target === home ? <HomeLink key={href} href={target}>{name}</HomeLink> : <Link key={href} href={target}>{name}</Link>; })}</nav>
    <div className="header-actions"><div className="language-switch" aria-label={pt ? "Idioma" : "Language"}><Link className={locale === "pt" ? "active" : ""} href="/pt">PT</Link><span>|</span><Link className={locale === "en" ? "active" : ""} href="/en">EN</Link></div><a className="button button--gold header-book" href={business.reservationUrl} target="_blank" rel="noreferrer">{reserve}</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? (pt ? "Fechar menu" : "Close menu") : (pt ? "Abrir menu" : "Open menu")}>{open ? <X /> : <Menu />}</button></div>
    {open && <div className="mobile-menu"><nav>{nav.map(([name, href]) => { const target = destination(name, href); return target === home ? <HomeLink onClick={() => setOpen(false)} key={href} href={target}>{name}</HomeLink> : <Link onClick={() => setOpen(false)} key={href} href={target}>{name}</Link>; })}</nav><a className="button button--gold" href={business.reservationUrl} target="_blank" rel="noreferrer">{reserve}</a></div>}
  </header>;
}
