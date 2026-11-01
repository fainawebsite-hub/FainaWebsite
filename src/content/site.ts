export const reservationUrl = "https://www.vagueirabairrodigital.pt/pt/loja/88526/restaurante-faina";

export const restaurant = {
  name: "Faina Restaurante", phone: "+351234794060", displayPhone: "234 794 060",
  email: "restaurantefaina@gmail.com", instagram: "https://www.instagram.com/faina.restaurante/",
  facebook: "https://www.facebook.com/p/Faina-Restaurante-61573816637674/",
  locality: "Praia da Vagueira, Aveiro, Portugal", siteUrl: "https://www.fainarestaurante.pt",
};

export const copy = {
  pt: {
    locale: "pt-PT", nav: [["Início", "#inicio"], ["O restaurante", "#restaurante"], ["Ementa", "#ementa"], ["Galeria", "#galeria"], ["Natal", "#natal"], ["Contactos", "#contactos"]],
    reserve: "Reservar mesa", heroKicker: "para começar esta viagem de sabores e tradições", heroTitle: "Sabores do mar\ntradição à mesa",
    heroText: "Na Faina, cada prato conta uma história. Cozinha portuguesa, peixe fresco, marisco e sabores que celebram a nossa ligação ao mar.", viewMenu: "Ver ementa",
    introTitle: "Cozinha de mar com alma", introText: "Da nossa costa para a mesa. Peixe fresco, marisco e receitas que celebram a cozinha portuguesa e os sabores da nossa região.",
    storyTitle: "A nossa Faina", storyText: "Na Praia da Vagueira, recebemos cada mesa com a simplicidade de quem conhece bem o mar. A nossa cozinha parte do produto, respeita a tradição e deixa espaço para os momentos que se prolongam à volta da mesa.", discover: "Conhecer a Faina",
    seaTitle: "Do mar para a mesa", seaText: "Peixe fresco e marisco selecionado, preparados com respeito pelo produto e pela tradição.", menuTitle: "Ementa", menuText: "Uma seleção para abrir o apetite. A ementa completa está sempre pronta para a mesa.", fullMenu: "Ver ementa completa",
    christmasTitle: "Jantares de Natal na Faina", christmasText: "Junte a família, os amigos ou a equipa e celebre o Natal à mesa da Faina. Menus para grupos e um ambiente pensado para partilhar bons momentos.", christmasCta: "Marcar jantar de Natal", talk: "Falar connosco",
    momentsTitle: "Momentos para partilhar", momentsText: "Boa comida, bons vinhos e uma mesa onde há sempre lugar para mais um.", galleryTitle: "À mesa na Faina", locationTitle: "Encontre-nos na Vagueira", directions: "Como chegar", call: "Ligar",
    footer: "Restaurante na Praia da Vagueira onde os sabores do mar encontram a tradição da cozinha portuguesa.",
  },
  en: {
    locale: "en-GB", nav: [["Home", "#inicio"], ["The restaurant", "#restaurante"], ["Menu", "#ementa"], ["Gallery", "#galeria"], ["Christmas", "#natal"], ["Contact", "#contactos"]],
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
