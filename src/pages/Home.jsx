import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiDoubleQuotesR, RiDoubleQuotesL } from "react-icons/ri"; 
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
  const icons = [
  { src: github, name: "GitHub", link: "https://github.com/Heritina7" },
  { src: html, name: "HTML", link: "https://developer.mozilla.org/fr/docs/Web/HTML" },
  { src: react, name: "React", link: "https://reactjs.org/" },
  { src: tailwind, name: "Tailwind", link: "https://tailwindcss.com/" },
  { src: python, name: "Python", link: "https://www.python.org/" },
  { src: django, name: "Django", link: "https://www.djangoproject.com/" },
  { src: seo, name: "SEO", link: "#" },
  { src: malt, name: "Malt", link: "https://www.malt.fr/" },
  { src: fiver, name: "Fiver", link: "https://www.fiverr.com/" },
  { src: freelancer, name: "Freelancer", link: "https://www.freelancer.com/" },
  { src: paypal, name: "PayPal", link: "https://www.paypal.com/" },
  { src: payoneer, name: "Payoneer", link: "https://www.payoneer.com/" },
];

  // Ref et état pour le défilement mobile
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;
    let x = 0;
    const speed = 0.5; // vitesse en px/frame

    const animate = () => {
      if (!paused) {
        x -= speed;
        if (Math.abs(x) >= container.scrollWidth / 2) {
          x = 0; // réinitialisation progressive
        }
        container.style.transform = `translateX(${x}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <div className="lg:flex lg:flex-row lg:h-screen lg:pt-20 relative lg:bottom-0 bottom-10 overflow-auto flex-col">
      
      {/* Partie gauche : PDP et citation */}
      <div className="lg:w-[40%] w-full h-[40%] lg:h-full flex flex-col justify-center">
        <motion.div 
          initial={{opacity: 0, y: -600}}
          animate={{opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 1.5}}
          className="justify-center flex w-full h-[85%]"
        >
          <img src={pdp} alt="Heritina Randrianjafy" className='p-5 mt-10 rounded-full lg:w-[35rem] relative lg:h-[35rem] w-[20rem] h-[20rem] ' />
        </motion.div>
        <motion.div 
          initial={{opacity: 0, y: 600}}
          animate={{opacity: 1, y: 0 }}
          exit={{opacity: 0, y: 100}}
          transition={{duration: 1.5}}
          className='w-full lg:h-[15%] justify-center relative bottom-12 items-center flex flex-row'
        >
          <RiDoubleQuotesL className="mb-4 mr-2"/>
          <h3 className="lg:text-2xl text-lg ">Je crée, Vous grandissez</h3>
          <RiDoubleQuotesR className="mb-3 ml-2"/>
        </motion.div>
      </div>

      {/* Partie droite : textes et icônes */}
      <div className='lg:w-[70%] w-full flex flex-col h-full lg:p-20 p-7'>
        
        {/* Textes principaux */}
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          className="h-[55%] w-full items-center justify-center overflow-auto flex lg:bottom-0 bottom-16 relative lg:space-y-5 flex-col border-b border-black"
        >    
          <h1 className="lg:text-4xl text-2xl">RANDRIANJAFY</h1>
          <h1 className="lg:text-5xl text-xl">Heritina</h1>
          <h1 className='lg:text-5xl text-2xl font-bold flex flex-col lg:flex-row'>
            <span>Developpeur Web</span>
            <span className="text-center ml-2 text-blue-500">Full Stack</span>
          </h1>
          <h1 className="flex flex-row">
            <img src={react} alt="Logo React" className='rounded-full w-10 h-10' />
            <img src={django} alt="Logo Django" className='rounded-full w-14 h-10' />
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div 
          initial={{opacity: 0, x: 600}}
          animate={{opacity: 1, x: 0 }}
          exit={{opacity: 0, x: 100}}
          transition={{duration: 1.5}}
          className="h-[45%] w-full lg:p-8 p-3 flex flex-col items-center"
        >
         <h5 className='lg:text-2xl text-lg relative lg:bottom-0 bottom-10 text-gray-600 leading-relaxed text-justify'>
    Je suis un <span className="font-bold">Développeur Web Freelance</span>, passionné par la création de solutions digitales modernes et performantes. Je conçois des sites et applications web sur mesure, alliant design soigné, <span className="font-bold">rapidité et sécurité</span>. Grâce à ma maîtrise du frontend avec React et du backend avec Django, j'offre des projets complets, optimisés pour tous les appareils, et prêts à booster la <span className="font-bold">visibilité et la croissance de mes clients</span>.
</h5>         
        </motion.div>

        {/* Icônes */}
        <div className="h-[10%] w-full lg:p-2 bg-gray-200 rounded-xl flex flex-col items-center shadow-[0_10px_20px_#1C242D]">
          
          {/* Desktop */}
          <h5 className="hidden lg:flex lg:text-5xl relative bottom-1 text-xl p-1 flex-row space-x-4">
  {icons.map((icon, index) => (
    <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
      <img
        src={icon.src}
        alt={icon.name}
        className="rounded-xl w-10 h-10 transition-transform duration-300 hover:scale-[1.75]"
      />
    </a>
  ))}
</h5>


          {/* Mobile : bande défilement automatique et interactif */}
<div
  className="lg:hidden w-full overflow-x-auto relative h-16 hide-scrollbar"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
  onTouchStart={() => setPaused(true)}
  onTouchEnd={() => setPaused(false)}
>
  <div
    ref={containerRef}
    className="flex whitespace-nowrap gap-x-6 top-3 relative flex-shrink-0"
  >
    {[...icons, ...icons].map((icon, index) => (
      <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
        <img
          src={icon.src}
          alt={icon.name}
          className="w-10 h-10 rounded-xl transition-transform duration-300 hover:scale-[1.60]"
        />
      </a>
    ))}
  </div>
</div>



        </div>

      </div>
    </div>
  );
}

