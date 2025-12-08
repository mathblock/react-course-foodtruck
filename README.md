# 🌮 Food Truck Paradise - Application React TypeScript

Une application web complète de menu pour food truck avec système de panier, développée avec React et TypeScript.

## 📋 Fonctionnalités Complètes

### ✅ Fonctionnalités de Base
- Interface TypeScript avec types stricts
- Composants React modulaires et réutilisables
- Affichage dynamique avec `.map()`
- 16 items de menu répartis sur 4 catégories
- Design responsive et moderne

### 🛒 Système de Panier Complet
- **Gestion d'état** : useState pour gérer le panier
- **Badge compteur** : Affichage du nombre d'articles dans le header
- **Ajout au panier** : Bouton avec animation de feedback (500ms)
- **Modification des quantités** : Boutons +/- pour ajuster
- **Suppression d'items** : Bouton 🗑️ pour retirer du panier
- **Calcul automatique** : Total et sous-totaux mis à jour en temps réel

### 🔍 Filtrage et Recherche
- **Barre de recherche** : Recherche par nom ou description
- **Filtres par catégorie** : Tous, Entrées, Plats, Desserts, Boissons
- **Filtrage double** : Combinaison recherche + catégorie
- **Compteur de résultats** : Affichage du nombre de produits trouvés
- **Message "Aucun produit"** : Si aucun résultat

## 🏗️ Structure du Projet

```
FOODTRUCK3/
├── src/
│   ├── types/
│   │   ├── menu.ts              # Interface MenuItem
│   │   └── cart.ts              # Interface CartItem
│   ├── data/
│   │   └── menuData.ts          # 16 items de menu
│   ├── components/
│   │   ├── Header.tsx           # Header avec badge panier
│   │   ├── MenuCard.tsx         # Carte avec bouton "Ajouter"
│   │   ├── Menu.tsx             # Menu avec recherche et filtres
│   │   ├── CartSummary.tsx      # Vue complète du panier
│   │   └── Footer.tsx           # Footer
│   ├── App.tsx                  # Logique du panier
│   ├── App.css                  # Styles complets
│   └── main.tsx                 # Point d'entrée
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Fonctionnalités Détaillées

### 1. Types TypeScript

#### MenuItem (menu.ts)
```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'entrees' | 'plats' | 'desserts' | 'boissons';
  imageUrl: string;
  isVegetarian: boolean;
  isNew?: boolean;
}
```

#### CartItem (cart.ts)
```typescript
interface CartItem {
  item: MenuItem;
  quantity: number;
}
```

### 2. Gestion du Panier (App.tsx)

**Fonctions principales :**
- `addToCart(item)` : Ajoute un item ou augmente sa quantité
- `removeFromCart(itemId)` : Supprime complètement un item
- `updateQuantity(itemId, quantity)` : Modifie la quantité (supprime si ≤ 0)
- `cartItemsCount` : Calcul du nombre total d'items

### 3. Composants

#### Header
- Logo "🌮 Food Truck Paradise"
- Slogan
- Navigation (Menu, À propos, Contact)
- **Bouton panier avec badge** : Affiche le nombre d'articles

#### MenuCard
- Image du plat
- Badge "Nouveau" pour les nouveautés
- Badge 🌱 pour les plats végétariens
- Nom, description, prix
- **Bouton "Ajouter"** avec animation de feedback

#### Menu
- **Barre de recherche** avec bouton clear (❌)
- **Filtres par catégorie** avec boutons actifs
- **Compteur de résultats**
- Affichage dynamique des items filtrés
- Message si aucun résultat

#### CartSummary
- Liste des items avec images
- Contrôles de quantité (+/-)
- Bouton supprimer (🗑️)
- Sous-totaux par item
- **Total général**
- Bouton "Commander"
- Message "Panier vide" si aucun item

### 4. Données du Menu

**16 items répartis :**
- 🥗 **4 Entrées** : Salade César, Soupe du Jour, Nachos Supreme, Ailes de Poulet
- 🍴 **6 Plats** : Tacos Carnitas, Burger Classique, Pizza Margherita, Wrap Végétarien, Quesadilla, Fish & Chips
- 🍰 **3 Desserts** : Brownie au Chocolat, Glace Artisanale, Churros
- 🥤 **3 Boissons** : Soda, Jus Frais, Thé Glacé

**Caractéristiques :**
- 6 items marqués comme "Nouveau"
- 7 items végétariens
- Images depuis Unsplash
- Prix variés de 3€ à 14€

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 16+)
- npm ou yarn

### Installation
```bash
npm install
```

### Lancement en développement
```bash
npm run dev
```
L'application sera accessible sur : **http://localhost:5173/**

### Build pour production
```bash
npm run build
```

### Prévisualisation du build
```bash
npm run preview
```

## 🎨 Styles CSS

### Nouveaux styles ajoutés :
- **Cart Button** : Bouton panier rouge avec badge
- **Search Bar** : Barre de recherche avec bouton clear
- **Category Filters** : Boutons de filtres avec état actif
- **Cart Summary** : Styles pour le panier complet
- **Cart Items** : Cartes d'items avec contrôles
- **Animations** : Feedback visuel sur les interactions

## 🧪 Tests Suggérés

### Fonctionnalités à tester :

1. **Ajout au panier**
   - Cliquer sur "Ajouter" → Badge augmente ✅
   - Animation "✓ Ajouté !" pendant 500ms ✅

2. **Recherche**
   - Taper "taco" → Affiche les tacos ✅
   - Bouton ❌ → Efface la recherche ✅

3. **Filtres**
   - Cliquer sur "Plats" → Affiche uniquement les plats ✅
   - Combiner avec recherche → Filtrage double ✅

4. **Panier**
   - Modifier quantités avec +/- → Total se met à jour ✅
   - Supprimer un item → Disparaît du panier ✅
   - Vider le panier → Message "Panier vide" ✅

5. **Responsive**
   - Tester sur mobile → Layout adapté ✅
   - Tester sur tablette → Grille ajustée ✅

## 🛠️ Technologies Utilisées

- **React 18.2** - Bibliothèque UI
- **TypeScript 5.2** - Typage statique
- **Vite 5.0** - Build tool rapide
- **CSS3** - Styling moderne

## 📱 Responsive Design

- **Desktop** (> 768px) : Grille multi-colonnes
- **Tablet** (768px) : Grille adaptée
- **Mobile** (< 768px) : Colonne unique

## ✨ Points Forts

1. **Architecture modulaire** : Composants réutilisables
2. **Typage strict** : Sécurité TypeScript
3. **État centralisé** : Gestion du panier dans App.tsx
4. **UX moderne** : Animations et feedback visuel
5. **Performance** : Vite pour un développement rapide
6. **Code propre** : Conventions React et TypeScript

## 📝 Objectifs Pédagogiques Atteints

✅ Définir une structure de données avec interface TypeScript  
✅ Créer et utiliser des composants React modulaires  
✅ Utiliser `.map()` pour afficher des listes dynamiques  
✅ Gérer les props et le typage avec TypeScript  
✅ Organiser une application React avec plusieurs composants  
✅ Appliquer du styling CSS moderne  
✅ **Gérer l'état avec useState**  
✅ **Implémenter un système de panier complet**  
✅ **Créer des filtres et recherche dynamiques**  
✅ **Calculer des totaux en temps réel**  

## 👨‍💻 Auteur

Projet réalisé dans le cadre d'une évaluation React TypeScript

## 📄 Licence

MIT
