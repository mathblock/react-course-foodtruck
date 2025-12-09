export interface PromoCode {
    code: string;
    discount: number;
    description: string;
    minAmount?: number; 
    expiresAt?: Date; 
}

export const promoCodes: Record<string, PromoCode> = {
    'BIENVENUE10': {
        code: 'BIENVENUE10',
        discount: 0.10,
        description: 'Bienvenue - 10% de réduction',
        minAmount: 15
    },
    'ETE2024': {
        code: 'ETE2024',
        discount: 0.15,
        description: 'Été 2024 - 15% de réduction'
    },
    'FIDELITE20': {
        code: 'FIDELITE20',
        discount: 0.20,
        description: 'Client fidèle - 20% de réduction',
        minAmount: 30
    }
};
