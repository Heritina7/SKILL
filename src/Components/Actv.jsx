import { FaWhatsapp,FaMapMarkerAlt,FaEnvelope, FaFacebook,FaPhone,FaLinkedin} from "react-icons/fa";
import React, { useState } from 'react'
import { motion } from "framer-motion";
export default function Actv({dataactivite}){   
    const [menuOpen, setMenuOpen] = useState(false)
    return(    
    <div>
        <motion.div className="bg-white rounded shadow hover:shadow-blue-400 transition"
            initial={{opacity: 0, x: 400}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            onClick={() => setMenuOpen(!menuOpen)}>
            <img src={dataactivite.image} alt={dataactivite.name} className="w-full h-50 object-cover rounded" />
        </motion.div>  
      

       {menuOpen && ( <nav className="bg-blue-600 bottom-20 left-40 w-[80%] h-[70%] text-white overflow-auto fixed rounded-xl">

    
        <div className="flex flex-col h-full w-full">
            <div className='h-[10%] bg-green-300 flex flex-row justify-between items-center'>
                <h1 className='p-4'>titre</h1>
                <button type="button" className='p-4' onClick={() => setMenuOpen(false)}>X</button>
            </div>
            <div className='h-[80%] overflow-auto'>
                <div className='w-[50%] h-full relative'>
                    <img src={dataactivite.image} alt={dataactivite.name} className="absolute w-full h-full object-cover" />
                </div>
                <div className="">
                    
                </div>

            </div>
            <div className='h-[10%] bg-green-500 flex justify-between items-center p-3'> 
                <div className="flex gap-3 text-lg text-white">
                    <a href="#" className="hover:text-blue-400"><FaMapMarkerAlt /></a>
                    <a href="https://wa.me/0347791758" className="hover:text-blue-400"><FaWhatsapp /></a>
                    <a href="mailto:randrianjafyheritina7@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
                    <a href="https://web.facebook.com/heritina.randrianjafy.2025" className="hover:text-blue-400"><FaFacebook /></a>
                    <a href="#" className="hover:text-blue-400"><FaPhone /></a>
                    <a href="www.linkedin.com/in/heritina-randrianjafy" className="hover:text-blue-400"><FaLinkedin /></a>
                </div>
                <div></div>
                <button type="button" onClick={() => setMenuOpen(false)} className='bg-blue-500 p-2 pl-2 pr-2 rounded-xl'>Férmer</button>
            </div>
        </div>
        </nav>)}
    </div>
    );
}