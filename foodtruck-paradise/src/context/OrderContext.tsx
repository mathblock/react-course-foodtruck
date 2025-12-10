// src/context/OrderContext.tsx

import React, { createContext, useState, useCallback } from 'react';
import type  {  ReactNode, } from 'react';
import type  { Order } from '../types/order'; 
import { mockOrders } from '../data/mockOrders'; // Import des données fictives

interface OrderContextProps {
    orders: Order[];
    isLoading: boolean;
    error: string | null;
    fetchOrders: () => void;
}

 const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // useCallback garantit que cette fonction n'est créée qu'une fois, ce qui est idéal
    // pour les dépendances de useEffect dans les custom hooks.
    const fetchOrders = useCallback(() => {
        setIsLoading(true);
        setError(null);
        
        // Simuler un appel API (attendez 1 seconde)
        setTimeout(() => {
            try {
                // Simuler la réussite du chargement
                setOrders(mockOrders); 
            } catch (err) {
                console.error("Erreur lors du chargement des commandes", err);
                setError("Impossible de charger l'historique des commandes.");
            } finally {
                setIsLoading(false);
            }
        }, 1000); 
    }, []); // La fonction ne dépend de rien, elle est stable.

    return (
        <OrderContext.Provider value={{ orders, isLoading, error, fetchOrders }}>
            {children}
        </OrderContext.Provider>
    );
};

// Exporte le contexte pour être utilisé par le Custom Hook
export { OrderContext };