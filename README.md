Food Truck Paradise - Évaluation React
Informations Générales
Format : Projet guidé en binôme
Durée : 1h30
Organisation : Travail en binôme recommandé

Sur une branche dédiée evaluation-react/votre-nom, vous allez créer une application React TypeScript pour un food truck fictif nommé "Food Truck Paradise". L'application affichera un menu de plats avec des images, des descriptions, des prix, et des badges pour les plats végétariens et les nouveautés.

Objectifs Pédagogiques
À la fin de cette évaluation, vous serez capable de :

✅ Définir une structure de données avec une interface TypeScript
✅ Créer et utiliser des composants React modulaires
✅ Utiliser la méthode .map() pour afficher des listes dynamiques
✅ Gérer les props et le typage avec TypeScript
✅ Organiser une application React avec plusieurs composants
✅ Appliquer du styling CSS de base
Résultat Attendu
Votre application finale devra comporter :

Un Header avec logo et navigation
Une grille de plats organisés par catégories
Un Footer avec informations
Au moins 15 items de menu variés
Planning de l'Évaluation
Étape 1 : Structure des données (20 min)
Tâche 1.1 : Créer l'interface TypeScript
Créez le fichier src/types/menu.ts et définissez une interface MenuItem qui contiendra les propriétés suivantes :

id : identifiant unique (string)
name : nom du plat (string)
description : description du plat (string)
price : prix (number)
category : catégorie parmi 'entrees', 'plats', 'desserts', 'boissons'
imageUrl : URL de l'image (string)
isVegetarian : indicateur végétarien (boolean)
isNew : indicateur nouveauté (boolean, optionnel)
Tâche 1.2 : Créer les données du menu
Créez le fichier src/data/menuData.ts et créez un tableau menuItems contenant au minimum 15 items répartis sur les différentes catégories.

Suggestions d'items :

Entrées : Salade, Soupe, Nachos, etc.
Plats : Tacos, Burgers, Pizza, Wraps, etc.
Desserts : Brownie, Glace, Churros, etc.
Boissons : Sodas, Jus, Thé glacé, etc.
💡 Astuce : Utilisez des images depuis Unsplash (https://images.unsplash.com/)

Étape 2 : Composant Header (20 min)
Tâche 2 : Créer le Header
Créez le fichier src/components/Header.tsx contenant :

Un logo avec le titre "🌮 Food Truck Paradise"
Un slogan accrocheur
Une barre de navigation avec 3 liens : Menu, À propos, Contact
Contraintes :

Utilisez les classes CSS appropriées : header, container, logo, tagline, nav, nav-link
Exportez le composant par défaut
Étape 3 : Composant MenuCard (30 min)
Tâche 3 : Créer la carte de menu
Créez le fichier src/components/MenuCard.tsx qui affiche un item du menu.

Spécifications :

Le composant doit :

Recevoir un objet item de type MenuItem en props
Afficher l'image du plat
Afficher un badge "Nouveau" si isNew est true
Afficher le nom du plat
Afficher un badge 🌱 si isVegetarian est true
Afficher la description
Afficher le prix formaté avec 2 décimales
Inclure un bouton "Ajouter"
Structure suggérée :

menu-card
├── card-image (avec img et badge-new)
└── card-content
    ├── card-header (nom + badge-vege)
    ├── description
    └── card-footer (prix + btn-add)
Étape 4 : Composant Menu et Assemblage (20 min)
Tâche 4.1 : Créer le composant Menu
Créez le fichier src/components/Menu.tsx qui :

Importe les données depuis menuData.ts
Organise les items par catégories
Utilise la méthode .map() pour générer les cartes
Affiche chaque catégorie dans une section dédiée
Catégories à afficher :

🍴 Plats Principaux
🥗 Entrées
🍰 Desserts
🥤 Boissons
💡 Conseil : Utilisez .filter() pour filtrer par catégorie, puis .map() pour afficher les MenuCard.

Tâche 4.2 : Créer le Footer
Créez le fichier src/components/Footer.tsx avec :

Les informations de copyright
L'année en cours
Tâche 4.3 : Assembler l'application
Dans src/App.tsx :

Importez tous vos composants (Header, Menu, Footer)
Importez le fichier App.css
Assemblez la structure de l'application
Structure attendue :

<div className="app">
  <Header />
  <main>
    <Menu />
  </main>
  <Footer />
</div>
Livrables
À la fin de l'évaluation, votre projet doit contenir :

Sur une branche dédiée evaluation-react/votre-nom :

✅ src/types/menu.ts - Interface TypeScript
✅ src/data/menuData.ts - Données avec 15+ items
✅ src/components/Header.tsx - Composant Header
✅ src/components/MenuCard.tsx - Composant MenuCard
✅ src/components/Menu.tsx - Composant Menu avec map()
✅ src/components/Footer.tsx - Composant Footer
✅ src/App.tsx - Assemblage final
✅ src/App.css - Styles CSS
Critères d'Évaluation
Critère	Points
Structure TypeScript correcte	5 pts
Données complètes (15+ items)	15 pts
Composant Header fonctionnel	20 pts
Composant MenuCard avec props typées	20 pts
Utilisation correcte de .map()	15 pts
Assemblage et architecture	15 pts
Styling CSS cohérent	10 pts
TOTAL	100 pts
Conseils
Testez régulièrement votre application avec npm run dev
Committez souvent pour sauvegarder votre progression
Lisez les erreurs TypeScript attentivement
Demandez de l'aide si vous êtes bloqué plus de 10 minutes
Communiquez avec votre binôme
Points d'Attention
N'oubliez pas d'exporter vos composants avec export default
Vérifiez le typage TypeScript de vos props
Assurez-vous d'utiliser la prop key dans vos .map()
Testez que toutes les catégories s'affichent correctement
Bon courage ! 🎉


ÉVALUATION22 : Panier Fonctionnel (1h30 - 2h)
Objectifs
Implémenter un système de panier complet avec :

Gestion d'état du panier (useState)
Badge compteur dans le header
Filtrage par catégorie + barre de recherche
Vue panier avec quantités et calcul du total
Chronologie
Étape 1 : Logique du panier
Instructions
Créez le fichier src/types/cart.ts avec le type CartItem :
import { MenuItem } from "./menu";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}
Dans App.tsx, initialisez l'état du panier et implémentez les trois fonctions essentielles :
addToCart(item) : ajoute un item ou augmente sa quantité
removeFromCart(itemId) : supprime complètement un item
updateQuantity(itemId, quantity) : modifie la quantité (supprime si ≤ 0)
Indices : Utilisez useState, find(), et map() pour mettre à jour les items.

