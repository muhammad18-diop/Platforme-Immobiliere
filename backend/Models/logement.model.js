const pool = require("../Config/db");

const createLogement = async(titre, description, ville, adresse, prix, nbr_chambres, nbrsalledebain, user_id, categorie_id) => {
    const result = await pool.query(
        "INSERT INTO logement (titre, description, ville, adresse, prix, nbr_chambres, nbrsalledebain, user_id, categorie_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id",
        [titre, description, ville, adresse, prix, nbr_chambres, nbrsalledebain, user_id, categorie_id]
    );
    return result.rows[0].id;
    
}

const createLogementimage =  async (logement_id, image_url) => {
    const result = await pool.query(
        "INSERT INTO logementimage (logement_id, image_url) VALUES ($1, $2) RETURNING id",
        [logement_id, image_url]
    );
    return result.rows[0].id;
}

module.exports = {
    createLogement,
    createLogementimage
}