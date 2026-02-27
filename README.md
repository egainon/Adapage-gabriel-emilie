### 🎬 Adapage

Une application React + TypeScript dédiée à l’univers de Sofia Coppola, combinant biographie, citations et frise chronologique interactive dans une interface élégante et immersive.
Adapage est une mini-plateforme éditoriale qui met en valeur le parcours artistique d’une réalisatrice à travers :
- 📖 Une page biographique
- 💬 Une collection de citations
- 🗓️ Une timeline animée

### 📖 Description du projet
Adapage est une application front-end multi-pages construite avec React Router.

Elle propose :

Page Home : 
- Présentation détaillée de Sofia Coppola :
- Informations personnelles
- Description enrichie (mise en valeur automatique des titres de films)

Page Quotes :
Une sélection de citations classées par date, liées à ses films comme :
- Lost in Translation
- Marie Antoinette
-The Virgin Suicides

Page Timeline
Une frise chronologique interactive retraçant :
- Films
- Récompenses
- Événements personnels
- Avec animation au scroll grâce à Intersection Observer.

Page 404
Une page personnalisée inspirée de l’esthétique de Marie Antoinette.

### Concepts techniques travaillés

Ce projet met en pratique :
- ⚛️ React + TypeScript
- 🧭 Routing avec React Router
- 🗂️ Organisation modulaire (pages / components / data / interfaces)
- 🎯 Typage fort via interfaces (Character, Quote, TimelineItemData)
- 🎨 TailwindCSS + design system personnalisé
- ✨ Animations au scroll (Intersection Observer API)
- 🔤 Manipulation dynamique de texte (dangerouslySetInnerHTML)
- ♻️ Réutilisation de composants (Header / Footer / TimelineItem)

### Stack technique
- React
- TypeScript
- Vite
- React Router
- TailwindCSS

### Identité visuelle
Le design s’inspire de l’esthétique cinématographique de Sofia Coppola :
- Palette poudrée (rose / bordeaux / beige)
- Typographies élégantes
- Ambiance minimaliste et contemplative
- Effets subtils au hover
- Mise en avant des œuvres via <em> dynamique

### Objectifs pédagogiques
- Construire une application multi-pages proprement structurée
- Approfondir TypeScript dans un contexte réel
- Travailler le routing et la navigation
- Créer une expérience visuelle cohérente
- Développer une approche “projet éditorial” en React

### Installation
- 1️⃣ Cloner le projet
git clone https://github.com/ton-username/adapage.git
cd adapage
- 2️⃣ Installer les dépendances
npm install
- 3️⃣ Lancer le projet
npm run dev
- 🏗️ Architecture
src/
 ├── components/
 ├── pages/
 ├── data.ts
 ├── interfaces.ts
 ├── App.tsx
 └── main.tsx

Séparation claire entre :
- Données statiques
- Interfaces TypeScript
- Composants réutilisables
- Pages
