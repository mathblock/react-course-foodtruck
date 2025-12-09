import type { CartItem } from '../types/cart';

interface CartSummaryProps {
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

const CartSummary = ({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) => {
  // Calcul du total
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div id="cart-summary" className="cart-summary">
        <h2>🛒 Votre Panier</h2>
        <div className="empty-cart">
          <p>Votre panier est vide</p>
          <p>Ajoutez des plats délicieux pour commencer !</p>
        </div>
      </div>
    );
  }

  return (
    <div id="cart-summary" className="cart-summary">
      <h2>🛒 Votre Panier ({cart.length} {cart.length === 1 ? 'article' : 'articles'})</h2>
      
      <div className="cart-items">
        {cart.map((cartItem) => {
          const subtotal = cartItem.item.price * cartItem.quantity;
          
          return (
            <div key={cartItem.item.id} className="cart-item">
              <img 
                src={cartItem.item.imageUrl} 
                alt={cartItem.item.name}
                className="cart-item-image"
              />
              
              <div className="cart-item-details">
                <h3>{cartItem.item.name}</h3>
                <p className="cart-item-price">{cartItem.item.price.toFixed(2)} €</p>
              </div>

              <div className="quantity-controls">
                <button 
                  className="qty-btn"
                  onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                  aria-label="Diminuer la quantité"
                >
                  -
                </button>
                <span className="quantity">{cartItem.quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>

              <div className="cart-item-subtotal">
                {subtotal.toFixed(2)} €
              </div>

              <button 
                className="remove-btn"
                onClick={() => onRemove(cartItem.item.id)}
                aria-label="Supprimer l'article"
              >
                🗑️
              </button>
            </div>
          );
        })}
      </div>

      <div className="cart-total">
        <span>Total :</span>
        <span>{total.toFixed(2)} €</span>
      </div>

      <button className="btn-checkout">
        Commander
      </button>
    </div>
  );
};

export default CartSummary;

