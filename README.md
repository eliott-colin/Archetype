# Archetype

## 📌 Présentation

**Archetype** est une boutique e-commerce front-end developpee avec **React** et **Vite**.
Le projet met en avant une collection de t-shirts premium autour du voyage responsable, avec un parcours utilisateur complet :

- accueil de marque,
- catalogue filtrable et triable,
- fiche produit detaillee,
- panier persistant,
- assistant chatbot pour les questions frequentes.

## 🎯 Objectifs du projet

- Proposer une experience de navigation fluide entre les pages produit
- Simuler un tunnel d'achat complet cote front-end
- Illustrer une architecture React claire et reutilisable
- Fournir une base evolutive pour ajouter paiement, API et back-office

## 🛠️ Stack technique

- React 19
- Vite 8
- React Router DOM 7
- Context API (gestion globale du panier)
- CSS modulaire par composant/page

## ✨ Fonctionnalites

- Navigation SPA avec routage : `/`, `/catalogue`, `/produit/:id`, `/panier`
- Catalogue avec filtres par categories et tri par nom/prix
- Fiche produit avec choix de taille et quantite
- Ajout au panier avec fusion des lignes identiques (meme produit + taille)
- Panier persistant via `localStorage` (cle : `archetype-cart`)
- Calcul automatique du total et du nombre d'articles
- Confirmation de commande simulee
- Chatbot d'assistance avec reponses rapides

## 🧱 Architecture du projet

Le projet est organise pour separer clairement les responsabilites :

- `src/components` : composants UI reutilisables (`Navbar`, `Footer`, `ProductCard`, `Chatbot`)
- `src/pages` : pages principales (`Home`, `Catalogue`, `Produit`, `Panier`)
- `src/context/CartContext.jsx` : logique metier du panier (etat global, actions, persistance)
- `src/data/products.json` : donnees produits locales (mock)
- `src/App.jsx` : composition globale et declaration des routes

## ⚙️ Installation

1. Cloner le dépôt :
   ```bash
   git clone <url-du-repo>
   cd Archetype
   ```

2. Installer les dependances :
   ```bash
   npm install
   ```

3. Lancer le projet :
   ```bash
   npm run dev
   ```
   
## 📦 Scripts disponibles

- `npm run dev` : lance le serveur de developpement
- `npm run build` : genere le build de production
- `npm run preview` : previsualise le build localement
- `npm run lint` : verifie la qualite du code avec ESLint

