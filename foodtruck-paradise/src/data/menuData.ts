import type {MenuProps} from '../types/menus';

const menuItems: MenuProps[] = [
  {
    id: 1,
    name: "Salade César",
    description: "Salade romaine, parmesan, croûtons et sauce César",
    price: 15.99,
    category: "entree",
    imageUrl: "https://www.example.com/salade-cesar.jpg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: 2,
    name: "Burger Classic",
    description: "Délicieux burger avec fromage fondant, salade et sauce maison",
    price: 12.99,
    category: "plat principale",
    imageUrl: "https://www.example.com/burger.jpg",
    isVegetarian: false,
    isNew: true
  },
  {
    id: 3,
    name: "Glace Vanille",
    description: "Glace artisanale à la vanille de Madagascar",
    price: 6.99,
    category: "dessert",
    imageUrl: "https://www.example.com/glace.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: 4,
    name: "Coca-Cola",
    description: "Boisson gazeuse rafraîchissante",
    price: 2.99,
    category: "boisson",
    imageUrl: "https://www.example.com/soda.jpg",
    isVegetarian: true,
    isNew: true
  },
  {
    id: 5,
    name: "Wrap Végétarien",
    description: "Wrap rempli de légumes frais, houmous et feta",
    price: 9.99,
    category: "plat principale",
    imageUrl: "https://www.example.com/wrap.jpg",
    isVegetarian: true,
    isNew: true
  },
  {
    id: 6,
    name: "Tacos Boeuf",
    description: "Trois tacos au bœuf épicé, salsa fresca et guacamole",
    price: 12.50,
    category: "plat pricipale",
    imageUrl: "https://www.example.com/tacos.jpg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: 7,
    name: "Pizza Margherita",
    description: "Pizza classique tomate, mozzarella et basilic",
    price: 11.90,
    category: "plat principale",
    imageUrl: "https://www.example.com/pizza.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: 8,
    name: "Pâtes Carbonara",
    description: "Spaghetti à la crème, lardons et parmesan",
    price: 13.50,
    category: "plat principale",
    imageUrl: "https://www.example.com/carbonara.jpg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: 9,
    name: "Soupe du jour",
    description: "Soupe maison selon l'arrivage du marché",
    price: 7.50,
    category: "entree",
    imageUrl: "https://www.example.com/soupe.jpg",
    isVegetarian: true,
    isNew: true
  },
  {
    id: 10,
    name: "Cheesecake Fraise",
    description: "Cheesecake onctueux avec coulis de fraise",
    price: 7.90,
    category: "dessert",
    imageUrl: "https://www.example.com/cheesecake.jpg",
    isVegetarian: true,
    isNew: true
  },
  {
    id: 11,
    name: "Poulet Tikka Masala",
    description: "Poulet mariné aux épices indiennes et sauce tomate crémée",
    price: 14.90,
    category: "plat principale",
    imageUrl: "https://www.example.com/tikka.jpg",
    isVegetarian: false,
    isNew: false
  },
  {
    id: 12,
    name: "Eau plate 50cl",
    description: "Eau minérale naturelle",
    price: 2.50,
    category: "boisson",
    imageUrl: "https://www.example.com/eau.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: 13,
    name: "Pad Thaï aux crevettes",
    description: "Nouilles de riz sautées, crevettes, œuf et cacahuètes",
    price: 15.50,
    category: "plat principale",
    imageUrl: "https://www.example.com/padthai.jpg",
    isVegetarian: false,
    isNew: true
  },
  {
    id: 14,
    name: "Tiramisu",
    description: "Dessert italien au café et mascarpone",
    price: 7.50,
    category: "dessert",
    imageUrl: "https://www.example.com/tiramisu.jpg",
    isVegetarian: true,
    isNew: false
  },
  {
    id: 15,
    name: "Steak frites",
    description: "Entrecôte 200g, frites maison et sauce au poivre",
    price: 18.90,
    category: "plat principale",
    imageUrl: "https://www.example.com/steak.jpg",
    isVegetarian: false,
    isNew: true
  }
]

export default menuItems;