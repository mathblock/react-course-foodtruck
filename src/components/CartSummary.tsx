import React from 'react';
import { type CartItem } from '../types/cart';

interface CartSummaryProps {
    cart: CartItem[];
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onRemove: (itemId: string) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, onUpdateQuantity, onRemove }) => {

    const total = cart.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <div className="cart-summary">
                <p>
                    Votre panier est vide.</p>
            </div>
        );
    }

    return (
        <div className="cart-summary">
            <h2>Votre Panier</h2>
            <div className="cart-items">
                {cart.map((cartItem) => (
                    <div key={cartItem.item.id} className="cart-item">
                        <img
                            src={cartItem.item.imageUrl}
                            alt={cartItem.item.name}
                            className="cart-item-image"
                        />
                        <div style={{ flex: 1 }}>
                            <h4>{cartItem.item.name}</h4>
                            <p                            >
                                {cartItem.item.price.toFixed(2)} €
                            </p>
                        </div>
                        <div className="quantity-controls">
                            <button
                                className="qty-btn"
                                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}>
                                -
                            </button>
                            <span>
                                {cartItem.quantity}
                            </span>
                            <button
                                className="qty-btn"
                                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}>
                                +
                            </button>
                        </div>
                        <div
                            style={{ fontWeight: 'bold', minWidth: '80px', textAlign: 'right' }}>
                            {(cartItem.item.price * cartItem.quantity).toFixed(2)} €
                        </div>
                        <button
                            onClick={() => onRemove(cartItem.item.id)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', marginLeft: '1rem' }}
                            title="Supprimer">
                            🗑️
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-total">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
            </div>

            <button className="btn-checkout">
                Commander ({cart.reduce((acc, item) => acc + item.quantity, 0)} articles)
            </button>
        </div>
    );
}

export default CartSummary;

