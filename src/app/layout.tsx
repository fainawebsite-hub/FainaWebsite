import type { Metadata } from "next";
import { Caveat, DM_Sans, Oswald } from "next/font/google";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Oswald({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { metadataBase: new URL("https://www.fainarestaurante.pt"), title: "Faina Restaurante | Praia da Vagueira", description: "Cozinha portuguesa, peixe fresco e marisco na Praia da Vagueira.", robots: { index: true, follow: true } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-PT"><body className={`${body.variable} ${display.variable} ${script.variable}`}>{children}</body></html>; }
