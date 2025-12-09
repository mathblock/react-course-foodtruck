import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { type PromoCode, promoCodes } from '../data/promoCodes';
import { useCart } from './CartContext';

interface PromoContextType {
    promoCode: PromoCode | null;
    discount: number;
    total: number;
    applyPromoCode: (code: string) => boolean;
    removePromoCode: () => void;
}

const PromoContext = createContext<PromoContextType | undefined>(undefined);

export const PromoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { subtotal } = useCart();
    const [promoCode, setPromoCode] = useState<PromoCode | null>(null);

    let discount = 0;
    if (promoCode) {
        if (promoCode.minAmount && subtotal < promoCode.minAmount) {
            discount = 0;
        } else {
            discount = subtotal * promoCode.discount;
            discount = Math.round(discount * 100) / 100;
        }
    }


    const total = Math.max(0, subtotal - discount);

    const applyPromoCode = (code: string): boolean => {
        const promo = promoCodes[code];
        if (!promo) return false;

        if (promo.minAmount && subtotal < promo.minAmount) {
            return false;
        }

        setPromoCode(promo);
        return true;
    };

    const removePromoCode = () => {
        setPromoCode(null);
    };

    return (
        <PromoContext.Provider value={{
            promoCode,
            discount,
            total,
            applyPromoCode,
            removePromoCode
        }}>
            {children}
        </PromoContext.Provider>
    );
};

export const usePromo = () => {
    const context = useContext(PromoContext);
    if (context === undefined) {
        throw new Error('usePromo must be used within a PromoProvider');
    }
    return context;
};
