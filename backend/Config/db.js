const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'immobiliére',
    password: 'Mouhamed',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Base de données connectée avec succès'))
    .catch((err) => console.error('Erreur de connexion à la base de données', err));

module.exports = pool;