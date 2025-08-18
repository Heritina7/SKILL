import fever from '../assets/icone/fever.png';
import malt from '../assets/icone/malt.png';
// import web from '../assets/icone/web.png';
import linkedin from '../assets/icone/linkedin.png';

import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai"; 
import { CiFacebook } from "react-icons/ci"; 
import { HiOutlineLocationMarker } from "react-icons/hi"; 
import { BiMailSend } from "react-icons/bi"; 
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";

export default function Contact() {
  return (
    <div className='flex lg:flex-row flex-col lg:h-screen lg:pt-32 pt-14 overflow-auto'>
      <div className="lg:w-[50%] w-full h-full overflow-auto flex flex-col lg:border-r lg:border-black">          
            <motion.h3 
              initial={{opacity: 0, y: -600}}
              animate={{opacity: 1, y: 0 }}
              exit={{opacity: 0, y: 100}}
              transition={{duration: 1.5}}
              className="lg:h-[10%] w-full text-center flex justify-center items-center border-b-2 border-black lg:p-5 p-3">
               CONTACT :
            </motion.h3>
            <div className="h-[80%] w-full flex flex-col p-4">
              <motion.div 
                initial={{opacity: 0, x: -600}}
                animate={{opacity: 1, x: 0 }}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 1.5}}
                className="flex flex-col lg:pl-48 pl-0 space-y-3">
                  <h6 className='flex flex-row lg:text-xl text-lg'><FiPhoneCall className='text-blue-500 mr-2' /><i className="fab fa-viber text-blue-500 mr-2"></i>+261 34 77 917 58</h6>
                  <h4 className='flex flex-row lg:text-xl text-lg'><BiMailSend className='text-blue-500 mr-2'/>Randrianjafyheritina7@gmail.com</h4>
                  <h4 className='flex flex-row lg:text-xl text-lg'><AiOutlineLinkedin className='text-blue-500 mr-2'/><CiFacebook className='text-blue-500 flex flex-row mr-2'/>Randrianjafy Heritina</h4>
                  <h4 className='flex flex-row lg:text-xl text-lg'><HiOutlineLocationMarker className='text-blue-500 mr-2'/>TANA103 Ikianja Ambohimanagakely</h4>  
              </motion.div>
              <div className="flex flex-col justify-center items-center">
                <motion.h2 
                  initial={{opacity: 0, x: 0}}
                  animate={{opacity: 1, x: 0 }}
                  exit={{opacity: 0, x: 100}}
                  transition={{duration: 5}}
                  className='border-b border-black font-bold text-lg lg:text-3xl p-3 m-3'>
                    Mes Profils
                </motion.h2>     
                <motion.div 
                  initial={{opacity: 0, x: 0}}
                  animate={{opacity: 1, x: 0 }}
                  exit={{opacity: 0, x: 100}}
                  transition={{duration: 5}}
                className="flex gap-3 text-3xl text-white">
                  <a href="www.linkedin.com/in/heritina-randrianjafy"><img src={linkedin} alt="Linkedin" srcset="" className=' w-12 h-12' /></a>
                  <a href="https://www.malt.fr/profile/heritinarandrianjafy"><img src={malt} alt="malt" srcset="" className=' w-12 h-12' /></a>
                  <a href="https://www.fiverr.com/heritina7/buying?source=avatar_menu_profile"><img src={fever} alt="feverr" srcset="" className='w-12 h-12' /></a>
                  {/* <a href="#"><img src={web} alt="web" srcset="" className='rounded-full w-12 h-12' /></a> */}
                </motion.div>
              </div>
              <div className="flex flex-col justify-center items-center">
              <motion.h2 
                initial={{opacity: 0, x: 0}}
                animate={{opacity: 1, x: 0 }}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 5}}
                className='border-b border-black font-bold text-lg lg:text-3xl p-3 m-3'>
                  M'envoyer une message
              </motion.h2>
              <motion.form 
                initial={{opacity: 0, x: 600}}
                animate={{opacity: 1, x: 0 }}
                exit={{opacity: 0, x: 100}}
                transition={{duration: 1.5}}
                action="" className='flex flex-col lg:p-0 md:p-10 sm:p-10 space-y-2'>
                  <input type="text" placeholder='Entrez votre mail' className='border border-black px-24 py-2 rounded-2xl'/>
                  <input type="text" placeholder='Votre message' className='border border-black px-24 py-2 rounded-2xl'/>
                <motion.button 
                  initial={{opacity: 0, y: 600}}
                  animate={{opacity: 1, y: 0 }}
                  exit={{opacity: 0, y: 100}}
                  transition={{duration: 1.5}}
                  type="button" className='bg-green-600 p-2 rounded-2xl hover:bg-green-500 hover:text-white'>
                    envoyer
                </motion.button>
              </motion.form>         
              </div>
            </div>
          
        
      </div>
      <div className="lg:w-[50%] w-full h-full bg-blue-500">
        <div className="w-full h-full bg-blue-500 flex justify-center items-center">
          <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127415.47139278983!2d47.4529306!3d-18.8892727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e8bba1f4a73%3A0x38beaeebacfd1a0!2sAmbohimangakely!5e0!3m2!1sfr!2smg!4v1692098712345!5m2!1sfr!2smg"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-lg"
            title="Ambohimangakely Ikianja"
          ></iframe>
        </div>
      </div>

      </div>
    </div>
  )
}
