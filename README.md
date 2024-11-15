# NextLevel Food 🍽️

Une plateforme web moderne permettant aux passionnés de cuisine de partager et découvrir des recettes du monde entier.

## 📋 Description

NextLevel Food est une application web développée avec Next.js qui permet aux utilisateurs de :

- Partager leurs recettes préférées
- Découvrir de nouveaux plats
- Interagir avec une communauté de passionnés de cuisine
- Participer à des événements exclusifs

## 🚀 Fonctionnalités

- **Exploration des Recettes** : Parcourez une collection variée de recettes partagées par la communauté
- **Partage de Recettes** : Ajoutez vos propres recettes avec images, instructions et descriptions
- **Interface Responsive** : Experience utilisateur optimisée sur tous les appareils

## 💻 Technologies Utilisées

- Next.js
- React
- CSS Modules
- JavaScript
- Next.js Server Actions

## 🛠️ Installation

1. Clonez le repository :

```bash
git clone [url-du-repo]
```

2. Installez les dépendances :

```bash
npm install
```

3. Lancez le serveur de développement :

```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📁 Structure du Projet

app/
├── community/ # Page communautaire
├── meals/ # Pages liées aux recettes
│ ├── share/ # Formulaire de partage de recettes
│ └── [mealSlug]/ # Page détaillée d'une recette
├── components/ # Composants réutilisables
└── lib/ # Utilitaires et actions
