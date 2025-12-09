import type { MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
    // ------------------------------------
    // 🍔 PLATS PRINCIPAUX (8 items)
    // ------------------------------------
    {
        id: "p1",
        name: "Burger 'The Classic'",
        description: "Steak de bœuf, cheddar fondant, cornichons, oignons caramélisés et sauce secrète.",
        price: 11.5,
        category: "plats",
        imageUrl: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        isVegetarian: false,
        isNew: true,
    },
    {
        id: "p2",
        name: "Tacos Poulet Pimenté (2pcs)",
        description: "Poulet mariné au chipotle, salsa de maïs, coriandre fraîche et crème aigre.",
        price: 10.5,
        category: "plats",
        imageUrl: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg",
        isVegetarian: false,
    },
    
    {
        id: "p4",
        name: "Fish & Chips Street Style",
        description: "Poisson blanc pané à la bière, servi avec frites maison et mayonnaise à l'aneth.",
        price: 13.0,
        category: "plats",
        imageUrl: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
        isVegetarian: false,
    },
    {
        id: "p5",
        name: "Hot Dog 'New York'",
        description: "Saucisse de porc, choucroute, oignons frits et moutarde jaune forte.",
        price: 7.5,
        category: "plats",
        imageUrl: "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        isVegetarian: false,
    },
    
    {
        id: "p7",
        name: "Burger Végétal aux Champignons",
        description: "Galette de portobello farcie au fromage de chèvre, roquette et réduction balsamique.",
        price: 12.0,
        category: "plats",
        imageUrl: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg",
        isVegetarian: true,
        isNew: true,
    },
    {
        id: "p8",
        name: "Kebab de Porc Laqué",
        description: "Brochette de porc marinée au miel et sésame, servie avec du riz pilaf.",
        price: 11.0,
        category: "plats",
        imageUrl: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg", // Image de brochettes de légumes/viande sur riz
        isVegetarian: false,
    },

    // ------------------------------------
    // 🍟 ENTRÉES / SIDES (7 items)
    // ------------------------------------
    {
        id: "e1",
        name: "Frites de Patate Douce",
        description: "Servies avec une sauce aigre-douce épicée maison.",
        price: 5.5,
        category: "entrées",
        imageUrl: "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg",
        isVegetarian: true,
    },
    {
        id: "e2",
        name: "Onion Rings Croustillants",
        description: "Rondelles d'oignon panées, accompagnées de sauce barbecue.",
        price: 4.5,
        category: "entrées",
        imageUrl: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
        isVegetarian: true,
    },
    {
        id: "e3",
        name: "Salade Coleslaw",
        description: "Chou et carottes râpés dans une sauce crémeuse et acidulée.",
        price: 4.0,
        category: "entrées",
        imageUrl: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Image claire de coleslaw
        isVegetarian: true,
    },
   
    {
        id: "e5",
        name: "Ailes de Poulet Frites (4pcs)",
        description: "Ailes de poulet marinées, frites, sauce au choix (BBQ ou Piquante).",
        price: 8.0,
        category: "entrées",
        imageUrl: "https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg",
        isVegetarian: false,
    },
   
    {
        id: "e7",
        name: "Frites Classiques",
        description: "Frites belges croustillantes, servies avec la sauce de votre choix.",
        price: 3.5,
        category: "entrées",
        imageUrl: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        isVegetarian: false,
    },


    // ------------------------------------
    // 🍰 DESSERTS (8 items)
    // ------------------------------------
   
    {
        id: "b2",
        name: "Expresso",
        description: "Café intense, torréfié localement.",
        price: 2.0,
        category: "boissons",
        imageUrl: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        isVegetarian: true,
    },
    
    {
        id: "b5",
        name: "Coca-Cola (Canette)",
        description: "Boisson gazeuse classique (33cl).",
        price: 2.5,
        category: "boissons",
        imageUrl: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg",
        isVegetarian: true,
    }
];