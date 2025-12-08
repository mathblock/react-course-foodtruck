import type { MenuItem } from "@/types/menu"

export const menuItems: MenuItem[] = [
    // --- ENTRÉES ---
    {
        id: "entree-1",
        name: "Salade Fraîcheur",
        description: "Mélange de légumes croquants avec vinaigrette citronnée.",
        price: 6.50,
        category: "entrees",
        imageURL: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=300",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "entree-2",
        name: "Soupe du Jour",
        description: "Préparée quotidiennement avec des ingrédients frais.",
        price: 5.00,
        category: "entrees",
        imageURL: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=300",
        isVegetarian: true,
        isNew: true
    },
    {
        id: "entree-3",
        name: "Nachos Classiques",
        description: "Tortillas croustillantes avec fromage fondant et salsa.",
        price: 7.00,
        category: "entrees",
        imageURL: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=300&auto=format&fit=crop",
        isVegetarian: false,
        isNew: false
    },
    {
        id: "entree-4",
        name: "Bruschetta",
        description: "Pain grillé avec tomates, basilic et huile d’olive.",
        price: 6.00,
        category: "entrees",
        imageURL: "https://images.unsplash.com/photo-1630230596637-28f416b537ff?q=80&w=300&auto=format&fit=crop",
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
        imageURL: "https://images.unsplash.com/photo-1570461226513-e08b58a52c53?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: false,
        isNew: false
    },
    {
        id: "plat-2",
        name: "Burger Classique",
        description: "Steak de bœuf grillé, cheddar, laitue et tomates.",
        price: 13.50,
        category: "plats",
        imageURL: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: false,
        isNew: true
    },
    {
        id: "plat-3",
        name: "Pizza Margherita",
        description: "Sauce tomate, mozzarella et basilic frais.",
        price: 11.00,
        category: "plats",
        imageURL: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "plat-4",
        name: "Wrap Végétarien",
        description: "Légumes grillés, houmous et salade dans une tortilla.",
        price: 10.50,
        category: "plats",
        imageURL: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        imageURL: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "dessert-2",
        name: "Glace Vanille",
        description: "Crème glacée artisanale à la vanille.",
        price: 3.80,
        category: "desserts",
        imageURL: "https://images.unsplash.com/photo-1588195539297-f0b4efdb5472?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "dessert-3",
        name: "Churros Maison",
        description: "Churros croustillants avec sauce chocolat.",
        price: 5.50,
        category: "desserts",
        imageURL: "https://images.unsplash.com/photo-1624371414361-e670edf4898d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        imageURL: "https://plus.unsplash.com/premium_photo-1725075086083-89117890371d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: true,
        isNew: false
    },
    {
        id: "boisson-2",
        name: "Jus d’Orange Frais",
        description: "Pur jus pressé à froid.",
        price: 3.50,
        category: "boissons",
        imageURL: "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: true,
        isNew: true
    },
    {
        id: "boisson-3",
        name: "Thé Glacé Maison",
        description: "Thé noir infusé, citron et léger sucre.",
        price: 3.00,
        category: "boissons",
        imageURL: "https://images.unsplash.com/photo-1656936632107-0bfa69ea06de?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVegetarian: true,
        isNew: false
    }
];
