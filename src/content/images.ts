export const images = {
  logo: "/images/brand/logo/faina-logo.png",
  tileRail: "/images/brand/patterns/faina-azulejo-strip.png",
  hero: "/images/home/hero/hero-main.jpg",
  about: "/images/home/about/owners.jpg",
  categories: {
    fish: "/images/home/categories/peixe-fresco.jpg",
    seafood: "/images/home/categories/marisco.jpg",
    rice: "/images/home/categories/arrozes-caldeiradas.jpg",
    specials: "/images/home/categories/especialidades.jpg",
  },
  moments: "/images/home/moments/moments-main.webp",
  christmas: "/images/home/christmas/christmas-main.jpg",
  gallery: Array.from({ length: 6 }, (_, index) => `/images/gallery/gallery-${String(index + 1).padStart(2, "0")}.jpg`),
  location: "/images/location/exterior.jpg",
} as const;
