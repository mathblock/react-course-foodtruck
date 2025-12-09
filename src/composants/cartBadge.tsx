import { ShoppingCart } from "lucide-react";
import '../styles/cartBadge.css';
import { Link } from "react-router-dom";

const CartBadge = ({cartItemCount}:{cartItemCount:number}) => {
    return (
        <Link className="cart-indicator" to="/cart">
            <ShoppingCart className="cart-icon" size={24} />
            <span className="cart-count">{cartItemCount}</span>
        </Link>
    );
}

export default CartBadge;