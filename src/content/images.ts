// Every page owns a clearly named set of assets under public/images/pages.
export const images = {
  brand: {
    logo: "/images/brand/logo/faina-logo.png",
    tileRail: "/images/brand/patterns/faina-azulejo-strip.png",
    separator: "/images/brand/patterns/separador140.png",
  },
  home: {
    hero: { large: "/images/pages/home/hero/hero-large.png", smallOne: "/images/pages/home/hero/hero-small-01.png", smallTwo: "/images/pages/home/hero/hero-small-02.png" },
    categories: { fish: "/images/pages/home/categories/fresh-fish.jpg", seafood: "/images/pages/home/categories/shellfish.jpg", rice: "/images/pages/home/categories/rice-and-stews.jpg", specials: "/images/pages/home/categories/house-specialities.jpeg" },
    christmas: "/images/pages/home/christmas/christmas-dining.jpg",
    experience: "/images/pages/home/experience/restaurant-moments.jpg",
    gallery: ["/images/pages/home/gallery/gallery-01.png", "/images/pages/home/gallery/gallery-02.png", "/images/pages/home/gallery/gallery-03.png", "/images/pages/home/gallery/gallery-04.png", "/images/pages/home/gallery/gallery-05.jpg", "/images/pages/home/gallery/gallery-06.jpg", "/images/pages/home/gallery/gallery-07.jpg", "/images/pages/home/gallery/gallery-08.jpeg", "/images/pages/home/gallery/gallery-09.png", "/images/pages/home/gallery/gallery-10.jpg", "/images/pages/home/gallery/gallery-11.jpg", "/images/pages/home/gallery/gallery-12.jpg", "/images/pages/home/gallery/gallery-13.jpeg", "/images/pages/home/gallery/gallery-14.jpg", "/images/pages/home/gallery/gallery-15.jpg", "/images/pages/home/gallery/gallery-16.jpg", "/images/pages/home/gallery/gallery-17.jpg", "/images/pages/home/gallery/gallery-18.png", "/images/pages/home/gallery/gallery-19.jpg", "/images/pages/home/gallery/gallery-20.jpg", "/images/pages/home/gallery/gallery-21.png", "/images/pages/home/gallery/gallery-22.png", "/images/pages/home/gallery/gallery-23.png", "/images/pages/home/gallery/gallery-24.png", "/images/pages/home/gallery/gallery-25.png"],
  },
  aboutPage: {
    hero: "/images/pages/about/Faina Space dining room.png",
    owners: "/images/pages/about/Owners.png",
    entrance: "/images/pages/about/Faina Space Entrance.png",
  },
  groups: { hero: "/images/pages/groups/groups-hero.jpg" },
  christmasPage: { hero: "/images/pages/christmas/christmas-hero.jpg", table: "/images/pages/christmas/christmas-table.jpg" },
  // Existing component aliases, all resolved to the organised page folders above.
  logo: "/images/brand/logo/faina-logo.png",
  tileRail: "/images/brand/patterns/faina-azulejo-strip.png",
  separator: "/images/brand/patterns/separador140.png",
  hero: "/images/pages/home/hero/hero-large.png",
  heroSmallOne: "/images/pages/home/hero/hero-small-01.png",
  heroSmallTwo: "/images/pages/home/hero/hero-small-02.png",
  about: "/images/pages/about/Owners.png",
  categories: { fish: "/images/pages/home/categories/fresh-fish.jpg", seafood: "/images/pages/home/categories/shellfish.jpg", rice: "/images/pages/home/categories/rice-and-stews.jpg", specials: "/images/pages/home/categories/house-specialities.jpeg" },
  moments: "/images/pages/home/experience/restaurant-moments.jpg",
  christmas: "/images/pages/christmas/christmas-hero.jpg",
  gallery: ["/images/pages/home/gallery/gallery-01.png", "/images/pages/home/gallery/gallery-02.png", "/images/pages/home/gallery/gallery-03.png", "/images/pages/home/gallery/gallery-04.png", "/images/pages/home/gallery/gallery-05.jpg", "/images/pages/home/gallery/gallery-06.jpg", "/images/pages/home/gallery/gallery-07.jpg", "/images/pages/home/gallery/gallery-08.jpeg", "/images/pages/home/gallery/gallery-09.png", "/images/pages/home/gallery/gallery-10.jpg", "/images/pages/home/gallery/gallery-11.jpg", "/images/pages/home/gallery/gallery-12.jpg", "/images/pages/home/gallery/gallery-13.jpeg", "/images/pages/home/gallery/gallery-14.jpg", "/images/pages/home/gallery/gallery-15.jpg", "/images/pages/home/gallery/gallery-16.jpg", "/images/pages/home/gallery/gallery-17.jpg", "/images/pages/home/gallery/gallery-18.png", "/images/pages/home/gallery/gallery-19.jpg", "/images/pages/home/gallery/gallery-20.jpg", "/images/pages/home/gallery/gallery-21.png", "/images/pages/home/gallery/gallery-22.png", "/images/pages/home/gallery/gallery-23.png", "/images/pages/home/gallery/gallery-24.png", "/images/pages/home/gallery/gallery-25.png"],
  location: "/images/pages/home/gallery/gallery-06.jpg",
} as const;
