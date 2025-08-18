import { motion } from "framer-motion";
export default function Blog({profile}){   
    return(    
    <div>
        <motion.div className="bg-white rounded shadow hover:shadow-blue-400 transition"
            initial={{opacity: 0, x: 400}}
            animate={{opacity: 1, x: 0 }}
            exit={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            >
            <img src={profile.photo} alt={profile.name} className="w-full h-50 object-cover rounded" />
        </motion.div>  
    </div>
    );
}