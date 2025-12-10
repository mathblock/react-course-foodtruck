// src/hooks/useOrders.ts

import { useContext, useEffect } from 'react';
import { OrderContext } from '../context/OrderContext';

export  const useOrders = () => {
    const context = useContext(OrderContext);

    if (context === undefined) {
        throw new Error('useOrders doit être utilisé à l\'intérieur d\'un OrderProvider');
    }

    // Déclenchement automatique de la récupération des données au montage du composant
    useEffect(() => {
        // Chargement seulement si la liste des commandes est vide
        if (context.orders.length === 0) {
            context.fetchOrders();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Le tableau vide assure que l'effet s'exécute une seule fois au montage.

    return context;
};