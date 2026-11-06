import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/" }, { userAgent: "Googlebot", allow: "/" }, { userAgent: "Bingbot", allow: "/" }, { userAgent: "OAI-SearchBot", allow: "/" }], sitemap: "https://www.fainarestaurante.pt/sitemap.xml" }; }
