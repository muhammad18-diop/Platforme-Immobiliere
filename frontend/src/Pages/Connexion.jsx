import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Connexion(){

    const [email, SetEmail] = useState("");
    const [password, Setpassword] = useState("");

     const navigate = useNavigate()
    const versHome = async () => {
            navigate("/")
        }

  async  function Soummettre(e){
        e.preventDefault();
        if(!email || !password){
            return alert("Les champs sont obligatoires")
        }

        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({email, password})
        })

        const result = await response.json()

        if(!response.ok){
          return  alert(result.message)
        }

        
        console.log(result);

        localStorage.setItem("token", result.token)
        

        SetEmail("")
        Setpassword("")
        alert("Connexion réussi")

        if(response.ok){
            versHome();
        }

        
        } catch (error) {
            console.error(error.message);
            
        }
        
    }

    

    return(
        <div className="flex items-center justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-xl shadow-lg border border-gray-100 ">
        <h2 className="text-3xl font-extrabold text-emerald-900  mb-6 text-center">
          Connexion
        </h2>
        
        <form onSubmit={Soummettre} className="space-y-5">
          

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
              onChange={(e) => SetEmail(e.target.value)}
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
              Se Connecter
            </button>
            <p className="mt-5">Vous n'avez pas un compte ? <Link to="/inscription" className="text-emerald-900 hover:text-emerald-700">S'inscrire</Link> </p>
          </div>
        </form>
      </div>
    </div>
    )
}

export default Connexion