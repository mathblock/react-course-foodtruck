import { CircleX, Trash } from "lucide-react";
import type { CartItem } from "../types/cart";
import '../styles/cartSummary.css'

const CartSummary = (
    {
        cartItems,
        updateQuantity,
        removeFromCart,
        clearCart
    }: {
        cartItems: CartItem[],
        updateQuantity: (menuItemId: number, quantity: number) => void,
        removeFromCart: (menuItemId: number) => void,
        clearCart: () => void
    }) => {
        const total = cartItems.reduce(
  (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
  0
);
    return (
        
        <div className="cart-summary" id="cart">
            <div className="cart-summary-header">
                <h2>Cart Summary</h2>
                <p>{total.toFixed(2)}€</p>
                <button onClick={clearCart}>
                    <CircleX size={20} />
                </button>
            </div>
            <ul>
                {cartItems.map(({ item, quantity }) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} className="cart-item-image" />

                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">{item.price.toFixed(2)}€</span>
                        <span className="cart-item-quantity"> {quantity}</span>
                        <div className="cart-item-actions">
                            {quantity > 1 && (<button onClick={() => updateQuantity(item.id, quantity - 1)}>-</button>
                            )}
                            <button onClick={() => updateQuantity(item.id, quantity + 1)}>+</button>
                            <button onClick={() => removeFromCart(item.id)}>
                                <Trash size={16} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};
export default CartSummary;