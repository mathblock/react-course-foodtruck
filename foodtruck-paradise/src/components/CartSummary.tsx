import React, { useState } from 'react';
import type { CartItem } from '../types/menu';
import { promoCodes } from '../data/menuData';

interface CartSummaryProps {
    cart: CartItem[];
    isCartOpen: boolean;
    setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
    updateQuantity: (id: string, quantity: number) => void;
    removeFromCart: (id: string) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart }) => {
    const [inputCode, setInputCode] = useState('');

    const getDiscountPercent = (code: string): number => {
        const promo = promoCodes.find(p => p.code.toLowerCase() === code.toLowerCase());
        return promo ? promo.percent : 0;
    };
    return (
        <>
            {isCartOpen && (
                <div className="cart-overlay">
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
                    <h3>Articles dans le panier</h3>
                    {cart.map(item => (
                        <div key={item.menuItem.id} className="cart-item">
                            <img src={item.menuItem.imageUrl} alt={item.menuItem.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{item.menuItem.name}</p>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}>
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}>
                                        +
                                    </button>
                                    <span className="item-total">{(item.menuItem.price * item.quantity).toFixed(2)} €</span>
                                    <button className="quantity-btn align-right" onClick={() => removeFromCart(item.menuItem.id)}>
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                    {cart.length === 0 ? (
                        <p>Votre panier est vide.</p>
                    ) : (
                        <>
                            <div className="promo-section">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    value={inputCode}
                                    onChange={(e) => setInputCode(e.target.value)}
                                />
                            </div>
                            <div className="cart-total">
                                {(() => {
                                    const totalWithoutDiscount = cart.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
                                    const discountPercent = getDiscountPercent(inputCode);
                                    const discountAmount = totalWithoutDiscount * (discountPercent / 100);
                                    const totalWithDiscount = totalWithoutDiscount - discountAmount;
                                    return discountPercent > 0 ? (
                                        <>
                                            <p>Total without discount: {totalWithoutDiscount.toFixed(2)} €</p>
                                            <p className="green">Saved: {discountAmount.toFixed(2)} €</p>
                                            <hr />
                                            <strong>Total: {totalWithDiscount.toFixed(2)} €</strong>
                                        </>
                                    ) : (
                                        <strong>Total: {totalWithoutDiscount.toFixed(2)} €</strong>
                                    );
                                })()}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default CartSummary;