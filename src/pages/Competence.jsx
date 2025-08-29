import { SiAntdesign } from "react-icons/si"; 
import { SiFreelancer } from "react-icons/si"; 
import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md"; 
import { FaReact } from "react-icons/fa"; 
import { FaPython } from "react-icons/fa"; 
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa"; 
import { GrTechnology } from "react-icons/gr"; 
import { DiIntellij } from "react-icons/di"; 
import React from 'react'
import frs from '../assets/icone/frs.png';
import ang from '../assets/icone/ang.png';

export default function Competence() {
  return (
    <div className='container flex flex-col lg:h-screen lg:pt-20 overflow-auto'>
      <motion.div 
        initial={{opacity: 0, y: -600}}
        animate={{opacity: 1, y: 0 }}
        exit={{opacity: 0, y: 100}}
        transition={{duration: 2}}
        className="flex justify-center items-center border-b-2 border-black p-3">
      <h4>MES  COMPÉTENCES :</h4>
      </motion.div>

      <div className="flex lg:flex-row flex-col w-full h-full lg:justify-around p-4 lg:space-x-4 lg:space-y-0 space-y-4">
        <motion.div 
          initial={{opacity: 0, x: -600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className="duration-500 hover:scale-110 bg-white border w-full h-full border-black flex flex-col justify-start items-center space-y-4">
          <DiIntellij className="text-2xl mt-4"/>
          <h2 className='pb-3 border-b text-green-700 border-black hover:border-green-500'><span>Intellectuelle</span></h2>
          <div className="flex flex-col justify-center items-center p-2 space-y-4">
            <h4>Autonomie</h4>
            <h4>gestion de temps</h4>
            <h4>sens des détails</h4>
            <h4>Esprit d'equipe</h4>
            <h4> sens de l’organisation</h4>
            <h4>esprit méthodique</h4>
            <h4>honnête</h4>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 600}}
          animate={{opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 1}}
          className="duration-500 hover:scale-110 bg-white border w-full h-full border-black flex flex-col justify-start items-center space-y-3">
          <h3 className="text-2xl mt-3"><GrTechnology /></h3>
          <h2 className='pb-3 border-b border-black text-green-700'>Technique</h2>
          <div className="flex flex-col p-2 space-y-2">
            <div className="flex flex-col">
              <h4 className="flex flex-row items-center"><span className="font-bold">Développement Frontend</span></h4>
              <h5 className="flex flex-row items-center relative left-4"><FaReact className="mr-1" /><span className="">Réact.js et tailwindCss</span></h5>
              <h5 className="flex flex-row items-center relative left-4"><FaPython className="mr-1" /><span className="">Tkinter</span></h5>
            </div>
            <div className="flex flex-col">
              <h4 className="flex flex-row items-center"><span className="font-bold">Développement Backend</span></h4>
              <h5 className="flex flex-row items-center relative left-4"><FaPython className="mr-1"/><span className="">Python  Django, RESTAPI</span></h5>
              <h5 className="flex flex-row items-center relative left-4"><FaReact className="mr-1"/><span className="">Node.js </span></h5>
            </div>
            <div className="flex flex-col">
              <h5 className="flex flex-row items-center"><span className="font-bold">UI/UX Design</span></h5>
              <h5 className="flex flex-row items-center relative left-4"><SiAntdesign className="mr-1" /><span className="">Web designer</span></h5>
              <h5 className="flex flex-row items-center relative left-4"><MdDesignServices className="mr-1" /><span className="">Graphiste/Illustrateur/Motion designer</span></h5>
            </div>
            <div className="flex flex-col">
              <h4 className="flex flex-row items-center"><span className="font-bold">SEO de base</span></h4>
              <h5 className="flex flex-row items-center"><span className="relative left-4">Optimisation pour les moteurs de recherche</span></h5>
            </div>
            <div className="flex flex-col">
              <h4 className="flex flex-row items-center"><span className="font-bold">Gestion de projets freelance</span></h4>
              <h5 className="flex flex-row items-center relative left-4"><SiFreelancer className="mr-1" /><span className="">Communication,délais,livrables</span></h5>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className="duration-200 hover:scale-110 bg-white border w-full h-full border-black flex flex-col justify-start items-center space-y-4">
          <FaAmericanSignLanguageInterpreting className="text-2xl mt-4"/>
          <h2 className='pb-3 border-b border-black text-green-700'>languistique</h2>
          <div className="flex flex-col p-2 space-y-4">
            <h5 className="flex flex-row items-center">
              <img src={frs} alt="" srcset="" className="mr-1" /><span className="text-2xl">Courant</span></h5>
            <h5 className="flex flex-row items-center">
              <img src={ang} alt="" srcset="" className="w-5 h-8 mr-1" /><span className="text-2xl">Intermediaire</span></h5>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

