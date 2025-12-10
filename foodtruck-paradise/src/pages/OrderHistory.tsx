// src/pages/OrderHistory.tsx

import { Link } from 'react-router-dom'; 
import { useOrders } from '../hooks/UseOrders';
import type  { Order } from '../types/order'; 
import './OrderHistory.css'; 

// Helper professionnel pour la clarté du statut
const getStatusLabel = (status: Order['status']) => {
    switch (status) {
        case 'pending': return '⏳ En attente';
        case 'confirmed': return '✅ Confirmée';
        case 'preparing': return '👨‍🍳 En préparation';
        case 'delivering': return '🛵 En livraison';
        case 'delivered': return '📦 Livrée';
        case 'cancelled': return '❌ Annulée';
        default: return status;
    }
};

export default function OrderHistory() {
    const { orders, isLoading, error } = useOrders();

    if (isLoading) {
        return <div className="loading-state">Chargement de votre historique de commandes...</div>;
    }

    if (error) {
        return <div className="error-state">Erreur : {error}</div>;
    }

    if (orders.length === 0) {
        return <div className="no-orders">Vous n'avez passé aucune commande pour le moment.</div>;
    }

    return (
        <div className="order-history-container">
            <h2>Historique de Mes Commandes</h2>
            
            <ul className="order-list">
                {orders.map((order) => (
                    <li key={order.id} className={`order-item status-${order.status}`}>
                        <div className="order-info">
                            <span className="order-id">Commande **#{order.orderNumber}**</span>
                            <span className="order-date">
                                Date : {order.date.toLocaleDateString('fr-FR')}
                            </span>
                            <span className={`order-status status-${order.status}`}>
                                Statut : **{getStatusLabel(order.status)}**
                            </span>
                        </div>
                        <div className="order-summary">
                            <span className="order-total">
                                Total : **{order.total.toFixed(2)} €**
                            </span>
                            {/* Lien vers le détail : utilise l'ID pour construire l'URL */}
                            <Link to={`/orders/${order.id}`} className="view-detail-btn">
                                Voir Détails
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}