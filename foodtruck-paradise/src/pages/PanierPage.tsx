import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function CartPage() {
 
  const cartItems: any[] = [];

  return (
    <div className="cart-page">
      <section className="page-header">
        <h1>Votre Panier</h1>
        <p>Consultez vos articles et finalisez votre commande</p>
      </section>

      <div className="container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-icon"><FaShoppingCart /></span>
            <h2>Votre panier est vide</h2>
            <p>Ajoutez des produits</p>
            <Link to="/menu" className="btn btn-primary">
              Découvrir le menu
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {/* Les items du panier apparaîtront ici */}
            </div>
            <div className="cart-summary">
              <h3>Résumé de la commande</h3>
              <div className="summary-line">
                <span>Sous-total</span>
                <span>0.00 €</span>
              </div>
              <div className="summary-line">
                <span>Livraison</span>
                <span>Gratuite</span>
              </div>
              <div className="summary-line total">
                <span>Total</span>
                <span>0.00 €</span>
              </div>
              <button className="btn btn-primary btn-block">
                Commander
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
