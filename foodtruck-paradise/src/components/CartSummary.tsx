import { useState } from 'react';
import type { CartItem } from '../types/cart';

interface CartSummaryProps {
    cart: CartItem[];
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onRemove: (itemId: string) => void;
}

const CartSummary = ({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) => {
    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [promoError, setPromoError] = useState('');

    const PROMO_CODES: { [key: string]: number } = {
        'FOODTRUCK10': 0.10,
        'MIAM5': 0.05,
        'SUPER10': 0.10
    };

    const handleApplyPromo = () => {
        const code = promoCode.toUpperCase();
        if (PROMO_CODES[code]) {
            setDiscount(PROMO_CODES[code]);
            setPromoError('');
        } else {
            setDiscount(0);
            setPromoError('Code promo invalide');
        }
    };

    if (cart.length === 0) {
        return (
            <div className="cart-summary empty">
                <h3>Votre panier</h3>
                <p>Votre panier est vide.</p>
            </div>
        );
    }

    const subtotal = cart.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
    );

    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;

    return (
        <div className="cart-summary">
            <h3>Votre panier</h3>
            <div className="cart-items">
                {cart.map(({ item, quantity }) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <p className="item-price">P.U : {item.price.toFixed(2)} €</p>
                        </div>
                        <div className="quantity-section">
                            <span>Qté : </span>
                            <div className="quantity-controls">
                                <button
                                    className="qty-btn"
                                    onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                                >-</button>
                                <span className="qty-value">{quantity}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                                >+</button>
                            </div>
                        </div>
                        <div className="item-subtotal">
                            Prix : {(item.price * quantity).toFixed(2)} €
                        </div>
                        <button
                            className="btn-remove"
                            onClick={() => onRemove(item.id)}
                            aria-label="Supprimer"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>

            <div className="promo-section">
                <div className="promo-input-group">
                    <input
                        type="text"
                        placeholder="Code promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="promo-input"
                    />
                    <button onClick={handleApplyPromo} className="btn-apply">Appliquer</button>
                </div>
                {promoError && <p className="promo-error">{promoError}</p>}
                {discount > 0 && <p className="promo-success">Code appliqué : -{Math.round(discount * 100)}%</p>}
            </div>

            <div className="cart-total-section">
                <div className="summary-row">
                    <span>Sous-total :</span>
                    <span>{subtotal.toFixed(2)} €</span>
                </div>
                {discount > 0 && (
                    <div className="summary-row discount">
                        <span>Réduction :</span>
                        <span>-{discountAmount.toFixed(2)} €</span>
                    </div>
                )}
                <div className="cart-total">
                    <span>Total :</span>
                    <span>{total.toFixed(2)} €</span>
                </div>
            </div>

            <button className="btn-checkout">Commander</button>
        </div>
    );
};

export default CartSummary;
