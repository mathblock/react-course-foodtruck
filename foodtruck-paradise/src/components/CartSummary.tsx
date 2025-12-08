
import type { CartItem } from '../types/cart';

interface CartProps {
    cartItems: CartItem[];
    updateQuantity: (itemId: string, quantity: number) => void;
    removeFromCart: (itemId: string) => void;
}

function CartSummary({ cartItems, updateQuantity, removeFromCart }: CartProps) {
    const totalPrice = cartItems.reduce(
        (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
        0
    );

    return (
        <div className="cart-summary">
            <h2>🛒 Votre Panier</h2>

            {cartItems.length === 0 ? (
                <div className="cart-summary-empty">
                    Votre panier est vide
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map(cartItem => (
                            <div key={cartItem.item.id} className="cart-item">
                                <img
                                    src={cartItem.item.imageUrl}
                                    alt={cartItem.item.name}
                                />

                                <div className="cart-item-info">
                                    <h4>{cartItem.item.name}</h4>
                                    <div className="cart-item-price">{cartItem.item.price} € x {cartItem.quantity}</div>
                                    <div className="cart-item-subtotal">{(cartItem.item.price * cartItem.quantity)} €</div>
                                </div>

                                <div className="cart-item-actions">
                                    <div className="cart-item-qty">
                                        <button
                                            type="button"
                                            className="qty-btn"
                                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                                        >
                                            −
                                        </button>
                                        <span className="qty-value">{cartItem.quantity}</span>
                                        <button
                                            type="button"
                                            className="qty-btn"
                                            onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        className="delete-btn"
                                        onClick={() => removeFromCart(cartItem.item.id)}
                                        title="Supprimer"
                                    > Supprimer</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <div className="total-row">
                            <span>Total</span>
                            <span className="total-amount">{totalPrice.toFixed(2)} €</span>
                        </div>
                    </div>

                    <button type="button" className="btn-order">
                        Passer la commande
                    </button>
                </>
            )}
        </div>
    );
}

export default CartSummary;
