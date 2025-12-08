import { ShoppingCart } from "lucide-react";
import '../styles/cartBadge.css';

const CartBadge = ({cartItemCount}:{cartItemCount:number}) => {
    return (
        <div className="cart-indicator" onClick={() => {
            const cartElement = document.getElementById('cart');
            cartElement?.scrollIntoView({ behavior: 'smooth' });
        }}>
            <ShoppingCart className="cart-icon" size={24} />
            <span className="cart-count">{cartItemCount}</span>
        </div>
    );
}

export default CartBadge;