import type { MenuItem } from "@/types/menu"

export const menuItems: MenuItem[] = [
    // --- ENTRÉES ---
    {
        id: "entree-1",
        name: "Salade Fraîcheur",
        description: "Mélange de légumes croquants avec vinaigrette citronnée.",
        price: 6.50,
        category: "entrees",
        imageURL: "/images/salade.jpg",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "entree-2",
        name: "Soupe du Jour",
        description: "Préparée quotidiennement avec des ingrédients frais.",
        price: 5.00,
        category: "entrees",
        imageURL: "/images/soupe.jpg",
        isVegetarian: true,
        isNew: true
    },
    {
        id: "entree-3",
        name: "Nachos Classiques",
        description: "Tortillas croustillantes avec fromage fondant et salsa.",
        price: 7.00,
        category: "entrees",
        imageURL: "/images/nachos.jpg",
        isVegetarian: false,
        isNew: false
    },
    {
        id: "entree-4",
        name: "Bruschetta",
        description: "Pain grillé avec tomates, basilic et huile d’olive.",
        price: 6.00,
        category: "entrees",
        imageURL: "/images/bruschetta.jpg",
        isVegetarian: true,
        isNew: false
    },

    // --- PLATS ---
    {
        id: "plat-1",
        name: "Tacos au Poulet",
        description: "Tortillas garnies de poulet épicé, légumes et sauce maison.",
        price: 12.00,
        category: "plats",
        imageURL: "/images/tacos.jpg",
        isVegetarian: false,
        isNew: false
    },
    {
        id: "plat-2",
        name: "Burger Classique",
        description: "Steak de bœuf grillé, cheddar, laitue et tomates.",
        price: 13.50,
        category: "plats",
        imageURL: "/images/burger.jpg",
        isVegetarian: false,
        isNew: true
    },
    {
        id: "plat-3",
        name: "Pizza Margherita",
        description: "Sauce tomate, mozzarella et basilic frais.",
        price: 11.00,
        category: "plats",
        imageURL: "/images/pizza.jpg",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "plat-4",
        name: "Wrap Végétarien",
        description: "Légumes grillés, houmous et salade dans une tortilla.",
        price: 10.50,
        category: "plats",
        imageURL: "/images/wrap.jpg",
        isVegetarian: true,
        isNew: true
    },

    // --- DESSERTS ---
    {
        id: "dessert-1",
        name: "Brownie Fondant",
        description: "Brownie au chocolat servi tiède.",
        price: 4.50,
        category: "desserts",
        imageURL: "/images/brownie.jpg",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "dessert-2",
        name: "Glace Vanille",
        description: "Crème glacée artisanale à la vanille.",
        price: 3.80,
        category: "desserts",
        imageURL: "/images/glace.jpg",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "dessert-3",
        name: "Churros Maison",
        description: "Churros croustillants avec sauce chocolat.",
        price: 5.50,
        category: "desserts",
        imageURL: "/images/churros.jpg",
        isVegetarian: true,
        isNew: true
    },

    // --- BOISSONS ---
    {
        id: "boisson-1",
        name: "Soda Cola",
        description: "Boisson gazeuse rafraîchissante.",
        price: 2.50,
        category: "boissons",
        imageURL: "/images/soda-cola.jpg",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "boisson-2",
        name: "Jus d’Orange Frais",
        description: "Pur jus pressé à froid.",
        price: 3.50,
        category: "boissons",
        imageURL: "/images/jus-orange.jpg",
        isVegetarian: true,
        isNew: true
    },
    {
        id: "boisson-3",
        name: "Thé Glacé Maison",
        description: "Thé noir infusé, citron et léger sucre.",
        price: 3.00,
        category: "boissons",
        imageURL: "/images/the-glace.jpg",
        isVegetarian: true,
        isNew: false
    }
];
