# 🌮 Food Truck Paradise - Évaluation React

## 📋 Informations Générales

**Format** : Projet guidé en binôme  
**Durée** : 1h30  
**Organisation** : Travail en binôme recommandé

## 🎯 Objectifs Pédagogiques

À la fin de cette évaluation, vous serez capable de :

- ✅ Définir une structure de données avec une interface TypeScript
- ✅ Créer et utiliser des composants React modulaires
- ✅ Utiliser la méthode `.map()` pour afficher des listes dynamiques
- ✅ Gérer les props et le typage avec TypeScript
- ✅ Organiser une application React avec plusieurs composants
- ✅ Appliquer du styling CSS de base

## 🚀 Résultat Attendu

Votre application finale devra comporter :

- Un **Header** avec logo et navigation
- Une **grille de plats** organisés par catégories
- Un **Footer** avec informations
- Au moins **15 items** de menu variés

---

## ⏱️ Planning de l'Évaluation

### Étape 1 : Structure des données (20 min)

#### 📝 Tâche 1.1 : Créer l'interface TypeScript

Créez le fichier `src/types/menu.ts` et définissez une interface `MenuItem` qui contiendra les propriétés suivantes :

- `id` : identifiant unique (string)
- `name` : nom du plat (string)
- `description` : description du plat (string)
- `price` : prix (number)
- `category` : catégorie parmi 'entrees', 'plats', 'desserts', 'boissons'
- `imageUrl` : URL de l'image (string)
- `isVegetarian` : indicateur végétarien (boolean)
- `isNew` : indicateur nouveauté (boolean, optionnel)

#### 📝 Tâche 1.2 : Créer les données du menu

Créez le fichier `src/data/menuData.ts` et créez un tableau `menuItems` contenant **au minimum 15 items** répartis sur les différentes catégories.

**Suggestions d'items** :

- **Entrées** : Salade, Soupe, Nachos, etc.
- **Plats** : Tacos, Burgers, Pizza, Wraps, etc.
- **Desserts** : Brownie, Glace, Churros, etc.
- **Boissons** : Sodas, Jus, Thé glacé, etc.

💡 **Astuce** : Utilisez des images depuis Unsplash (https://images.unsplash.com/)

---

### Étape 2 : Composant Header (20 min)

#### 📝 Tâche 2 : Créer le Header

Créez le fichier `src/components/Header.tsx` contenant :

- Un logo avec le titre "🌮 Food Truck Paradise"
- Un slogan accrocheur
- Une barre de navigation avec 3 liens : Menu, À propos, Contact

**Contraintes** :

- Utilisez les classes CSS appropriées : `header`, `container`, `logo`, `tagline`, `nav`, `nav-link`
- Exportez le composant par défaut

---

### Étape 3 : Composant MenuCard (30 min)

#### 📝 Tâche 3 : Créer la carte de menu

Créez le fichier `src/components/MenuCard.tsx` qui affiche un item du menu.

**Spécifications** :

Le composant doit :

- Recevoir un objet `item` de type `MenuItem` en props
- Afficher l'image du plat
- Afficher un badge "Nouveau" si `isNew` est true
- Afficher le nom du plat
- Afficher un badge 🌱 si `isVegetarian` est true
- Afficher la description
- Afficher le prix formaté avec 2 décimales
- Inclure un bouton "Ajouter"

**Structure suggérée** :

```
menu-card
├── card-image (avec img et badge-new)
└── card-content
    ├── card-header (nom + badge-vege)
    ├── description
    └── card-footer (prix + btn-add)
```

---

### Étape 4 : Composant Menu et Assemblage (20 min)

#### 📝 Tâche 4.1 : Créer le composant Menu

Créez le fichier `src/components/Menu.tsx` qui :

- Importe les données depuis `menuData.ts`
- Organise les items par catégories
- Utilise la méthode `.map()` pour générer les cartes
- Affiche chaque catégorie dans une section dédiée

**Catégories à afficher** :

- 🍴 Plats Principaux
- 🥗 Entrées
- 🍰 Desserts
- 🥤 Boissons

💡 **Conseil** : Utilisez `.filter()` pour filtrer par catégorie, puis `.map()` pour afficher les `MenuCard`.

#### 📝 Tâche 4.2 : Créer le Footer

Créez le fichier `src/components/Footer.tsx` avec :

- Les informations de copyright
- L'année en cours

#### 📝 Tâche 4.3 : Assembler l'application

Dans `src/App.tsx` :

- Importez tous vos composants (Header, Menu, Footer)
- Importez le fichier `App.css`
- Assemblez la structure de l'application

**Structure attendue** :

```
<div className="app">
  <Header />
  <main>
    <Menu />
  </main>
  <Footer />
</div>
```

---

## 📦 Livrables

À la fin de l'évaluation, votre projet doit contenir :

- ✅ `src/types/menu.ts` - Interface TypeScript
- ✅ `src/data/menuData.ts` - Données avec 15+ items
- ✅ `src/components/Header.tsx` - Composant Header
- ✅ `src/components/MenuCard.tsx` - Composant MenuCard
- ✅ `src/components/Menu.tsx` - Composant Menu avec map()
- ✅ `src/components/Footer.tsx` - Composant Footer
- ✅ `src/App.tsx` - Assemblage final
- ✅ `src/App.css` - Styles CSS

## 🎨 Critères d'Évaluation

| Critère                              | Points      |
| ------------------------------------ | ----------- |
| Structure TypeScript correcte        | 20 pts      |
| Données complètes (15+ items)        | 10 pts      |
| Composant Header fonctionnel         | 15 pts      |
| Composant MenuCard avec props typées | 20 pts      |
| Utilisation correcte de .map()       | 15 pts      |
| Assemblage et architecture           | 10 pts      |
| Styling CSS cohérent                 | 10 pts      |
| **TOTAL**                            | **100 pts** |

## 💡 Conseils

- **Testez régulièrement** votre application avec `npm run dev`
- **Committez souvent** pour sauvegarder votre progression
- **Lisez les erreurs** TypeScript attentivement
- **Demandez de l'aide** si vous êtes bloqué plus de 10 minutes
- **Communiquez** avec votre binôme

## 🚨 Points d'Attention

- N'oubliez pas d'exporter vos composants avec `export default`
- Vérifiez le typage TypeScript de vos props
- Assurez-vous d'utiliser la prop `key` dans vos `.map()`
- Testez que toutes les catégories s'affichent correctement

---

**Bon courage ! 🎉**
