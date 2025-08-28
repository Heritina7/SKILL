import { BiXCircle } from "react-icons/bi"; 
import { FaWhatsapp,FaEnvelope, FaFacebook,FaPhone,FaLinkedin} from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";

// Ton composant Carousel simplifié
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
      <img
  src={images[current]}
  alt={`slide-${current}`}
  className="w-full max-h-[500px] object-cover"
/>


      {/* Bouton précédent */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 text-black rounded-full shadow hover:bg-white"
      >
        ◁
      </button>

      {/* Bouton suivant */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 text-black rounded-full shadow hover:bg-white"
      >
        ▷
      </button>
    </div>
  );
}

export default function Exp({ donner }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ survol , setSurvol ] = useState(false);
  return (
    <div>       
      {/* Carte expérience */}
      <motion.div 
        initial={{opacity: 0, x: 600}}
        animate={{opacity: 1, x: 0 }}
        exit={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        className="flex lg:flex-row flex-col h-full rounded-2xl border-2 border-green-800"
      >
        <div className='lg:w-[50%] w-full flex flex-col'>
          <motion.h3
            initial={{opacity: 0, x: 0}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 4}}
            className='bg-gray-100 border-b-2 border-green-700 rounded-tl-xl p-2'
          >
            {donner.titre}
          </motion.h3>
          <motion.p 
            initial={{opacity: 0, x: -600}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 2}}
            className='p-5 flex flex-col text-xl'
          >
            <h3>{donner.date}</h3>
            <h3>{donner.type}</h3>
            {donner.detail}
          </motion.p>
        </div>

 {/* Image cliquable */}
        <motion.div
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
          className="lg:w-[50%] w-full relative h-full group"
        >
          <img
            src={donner.image}
            alt={donner.titre}
            onClick={() => setMenuOpen(true)}
            onMouseEnter={() => setSurvol(true)}
            onMouseLeave={() => setSurvol(false)}
            className="border-l-2 border-green-700 transition-all duration-500 w-full h-full relative rounded-2xl cursor-pointer"
          />

          {survol && (
            <div className="absolute inset-0 flex z-40 items-center justify-center w-full h-full pointer-events-none">
              <span className="bg-black/60 text-white px-4 py-2 rounded-lg border border-white text-lg">
                Cliquez pour plus de détails
              </span>
            </div>
          )}
        </motion.div>


      </motion.div>  

      {/* Modal avec carousel */}
      {menuOpen && (
        <nav className="bg-white border-2 border-green-700 m-2 lg:left-40 left-1 lg:top-[150px] top-[65px] lg:w-[80%] lg:h-[80%] h-[90%] text-white overflow-auto fixed rounded-xl z-50">
          <div className="flex flex-col h-full w-full">
            {/* Header modal */}
            <div className='h-[10%] bg-green-200 flex flex-row justify-between text-black border-b-4 border-green-700 items-center'>
              <h1 className='p-4'>{donner.titre}</h1>
              <BiXCircle
                onClick={() => setMenuOpen(false)}
                className="mr-4 text-3xl hover:text-red-500 cursor-pointer"
              />
            </div>

            {/* Contenu modal */}
            <div className='lg:h-[80%] h-full overflow-auto flex flex-col lg:flex-row'>
              {/* Carousel */}
              <div className='lg:w-[50%] relative'>
                <Carousel images={donner.carouselImages} />  
              </div>

              {/* Description */}
              <div className="lg:w-[50%] bg-gray-50 text-black flex flex-col justify-center items-center overflow-y-auto">
                <div className="p-5 space-y-5">
                  <p className="lg:text-2xl">{donner.description1}</p>
                  <p className="lg:text-2xl">{donner.description2}</p>
                  <p className="lg:text-2xl">{donner.description3}</p>
                  <p className="lg:text-2xl">{donner.description4}</p>
                  <p className="lg:text-2xl">{donner.description5}</p>
                </div>  
              </div>
            </div>

            {/* Footer modal */}
            <div className='h-[10%] bg-green-300 flex justify-between items-center p-3 border-t-4 border-green-700'> 
              <div className="flex gap-3 text-4xl items-center text-blue-600">
                <a href="https://wa.me/0347791758" className="hover:text-blue-700"><FaWhatsapp /></a>
                <a href="mailto:randrianjafyheritina7@gmail.com" className="hover:text-blue-700"><FaEnvelope /></a>
                <a href="https://web.facebook.com/heritina.randrianjafy.2025" className="hover:text-blue-700"><FaFacebook /></a>
                <p className="mt-2 hover:text-blue-700"><FaPhone /></p>
                <a href="www.linkedin.com/in/heritina-randrianjafy" className="hover:text-blue-700"><FaLinkedin /></a>
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className='bg-red-500 p-2 px-4 hover:bg-red-700 rounded-xl'
              >
                Fermer
              </button>
            </div>
          </div>
        </nav>
      )}   
    </div>    
  );
}
