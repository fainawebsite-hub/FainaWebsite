import { business } from "./business";

// Compatibilidade para páginas já existentes: a fonte de verdade é business.ts.
export const reservationUrl = business.reservationUrl;
export const restaurant = { ...business, locality: "Praia da Vagueira, Vagos, Aveiro, Portugal", siteUrl: business.url };

export const copy = {
  pt: {
    locale: "pt-PT", nav: [["Início", "#inicio"], ["O restaurante", "/sobre"], ["Ementa", "/ementa"], ["Grupos", "/grupos-eventos"], ["Galeria", "#galeria"], ["Natal", "/jantares-de-natal"], ["Contactos", "/contactos"]],
    reserve: "Reservar mesa", heroKicker: "Restaurante português na Praia da Vagueira", heroTitle: "Sabores do mar.\nTradição à mesa.",
    heroText: "Cozinha portuguesa na Praia da Vagueira, com peixe fresco do mercado, marisco, arrozes, caldeiradas e sabores preparados para partilhar.", viewMenu: "Ver ementa",
    introTitle: "Cozinha portuguesa na Praia da Vagueira", introText: "Na Faina, a cozinha começa no produto: peixe fresco, marisco e receitas portuguesas que celebram a ligação da Vagueira ao Atlântico.",
    storyTitle: "A nossa história", storyText: "A Faina nasceu de uma paixão pela cozinha portuguesa e pelo produto fresco. Ao longo dos anos, o projeto foi crescendo até encontrar na Praia da Vagueira a sua casa à mesa. Em 2025, Sónia Neves e Armindo abriram as portas do restaurante, um espaço de encontros demorados e sabor a mar.", discover: "Conhecer a Faina",
    seaTitle: "Do mar para a mesa", seaText: "Uma seleção inspirada na costa e na tradição portuguesa, preparada todos os dias com respeito pelo produto.", menuTitle: "Ementa", menuText: "Receitas portuguesas, marisco e pratos de mar para descobrir ao ritmo da mesa.", fullMenu: "Ver ementa completa",
    christmasTitle: "Jantares de Natal na Faina", christmasText: "Para famílias, amigos e equipas: menus de grupo e uma mesa preparada para celebrar.", christmasCta: "Marcar jantar de Natal", talk: "Falar connosco",
    momentsTitle: "Venha provar a Faina", momentsText: "Descubra peixe fresco, marisco e sabores portugueses preparados para uma refeição memorável junto à Praia da Vagueira.", galleryTitle: "À mesa na Faina", locationTitle: "Encontre-nos na Vagueira", directions: "Como chegar", call: "Ligar",
    footer: "Restaurante Faina na Praia da Vagueira, Vagos. Cozinha portuguesa, peixe fresco, marisco, arrozes, caldeiradas, carnes e alternativas vegetarianas.",
  },
  en: {
    locale: "en-GB", nav: [["Home", "#inicio"], ["The restaurant", "/about"], ["Menu", "/menu"], ["Groups", "/groups-events"], ["Gallery", "#galeria"], ["Christmas", "/christmas-dinners"], ["Contact", "/contact"]],
    reserve: "Book a table", heroKicker: "Portuguese restaurant in Praia da Vagueira", heroTitle: "Flavours from the sea.\nTradition at the table.",
    heroText: "Portuguese cooking in Praia da Vagueira, with fresh market fish, seafood, rice dishes, stews and flavours made for sharing.", viewMenu: "See the menu",
    introTitle: "Seafood cooking with soul", introText: "From our coast to your table. Fresh fish, shellfish and recipes that celebrate Portuguese cooking and the flavours of our region.",
    storyTitle: "Our Faina", storyText: "On Vagueira Beach, we welcome every table with the ease of people who know the sea well. Our cooking begins with the produce, respects tradition and makes room for long moments around the table.", discover: "Meet Faina",
    seaTitle: "From the sea to the table", seaText: "Fresh fish and selected shellfish, prepared with respect for the ingredient and tradition.", menuTitle: "Menu", menuText: "A small taste of what awaits. Our full menu is always ready for the table.", fullMenu: "See full menu",
    christmasTitle: "Christmas dinners at Faina", christmasText: "Bring family, friends or your team together for Christmas at Faina. Group menus and a welcoming setting made for sharing good times.", christmasCta: "Book your Christmas dinner", talk: "Talk to us",
    momentsTitle: "Come and taste Faina", momentsText: "Discover fresh fish, shellfish and Portuguese flavours prepared for a memorable meal by Praia da Vagueira.", galleryTitle: "At the table at Faina", locationTitle: "Find us in Vagueira", directions: "Get directions", call: "Call",
    footer: "A restaurant on Vagueira Beach where flavours from the sea meet Portuguese culinary tradition.",
  },
} as const;

export type Locale = keyof typeof copy;
