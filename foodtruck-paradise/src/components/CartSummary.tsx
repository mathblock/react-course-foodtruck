import { useCart } from '../context/CartContext';
import '../styles/CartSummary.css';

function CartSummary() {
  const context = useCart();

  if (!context) {
    return (
      <div className="cart-summary empty-cart">
        <h2>Erreur</h2>
      </div>
    );
  }

  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = context;

  if (items.length === 0) {
    return (
      <div className="cart-summary empty-cart">
        <h2>🛒 Panier vide</h2>
        <p>Ajoutez des articles pour commencer votre commande</p>
      </div>
    );
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-summary">
      <h2>🛒 Résumé du panier ({totalItems})</h2>

      <div className="cart-items">
        {items.map((cartItem) => (
          <div key={cartItem.item.id} className="cart-item">
            <img src={cartItem.item.imageUrl} alt={cartItem.item.name} className="cart-item-image" />

            <div className="cart-item-details">
              <h3>{cartItem.item.name}</h3>
              <p className="price">{cartItem.item.price.toFixed(2)} €</p>
              {cartItem.item.isVegetarian && <span className="vegetarian-badge">🌱 Végétarien</span>}
            </div>

            <div className="cart-item-quantity">
              <button
                onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                className="qty-btn"
              >
                −
              </button>
              <input
                type="number"
                value={cartItem.quantity}
                onChange={(e) => updateQuantity(cartItem.item.id, Math.max(1, parseInt(e.target.value) || 1))}
                className="qty-input"
                min="1"
              />
              <button
                onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
            </div>

            <div className="cart-item-subtotal">
              {(cartItem.item.price * cartItem.quantity).toFixed(2)} €
            </div>

            <button
              onClick={() => removeFromCart(cartItem.item.id)}
              className="remove-btn"
              title="Supprimer du panier"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary-footer">
        <div className="summary-row">
          <span>Sous-total:</span>
          <span>{subtotal.toFixed(2)} €</span>
        </div>
        <div className="summary-row">
          <span>Frais de livraison:</span>
          <span>Gratuit</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>{subtotal.toFixed(2)} €</span>
        </div>

        <button className="btn btn-primary btn-checkout">
          Procéder au paiement
        </button>

        <button
          onClick={clearCart}
          className="btn btn-secondary"
        >
          Vider le panier
        </button>
      </div> */}
    </div>
  );
}

export default CartSummary;