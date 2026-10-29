import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fonction de déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsOpen(false);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken);
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        console.error("Token invalide:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  return (
    <nav className="bg-white fixed w-full z-50 top-0 start-0 border-b border-gray-200 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold whitespace-nowrap text-green-900 dark:text-green-900">
            SUNU IMMO
          </span>
        </Link>

        {/* Bouton Burger (Mobile) */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Ouvrir le menu principal</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation & Actions */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:items-center md:space-x-8`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-gray-900 rounded hover:text-green-900 md:p-0 dark:text-white dark:hover:text-green-400"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-gray-900 rounded hover:text-green-900 md:p-0 dark:text-white dark:hover:text-green-400"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-gray-900 rounded hover:text-green-900 md:p-0 dark:text-white dark:hover:text-green-400"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-gray-900 rounded hover:text-green-900 md:p-0 dark:text-white dark:hover:text-green-400"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Rendu conditionnel des actions (Profil vs Connexion) */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-200">
            {user ? (
              // Utilisateur Connecté
              <div className="flex items-center space-x-3">
                <Link
                  to="/profil"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3   p-2 rounded-lg transition dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-900 text-white flex items-center justify-center font-bold text-base">
                    {user.nom ? user.nom.charAt(0).toUpperCase() : "U"}
                  </div>

                  <div className="text-left leading-tight">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {user.nom}
                    </p>
                    <p className="text-xs text-emerald-900 ">
                      {user.email} • <span className="capitalize text-emerald-700 font-medium">{user.role}</span>
                    </p>
                  </div>
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 cursor-pointer p-2 rounded-lg text-sm font-medium transition dark:hover:bg-gray-800"
                  title="Se déconnecter"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              // Utilisateur Non Connecté
              <>
                <Link
                  to="/connexion"
                  onClick={() => setIsOpen(false)}
                  className="w-full md:w-auto text-center text-emerald-900 border border-emerald-900 hover:bg-emerald-50 font-medium rounded-lg text-sm px-4 py-2 transition dark:text-emerald-500 dark:border-emerald-500"
                >
                  Connexion
                </Link>
                <Link
                  to="/inscription"
                  onClick={() => setIsOpen(false)}
                  className="w-full md:w-auto text-center text-white bg-emerald-900 hover:bg-emerald-800 font-medium rounded-lg text-sm px-4 py-2 transition"
                >
                  Inscription
                </Link>
              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;