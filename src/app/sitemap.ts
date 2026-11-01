import type { MetadataRoute } from "next";
const base = "https://www.fainarestaurante.pt";
export default function sitemap(): MetadataRoute.Sitemap { return ["/pt", "/en", "/pt/ementa", "/en/menu"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "/pt" || path === "/en" ? 1 : 0.8 })); }
