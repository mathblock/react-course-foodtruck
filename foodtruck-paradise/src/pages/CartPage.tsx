import { useState } from 'react';
import { menuItems } from '../data/menuData';
import type { CartItem } from '../types/cart';

function CartPage() {
    const [items, setItems] = useState<CartItem[]>([
        { item: menuItems[0], quantity: 2 },
        { item: menuItems[2], quantity: 1 },
    ]);

    const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null);
    const [promoInput, setPromoInput] = useState('');
    const [promoError, setPromoError] = useState('');
    const [promoSuccess, setPromoSuccess] = useState('');

    const subtotal = items.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.quantity), 0);

    const discountAmount = appliedPromo
        ? Math.round(subtotal * appliedPromo.discount * 100) / 100
        : 0;

    const total = subtotal - discountAmount;

    const handleApplyPromo = () => {
        setPromoError('');
        setPromoSuccess('');
        const code = promoInput.trim().toUpperCase();

        if (!code) return;

        const promo = promoCodes[code];

        if (!promo) {
            setPromoError('Code promo invalide');
            return;
        }

        if (promo.minAmount && subtotal < promo.minAmount) {
            setPromoError(`Ce code nécessite un minimum de ${promo.minAmount}€ d'achat`);
            return;
        }

        setAppliedPromo(promo);
        setPromoSuccess(`Code ${promo.code} appliqué avec succès`);
        setPromoInput('');
    };

    const handleRemovePromo = () => {
        setAppliedPromo(null);
        setPromoSuccess('');
        setPromoError('');
    };

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
                            {appliedPromo ? (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#e6fffa', padding: '10px', borderRadius: '4px', color: '#047857' }}>
                                    <span>{appliedPromo.description}</span>
                                    <button onClick={handleRemovePromo} style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer', backgroundColor: 'transparent', border: '1px solid #047857', color: '#047857', borderRadius: '4px' }}>
                                        Retirer
                                    </button>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <input
                                        type="text"
                                        value={promoInput}
                                        onChange={(e) => setPromoInput(e.target.value)}
                                        placeholder="Code promo"
                                        style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                                    />
                                    <button onClick={handleApplyPromo} style={{ padding: '8px 16px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                        Appliquer
                                    </button>
                                </div>
                            )}

                            {promoError && <p style={{ color: 'red', marginTop: '10px', fontSize: '0.9em' }}>{promoError}</p>}
                            {promoSuccess && <p style={{ color: 'green', marginTop: '10px', fontSize: '0.9em' }}>{promoSuccess}</p>}
                        </div>

                        <div className="totals">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                <span>Sous-total:</span>
                                <span>{subtotal.toFixed(2)}€</span>
                            </div>

                            {appliedPromo && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'green' }}>
                                    <span>Réduction ({appliedPromo.code}):</span>
                                    <span>-{discountAmount.toFixed(2)}€</span>
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