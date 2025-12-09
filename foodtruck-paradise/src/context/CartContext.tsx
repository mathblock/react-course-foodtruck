import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import { type CartItem } from '../types/cart';
import { type MenuItem } from '../types/menu';
import { type PromoCode, promoCodes } from '../data/promoCodes'

interface CartState {
    items: CartItem[];
    promoCode: PromoCode | null;
}

interface CartContextType {
    items: CartItem[];
    promoCode: PromoCode | null;
    subtotal: number;
    discount: number;
    total: number;
    addToCart: (item: MenuItem) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    applyPromoCode: (code: string) => boolean;
    removePromoCode: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
    | { type: 'ADD_ITEM'; payload: MenuItem }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
    | { type: 'APPLY_PROMO'; payload: PromoCode }
    | { type: 'REMOVE_PROMO' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItemIndex = state.items.findIndex(i => i.item.id === action.payload.id);
            if (existingItemIndex > -1) {
                const newItems = [...state.items];
                newItems[existingItemIndex].quantity += 1;
                return { ...state, items: newItems };
            }
            return { ...state, items: [...state.items, { item: action.payload, quantity: 1 }] };
        }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(i => i.item.id !== action.payload)
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(i =>
                    i.item.id === action.payload.itemId
                        ? { ...i, quantity: Math.max(0, action.payload.quantity) }
                        : i
                ).filter(i => i.quantity > 0)
            };
        case 'APPLY_PROMO':
            return { ...state, promoCode: action.payload };
        case 'REMOVE_PROMO':
            return { ...state, promoCode: null };
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [],
        promoCode: null
    });

    const subtotal = state.items.reduce((sum, cartItem) => {
        return sum + (cartItem.item.price * cartItem.quantity);
    }, 0);

    let discount = 0;
    if (state.promoCode) {
        if (state.promoCode.minAmount && subtotal < state.promoCode.minAmount) {
            discount = 0;
        } else {
            discount = subtotal * state.promoCode.discount;
            discount = Math.round(discount * 100) / 100;
        }
    }

    const total = subtotal - discount;

    const addToCart = (item: MenuItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const removeFromCart = (itemId: string) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
    };

    const applyPromoCode = (code: string): boolean => {
        const promo = promoCodes[code];
        if (!promo) return false;

        if (promo.minAmount && subtotal < promo.minAmount) {
            return false;
        }

        dispatch({ type: 'APPLY_PROMO', payload: promo });
        return true;
    };

    const removePromoCode = () => {
        dispatch({ type: 'REMOVE_PROMO' });
    };

    return (
        <CartContext.Provider value={{
            items: state.items,
            promoCode: state.promoCode,
            subtotal,
            discount,
            total,
            addToCart,
            removeFromCart,
            updateQuantity,
            applyPromoCode,
            removePromoCode
        }}>
            {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};