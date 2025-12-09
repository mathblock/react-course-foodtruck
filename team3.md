TEAM 3 : Panier & Checkout
Issue #3.1 : Codes Promo
markdown**Labels** : `team-3`, `sprint-1`, `high-priority`
**Assignees** : Team 3
**Milestone** : Sprint 1

## 📋 Description

Implémenter un système de codes promotionnels applicables au panier.

## 🎯 Objectif

Permettre aux utilisateurs d'appliquer des codes promo pour obtenir des réductions.

## ✅ Critères d'Acceptation

- [ ] Input pour entrer un code promo dans CartPage
- [ ] Bouton "Appliquer"
- [ ] Validation du code (liste prédéfinie)
- [ ] Message d'erreur si code invalide
- [ ] Message de succès avec réduction affichée
- [ ] Calcul du nouveau total avec réduction
- [ ] Affichage du détail : Sous-total, Réduction, Total
- [ ] Un seul code à la fois (remplace le précédent)
- [ ] Bouton "Retirer le code" si code appliqué
- [ ] Codes valides fournis :
  - BIENVENUE10 : -10%
  - ETE2024 : -15%
  - FIDELITE20 : -20%

## 💻 Données des Codes
```typescript
// src/data/promoCodes.ts
export interface PromoCode {
  code: string;
  discount: number; // Pourcentage (0.10 = 10%)
  description: string;
  minAmount?: number; // Montant minimum (optionnel)
  expiresAt?: Date; // Date d'expiration (optionnel)
}

export const promoCodes: Record = {
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
```

## 💻 Intégration dans CartContext
```typescript
// Ajouter au CartContext
interface CartContextType {
  // ... autres props
  promoCode: PromoCode | null;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
  subtotal: number;
  discount: number;
  total: number;
}

// Dans le reducer
type CartAction =
  // ... autres actions
  | { type: 'APPLY_PROMO'; payload: PromoCode }
  | { type: 'REMOVE_PROMO' };
```

## 💻 UI du Composant
```typescript
function PromoCodeInput() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { promoCode, applyPromoCode, removePromoCode } = useCart();
  
  const handleApply = () => {
    const code = inputValue.trim().toUpperCase();
    const success = applyPromoCode(code);
    
    if (success) {
      setInputValue('');
      setError('');
      // Toast de succès
    } else {
      setError('Code promo invalide');
    }
  };
  
  if (promoCode) {
    return (
      
        ✅ {promoCode.description}
        Retirer
      
    );
  }
  
  return (
    
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Code promo"
      />
      Appliquer
      {error && {error}}
    
  );
}
```

## 🔧 Conseils Techniques

- Convertir le code en majuscules pour la comparaison
- Vérifier le montant minimum si applicable
- Calculer : `discount = subtotal * promoCode.discount`
- Arrondir à 2 décimales : `Math.round(x * 100) / 100`

## ⏱️ Estimation

1h30
