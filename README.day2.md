# ÉVALUATION : Panier Fonctionnel (1h30 - 2h)

## Objectifs

Implémenter un système de panier complet avec :

- Gestion d'état du panier (useState)
- Badge compteur dans le header
- Filtrage par catégorie + barre de recherche
- Vue panier avec quantités et calcul du total

---

## Chronologie

### **Étape 1 : Logique du panier**

#### Instructions

1. Créez le fichier `src/types/cart.ts` avec le type `CartItem` :

```typescript
import { MenuItem } from "./menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
```

2. Dans `App.tsx`, initialisez l'état du panier et implémentez les trois fonctions essentielles :
   - `addToCart(item)` : ajoute un item ou augmente sa quantité
   - `removeFromCart(itemId)` : supprime complètement un item
   - `updateQuantity(itemId, quantity)` : modifie la quantité (supprime si ≤ 0)

> **Indices** : Utilisez `useState`, `find()`, et `map()` pour mettre à jour les items.

---

### **Étape 2 : Badge compteur + Bouton Ajouter**

#### Instructions

1. Modifiez `Header.tsx` pour afficher un badge avec le nombre total d'items du panier.

   - Acceptez `cartItemsCount` en prop
   - Affichez le badge uniquement si `cartItemsCount > 0`

2. Modifiez `MenuCard.tsx` pour ajouter un bouton "Ajouter au panier"

   - Acceptez la prop `onAddToCart`
   - Implémentez une animation feedback (texte change pendant 500ms)
   - Passez la fonction à travers `Menu.tsx`

3. Calculez le nombre total dans `App.tsx` :

```typescript
const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
```

#### CSS minimal fourni

```css
.cart-button {
  position: relative;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #c0392b;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
```

**Testez** : Cliquer sur "Ajouter" → Le badge augmente ✅

---

### **☕ 14h30 - 14h45 | PAUSE (15 min)**

---

### **Étape 3 : Filtrage + Recherche**

#### Instructions

1. Dans `Menu.tsx`, ajoutez deux états :

   - `activeCategory` (défaut: "tous")
   - `searchTerm` (défaut: "")

2. Implémentez le filtrage double (catégorie ET recherche) :

```typescript
const filteredItems = menuItems
  .filter(
    (item) => activeCategory === "tous" || item.category === activeCategory
  )
  .filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
```

3. Créez :
   - **Barre de recherche** avec champ input et bouton "❌" pour effacer
   - **Boutons de catégories** : "Tous", "🥗 Entrées", "🍔 Plats", "🍰 Desserts", "🥤 Boissons"
   - **Affichage du nombre** de résultats
   - **Message** "Aucun produit" si aucun résultat

#### CSS minimal

```css
.search-bar {
  position: relative;
  max-width: 500px;
  margin: 2rem auto;
}

.search-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
}

.search-input:focus {
  outline: none;
  border-color: #3498db;
}

.category-filters {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  background: white;
  border: 2px solid #ddd;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  cursor: pointer;
}

.filter-btn.active {
  background: #3498db;
  color: white;
  border-color: #3498db;
}
```

**Testez** : Rechercher "taco" → Filtrer par catégorie → Les résultats changent ✅

---

### **Étape 4 : Vue panier complet**

#### Instructions

1. Créez le composant `CartSummary.tsx` avec :

   - Liste des items du panier avec image, nom, prix
   - Boutons `-` et `+` pour modifier les quantités
   - Bouton "🗑️" pour supprimer
   - **Sous-total** par item (quantité × prix)
   - **Total** général en bas
   - Message "Votre panier est vide" si pas d'items
   - Bouton "Commander" (non fonctionnel)

2. Implémentez le calcul du total :

```typescript
const total = cart.reduce(
  (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
  0
);
```

3. Passez les props :

   - `cart` : le tableau CartItem[]
   - `onUpdateQuantity` : fonction pour modifier les quantités
   - `onRemove` : fonction pour supprimer un item

4. Intégrez `CartSummary` dans `App.tsx` :
   - Affichage temporaire en bas de la page
   - Affiche uniquement si le panier n'est pas vide

#### Structure CSS minimale

```css
.cart-summary {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

.cart-item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: white;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.quantity-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.qty-btn {
  width: 32px;
  height: 32px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  border-radius: 4px;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #ddd;
}

.btn-checkout {
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
}
```

**Testez** :

- Ajouter des items → Modifier les quantités → Vérifier le total ✅
- Supprimer un item → Le total se met à jour ✅
- Vider le panier → Message "Panier vide" ✅

---

## Critères de réussite

| Critère                            | Points |
| ---------------------------------- | ------ |
| Logique du panier fonctionnelle    | 25%    |
| Badge compteur + Bouton ajouter    | 20%    |
| Filtrage + Recherche               | 25%    |
| Vue panier avec quantités et total | 30%    |

---

## Défis bonus (si temps)

- [ ] Persister le panier avec `localStorage`
- [ ] Animer l'apparition des items du panier
- [ ] Ajouter un compteur de "favoris" avec un ❤️
- [ ] Implémenter un code promo avec réduction

---

## Rappels utiles

- **`reduce()`** : Pour calculer une somme ou fusionner des données
- **`find()`** : Pour chercher un élément dans un tableau
- **`map()`** : Pour transformer/remplacer un élément
- **`filter()`** : Pour filtrer des éléments selon une condition
- **`localStorage`** : Pour persister les données (bonus)
