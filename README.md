🏡 Immobilière App - Plateforme Full-Stack d'Annonces ImmobilièresUne application web full-stack moderne pour la recherche, la gestion et la réservation de visites de biens immobiliers (vente et location).🏗️ Architecture & Stack TechniqueLe projet est structuré sous forme de monorepo (ou deux dossiers distincts client et server) :Front-end (React) :React.js (avec React Router pour la navigation)Gestion d'état : Redux Toolkit ou Context APIStyling : Tailwind CSS / Material UIRequêtes HTTP : AxiosBack-end (Node.js & Express) :Node.js & Express.js (API RESTful)Authentification : JSON Web Tokens (JWT) & BcryptSécurité : Cors, Helmet, Express-rate-limitBase de données (PostgreSQL) :PostgreSQLAccès aux données : Driver PostgreSQL natif (pg / node-postgres) avec requêtes SQL préparées (Sans ORM)📌 Fonctionnalités Principales🌐 Côté Utilisateur / Client (React UI)Page d'accueil & Recherche : Barre de recherche dynamique avec filtres avancés (prix, surface, ville, adresse, type de bien, nombre de pièces).Fiche Détail du Bien : Galerie photo, caractéristiques complètes, formulaire de prise de rendez-vous.Espace Client : Gestion des favoris, suivi des demandes de visite en cours.Espace Agent / Propriétaire : Dashboard d'administration pour ajouter, modifier ou supprimer des annonces et gérer les rendez-vous.⚡ Côté API Back-end (Express & PostgreSQL)Authentification JWT sécurisée et gestion des rôles (Client, Agent, Admin).CRUD complet des biens immobiliers avec requêtes SQL optimisées.Gestion de l'upload d'images (Cloudinary / Multer).Recherche et filtrage dynamiques des annonces via des clauses SQL WHERE.Prise de rendez-vous et suivi des demandes.📁 Structure du Projetimmobilier-app/
├── client/                   # Front-end React
│   ├── src/
│   │   ├── assets/           # Images, icônes, styles globaux
│   │   ├── components/       # Composants réutilisables (Navbar, Cards, Modals)
│   │   ├── context/          # Contextes React (AuthContext, ThemeContext)
│   │   ├── pages/            # Pages principales (Home, PropertyDetail, Dashboard, Login)
│   │   ├── services/         # Configuration Axios et appels API
│   │   ├── App.jsx           # Configuration des routes
│   │   └── main.jsx
│   └── package.json
│
└── server/                   # Back-end Express / PostgreSQL
    ├── config/               # Connexion pool PostgreSQL (db.js avec `pg`)
    ├── controllers/          # Logique métier et exécution des requêtes SQL (`db.query`)
    ├── middlewares/          # Auth JWT, Upload d'images, Gestion d'erreurs
    ├── routes/               # Endpoints Express
    ├── database/             # Fichiers d'initialisation SQL (`schema.sql`)
    ├── server.js             # Point d'entrée de l'API Express
    └── package.json
🚀 Installation et DémarragePrérequisNode.js (v16+)PostgreSQL installé et démarré1. Cloner le projetgit clone https://github.com/votre-utilisateur/immobilier-app.git
cd immobilier-app
2. Configuration du Back-end (Server)cd server
npm install
Créez un fichier .env dans le dossier server/ :PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=votre_mot_de_passe
DB_NAME=real_estate_db
JWT_SECRET=votre_cle_secrete_jwt
Initialisez la base de données avec le fichier schema.sql :psql -U postgres -d real_estate_db -f database/schema.sql
Lancez le serveur :npm run dev
# L'API Express tournera sur http://localhost:5000
3. Configuration du Front-end (Client React)Dans un autre terminal :cd client
npm install
Créez un fichier .env dans le dossier client/ :VITE_API_URL=http://localhost:5000/api
Lancer l'application React :npm run dev
# Le client React sera accessible sur http://localhost:5173
🗄️ Schéma de la Base de Données (schema.sql)CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table des utilisateurs
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(20) CHECK (role IN ('client', 'agent', 'admin')) DEFAULT 'client',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table des biens immobiliers
CREATE TABLE properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(12, 2) NOT NULL,
    property_type VARCHAR(50) NOT NULL,
    listing_type VARCHAR(20) CHECK (listing_type IN ('sale', 'rent')) NOT NULL,
    bedrooms INT,
    bathrooms INT,
    area_sqm NUMERIC(8, 2) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,
    agent_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table des images
CREATE TABLE property_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE
);

-- Table des rendez-vous / visites
CREATE TABLE appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
    client_id UUID REFERENCES users(id) ON DELETE CASCADE,
    appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pending', 'confirmed', 'cancelled')) DEFAULT 'pending',
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
💻 Exemple d'interaction avec PostgreSQL (pg)Voici comment les requêtes SQL paramétrées sont gérées sans ORM (dans config/db.js et les contrôleurs) pour éviter les injections SQL :// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
// controllers/propertyController.js
const db = require('../config/db');

// Exemple de récupération paramétrée des biens
exports.getProperties = async (req, res) => {
  try {
    const { city, minPrice, maxPrice } = req.query;
    let queryText = 'SELECT * FROM properties WHERE is_available = true';
    const queryParams = [];

    if (city) {
      queryParams.push(`%${city}%`);
      queryText += ` AND city ILIKE $${queryParams.length}`;
    }

    if (minPrice) {
      queryParams.push(minPrice);
      queryText += ` AND price >= $${queryParams.length}`;
    }

    const { rows } = await db.query(queryText, queryParams);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
📡 Aperçu des Endpoints APIMéthodeRouteDescriptionAccèsPOST/api/auth/registerInscription utilisateurPublicPOST/api/auth/loginConnexion & Retour du Token JWTPublicGET/api/propertiesListe des biens (Recherche SQL filtrée)PublicGET/api/properties/:idDétails d'un bien immobilierPublicPOST/api/propertiesAjouter un bienAgent / AdminPUT/api/properties/:idModifier un bienAgent / AdminDELETE/api/properties/:idSupprimer un bienAgent / AdminPOST/api/appointmentsRéserver une visiteClientGET/api/appointments/my-requestsListe des demandes de visiteClient / Agent📄 LicenceCe projet est sous licence MIT.
