import Link from "next/link";
import { seasonalAnnouncement } from "@/content/seasonal";
import type { Locale } from "@/content/site";

export function SeasonalAnnouncement({ locale }: { locale: Locale }) {
  if (!seasonalAnnouncement.enabled) return null;
  const content = seasonalAnnouncement[locale];
  return <div className="seasonal-announcement"><span>{content.message}</span><Link href={`/${locale}#natal`}>{content.cta}</Link></div>;
}
