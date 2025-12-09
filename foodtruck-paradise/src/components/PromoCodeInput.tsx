import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function PromoCodeInput() {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const { promoCode, applyPromoCode, removePromoCode } = useCart();

    const handleApply = () => {
        const code = inputValue.trim().toUpperCase();
        if (!code) return;

        const success = applyPromoCode(code);

        if (success) {
            setInputValue('');
            setError('');
        
        } else {
            setError('Code promo invalide ou conditions non remplies');
        }
    };

    if (promoCode) {
        return (
            <div className="promo-code-applied">
                <span className="promo-success">✅ {promoCode.description}</span>
                <button onClick={removePromoCode} className="remove-promo-btn" style={{ marginLeft: '1rem', padding: '0.2rem 0.5rem' }}>
                    Retirer
                </button>
            </div>
        );
    }

    return (
        <div className="promo-code-input">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Code promo"
                    style={{ padding: '0.5rem' }}
                />
                <button onClick={handleApply} style={{ padding: '0.5rem 1rem' }}>
                    Appliquer
                </button>
            </div>
            {error && <div style={{ color: 'red', fontSize: '0.9rem' }}>{error}</div>}
        </div>
    );
}
