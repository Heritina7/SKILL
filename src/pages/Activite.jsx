import { motion } from "framer-motion";
import Actv from "../Components/Actv";
import dataactivite from "../data/dataactivite";

export default function Activite()
{  
  // Affichage
  return(
    <div className="container p-8 lg:py-40 py-10">
        <motion.div 
            initial={{opacity: 0, y: -600}}
            animate={{opacity: 1, y: 0 }}
            exit={{opacity: 0, y: 100}}
            transition={{duration: 1}}
            className="w-full flex items-center border-b-2 border-black justify-center">
             <h4 className='p-3'>MES DOMAINES D'ACTIVITÉS</h4>
        </motion.div>                            
        <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-4 overflow-auto">
            {dataactivite.map(folio => (
                < Actv key={folio.id} dataactivite={folio} />
            ))}
        </div>
    </div>
  )
}