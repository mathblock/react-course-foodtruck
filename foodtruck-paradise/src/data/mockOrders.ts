// src/data/mockOrders.ts

import type  { Order } from '../types/order'; // Utilise le type Order existant
import type { CartItem } from '../types/cart'; // Utilise le type CartItem existant

// Données fictives complètes pour simuler des articles dans le panier
const mockCartItems1: CartItem[] = [
    { 
        item: { id: 'M001', name: 'Burger Classique', price: 12.00, category: 'plats', description: '', imageUrl: '', isVegetarian: false, allergens: [], rating: 4, reviewCount: 10 }, 
        quantity: 2 
    },
    { 
        item: { id: 'D003', name: 'Muffin Chocolat', price: 4.50, category: 'desserts', description: '', imageUrl: '', isVegetarian: true, allergens: [], rating: 5, reviewCount: 20 }, 
        quantity: 1 
    },
];

const mockCartItems2: CartItem[] = [
    { 
        item: { id: 'S001', name: 'Salade César', price: 15.00, category: 'entrees', description: '', imageUrl: '', isVegetarian: false, allergens: [], rating: 3, reviewCount: 5 }, 
        quantity: 1 
    },
];

export const mockOrders: Order[] = [
    {
        id: "id_9457",
        orderNumber: "ORD-9457",
        date: new Date('2025-12-08T10:30:00Z'),
        items: mockCartItems1,
        total: 28.50, // Calcul: (2*12.00) + (1*4.50)
        status: 'delivered', // Statut final
        estimatedDelivery: new Date('2025-12-08T11:45:00Z'),
        deliveryAddress: { street: '12 Rue des Oliviers', city: 'Paris', postalCode: '75001' },
    },
    {
        id: "id_9458",
        orderNumber: "ORD-9458",
        date: new Date('2025-12-09T14:05:00Z'),
        items: mockCartItems2,
        total: 12.60, // Total après réduction
        status: 'preparing', // Statut en cours
        estimatedDelivery: new Date('2025-12-09T15:05:00Z'),
        deliveryAddress: { street: '35 Avenue des Champs', city: 'Lyon', postalCode: '69002' },
        promoCode: 'WELCOME10',
        discount: 1.40, // 10% de 14.00
    },
];