export type MenuItem = { category: string; name: string; description: string; price: string; featured: boolean; available: boolean };

export const menuItems: MenuItem[] = [
  { category: "Entradas", name: "Couvert da casa", description: "Seleção do dia para começar a viagem.", price: "—", featured: true, available: true },
  { category: "Mariscos", name: "Marisco fresco", description: "Seleção sujeita à lota e à disponibilidade.", price: "—", featured: true, available: true },
  { category: "Peixe", name: "Peixe do dia", description: "Grelhado, com o sabor do mar em primeiro plano.", price: "—", featured: true, available: true },
  { category: "Carne", name: "Especialidade da casa", description: "Uma alternativa preparada com o mesmo cuidado.", price: "—", featured: false, available: true },
  { category: "Vegan", name: "Opção vegetal", description: "Pergunte-nos pelas sugestões disponíveis.", price: "—", featured: false, available: true },
  { category: "Sobremesas", name: "Doce final", description: "Para terminar a refeição com tempo.", price: "—", featured: false, available: true },
];
