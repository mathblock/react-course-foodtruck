import { useCart } from '../context/CartContext';
import PromoCodeInput from '../components/PromoCodeInput';

function CartPage() {
    const { items, subtotal, discount, total, promoCode } = useCart();

    return (
        <div className="cart-page" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Votre Panier</h2>

            {items.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <>
                    <div className="cart-items" style={{ marginBottom: '30px' }}>
                        {items.map((cartItem) => (
                            <div key={cartItem.item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
                                <div>
                                    <strong>{cartItem.item.name}</strong> x {cartItem.quantity}
                                </div>
                                <div>
                                    {(cartItem.item.price * cartItem.quantity).toFixed(2)}€
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary" style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>

                        <div className="promo-section" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
                            <PromoCodeInput />
                        </div>

                        <div className="totals">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span>Sous-total:</span>
                                <span>{subtotal.toFixed(2)}€</span>
                            </div>

                            {promoCode && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'green' }}>
                                    <span>Réduction ({promoCode.code}):</span>
                                    <span>-{discount.toFixed(2)}€</span>
                                </div>
                            )}

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px', fontWeight: 'bold', fontSize: '1.2em', borderTop: '2px solid #ddd', paddingTop: '10px' }}>
                                <span>Total:</span>
                                <span>{total.toFixed(2)}€</span>
                            </div>
                        </div>

                        <button style={{ width: '100%', marginTop: '20px', padding: '15px', backgroundColor: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.1em', fontWeight: 'bold', cursor: 'pointer' }}>
                            Passer la commande
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;