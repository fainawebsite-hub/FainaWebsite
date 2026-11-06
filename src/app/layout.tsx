import type { Metadata } from "next";
import { Caveat, DM_Sans, Oswald } from "next/font/google";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Oswald({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { metadataBase: new URL("https://www.fainarestaurante.pt"), title: "Faina Restaurante | Praia da Vagueira", description: "Restaurante português na Praia da Vagueira, Vagos. Peixe fresco, marisco, arrozes, caldeiradas e cozinha portuguesa.", applicationName: "Faina Restaurante", robots: { index: true, follow: true }, openGraph: { type: "website", siteName: "Faina Restaurante", locale: "pt_PT", images: ["/images/pages/home/hero/Mediterranean%20Seafood%20Feast%20at%20Faina.png"] }, icons: { icon: "/images/brand/logo/faina-logo.png", apple: "/images/brand/logo/faina-logo.png" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-PT"><body className={`${body.variable} ${display.variable} ${script.variable}`}>{children}</body></html>; }
