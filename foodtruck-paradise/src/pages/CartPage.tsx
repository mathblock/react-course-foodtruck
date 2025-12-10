import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { usePromo } from '../context/PromoContext';
import PromoCodeInput from '../components/PromoCodeInput';
import PaymentForm, { type PaymentData } from '../components/PaymentForm';
import { simulatePayment, type PaymentResult } from '../utils/paymentService';

function CartPage() {
    const {
        items,
        subtotal,
        removeFromCart
    } = useCart();

    const {
        discount,
        promoCode
    } = usePromo();

    const total = subtotal - discount;

    const [showPayment, setShowPayment] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);

    const handlePaymentSubmit = async (paymentData: PaymentData) => {
        setIsProcessing(true);

        try {
            const result = await simulatePayment(paymentData, total);
            setPaymentResult(result);

            if (result.success) {
                console.log('Paiement réussi:', result);
            }
        } catch (error) {
            setPaymentResult({
                success: false,
                message: `Une erreur est survenue lors du paiement: ${error}`,
                transactionId: undefined,
                timestamp: new Date()
            });
        } finally {
            setIsProcessing(false);
        }
    };

    const handleResetPayment = () => {
        setPaymentResult(null);
        setShowPayment(false);
    };

    return (
        <div className="cart-page" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2>Votre Panier</h2>

            {paymentResult && (
                <div style={{
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    backgroundColor: paymentResult.success ? '#d1fae5' : '#fee2e2',
                    border: `2px solid ${paymentResult.success ? '#10b981' : '#ef4444'}`
                }}>
                    <h3 style={{
                        color: paymentResult.success ? '#065f46' : '#991b1b',
                        marginBottom: '10px'
                    }}>
                        {paymentResult.success ? 'Paiement réussi' : 'Échec du paiement'}
                    </h3>
                    <p style={{
                        color: paymentResult.success ? '#047857' : '#dc2626',
                        marginBottom: '10px'
                    }}>
                        {paymentResult.message}
                    </p>
                    {paymentResult.success && paymentResult.transactionId && (
                        <div style={{ fontSize: '0.9em', color: '#047857' }}>
                            <p><strong>ID de transaction:</strong> {paymentResult.transactionId}</p>
                            <p><strong>Montant payé:</strong> {total.toFixed(2)}€</p>
                            <p><strong>Date:</strong> {paymentResult.timestamp.toLocaleString('fr-FR')}</p>
                        </div>
                    )}
                    <button
                        onClick={handleResetPayment}
                        style={{
                            marginTop: '15px',
                            padding: '10px 20px',
                            backgroundColor: paymentResult.success ? '#10b981' : '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: '500'
                        }}
                    >
                        {paymentResult.success ? 'Retour au panier' : 'Réessayer'}
                    </button>
                </div>
            )}

            {items.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <>
                    <div className="cart-items" style={{ marginBottom: '30px' }}>
                        {items.map((cartItem) => (
                            <div key={cartItem.item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee' }}>
                                <div>
                                    <strong>{cartItem.item.name}</strong> x {cartItem.quantity}
                                    <button
                                        onClick={() => removeFromCart(cartItem.item.id)}
                                        style={{ marginLeft: '10px', padding: '2px 5px', fontSize: '0.8rem', color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}
                                    >
                                        (Supprimer)
                                    </button>
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

                        {showPayment && !paymentResult ? (
                            <div style={{ marginTop: '20px' }}>
                                <PaymentForm
                                    total={total}
                                    onSubmit={handlePaymentSubmit}
                                    onCancel={() => setShowPayment(false)}
                                    isProcessing={isProcessing}
                                />
                            </div>
                        ) : !paymentResult ? (
                            <button
                                onClick={() => setShowPayment(true)}
                                style={{
                                    width: '100%',
                                    marginTop: '20px',
                                    padding: '15px',
                                    backgroundColor: '#f59e0b',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '1.1em',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Passer la commande
                            </button>
                        ) : null}
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;