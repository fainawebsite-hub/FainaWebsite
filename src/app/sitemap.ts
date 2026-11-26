import type { MetadataRoute } from "next";
import { metadataUrl } from "@/content/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap { return ["/pt", "/en", "/pt/ementa", "/en/menu", "/pt/sobre", "/en/about", "/pt/grupos-eventos", "/en/groups-events", "/pt/jantares-de-natal", "/en/christmas-dinners", "/pt/contactos", "/en/contact"].map((path) => ({ url: metadataUrl(path), lastModified: new Date(), changeFrequency: "weekly", priority: path === "/pt" || path === "/en" ? 1 : 0.8 })); }
