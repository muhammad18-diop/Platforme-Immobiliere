import { useState, useEffect } from "react";

function CarouselVilla() {
  const images = [
    "/villa1.jpg",
    "/villa2.jpg",
    "/villa3.jpg",
    "/villa4.jpg",
    "/villa5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Passer à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer); 
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
        <h1 className="text-heading text-center text-green-900 font-extrabold text-3xl sm:text-4xl mb-10">Explorer Nos Plus Belles Locations</h1>
      {/* Zone des Images */}
      <div className="relative h-56 md:h-96 w-full rounded-lg overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              className="w-full h-full object-cover"
              alt={`Villa ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Puces de navigation (Indicators) */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Bouton Précédent */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 transition">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </span>
      </button>

      {/* Bouton Suivant */}
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50 transition">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default CarouselVilla;