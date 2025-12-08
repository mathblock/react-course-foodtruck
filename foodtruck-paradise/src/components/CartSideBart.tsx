import type { CartItem } from "../types/cart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, qty: number) => void;
  onRemove: (id: number) => void;
  total: number;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  total
}) => {
  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h2>Votre Panier</h2>
          <button className="cart-close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">
              Votre panier est vide<br />
              Ajoutez de délicieux plats !
            </p>
          ) : (
            cart.map(({ item, quantity }) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">{item.price.toFixed(2)} €</p>
                </div>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                  >
                    -
                  </button>
                  <span style={{ fontWeight: 'bold', minWidth: '30px', textAlign: 'center' }}>
                    {quantity}
                  </span>
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => onRemove(item.id)}
                  style={{ color: '#e74c3c', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem' }}
                >
                  Supprimer
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
            <button className="checkout-btn">
              Commander maintenant
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;