import type { Metadata } from "next";
import { Caveat, DM_Sans, Oswald } from "next/font/google";
import { HomeScrollReset } from "@/components/HomeScrollReset";
import { metadataBase, socialMetadata, socialPreview } from "@/content/metadata";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const display = Oswald({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const script = Caveat({ variable: "--font-script", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { metadataBase, title: socialMetadata.title, description: socialMetadata.description, applicationName: socialMetadata.siteName, robots: { index: true, follow: true }, openGraph: { title: socialMetadata.title, description: socialMetadata.description, type: "website", url: "/", siteName: socialMetadata.siteName, locale: "pt_PT", images: [socialPreview] }, twitter: { card: "summary_large_image", title: socialMetadata.title, description: socialMetadata.description, images: [socialPreview] }, icons: { icon: "/images/brand/logo/faina-logo.png", apple: "/images/brand/logo/faina-logo.png" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-PT"><body className={`${body.variable} ${display.variable} ${script.variable}`}><HomeScrollReset />{children}</body></html>; }
