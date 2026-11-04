export type MenuLocale = "pt" | "en";
export type LocalizedText = Record<MenuLocale, string>;
export type MenuItem = { category: LocalizedText; name: LocalizedText; price: string; featured: boolean; available: boolean };
export type MenuCategory = { id: string; title: LocalizedText; intro: LocalizedText; availability?: LocalizedText; items: Omit<MenuItem, "category">[] };

const text = (pt: string, en: string): LocalizedText => ({ pt, en });
const item = (pt: string, en: string, price: string, featured = false) => ({ name: text(pt, en), price, featured, available: true });

// Preços transcritos da carta física da Faina em novembro de 2026.
// Confirmar preços e disponibilidade com o restaurante antes de produção.
export const menuCategories: MenuCategory[] = [
  { id: "entradas", title: text("Entradas", "Starters"), intro: text("Para começar a mesa.", "To begin the table."), items: [
    item("Azeitonas", "Olives", "2,00 €", true), item("Croquetes de alheira com mostarda e mel", "Alheira sausage croquettes with mustard and honey", "7,00 €", true), item("Enguias fritas", "Fried eel", "18,50 €", true), item("Manteiga aromatizada", "Herbed butter", "2,50 €"), item("Pão", "Bread", "2,50 €"), item("Peixinhos do mar fritos", "Fried baby fish", "5,50 €"), item("Queijinho com doce de abóbora", "Cheese with pumpkin jam", "4,50 €"), item("Salada de polvo", "Octopus salad", "16,00 €"), item("Lulinhas fritas", "Fried baby squid", "15,00 €"),
  ] },
  { id: "sopas", title: text("Sopas", "Soups"), intro: text("Sabores simples, feitos todos os dias.", "Simple flavours, prepared every day."), items: [
    item("Sopa de legumes", "Vegetable soup", "3,00 €"), item("Sopa de peixe", "Fish soup", "5,50 €"),
  ] },
  { id: "extras", title: text("Extras", "Sides"), intro: text("Acompanhamentos para completar o prato.", "Sides to complete your dish."), items: [
    item("Extra de arroz", "Extra rice", "3,00 €"), item("Extra de batata frita", "Extra fries", "3,00 €"), item("Extra de migas", "Migas, traditional Portuguese bread crumbs", "4,50 €"), item("Extra de legumes", "Extra vegetables", "4,50 €"), item("Extra de batata a murro", "Smashed roast potatoes", "4,50 €"), item("Extra de salada", "Extra salad", "4,00 €"), item("Extra de ovo", "Extra egg", "1,50 €"),
  ] },
  { id: "mariscos", title: text("Mariscos", "Shellfish"), intro: text("Seleção da costa para partilhar.", "A selection from the coast, made for sharing."), availability: text("Sujeito à lota e disponibilidade diária.", "Subject to the daily catch and availability."), items: [
    item("Amêijoas à pescador, dose", "Fisherman-style clams, portion", "18,00 €", true), item("Camarão da costa, dose", "Coastal prawns, portion", "19,50 €", true), item("Camarão tigre grelhado, kg", "Grilled tiger prawns, per kg", "100,00 €", true), item("Sapateira recheada, unidade", "Stuffed crab, whole", "35,00 €", true), item("Gambas ao alho", "Garlic prawns", "18,00 €"), item("Travessa de mariscos", "Seafood platter", "110,00 €"),
  ] },
  { id: "peixe", title: text("Sugestões de peixe", "Fish Specialities"), intro: text("Cozinha de mar, tradição e produto de mercado.", "Seafood cooking, tradition and market produce."), availability: text("Peixe fresco sujeito à lota e disponibilidade diária.", "Fresh fish is subject to the daily catch and availability."), items: [
    item("Arroz de marisco com lagosta, 2 pessoas", "Seafood rice with lobster, for 2 people", "42,00 €", true), item("Arroz de tamboril com gambas, 2 pessoas", "Monkfish and prawn rice, for 2 people", "42,00 €", true), item("Bacalhau à Faina", "Faina-style salt cod", "19,50 €", true), item("Bacalhau à lagareiro", "Lagareiro-style salt cod", "19,50 €"), item("Bacalhau com natas", "Creamy salt cod bake", "15,00 €"), item("Caldeirada de enguias, 1 pessoa", "Eel stew, for 1 person", "23,00 €"), item("Caldeirada mista, 1 pessoa", "Mixed fish stew, for 1 person", "19,00 €"), item("Enguias fritas com acompanhamento, 1 pessoa", "Fried eel with side dish, for 1 person", "22,00 €"), item("Espetada de gambas com fruta", "Prawn skewer with fruit", "21,00 €"), item("Cataplana de marisco, 2 pessoas", "Seafood cataplana, for 2 people", "60,00 €"), item("Polvo à chef", "Chef’s octopus", "21,00 €"), item("Choco frito com arroz de berbigão", "Fried cuttlefish with cockle rice", "24,00 €"), item("Peixe fresco do mercado até 0,600 kg", "Fresh market fish up to 0.600 kg", "49,50 €/kg"), item("Peixe fresco do mercado acima de 0,600 kg", "Fresh market fish above 0.600 kg", "58,00 €/kg"), item("Sardinha", "Sardines", "16,00 €"), item("Carapau", "Horse mackerel", "15,00 €"),
  ] },
  { id: "carne", title: text("Sugestões de carne", "Meat Specialities"), intro: text("Alternativas da terra, preparadas com o mesmo cuidado.", "Land-based favourites prepared with the same care."), items: [
    item("Bife ao molho Madeira", "Steak with Madeira sauce", "18,00 €"), item("Naco à chef", "Chef’s steak", "19,00 €"), item("Picanha", "Picanha steak", "19,00 €"), item("Espetada mista", "Mixed meat skewer", "17,50 €"), item("Lombinhos com gambas", "Tenderloin medallions with prawns", "18,50 €"), item("Escalopes de frango com molho de cogumelos", "Chicken escalopes with mushroom sauce", "15,50 €"), item("Bitoque de vitela", "Veal bitoque", "15,50 €"), item("Vitela no forno, sob consulta", "Oven-roasted veal, subject to availability", "16,50 €"),
  ] },
  { id: "vegan", title: text("Sugestões vegan", "Vegan Suggestions"), intro: text("Opções pensadas para todos à mesa.", "Options designed for everyone at the table."), items: [
    item("Ratatouille", "Ratatouille", "15,00 €"), item("Sugestão vegan da chef", "Chef’s vegan suggestion", "15,50 €"),
  ] },
  { id: "infantil", title: text("Sugestão infantil", "Children’s Menu"), intro: text("Para os mais pequenos.", "For younger guests."), items: [
    item("Douradinhos de frango", "Chicken fingers", "11,50 €"), item("Ovo estrelado com batatas fritas", "Fried egg with fries", "7,00 €"),
  ] },
  { id: "sobremesas", title: text("Sobremesas", "Desserts"), intro: text("Para terminar sem pressa.", "To finish without rushing."), items: [
    item("Cheesecake", "Cheesecake", "5,50 €"), item("Pudim caseiro", "Homemade pudding", "4,50 €"), item("Mousse de chocolate", "Chocolate mousse", "4,50 €"), item("Natas do Céu", "Natas do Céu, Portuguese cream dessert", "5,00 €"), item("Molotof", "Molotof, Portuguese meringue pudding", "4,50 €"), item("Fruta do dia", "Fruit of the day", "4,50 €"), item("Baba de camelo", "Baba de Camelo, Portuguese caramel mousse", "4,50 €"), item("Sugestão da chef", "Chef’s dessert suggestion", "5,50 €"),
  ] },
];

export const menuItems: MenuItem[] = menuCategories.flatMap(({ title, items }) => items.map((entry) => ({ ...entry, category: title })));
