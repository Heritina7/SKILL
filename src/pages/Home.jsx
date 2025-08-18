import { motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri"; 
import { RiDoubleQuotesL } from "react-icons/ri"; 
import pdp from '../assets/pdp.jpg';
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
          className="h-[50%] w-full items-center justify-center overflow-auto flex lg:space-y-5 flex-col border-b border-black">    
              <h1 className="lg:text-5xl text-2xl">RANDRIANJAFY</h1>
              <h1 className="lg:text-3xl text-xl">Heritina</h1>
              <h1 className='lg:text-5xl text-2xl font-bold flex flex-col lg:flex-row'><span>Developpeur Web</span><span className="text-center ml-2">Full Stack</span></h1>
              <h1 className="lg:text-3xl font-bold text-xl">React.js / Django</h1>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          className="h-[50%] w-full lg:p-10 flex flex-col items-center">
          <h5 className='lg:p-24 lg:text-xl text-lg p-3'>Je suis un Développeur Web Freelance, passionné par la création de solution digitales modernes et performantes. Je conçois des sites et application web sur mesure, alliant design soigné, rapidité et sécurité. Grâce à ma maîtrise du frontend avec React et du backend avec Django, j'offre des projets complets, optimisés pour tous les appareils, et prêts à booster la visibilité et la croissance de mes clients.
          </h5>         
        </motion.div>
      </div>
    </div>
  )
}
