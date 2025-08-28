import { motion } from "framer-motion";
import { useState } from "react";
import Exp from "../Components/Exp"; // Assure-toi du chemin
import data from "../data/data"; // Assure-toi du chemin

export default function Experience() {
  const itemsPerPage = 2; // nombres d'expériences par page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Slice recalculé à chaque render
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className='container flex flex-col lg:h-screen lg:pt-20 overflow-auto'>
      <motion.div 
        initial={{opacity: 0, y: -600}}
        animate={{opacity: 1, y: 0 }}
        exit={{opacity: 0, y: 100}}
        transition={{duration: 2}}
        className="flex justify-center items-center border-b-2 border-black mb-3 p-3">
      <h4>MES  EXPÉRIENCES :</h4>
      </motion.div>

      <div className="space-y-4">
        {currentData.map((item) => (
          <Exp key={item.id} donner={item} />
        ))}
      </div>

      <div className="flex justify-center mt-5 mb-5 space-x-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          ◁ Précédent
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Suivant ▷
        </button>
      </div>
    </div>
  );
}

