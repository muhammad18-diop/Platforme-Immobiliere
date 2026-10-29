import React from 'react';

function NousSommes() {
  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Titre avec ligne décorative */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Qui Sommes-Nous
        </h2>
        <div className="mt-2 w-16 h-1 bg-green-600 mx-auto rounded-full" />
      </div>

      {/* Contenu textuel */}
      <div className="space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg">
        <p>
          Fondée avec l'ambition de moderniser l'expérience immobilière, notre plateforme simplifie et sécurise la recherche, la location et l'achat de biens immobiliers. Nous connectons directement les chercheurs de logement avec des propriétaires et professionnels vérifiés, en mettant fin aux démarches complexes et peu transparentes. Grâce à des outils de recherche intelligents, des visuels fidèles et des données mises à jour en temps réel, nous transformons ce qui était une source de stress en une expérience fluide, rapide et agréable.
        </p>
        <p>
          Que vous soyez à la recherche de votre premier appartement, d'une résidence familiale ou d'un espace commercial pour développer votre projet, nous plaçons la confiance et la clarté au cœur de chaque transaction. Notre engagement repose sur un accompagnement personnalisé, une sécurité rigoureuse des échanges et une transparence totale sur l'ensemble des annonces proposées. Plus qu'une simple plateforme d'annonces, nous sommes votre partenaire privilégié pour vous aider à trouver l'endroit où commencer votre prochaine histoire.
        </p>
      </div>

      {/* Bouton d'action */}
      <div className="mt-8 text-center sm:text-left">
        <a
          href="#"
          className="inline-flex items-center font-semibold text-green-600 hover:text-green-800 transition-colors duration-200 group"
        >
          <span>En savoir plus</span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default NousSommes;