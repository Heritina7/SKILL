import { SiAntdesign } from "react-icons/si"; 
import { TbSeo } from "react-icons/tb"; 
import { SiFreelancer } from "react-icons/si"; 
import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md"; 
import { FaReact } from "react-icons/fa"; 
import { FaPython } from "react-icons/fa"; 
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa"; 
import { GrTechnology } from "react-icons/gr"; 
import { DiIntellij } from "react-icons/di"; 
import React from 'react'
import mlg from '../assets/icone/mlg.png';
import frs from '../assets/icone/frs.png';
import ang from '../assets/icone/ang.png';

export default function Competence() {
  return (
    <div className='container flex flex-col lg:h-screen lg:pt-32 pt-14 overflow-auto'>
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
          <h4 className='pb-3 border-b text-green-700 border-black hover:border-green-500'><span>Intellectuelle</span></h4>
          <div className="flex flex-col justify-center items-center p-2 space-y-4">       
            <h5>Sociable</h5>
            <h5>Sens de la communication</h5>
            <h5>Esprit d'appartenance</h5>
            <h5>Esprit d'equipe</h5>
            <h5> organisationnel</h5>
            <h5>honnête</h5>
          </div>  
        </motion.div>

        <motion.div 
          initial={{opacity: 0, y: 600}}
          animate={{opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 1}}
          className="duration-500 hover:scale-110 bg-white border w-full h-full border-black flex flex-col justify-start items-center space-y-3">
          <h3 className="text-2xl mt-3"><GrTechnology /></h3>
          <h4 className='pb-3 border-b border-black text-green-700'>technique</h4>
          <div className="flex flex-col p-2 space-y-2">
            <div className="flex flex-col">
              <h6 className="flex flex-row items-center"><span className="font-bold">Développement Frontend</span></h6>
              <h5 className="flex flex-row items-center"><FaReact className="mr-1" /><span className=" text-sm">Réact.js et tailwindCss</span></h5>
              <h5 className="flex flex-row items-center"><FaPython className="mr-1" /><span className=" text-sm">Tkinter</span></h5>
            </div>
            <div className="flex flex-col">
              <h6 className="flex flex-row items-center"><span className="font-bold">Développement Backend</span></h6>
              <h5 className="flex flex-row items-center"><FaPython className="mr-1"/><span className=" text-sm">Python  Django, RESTAPI</span></h5>
              <h5 className="flex flex-row items-center"><FaReact className="mr-1"/><span className=" text-sm">Node.js </span></h5>
            </div>
            <div className="flex flex-col">
              <h6 className="flex flex-row items-center"><span className="font-bold">UI/UX Design</span></h6>
              <h5 className="flex flex-row items-center"><SiAntdesign className="mr-1" /><span className=" text-sm">Web designer</span></h5>
              <h5 className="flex flex-row items-center"><MdDesignServices className="mr-1" /><span className=" text-sm">Graphiste/Illustrateur/Motion designer</span></h5>
            </div>
            <div className="flex flex-col">
              <h6 className="flex flex-row items-center"><span className="font-bold">SEO de base</span></h6>
              <h5 className="flex flex-row items-center"><TbSeo className="mr-1" /><span className=" text-sm">Optimisation pour les moteurs de recherche</span></h5>
            </div>
            <div className="flex flex-col">
              <h6 className="flex flex-row items-center"><span className="font-bold">Gestion de projets freelance</span></h6>
              <h5 className="flex flex-row items-center"><SiFreelancer className="mr-1" /><span className=" text-sm">Communication,délais,livrables</span></h5>
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
          <h4 className='pb-3 border-b border-black text-green-700'>languistique</h4>
          <div className="flex flex-col p-2 space-y-4">
            <h5 className="flex flex-row items-center">
              <img src={mlg} alt="" srcset="" className="mr-1 border border-black" /><span>Langue maternel </span></h5>
            <h5 className="flex flex-row items-center">
              <img src={frs} alt="" srcset="" className="mr-1" /><span>Courant</span></h5>
            <h5 className="flex flex-row items-center">
              <img src={ang} alt="" srcset="" className="w-5 h-8 mr-1" /><span>Intermediaire</span></h5>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

