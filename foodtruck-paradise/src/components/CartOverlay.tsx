import React, { useState } from 'react';
import type { CartItem } from '../types/menu';
import { promoCodes } from '../data/menuData';

interface CartOverlayProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartOverlay: React.FC<CartOverlayProps> = ({ cart, setCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputCode, setInputCode] = useState('');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const updateCount = (id: string, delta: number) => {
        setCart(items =>
            // met à jour la quantité
            items.map(item =>
                item.menuItem.id === id ? { ...item, quantity: item.quantity + delta } : item
            )
                // supprime les articles avec une quantité de 0
                .filter(item => item.quantity > 0)
        );
    };

    const getDiscountPercent = (code: string): number => {
        const promo = promoCodes.find(p => p.code === code);
        return promo ? promo.percent : 0;
    };

    const removeFromCart = (id: string) => {
        setCart(items => items.filter(item => item.menuItem.id !== id));
    }

    return (
        <>
            <div
                className="cart-icon"
                onClick={() => setIsOpen(!isOpen)}
            >
                🛒
                {totalItems > 0 && (
                    <span className="cart-count">
                        {totalItems}
                    </span>
                )}
            </div>
            {isOpen && (
                <div className="cart-overlay">
                    <h3>Articles dans le panier</h3>
                    {cart.map(item => (
                        <div key={item.menuItem.id} className="cart-item">
                            <img src={item.menuItem.imageUrl} alt={item.menuItem.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <p className="cart-item-name">{item.menuItem.name}</p>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => updateCount(item.menuItem.id, -1)}>
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button className="quantity-btn" onClick={() => updateCount(item.menuItem.id, 1)}>
                                        +
                                    </button>
                                    <button className="quantity-btn align-right" onClick={() => removeFromCart(item.menuItem.id)}>
                                        x
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

export default CartOverlay;