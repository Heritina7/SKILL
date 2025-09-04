import { motion } from "framer-motion";
import React from 'react'

export default function Formation() {
  return (
    <div className='container flex flex-col lg:h-screen lg:pt-20 pt-14 overflow-auto'>
      <motion.div 
              initial={{opacity: 0, y: -600}}
              animate={{opacity: 1, y: 0 }}
              exit={{opacity: 0, y: 100}}
              transition={{duration: 2}}
              className="flex justify-center items-center p-3">
            <h4>MES  FORMATIONS :</h4>
            </motion.div>
      <div className="w-full h-full border-2 border-green-700 lg:rounded-3xl p-3 space-y-6 overflow-auto">
        <motion.div 
        initial={{opacity: 0, x: -600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="hover:bg-green-100 duration-500 w-full p-3 border-2 border-green-500 bg-gray-100 hover:scale-x-100 hover:border-green-500 hover:border rounded-xl justify-around flex flex-row">
          <div className="w-[30%]">2021- 2024</div>
          <div className="w-[40%]">Licence en Science de l’Informatique</div>
          <div className="w-[30%]">ONIVERSITY FJKM Ravelojaona</div>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1}}
        className="hover:bg-green-100 duration-500 w-full p-3 border-2 border-green-500 bg-gray-100 hover:scale-x-125 hover:border-green-500 hover:border rounded-xl justify-around flex flex-row">
          <div className="w-[30%]">2022- 2023</div>
          <div className="w-[40%]">Formation en Arduino</div>
          <div className="w-[30%]">TME</div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0, x: -600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1}}
          className="hover:bg-green-100 duration-500 w-full p-3 border-2 border-green-500 bg-gray-100 hover:scale-x-125 hover:border-green-500 hover:border rounded-xl justify-around flex flex-row">
          <div className="w-[30%]">2019- 2020</div>
          <div className="w-[40%]">Baccalauréat</div>
          <div className="w-[30%]">LYPARS</div>
        </motion.div>

      </div>
    </div>
  )
}
