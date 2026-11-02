export type MenuItem = { category: string; name: string; description?: string; price: string; featured: boolean; available: boolean };
export type MenuCategory = { id: string; title: string; intro: string; availability?: string; items: Omit<MenuItem, "category">[] };

// Confirmar preços e disponibilidade com o restaurante antes de produção.
// A lota e a sazonalidade determinam a disponibilidade de peixe e marisco.
export const menuCategories: MenuCategory[] = [
  { id: "entradas", title: "Entradas", intro: "Para começar a mesa.", items: [
    { name: "Sapateira", price: "", featured: true, available: true }, { name: "Camarão da Costa", price: "", featured: true, available: true }, { name: "Camarão tigre grelhado", price: "", featured: true, available: true }, { name: "Amêijoa da Ria", price: "", featured: true, available: true }, { name: "Ostras", price: "", featured: true, available: true },
  ] },
  { id: "peixe", title: "Peixes frescos da Costa", intro: "Grelhados e preparados com respeito pelo produto.", availability: "Sujeito à lota e disponibilidade diária.", items: [
    { name: "Robalo", price: "", featured: true, available: true }, { name: "Dourada", price: "", featured: true, available: true }, { name: "Pregado", price: "", featured: true, available: true }, { name: "Peixe-galo", price: "", featured: true, available: true }, { name: "Linguado", price: "", featured: true, available: true }, { name: "Cantaril", price: "", featured: true, available: true }, { name: "Lulas", price: "", featured: true, available: true }, { name: "Chocos", price: "", featured: true, available: true }, { name: "Bacalhau Faina", price: "", featured: true, available: true }, { name: "Caldeirada de enguias", price: "", featured: true, available: true }, { name: "Enguias fritas", price: "", featured: true, available: true },
  ] },
  { id: "carne", title: "Carnes selecionadas", intro: "Alternativas da terra, preparadas com o mesmo cuidado.", items: [
    { name: "Alcatra", price: "", featured: false, available: true }, { name: "Vazia", price: "", featured: false, available: true }, { name: "Picanha", price: "", featured: false, available: true }, { name: "Lombinhos de porco Ibérico", price: "", featured: false, available: true }, { name: "Escalopes de frango", price: "", featured: false, available: true },
  ] },
  { id: "vegetariano", title: "Sugestões vegetarianas", intro: "Opções pensadas para todos à mesa.", items: [
    { name: "Prego de tofu", price: "", featured: false, available: true }, { name: "Ratatouille", price: "", featured: false, available: true }, { name: "Kebab vegetariano", price: "", featured: false, available: true },
  ] },
  { id: "sobremesas", title: "Sobremesas", intro: "Para terminar sem pressa.", items: [
    { name: "Mousse de chocolate com framboesa", price: "", featured: false, available: true }, { name: "Pudim Abade de Priscos", price: "", featured: false, available: true }, { name: "Brownie com bola de gelado", price: "", featured: false, available: true }, { name: "Cheesecake", price: "", featured: false, available: true }, { name: "Fruta da época", price: "", featured: false, available: true },
  ] },
];

export const menuItems: MenuItem[] = menuCategories.flatMap(({ title, items }) => items.map((item) => ({ ...item, category: title })));
