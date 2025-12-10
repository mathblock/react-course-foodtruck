// src/hooks/useOrders.ts

import { useContext, useEffect } from 'react';
import { OrderContext } from '../context/OrderContext'; // Assurez-vous d'importer le contexte

/**
 * Hook personnalisé pour accéder facilement aux données et fonctions des commandes.
 * Il gère également le chargement initial des données.
 */
export const useOrders = () => {
    // 1. Récupération du contexte
    const context = useContext(OrderContext);

    // Contrôle professionnel : Vérifie si le hook est utilisé en dehors du <OrderProvider>
    if (context === undefined) {
        throw new Error('useOrders doit être utilisé à l\'intérieur d\'un OrderProvider');
    }

    // 2. Logique de chargement initial
    useEffect(() => {
        // Appelle fetchOrders() uniquement si la liste des commandes est vide, 
        // pour ne pas recharger les données à chaque fois qu'un composant utilise le hook.
        if (context.orders.length === 0) {
            context.fetchOrders();
        }
    // La dépendance context.fetchOrders doit être gérée par useCallback dans OrderContext.tsx
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context.fetchOrders]); 

    // 3. Retourne tout ce qui est exposé par le contexte
    return context;
};