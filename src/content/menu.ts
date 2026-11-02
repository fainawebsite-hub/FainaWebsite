export type MenuItem = { category: string; name: string; description: string; price: string; featured: boolean; available: boolean };

// Confirmar preços e disponibilidade com o restaurante antes de produção
export const menuItems: MenuItem[] = [
  { category: "Entradas", name: "Croquetes de alheira com mostarda e mel", description: "", price: "—", featured: true, available: true },
  { category: "Entradas", name: "Enguias fritas", description: "", price: "—", featured: true, available: true },
  { category: "Entradas", name: "Salada de polvo", description: "", price: "—", featured: true, available: true },
  { category: "Mariscos", name: "Amêijoas à pescador", description: "", price: "—", featured: true, available: true },
  { category: "Mariscos", name: "Camarão da costa", description: "", price: "—", featured: true, available: true },
  { category: "Mariscos", name: "Sapateira recheada", description: "", price: "—", featured: true, available: true },
  { category: "Peixe e Mar", name: "Arroz de marisco com lagosta", description: "", price: "—", featured: true, available: true },
  { category: "Peixe e Mar", name: "Arroz de tamboril com gambas", description: "", price: "—", featured: true, available: true },
  { category: "Peixe e Mar", name: "Bacalhau à Faina", description: "", price: "—", featured: true, available: true },
  { category: "Peixe e Mar", name: "Caldeirada de enguias", description: "", price: "—", featured: true, available: true },
  { category: "Carnes", name: "Bife ao molho Madeira", description: "", price: "—", featured: false, available: true },
  { category: "Carnes", name: "Picanha", description: "", price: "—", featured: false, available: true },
  { category: "Sobremesas", name: "Cheesecake", description: "", price: "—", featured: false, available: true },
  { category: "Sobremesas", name: "Pudim caseiro", description: "", price: "—", featured: false, available: true },
];
