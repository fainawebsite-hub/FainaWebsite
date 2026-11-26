const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

// Cloudflare Pages sets this variable at build time. The local fallback keeps
// local builds valid without publishing an accidental production canonical.
export const siteUrl = configuredSiteUrl || "http://localhost:3000";

export const metadataBase = new URL(siteUrl);

export const socialPreview = {
  url: new URL("/images/Faina%20Link%20Preview.png", metadataBase).toString(),
  width: 1200,
  height: 630,
  alt: "Faina Restaurante na Praia da Vagueira",
};

export const socialMetadata = {
  siteName: "Faina Restaurante",
  title: "Faina Restaurante | Peixe Fresco e Marisco na Praia da Vagueira",
  description: "Restaurante Faina na Praia da Vagueira, Vagos. Cozinha portuguesa, peixe fresco do mercado, marisco, caldeiradas e reservas online.",
};

export function metadataUrl(pathname: string) {
  return new URL(pathname, metadataBase).toString();
}
