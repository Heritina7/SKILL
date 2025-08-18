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
        className="w-full h-full object-cover"
      />

      {/* Bouton précédent */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ◀
      </button>

      {/* Bouton suivant */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ▶
      </button>
    </div>
  );
}

export default function Exp({ donner }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <motion.h5 
            initial={{opacity: 0, x: 0}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 4}}
            className='bg-gray-100 border-b-2 border-green-700 rounded-tl-xl p-2'
          >
            {donner.titre}
          </motion.h5>
          <motion.p 
            initial={{opacity: 0, x: -600}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 2}}
            className='p-5 flex flex-col'
          >
            <h5>{donner.date}</h5>
            <h5>{donner.type}</h5>
            {donner.detail}
          </motion.p>
        </div>

        {/* Image cliquable */}
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 2}}
          className='lg:w-[50%] w-full relative h-full'
        >
          <img
            src={donner.image}
            alt={donner.titre}
            onClick={() => setMenuOpen(true)}
            className='border-l-2 border-green-700 w-full h-full absolute rounded-tl-none rounded-bl-none rounded-2xl cursor-pointer'
          />
        </motion.div>
      </motion.div>  

      {/* Modal avec carousel */}
      {menuOpen && (
        <nav className="bg-white border-2 border-green-700 bottom-1 left-40 w-[80%] h-[75%] text-white overflow-auto fixed rounded-xl z-50">
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
            <div className='h-[80%] overflow-auto flex flex-row'>
              {/* Carousel */}
              <div className='w-[50%] h-full relative'>
                <Carousel images={donner.carouselImages} />  
              </div>

              {/* Description */}
              <div className="w-[50%] bg-gray-50 text-black flex flex-col overflow-y-auto">
                <div className="p-5 space-y-2">
                  <p>{donner.description1}</p>
                  <p>{donner.description2}</p>
                  <p>{donner.description3}</p>
                  <p>{donner.description4}</p>
                  <p>{donner.description5}</p>
                </div>  
              </div>
            </div>

            {/* Footer modal */}
            <div className='h-[10%] bg-green-300 flex justify-between items-center p-3 border-t-4 border-green-700'> 
              <div className="flex gap-3 text-lg text-white">
                {/* <a href="#" className="hover:text-blue-700"><FaMapMarkerAlt /></a> */}
                <a href="https://wa.me/0347791758" className="hover:text-blue-700"><FaWhatsapp /></a>
                <a href="mailto:randrianjafyheritina7@gmail.com" className="hover:text-blue-700"><FaEnvelope /></a>
                <a href="https://web.facebook.com/heritina.randrianjafy.2025" className="hover:text-blue-700"><FaFacebook /></a>
                <p className="hover:text-blue-700"><FaPhone /></p>
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
