import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { experiences } from "./data";

export default function Carousel() {
  const { id } = useParams();
  const experience = experiences.find((exp) => exp.id === parseInt(id));
  const [current, setCurrent] = useState(0);

  if (!experience) {
    return <p className="text-center text-red-500">Expérience introuvable</p>;
  }

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? experience.carouselImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === experience.carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative w-3/4 h-96">
        <img
          src={experience.carouselImages[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />

        {/* Bouton précédent */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
        >
          ◀
        </button>

        {/* Bouton suivant */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
        >
          ▶
        </button>
      </div>

      <div className="mt-6">
        <Link to="/" className="text-blue-600 underline">
          ⬅ Retour aux expériences
        </Link>
      </div>
    </div>
  );
}
