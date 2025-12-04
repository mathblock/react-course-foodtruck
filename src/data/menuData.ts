import type Menu from "../types/menu";

export const menuItems: Menu[] = [
  {
    id: 1,
    name: "Salade fraîcheur",
    description: "Mélange de légumes croquants avec vinaigrette maison",
    price: 6.5,
    category: "entrees",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true,
    isNew: true,
  },
  {
    id: 2,
    name: "Soupe de légumes",
    description: "Soupe chaude à base de légumes de saison",
    price: 5.0,
    category: "entrees",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 3,
    name: "Nachos au fromage",
    description: "Tortillas croustillantes nappées de fromage fondu",
    price: 7.5,
    category: "entrees",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: false
  },

  {
    id: 4,
    name: "Tacos poulet",
    description: "Tacos garnis de poulet mariné et légumes frais",
    price: 9.9,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: false
  },
  {
    id: 5,
    name: "Burger classique",
    description: "Burger avec steak de bœuf, fromage, salade et tomate",
    price: 11.5,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: false,
    isNew: true
  },
  {
    id: 6,
    name: "Pizza Margherita",
    description: "Pizza tomate-mozzarella avec basilic frais",
    price: 10.0,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 7,
    name: "Wrap végétarien",
    description: "Wrap garni de légumes grillés et sauce au yaourt",
    price: 8.5,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },

  {
    id: 8,
    name: "Brownie chocolat",
    description: "Brownie fondant au chocolat noir",
    price: 4.0,
    category: "desserts",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 9,
    name: "Glace vanille",
    description: "Deux boules de glace vanille artisanale",
    price: 3.5,
    category: "desserts",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 10,
    name: "Churros sucre",
    description: "Churros croustillants accompagnés de sauce chocolat",
    price: 5.5,
    category: "desserts",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true,
    isNew: true
  },

  {
    id: 11,
    name: "Soda Cola",
    description: "Boisson gazeuse rafraîchissante",
    price: 2.5,
    category: "boissons",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 12,
    name: "Jus d’orange",
    description: "Jus d’orange 100% pur jus",
    price: 3.0,
    category: "boissons",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 13,
    name: "Thé glacé",
    description: "Thé glacé maison légèrement sucré",
    price: 2.8,
    category: "boissons",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },

  {
    id: 14,
    name: "Salade César",
    description: "Salade, poulet grillé, croûtons et sauce César",
    price: 7.2,
    category: "entrees",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: false
  },
  {
    id: 15,
    name: "Soupe miso",
    description: "Soupe japonaise traditionnelle au miso",
    price: 4.2,
    category: "entrees",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },

  {
    id: 16,
    name: "Pizza Pepperoni",
    description: "Pizza garnie de pepperoni et fromage fondant",
    price: 11.0,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: false
  },
  {
    id: 17,
    name: "Burger végétarien",
    description: "Burger composé d’un steak végétal et légumes croquants",
    price: 12.0,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 18,
    name: "Wrap poulet curry",
    description: "Wrap au poulet mariné au curry et crudités",
    price: 9.0,
    category: "plats",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: false
  },

  {
    id: 19,
    name: "Milkshake vanille",
    description: "Milkshake onctueux à la vanille",
    price: 4.5,
    category: "boissons",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  },
  {
    id: 20,
    name: "Smoothie fruits rouges",
    description: "Mélange de fraise, framboise et myrtille",
    price: 4.8,
    category: "boissons",
    imageUrl: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg",
    isVegetarian: true
  }
];
