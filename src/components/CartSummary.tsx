import React from 'react';
import { CartItem } from '../types/cart';

interface CartSummaryProps {
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, onUpdateQuantity, onRemove }) => {
  // Calculer le total
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-summary">
        <h2>🛒 Votre Panier</h2>
        <div className="empty-cart">
          <p>😕 Votre panier est vide</p>
          <p>Ajoutez des produits pour commencer votre commande !</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h2>🛒 Votre Panier ({cart.length} article{cart.length > 1 ? 's' : ''})</h2>
      
      <div className="cart-items">
        {cart.map((cartItem) => (
          <div key={cartItem.item.id} className="cart-item">
            <img 
              src={cartItem.item.imageUrl} 
              alt={cartItem.item.name} 
              className="cart-item-image"
            />
            
            <div className="cart-item-details">
              <h4>{cartItem.item.name}</h4>
              <p className="cart-item-price">{cartItem.item.price.toFixed(2)} €</p>
            </div>

            <div className="quantity-controls">
              <button 
                className="qty-btn"
                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
              >
                -
              </button>
              <span className="quantity">{cartItem.quantity}</span>
              <button 
                className="qty-btn"
                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
              >
                +
              </button>
            </div>

            <div className="cart-item-subtotal">
              <strong>{(cartItem.item.price * cartItem.quantity).toFixed(2)} €</strong>
            </div>

            <button 
              className="remove-btn"
              onClick={() => onRemove(cartItem.item.id)}
              title="Supprimer"
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

      <button className="btn-checkout">
        Commander ({total.toFixed(2)} €)
      </button>
    </div>
  );
};

export default CartSummary;
