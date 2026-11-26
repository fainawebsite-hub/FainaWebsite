import type { MetadataRoute } from "next";
import { metadataUrl } from "@/content/metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/" }, { userAgent: "Googlebot", allow: "/" }, { userAgent: "Bingbot", allow: "/" }, { userAgent: "OAI-SearchBot", allow: "/" }], sitemap: metadataUrl("/sitemap.xml") }; }
