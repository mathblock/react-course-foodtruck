import type { CartItem } from "../types/carts";

interface CartSummaryProps {
  cart: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

function CartSummary({ cart, onUpdateQuantity, onRemove }: CartSummaryProps) {
 
  const total = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );

 
  if (cart.length === 0) {
    return <p className="empty-cart">Votre panier est vide.</p>;
  }

  return (
    <div className="cart-summary">
      <h2>Votre Panier</h2>

      <ul className="cart-list">
        {cart.map((cartItem) => (
          <li key={cartItem.item.id} className="cart-item">

            
            <img
              src={cartItem.item.imageUrl}
              alt={cartItem.item.name}
              className="cart-thumb"
            />

            <div className="cart-info">
              <h3>{cartItem.item.name}</h3>
              <p>{cartItem.item.price.toFixed(2)} €</p>

             
              <div className="cart-quantity">
                <button 
                  onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                >
                  –
                </button>

                <span>{cartItem.quantity}</span>

                <button 
                  onClick={() => onUpdateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <span className="cart-subtotal">
              {(cartItem.item.price * cartItem.quantity).toFixed(2)} €
            </span>

            <button
              className="btn-delete"
              onClick={() => onRemove(cartItem.item.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <h3>Total : {total.toFixed(2)} €</h3>
        <button className="btn-order">Commander</button>
      </div>
    </div>
  );
}

export default CartSummary;
