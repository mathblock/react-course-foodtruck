import type { CartItem } from '../types/cart';

interface CartSummaryProps {
    cart: CartItem[];
    onUpdateQuantity: (itemId: string, quantity: number) => void;
    onRemove: (itemId: string) => void;
}

const CartSummary = ({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) => {
    const total = cart.reduce(
        (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
        0
    );

    if (cart.length === 0) {
        return (
            <div className="cart-summary">
                <h2>Votre panier est vide</h2>
            </div>
        );
    }

    return (
        <div className="cart-summary">
            <h2>Votre Panier</h2>
            <div className="cart-items">
                {cart.map((cartItem, index) => (
                    <div
                        key={cartItem.item.id}
                        className="cart-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <img
                            src={cartItem.item.imageUrl}
                            alt={cartItem.item.name}
                            className="cart-item-image"
                        />
                        <div className="cart-item-details">
                            <h4>{cartItem.item.name}</h4>
                            <p>{cartItem.item.price.toFixed(2)} €</p>
                        </div>
                        <div className="quantity-controls">
                            <button
                                className="qty-btn"
                                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                            >
                                -
                            </button>
                            <span>{cartItem.quantity}</span>
                            <button
                                className="qty-btn"
                                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                        <div style={{ marginLeft: '1rem', fontWeight: 'bold' }}>
                            {(cartItem.item.price * cartItem.quantity).toFixed(2)} €
                        </div>
                        <button
                            className="btn-remove"
                            onClick={() => onRemove(cartItem.item.id)}
                            aria-label="Supprimer"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <span>Total</span>
                <span>{total.toFixed(2)} €</span>
            </div>
            <button className="btn-checkout">Commander</button>
        </div>
    );
};

export default CartSummary;
