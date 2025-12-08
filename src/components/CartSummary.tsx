import type  { CartItem } from "../types/cart";
import './CartSummary.css';

type CartSummaryProps = {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
};

export default function CartSummary({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) {
  // Calcul du total général
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-summary empty">
        <h3>🛒 Votre panier</h3>
        <p>Votre panier est vide pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h3>🛒 Récapitulatif de la commande</h3>
      <div className="cart-items-list">
        {cart.map((cartItem) => (
          <div key={cartItem.item.id} className="cart-item">
            <img 
              src={cartItem.item.imageUrl} 
              alt={cartItem.item.name} 
              className="cart-item-image" 
            />
            
            <div className="cart-item-info">
              <h4>{cartItem.item.name}</h4>
              <p>{cartItem.item.price.toFixed(2)} € / unité</p>
            </div>

            <div className="quantity-controls">
              <button 
                className="qty-btn" 
                onClick={() => onUpdateQuantity(cartItem.item.id, -1)}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button 
                className="qty-btn" 
                onClick={() => onUpdateQuantity(cartItem.item.id, 1)}
              >
                +
              </button>
            </div>

            <div className="cart-item-subtotal">
              <strong>{(cartItem.item.price * cartItem.quantity).toFixed(2)} €</strong>
            </div>

            <button className="remove-btn" onClick={() => onRemove(cartItem.item.id)}>
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total à payer :</span>
        <span>{total.toFixed(2)} €</span>
      </div>

      <button className="btn-checkout">Commander (Prochainement)</button>
    </div>
  );
}