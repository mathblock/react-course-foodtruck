import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { PromoCode } from '../data/promoCodes';
import { promoCodes } from '../data/promoCodes';
import { useCart } from './CartContext';

interface PromoContextType {
    promoCode: PromoCode | null;
    discount: number;
    applyPromoCode: (code: string) => boolean;
    removePromoCode: () => void;
}

const PromoContext = createContext<PromoContextType | undefined>(undefined);

export const PromoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [promoCode, setPromoCode] = useState<PromoCode | null>(null);
    const { subtotal } = useCart();

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

    let discount = 0;
    if (promoCode) {
        if (promoCode.minAmount && subtotal < promoCode.minAmount) {
            discount = 0;
        } else {
            discount = subtotal * promoCode.discount;
            discount = Math.round(discount * 100) / 100;
        }
    }

    return (
        <PromoContext.Provider value={{
            promoCode,
            discount,
            applyPromoCode,
            removePromoCode
        }}>
            {children}
        </PromoContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePromo = () => {
    const context = useContext(PromoContext);
    if (context === undefined) {
        throw new Error('usePromo doit être utilisé dans un PromoProvider');
    }
    return context;
};
