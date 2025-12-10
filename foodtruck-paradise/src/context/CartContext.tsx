import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { CartItem } from '../types/cart';
import type { MenuItem } from '../types/menu';
import { menuItems } from '../data/menuData';

interface CartState {
    items: CartItem[];
}

interface CartContextType {
    items: CartItem[];
    subtotal: number;
    addToCart: (item: MenuItem, quantity?: number) => void;
    removeFromCart: (itemId: string) => void;
    updateQuantity: (itemId: string, quantity: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartAction =
    | { type: 'ADD_ITEM'; payload: { item: MenuItem; quantity: number } }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
    | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existingItemIndex = state.items.findIndex(i => i.item.id === action.payload.item.id);
            if (existingItemIndex > -1) {
                const newItems = [...state.items];
                newItems[existingItemIndex].quantity += action.payload.quantity;
                return { ...state, items: newItems };
            }
            return { ...state, items: [...state.items, { item: action.payload.item, quantity: action.payload.quantity }] };
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
        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };
        default:
            return state;
    }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        items: [
            {item: menuItems[0], quantity: 1}
        
        ]
    });

    const subtotal = state.items.reduce((sum, cartItem) => {
        return sum + (cartItem.item.price * cartItem.quantity);
    }, 0);

    const addToCart = (item: MenuItem, quantity: number = 1) => {
        dispatch({ type: 'ADD_ITEM', payload: { item, quantity } });
    };

    const removeFromCart = (itemId: string) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    const updateQuantity = (itemId: string, quantity: number) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider value={{
            items: state.items,
            subtotal,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart doit être utilisé dans un CartProvider');
    }
    return context;
};
