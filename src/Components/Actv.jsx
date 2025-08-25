import { BiXCircle } from "react-icons/bi"; 
import { FaWhatsapp, FaEnvelope, FaFacebook,FaPhone,FaLinkedin} from "react-icons/fa";
import React, { useState } from 'react'
import { motion } from "framer-motion";
export default function Actv({dataactivite}){   
    const [menuOpen, setMenuOpen] = useState(false)
    const [ survol , setSurvol ] = useState(false);
    return(    
    <div>
        <motion.div className="bg-white rounded shadow hover:shadow-blue-400 transition"
            initial={{opacity: 0, x: 400}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            onMouseEnter = {()=>setSurvol(true)} 
     	    onMouseLeave = {()=>setSurvol(false)}	
            onClick={() => setMenuOpen(!menuOpen)}>
            <img src={dataactivite.image} alt={dataactivite.name} className="w-full h-50 object-cover rounded transition-all duration-500" />
            {/* Texte au survol */}
  {survol && <div className="absolute inset-0 flex z-40 items-center justify-center left-5 top-10 w-1/2 h-1/2 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    <span className="bg-black/60 text-white px-4 py-2 rounded-lg border border-white text-lg">
      Cliquez pour plus de détails
    </span>
  </div>}
        </motion.div>  
      


            {/* Modal avec carousel */}
            {menuOpen && (
              <nav className="bg-white border-2 border-green-700 m-3 lg:left-40 left-1 lg:top-48 top-24 lg:w-[80%] lg:h-[80%] h-[90%] text-white overflow-auto fixed rounded-xl z-50">
                <div className="flex flex-col h-full w-full">
                  {/* Header modal */}
                  <div className='h-[10%] bg-green-200 flex flex-row justify-between text-black border-b-4 border-green-700 items-center'>
                    <h1 className='p-4'>{dataactivite.titre}</h1>
                    <BiXCircle
                      onClick={() => setMenuOpen(false)}
                      className="mr-4 text-3xl hover:text-red-500 cursor-pointer"
                    />
                  </div>
      
                  {/* Contenu modal */}
                  <div className='lg:h-[80%] h-full overflow-auto flex flex-col lg:flex-row'>
                    {/* Carousel */}
                    <div className='lg:w-[50%] relative'>
                       <img src={dataactivite.image} alt={dataactivite.name} className="absolute w-full h-full object-cover" />
                    </div>
      
                    {/* Description */}
                    <div className="lg:w-[50%] bg-gray-50 text-black flex flex-col justify-center items-center overflow-y-auto">
                      <div className="p-5 space-y-5">
                        <p className="lg:text-2xl">{dataactivite.description1}</p>
                        <p className="lg:text-2xl">{dataactivite.description2}</p>
                        <p className="lg:text-2xl">{dataactivite.description3}</p>
                        <p className="lg:text-2xl">{dataactivite.description4}</p>
                        <p className="lg:text-2xl">{dataactivite.description5}</p>
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

