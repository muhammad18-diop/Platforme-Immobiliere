import React from "react";

function HeroSection() {
  return (
    <section className="bg-green-900 text-white mt-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Badge d'annonce */}
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-green-100 bg-green-700/60 rounded-full hover:bg-green-700"
          role="alert"
        >
          <span className="text-xs bg-white text-green-800 font-semibold rounded-full px-4 py-1.5 mr-3">
            Nouveau
          </span>
          <span className="text-sm font-medium">
            Sunu Immo ! Découvrez notre plateforme
          </span>
          <svg
            className="ml-2 w-5 h-5 text-green-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        {/* Titre principal */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          L'immobilier en toute simplicité, de la recherche à la clé
        </h1>

        {/* Paragraphe descriptif */}
        <p className="mb-8 text-lg font-normal text-green-100 lg:text-xl sm:px-16 xl:px-48">
          Explorez une sélection exclusive d'appartements, de maisons et de
          locaux commerciaux adaptés à vos besoins. Que vous cherchiez à louer
          pour une courte durée ou à investir sur le long terme, notre
          plateforme vous met en relation directe avec des propriétaires
          vérifiés pour des transactions simples, rapides et sans mauvaise
          surprise.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-green-900 bg-white rounded-lg hover:bg-green-50 focus:ring-4 focus:ring-green-300"
          >
            En savoir plus
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-green-300 hover:bg-green-700 focus:ring-4 focus:ring-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 lucide lucide-user-key text-white"
            >
              <path d="M20 11v6" />
              <path d="M20 13h2" />
              <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
              <circle cx="10" cy="7" r="4" />
              <circle cx="20" cy="19" r="2" />
            </svg>
            Se connecter
          </a>
        </div>

       
      </div>
    </section>
  );
}

export default HeroSection;