Étape 2 : Badge compteur + Bouton Ajouter
Instructions
Modifiez Header.tsx pour afficher un badge avec le nombre total d'items du panier.

Acceptez cartItemsCount en prop
Affichez le badge uniquement si cartItemsCount > 0
Modifiez MenuCard.tsx pour ajouter un bouton "Ajouter au panier"

Acceptez la prop onAddToCart
Implémentez une animation feedback (texte change pendant 500ms)
Passez la fonction à travers Menu.tsx
Calculez le nombre total dans App.tsx :

const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
CSS minimal fourni
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
Testez : Cliquer sur "Ajouter" → Le badge augmente ✅

☕ 14h30 - 14h45 | PAUSE (15 min)
Étape 3 : Filtrage + Recherche
Instructions
Dans Menu.tsx, ajoutez deux états :

activeCategory (défaut: "tous")
searchTerm (défaut: "")
Implémentez le filtrage double (catégorie ET recherche) :

const filteredItems = menuItems
  .filter(
    (item) => activeCategory === "tous" || item.category === activeCategory
  )
  .filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
Créez :
Barre de recherche avec champ input et bouton "❌" pour effacer
Boutons de catégories : "Tous", "🥗 Entrées", "🍔 Plats", "🍰 Desserts", "🥤 Boissons"
Affichage du nombre de résultats
Message "Aucun produit" si aucun résultat
CSS minimal
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
Testez : Rechercher "taco" → Filtrer par catégorie → Les résultats changent ✅

Étape 4 : Vue panier complet
Instructions
Créez le composant CartSummary.tsx avec :

Liste des items du panier avec image, nom, prix
Boutons - et + pour modifier les quantités
Bouton "🗑️" pour supprimer
Sous-total par item (quantité × prix)
Total général en bas
Message "Votre panier est vide" si pas d'items
Bouton "Commander" (non fonctionnel)
Implémentez le calcul du total :

const total = cart.reduce(
  (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
  0
);
Passez les props :

cart : le tableau CartItem[]
onUpdateQuantity : fonction pour modifier les quantités
onRemove : fonction pour supprimer un item
Intégrez CartSummary dans App.tsx :

Affichage temporaire en bas de la page
Affiche uniquement si le panier n'est pas vide
Structure CSS minimale
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
Testez :

Ajouter des items → Modifier les quantités → Vérifier le total ✅
Supprimer un item → Le total se met à jour ✅
Vider le panier → Message "Panier vide" ✅
Critères de réussite
Critère	Points
Logique du panier fonctionnelle	25%
Badge compteur + Bouton ajouter	20%
Filtrage + Recherche	25%
Vue panier avec quantités et total	30%
Défis bonus (si temps)
 Persister le panier avec localStorage
 Animer l'apparition des items du panier
 Ajouter un compteur de "favoris" avec un ❤️
 Implémenter un code promo avec réduction
Rappels utiles
reduce() : Pour calculer une somme ou fusionner des données
find() : Pour chercher un élément dans un tableau
map() : Pour transformer/remplacer un élément
filter() : Pour filtrer des éléments selon une condition
localStorage : Pour persister les données (bonus)