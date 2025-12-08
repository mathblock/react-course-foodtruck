import type  { MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
  {
    id: "e1",
    name: "Salade César",
    description: "Salade fraîche avec poulet grillé, parmesan et croûtons.",
    price: 7.5,
    category: "entrées",
    imageUrl: "https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg",
    isVegetarian: false,
    isNew: false,
  },
  {
    id: "p1",
    name: "Burger Classique",
    description: "Burger avec steak, cheddar, salade et tomates.",
    price: 10.0,
    category: "plats",
    imageUrl: "https://images.pexels.com/photos/1639567/pexels-photo-1639567.jpeg",
    isVegetarian: false,
    isNew: true,
  },
  {
    id: "d1",
    name: "Brownie Chocolat",
    description: "Brownie fondant au chocolat avec noix.",
    price: 4.5,
    category: "desserts",
    imageUrl: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg",
    isVegetarian: true,
    isNew: false,
  },
  {
    id: "b1",
    name: "Jus d'orange",
    description: "Jus frais pressé.",
    price: 3.0,
    category: "boissons",
    imageUrl: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
    isVegetarian: true,
    isNew: false,
  },
  // Ajoute ici encore 11 éléments minimum pour avoir au moins 15
];
