// src/pages/OrderDetail.tsx

import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useOrders } from '../hooks/UseOrders'; // Hook personnalisé pour accéder aux commandes
import type { Order } from '../types/order'; 
import './OrderDetail.css'; // Pour le style spécifique à la page

// Helper pour afficher le statut (copié de OrderHistory.tsx pour la cohérence)
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

export default function OrderDetail() {
    // 1. Récupérer les paramètres de l'URL (l'ID de la commande)
    // Le nom de la propriété doit correspondre au nom défini dans la route : :orderId
    const { orderId } = useParams<{ orderId: string }>(); 

    // 2. Accéder aux données et états via le hook personnalisé
    const { orders, isLoading, error } = useOrders();

    // Gestion des états globaux :
    if (isLoading) {
        return <div className="loading-state">Chargement des détails de la commande...</div>;
    }

    if (error) {
        return <div className="error-state">Erreur : {error}</div>;
    }
    
    // 3. Trouver la commande correspondante dans les données (recherche basée sur l'ID)
    const order = orders.find(o => o.id === orderId);

    // 4. Gérer le cas où la commande n'est pas trouvée (Gestion 404/redirection)
    if (!order) {
        // Redirige vers la page d'historique (avec 'replace' pour ne pas polluer l'historique de navigation)
        return <Navigate to="/orders" replace />;
    }

    // Affichage principal
    return (
        <div className="order-detail-container">
            <header className="detail-header">
                <Link to="/orders" className="back-link">
                    &lt; Retour à l'historique
                </Link>
                <h1>Détails de la Commande **#{order.orderNumber}**</h1>
                <p className={`status-badge status-${order.status}`}>
                    {getStatusLabel(order.status)}
                </p>
            </header>

            {/* Placeholder pour le composant de Tracking qui sera ajouté plus tard */}
            <section className="tracking-map-placeholder">
                <h3>Suivi de la commande</h3>
                {/* Ici nous insérerons le composant TrackingStatus.tsx */}
                <p>Statut actuel : {getStatusLabel(order.status)}</p>
            </section>

            <section className="detail-summary">
                <div className="info-box">
                    <h3>Date & Livraison Estimée</h3>
                    <p>
                        **Passée le :** {order.date.toLocaleDateString('fr-FR')}
                    </p>
                    <p>
                        **Livraison estimée :** {order.estimatedDelivery.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                </div>
                
                <div className="info-box">
                    <h3>Adresse de Livraison</h3>
                    <p>{order.deliveryAddress.street}</p>
                    <p>{order.deliveryAddress.postalCode} {order.deliveryAddress.city}</p>
                </div>
            </section>
            
            <section className="detail-items">
                <h3>Articles Commandés</h3>
                <ul className="items-list">
                    {order.items.map((cartItem) => (
                        // cartItem est de type CartItem, contient item: MenuItem et quantity: number
                        <li key={cartItem.item.id} className="item-row">
                            <span className="item-name">
                                **{cartItem.quantity} x** {cartItem.item.name}
                            </span>
                            <span className="item-price">
                                {(cartItem.item.price * cartItem.quantity).toFixed(2)} €
                            </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="detail-total">
                {/* Calcul du sous-total : Total + (Discount si existe) */}
                <p>Sous-total : **{(order.total + (order.discount || 0)).toFixed(2)} €**</p>
                {order.promoCode && (
                    <p className="discount">
                        Code Promo ({order.promoCode}) : - {order.discount?.toFixed(2) || '0.00'} €
                    </p>
                )}
                <p className="total-line">
                    **Montant Total : {order.total.toFixed(2)} €**
                </p>
            </section>
        </div>
    );
}