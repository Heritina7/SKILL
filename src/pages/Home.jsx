import { SiDjango } from "react-icons/si"; 
import { FaPython } from "react-icons/fa"; 
import { AiOutlineGithub } from "react-icons/ai"; 
import { FaJs } from "react-icons/fa"; 
import { FaNodeJs } from "react-icons/fa"; 
import { FaReact } from "react-icons/fa"; 
import { SiTailwindcss } from "react-icons/si"; 
import { AiOutlineHtml5 } from "react-icons/ai"; 
import { AiFillHtml5 } from "react-icons/ai"; 
import { BiBrain } from "react-icons/bi"; 
import { motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri"; 
import { RiDoubleQuotesL } from "react-icons/ri"; 
import pdp from '../assets/pdp.jpg';
import django from '../assets/icone/django.png';
import react from '../assets/icone/react.png';
import html from '../assets/icone/html.png';
import python from '../assets/icone/python.png';
import tailwind from '../assets/icone/tailwind.png';
import seo from '../assets/icone/seo.png';
import fiver from '../assets/icone/fiver.png';
import malt from '../assets/icone/malt.png';
import github from '../assets/icone/github.png';
import freelancer from '../assets/icone/freelancer.png';
import paypal from '../assets/icone/paypal.png';
import payoneer from '../assets/icone/payoneer.png';
export default function Home() {
  return (
    <div className="lg:flex lg:flex-row lg:h-screen lg:pt-20 overflow-auto flex-col">
      <div className="lg:w-[40%] w-full h-[40%] lg:h-full lg:border-r lg:border-black flex flex-col justify-center">
        {/* ici commence le pdp et le texte citation */}
        <motion.div 
          initial={{opacity: 0, y: -600}}
          animate={{opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 1.5}}
          className="justify-center flex w-full h-[85%]">
          <img src={pdp} alt="" srcset="" className='p-5 mt-10 rounded-full w-full h-full' />
        </motion.div>
        <motion.div 
          initial={{opacity: 0, y: 600}}
          animate={{opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 1.5}}
          className='w-full lg:h-[15%] justify-center items-center flex flex-row'>
            <RiDoubleQuotesL className="mb-4 mr-2"/>
            <h3 className="lg:text-2xl text-lg ">Je crée, Vous grandissez</h3>
            <RiDoubleQuotesR className="mb-3 ml-2"/>
        </motion.div>
        {/* se termine ici */}
      </div>

      <div className='lg:w-[70%] w-full flex flex-col h-full lg:p-20 p-7'>
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          className="h-[55%] w-full items-center justify-center overflow-auto flex lg:space-y-5 flex-col border-b border-black">    
              <h1 className="lg:text-4xl text-2xl">RANDRIANJAFY</h1>
              <h1 className="lg:text-5xl text-xl">Heritina</h1>
              <h1 className='lg:text-5xl text-2xl font-bold flex flex-col lg:flex-row'><span>Developpeur Web</span><span className="text-center ml-2">Full Stack</span></h1>
              <h1 className="flex flex-row">
              <img src={react} alt="" srcset="" className='rounded-full w-10 h-10' />
              <img src={django} alt="" srcset="" className='rounded-full w-14 h-10' />
              </h1>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          className="h-[45%] w-full lg:p-8 flex flex-col items-center">
          <h5 className='lg:p-24 lg:text-2xl text-xl p-3'>Je suis un Développeur Web Freelance, passionné par la création de solution digitales modernes et performantes. Je conçois des sites et application web sur mesure, alliant design soigné, rapidité et sécurité. Grâce à ma maîtrise du frontend avec React et du backend avec Django, j'offre des projets complets, optimisés pour tous les appareils, et prêts à booster la visibilité et la croissance de mes clients.
          </h5>         
        </motion.div>
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          className="h-[10%] w-full lg:p-2 bg-gray-200 rounded-xl flex flex-col items-center shadow-[0_10px_20px_#1C242D] shadow-xl">
          <h5 className='lg:text-5xl text-xl p-1 flex-row flex space-x-4'>
            <img src={github} alt="" srcset="" className='transition-transform duration-300 hover:scale-125 rounded-xl w-10 h-10' />
            <img src={html} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={react} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={tailwind} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={python} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={django} alt="" srcset="" className='w-15 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={seo} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={malt} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={fiver} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={freelancer} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={paypal} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
            <img src={payoneer} alt="" srcset="" className='rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-125' />
          </h5>         
        </motion.div>
      </div>
    </div>
  )
}
