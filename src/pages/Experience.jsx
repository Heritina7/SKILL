import { motion } from "framer-motion";
import Exp from "../Components/Exp";
import data from "../data/data";
export default function Experience() {
  return (
    <div className='container grid grid-cols-1 lg:h-screen bg-white lg:pt-32 pt-12'>
      <motion.div 
                  initial={{opacity: 0, y: -600}}
                  animate={{opacity: 1, y: 0 }}
                  exit={{opacity: 0, y: 100}}
                  transition={{duration: 1}}
                  className="w-full flex items-center justify-center fixed lg:right-10 right-0 overflow-auto z-40 pt-3 bg-white">
                   <h4 className='border-b-2 border-black p-2 bg-white'>MES EXPERIENCES :</h4>
              </motion.div>                            
      <div className="flex flex-col h-full w-full relative top-14  space-y-4 p-4 ">
                {data.map(folio => (
                < Exp key={folio.id} donner={folio} />
                ))}
      </div>
    </div>
  )
}
