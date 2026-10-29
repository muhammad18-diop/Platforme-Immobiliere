import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Inscription() {
  const [nom, SetNom] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
const navigate = useNavigate()
  const versLogin = () => {
    navigate("/connexion")
  }

  const Soummettre = async (e) => {
    e.preventDefault();
    if(!nom || !email || !password){
        return alert("Tous les champs sont obligatoires")
    }
try {
    
    const reponse = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({nom, email, password})
    })

    const result = await reponse.json()
    alert("Inscription réussi avec succés")

    SetNom("")
    Setemail("")
    Setpassword("")

    if(reponse.ok){
        versLogin();
    }
} catch (error) {
    console.error(messsage.error);
    
}

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100 ">
        <h2 className="text-3xl font-extrabold text-emerald-900  mb-6 text-center">
          Inscription
        </h2>
        
        <form onSubmit={Soummettre} className="space-y-5">
          {/* Nom d'utilisateur */}
          <div>
            <label
              className="block text-gray-700  text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Votre Nom
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent text-gray-800 dark:text-white dark:bg-gray-700 transition duration-150"
              id="username"
              type="text"
              placeholder="Votre Nom"
              value={nom}
              onChange={(e) => SetNom(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent text-gray-800 dark:text-white dark:bg-gray-700 transition duration-150"
              id="email"
              type="email"
              placeholder="SunuImmo@gmail.com"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
              required
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label
              className="block text-gray-700 dark:text-gray-200 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent text-gray-800 dark:text-white dark:bg-gray-700 transition duration-150"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => Setpassword(e.target.value)}
              required
            />
          </div>

          {/* Bouton de soumission */}
          <div className="pt-2">
            <button
              className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:ring-offset-2 cursor-pointer"
              type="submit"
            >
              S'inscrire
            </button>
            <p className="mt-5">Vous avez déja un compte ? <Link to="/connexion" className="text-emerald-900 hover:text-emerald-700">Se connecter</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Inscription;