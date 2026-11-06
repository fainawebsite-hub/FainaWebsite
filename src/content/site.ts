import { business } from "./business";

// Compatibilidade para páginas já existentes: a fonte de verdade é business.ts.
export const reservationUrl = business.reservationUrl;
export const restaurant = { ...business, locality: "Praia da Vagueira, Vagos, Aveiro, Portugal", siteUrl: business.url };

export const copy = {
  pt: {
    locale: "pt-PT", nav: [["Início", "#inicio"], ["O restaurante", "/sobre"], ["Ementa", "/ementa"], ["Grupos", "/grupos-eventos"], ["Galeria", "#galeria"], ["Natal", "/jantares-de-natal"], ["Contactos", "/contactos"]],
    reserve: "Reservar mesa", heroKicker: "Restaurante português na Praia da Vagueira", heroTitle: "Sabores do mar,\ntradição à mesa",
    heroText: "Cozinha portuguesa na Praia da Vagueira, com peixe fresco do mercado, marisco, arrozes, caldeiradas e sabores preparados para partilhar.", viewMenu: "Ver ementa",
    introTitle: "Cozinha portuguesa na Praia da Vagueira", introText: "Na Faina, a cozinha começa no produto: peixe fresco, marisco e receitas portuguesas que celebram a ligação da Vagueira ao Atlântico.",
    storyTitle: "A nossa história", storyText: "A Faina começou como Faina Take Away, há cerca de sete anos, e cresceu entre o catering e o food truck. Em 2025, Sónia Neves e Armindo abriram as portas do restaurante na Praia da Vagueira, um espaço de cozinha portuguesa, encontros demorados e sabor a mar.", discover: "Conhecer a Faina",
    seaTitle: "Do mar para a mesa", seaText: "Uma seleção inspirada na costa e na tradição portuguesa, preparada todos os dias com respeito pelo produto.", menuTitle: "Ementa", menuText: "Receitas portuguesas, marisco e pratos de mar para descobrir ao ritmo da mesa.", fullMenu: "Ver ementa completa",
    christmasTitle: "Jantares de Natal na Faina", christmasText: "Para famílias, amigos e equipas: menus de grupo e uma mesa preparada para celebrar.", christmasCta: "Marcar jantar de Natal", talk: "Falar connosco",
    momentsTitle: "Momentos para partilhar", momentsText: "A Faina é para almoços demorados, jantares em família e celebrações que ficam na memória.", galleryTitle: "À mesa na Faina", locationTitle: "Encontre-nos na Vagueira", directions: "Como chegar", call: "Ligar",
    footer: "Restaurante Faina na Praia da Vagueira, Vagos. Cozinha portuguesa, peixe fresco, marisco, arrozes, caldeiradas, carnes e alternativas vegetarianas.",
  },
  en: {
    locale: "en-GB", nav: [["Home", "#inicio"], ["The restaurant", "/about"], ["Menu", "/menu"], ["Groups", "/groups-events"], ["Gallery", "#galeria"], ["Christmas", "/christmas-dinners"], ["Contact", "/contact"]],
    reserve: "Book a table", heroKicker: "a journey through flavours and tradition starts here", heroTitle: "Flavours from the sea\ntradition at the table",
    heroText: "At Faina, every dish tells a story. Portuguese cooking, fresh fish, shellfish and flavours that honour our connection to the sea.", viewMenu: "See the menu",
    introTitle: "Seafood cooking with soul", introText: "From our coast to your table. Fresh fish, shellfish and recipes that celebrate Portuguese cooking and the flavours of our region.",
    storyTitle: "Our Faina", storyText: "On Vagueira Beach, we welcome every table with the ease of people who know the sea well. Our cooking begins with the produce, respects tradition and makes room for long moments around the table.", discover: "Meet Faina",
    seaTitle: "From the sea to the table", seaText: "Fresh fish and selected shellfish, prepared with respect for the ingredient and tradition.", menuTitle: "Menu", menuText: "A small taste of what awaits. Our full menu is always ready for the table.", fullMenu: "See full menu",
    christmasTitle: "Christmas dinners at Faina", christmasText: "Bring family, friends or your team together for Christmas at Faina. Group menus and a welcoming setting made for sharing good times.", christmasCta: "Book your Christmas dinner", talk: "Talk to us",
    momentsTitle: "Moments made for sharing", momentsText: "Good food, good wine and a table where there is always room for one more.", galleryTitle: "At the table at Faina", locationTitle: "Find us in Vagueira", directions: "Get directions", call: "Call",
    footer: "A restaurant on Vagueira Beach where flavours from the sea meet Portuguese culinary tradition.",
  },
} as const;

export type Locale = keyof typeof copy;
