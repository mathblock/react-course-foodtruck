# 🌮 Foodtruck Paradise

Projet collaboratif de formation React/TypeScript

## 🚀 Installation

```bash
npm install
npm run dev
```

Ouvrir: http://localhost:5173

## 📁 Structure du Projet

```
src/
├── components/     # Composants réutilisables
├── pages/          # Pages de l'application
├── context/        # Context API
├── hooks/          # Custom hooks
├── types/          # Types TypeScript
├── data/           # Données mockées
└── utils/          # Fonctions utilitaires
```

## 👥 Équipes

### Team 1 - Authentification & Profil
Features: Login, Register, Mon Compte, Routes protégées

### Team 2 - Gestion du Menu
Features: Filtres avancés, Tri, Favoris, Reviews

### Team 3 - Panier & Checkout
Features: Codes promo, Persistance, Livraison, Recommandations

### Team 4 - Commandes & Suivi
Features: Historique, Détail, Tracking, Notifications

### Team 5 - Dashboard Admin (optionnel)
Features: Stats, Gestion produits, Gestion commandes

## 🌿 Branches

- `main` - Production (protégée)
- `develop` - Développement (protégée)
- `feature/team-X-nom-feature` - Branches de travail

## 📝 Convention de Commits

Format : `type(scope): message`

Types:
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage
- `refactor`: Refactoring
- `test`: Ajout de tests
- `chore`: Tâches diverses

Exemples:
```bash
git commit -m "feat(auth): add login form"
git commit -m "fix(cart): correct total calculation"
```

## 🔀 Workflow Git

1. Créer une branche depuis `develop`
```bash
git checkout develop
git pull origin develop
git checkout -b feature/team-X-nom-feature
```

2. Développer et commiter régulièrement
```bash
git add .
git commit -m "feat(scope): message"
```

3. Pousser la branche
```bash
git push origin feature/team-X-nom-feature
```

4. Créer une Pull Request sur GitHub

## ⚡ Scripts

```bash
npm run dev          # Dev server
npm run build        # Build
npm run preview      # Preview build
npm run lint         # Lint code
```

## 📚 Documentation

Voir `/docs` pour plus de détails

## 🎯 Objectifs

- [x] Setup du projet
- [ ] Sprint 1 (Jour 3 après-midi)
- [ ] Sprint 2 (Jour 4 après-midi)
- [ ] Déploiement (optionnel)

Bon courage ! 🚀
