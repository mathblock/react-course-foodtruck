import type { CartItem } from "../types/cart";

type CartSummaryProps = {
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
};

export default function CartSummary({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) {
  // CALCUL DU TOTAL
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-summary">
        <h2>🛒 Votre Panier</h2>
        <p className="empty-cart">Votre panier est vide</p>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h2>🛒 Votre Panier ({cart.length} produit{cart.length > 1 ? "s" : ""})</h2>

      {/* LISTE DES ITEMS */}
      <div className="cart-items">
        {cart.map((cartItem) => (
          <div key={cartItem.item.id} className="cart-item">
            <img
              src={cartItem.item.imageUrl}
              alt={cartItem.item.name}
              className="cart-item-image"
            />

            <div className="cart-item-info">
              <h4>{cartItem.item.name}</h4>
              <p className="cart-item-price">{cartItem.item.price.toFixed(2)} €</p>
            </div>

            {/* CONTRÔLES DE QUANTITÉ */}
            <div className="quantity-controls">
              <button
                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                className="qty-btn"
                aria-label="Diminuer"
              >
                -
              </button>
              <span className="quantity">{cartItem.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                className="qty-btn"
                aria-label="Augmenter"
              >
                +
              </button>
            </div>

            {/* SOUS-TOTAL */}
            <div className="cart-item-subtotal">
              {(cartItem.item.price * cartItem.quantity).toFixed(2)} €
            </div>

            {/* BOUTON SUPPRIMER */}
            <button
              onClick={() => onRemove(cartItem.item.id)}
              className="remove-btn"
              aria-label="Supprimer"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="cart-total">
        <span>Total</span>
        <span>{total.toFixed(2)} €</span>
      </div>

      {/* BOUTON COMMANDER */}
      <button className="btn-checkout" onClick={() => alert(`Commande de ${total.toFixed(2)} € confirmée ! 🎉`)}>
        Commander ({total.toFixed(2)} €)
      </button>
    </div>
  );
}

