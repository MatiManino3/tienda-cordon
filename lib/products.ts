export type Category = "Frutal" | "Clásico" | "Intenso";
export type FilterOption = "Todos" | Category;

export interface Product {
  id: string;
  name: string;
  origin: string;
  notes: string;
  price: number;
  weight: string;
  cat: Category;
  /** Gradient start color (hex) */
  g1: string;
  /** Gradient end color (hex) */
  g2: string;
}

export const CATEGORIES: FilterOption[] = ["Todos", "Frutal", "Clásico", "Intenso"];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Yirgacheffe",
    origin: "Etiopía",
    notes: "Jazmín · durazno · té negro",
    price: 8900,
    weight: "250g",
    cat: "Frutal",
    g1: "#c0506a",
    g2: "#7a2f44",
  },
  {
    id: "p2",
    name: "Huila",
    origin: "Colombia",
    notes: "Caramelo · naranja · chocolate",
    price: 7800,
    weight: "250g",
    cat: "Clásico",
    g1: "#d18a4e",
    g2: "#8a5523",
  },
  {
    id: "p3",
    name: "Cerrado",
    origin: "Brasil",
    notes: "Maní · cacao · dulce",
    price: 7200,
    weight: "250g",
    cat: "Intenso",
    g1: "#7a5236",
    g2: "#4a2f1d",
  },
  {
    id: "p4",
    name: "Antigua",
    origin: "Guatemala",
    notes: "Chocolate · nuez · especias",
    price: 8200,
    weight: "250g",
    cat: "Clásico",
    g1: "#5b7050",
    g2: "#33422c",
  },
  {
    id: "p5",
    name: "Blend Casa",
    origin: "Sudamérica",
    notes: "Cacao · caramelo · cuerpo",
    price: 6900,
    weight: "500g",
    cat: "Intenso",
    g1: "#b56f3a",
    g2: "#6e3f1c",
  },
  {
    id: "p6",
    name: "Kenia AA",
    origin: "Kenia",
    notes: "Grosella · vino · cítrico",
    price: 9500,
    weight: "250g",
    cat: "Frutal",
    g1: "#8a4a72",
    g2: "#4d2742",
  },
];

export const money = (n: number): string => "$" + n.toLocaleString("es-AR");
