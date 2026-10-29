# Immobilière App - Plateforme Full-Stack d'Annonces Immobilières

Une application web full-stack moderne pour la recherche, la gestion et la réservation de visites de biens immobiliers (vente et location).

---

##  Architecture & Stack Technique

Le projet est structuré sous forme de monorepo (ou deux dossiers distincts `client` et `server`) :

* **Front-end (React) :**
  * React.js (avec React Router pour la navigation)
  * Gestion d'état : Redux Toolkit ou Context API
  * Style : Tailwind CSS
  * Requêtes HTTP : fetch

* **Back-end (Node.js & Express) :**
  * Node.js & Express.js (API RESTful)
  * Authentification : JSON Web Tokens (JWT) & Bcrypt
  * Sécurité : Cors

* **Base de données (PostgreSQL) :**
  * PostgreSQL
  * Accès aux données : avec requêtes SQL préparées (**Sans ORM**)

---

##  Fonctionnalités Principales

### Côté Utilisateur / Client (React UI)
* **Page d'accueil & Recherche :** Barre de recherche dynamique avec filtres avancés (prix, surface, ville, adresse, type de bien, nombre de pièces).
* **Fiche Détail du Bien :** Galerie photo, caractéristiques complètes, formulaire de prise de rendez-vous.
* **Espace Client :** Gestion des favoris, suivi des demandes de visite en cours.
* **Espace Agent / Propriétaire :** Dashboard d'administration pour ajouter, modifier ou supprimer des annonces et gérer les rendez-vous.

###  Côté API Back-end (Express & PostgreSQL)
* Authentification JWT sécurisée et gestion des rôles (**Client**, **Agent**, **Admin**).
* CRUD complet des biens immobiliers avec requêtes SQL optimisées.
* Gestion de l'upload d'images (Cloudinary / Multer).
* Recherche et filtrage dynamiques des annonces via des clauses SQL `WHERE`.
* Prise de rendez-vous et suivi des demandes.

---

## Structure du Projet

```text
immobilier-app/
├── client/                   Front-end React
│   ├── src/
│   │   ├── assets/           Images, icônes, styles globaux
│   │   ├── components/       Composants réutilisables (Navbar, Cards, Modals)
│   │   ├── context/          Contextes React (AuthContext, ThemeContext)
│   │   ├── pages/            Pages principales (Home, PropertyDetail, Dashboard, Login)
│   │   ├── services/         Configuration Axios et appels API
│   │   ├── App.jsx           Configuration des routes
│   │   └── main.jsx
│   └── package.json
│
└── server/                   Back-end Express / PostgreSQL
    ├── config/               Connexion pool PostgreSQL (db.js avec `pg`)
    ├── controllers/          Logique métier et exécution des requêtes SQL (`db.query`)
    ├── middlewares/          Auth JWT, Upload d'images, Gestion d'erreurs
    ├── routes/               Endpoints Express
    ├── database/             Fichiers d'initialisation SQL (`schema.sql`)
    ├── server.js             Point d'entrée de l'API Express
    └── package.json
