import React from 'react';

const villas = [
  {
    id: 1,
    title: "Villa contemporaine avec piscine à débordement, grands espaces lumineux et prestations de haut standing.",
    tag: "Villa de luxe",
    image: "/villa1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Villa moderne au design époustouflant, équipée de technologies domotiques et finitions de haut niveau.",
    tag: "Villa moderne",
    image: "/villa2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Villa de prestige bénéficiant d'une vue panoramique exceptionnelle et de somptueux espaces extérieurs.",
    tag: "Villa de prestige",
    image: "/villa3.jpg",
    link: "#"
  }
];

function CardVilla() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-green-900 mb-10">
        Nos Villas
      </h2>

     
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {villas.map((villa) => (
          <article
            key={villa.id} className="flex flex-col max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
         
            <a href={villa.link} className="relative overflow-hidden group">
              <img src={villa.image} alt={villa.tag} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"/>
            </a>

            
            <div className="p-6 flex flex-col flex-grow text-center justify-between">
              <div>
               
                <span className="inline-flex items-center bg-green-50 border border-green-200 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <svg className="w-3.5 h-3.5 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                  {villa.tag}
                </span>

              
                <a href={villa.link} className="block mt-4 mb-6 group">
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-green-900 transition-colors duration-200 line-clamp-3">
                    {villa.title}
                  </h3>
                </a>
              </div>

              
              <div className="pt-2">
                <a href={villa.link} className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 transition-colors duration-200" >
                  En savoir plus
                  <svg
                    className="w-4 h-4 ml-2 rtl:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CardVilla;