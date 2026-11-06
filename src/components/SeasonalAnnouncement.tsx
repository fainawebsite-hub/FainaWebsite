import Link from "next/link";
import { seasonalAnnouncement } from "@/content/seasonal";
import type { Locale } from "@/content/site";

export function SeasonalAnnouncement({ locale }: { locale: Locale }) {
  if (!seasonalAnnouncement.enabled) return null;
  const content = seasonalAnnouncement[locale];
  const href = locale === "pt" ? "/pt/jantares-de-natal" : "/en/christmas-dinners";
  return <div className="seasonal-announcement"><span>{content.message}</span><Link href={href}>{content.cta}</Link></div>;
}
