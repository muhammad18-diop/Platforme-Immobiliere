const users = require("../Models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
    try {
        const { nom, email, password } = req.body;

        if(!nom || !email || !password) {
            return res.status(400).json({ message: "Veuillez remplir tous les champs" });
        }
        const userExiste = await users.FindByEmail(email);
        if(userExiste) {
            return res.status(400).json({ message: "Cet email est déjà utilisé" });
        }

        const mdphasher = await bcrypt.hash(password, 10);
        const newUser = await users.register(nom, email, mdphasher);
        res.status(201).json({ message: "Utilisateur créé avec succès", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({ message: "Veuillez remplir tous les champs" });
        }

        const user = await users.FindByEmail(email);
        if(!user) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" });
        }

        const passwordValide = await bcrypt.compare(password, user.password);
        if(!passwordValide) {
            return res.status(400).json({ message: "Email ou mot de passe incorrect" });
        }

        const token = jwt.sign(
            { id: user.id,
                nom: user.nom,
                email: user.email,
                role: user.role
             }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Connexion réussie", token });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion", error });
    }
}

module.exports = { register, login};