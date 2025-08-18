import pdp from '../assets/pdp.jpg';
import { BsFillSendFill } from "react-icons/bs"; 
import { BiDownArrowCircle } from "react-icons/bi"; 
import { CgPathDivide } from "react-icons/cg"; 
import { AiOutlineLike } from "react-icons/ai"; 
import { AiOutlineDislike } from "react-icons/ai"; 
import { videos  } from "../data/data"; // importe la vidéo
import { photo  } from "../data/data"; // importe la vidéo
import data from "../data/data"; // importe la photo

export default function Blog() {
  return (
    <div className='container flex flex-col h-screen pt-32 overflow-auto space-y-1'>
      <div className="h-[70%] w-full flex flex-row bg-green-200">
        <div className="w-[70%] flex flex-col h-full">
          <div className="h-[10%] w-full flex justify-center items-center">
            <h1 className="text-3xl">{videos.title} </h1>
            </div>
          <div className="h-[75%] w-full flex justify-center items-center bg-black">
            <video
              className="h-full w-full object-contain"
              controls
              src={videos[0].src} // récupère la source de la vidéo depuis data.js
            >
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div className="h-[15%] w-full flex flex-row justify-between items-center">
            <div className="ml-3 w-10 h-10 rounded-full items-center justify-center flex hover:bg-opacity-70 hover:text-green-500">
              <BiDownArrowCircle className="text-2xl" />
            </div>
            <div className="flex flex-row items-center">
              <input type="text" placeholder='Ecrivez moi votre avis' className='border border-black px-24 py-2 rounded-full'/>
              <button 
              type="button"
              className="w-10 h-10 rounded-full items-center justify-center flex ml-1 hover:bg-black border border-black hover:text-white"
              >
                <BsFillSendFill className="text-2xl" />
              </button>
            </div>
            <div className="flex flex-row">
              <div className="mr-2 w-10 h-10 rounded-full items-center justify-center flex ml-1 hover:bg-black border border-black hover:text-white">
                <CgPathDivide className="text-2xl" />
              </div>
              <div className="mr-2 w-10 h-10 rounded-full items-center justify-center flex hover:bg-black border border-black hover:text-white">
                <AiOutlineDislike className="text-2xl " />
              </div>
              <div className="mr-3 w-10 h-10 rounded-full items-center justify-center flex ml-1 hover:bg-black border border-black hover:text-white">
              <AiOutlineLike className="text-2xl " />
              </div>
            </div>
          </div>
          </div>
          <div className="relative w-[30%] h-full bg-fuchsia-400">
            <img src={photo[0].src} alt="sary" srcset="" className='absolute w-full h-full' />
          </div>
        </div>

        <div className="h-[30%] flex flex-row bg-blue-500">
          <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 md:grid-cols-4 overflow-auto">
            {data.map(folio => (
                < Blog key={folio.id} data={folio} />
            ))}
        </div>
        </div>
    </div>
  )
}
