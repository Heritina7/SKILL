import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import rth from '../assets/rth.png';
import { RiDoubleQuotesR } from "react-icons/ri"; 
import { RiDoubleQuotesL } from "react-icons/ri"; 
import { FiPhoneCall } from "react-icons/fi";  
import { BsActivity } from "react-icons/bs"; 
import { RiComputerLine } from "react-icons/ri"; 
import { BiBrain } from "react-icons/bi"; 
import { MdOutlineMilitaryTech } from "react-icons/md"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { BsXLg } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaWhatsapp,FaMapMarkerAlt,FaEnvelope, FaFacebook,FaPhone,FaLinkedin} from "react-icons/fa";
function useMobile (){
  const[ isMobile,setIsMobile ]= useState(window.innerWidth < 1000);
  useEffect(()=>
  {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;

}
export default function Navbar() {
  const NavLinks = [
    { nom: 'Accueil', icon: <AiOutlineHome />, lien:'' },
    { nom: 'FORMATION', icon: <BiBrain /> , lien:'Formation' },
    { nom: 'EXPÉRIENCES', icon: <MdOutlineMilitaryTech />, lien:'Experience' },
    { nom: 'COMPÉTENCES', icon: <RiComputerLine />, lien:'Competence' },
    { nom: 'ACTIVITÉS', icon: <BsActivity />, lien:'Activite' },
    { nom: 'Contact', icon: <FiPhoneCall />, lien:'Contact' },
  ];
  const [ navOuvert, setNavOuvert ] = useState(true);

  // Comportement
  useEffect(()=>
  {
    const handleResize = () =>
    {
      if(window.innerWidth < 1000)
      {
        setNavOuvert(false);
      }
      else
      {
        setNavOuvert(true);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile= useMobile(); 

  return (
    <div className="fixed z-50 flex flex-col w-full">
  {/* Bandeau top contact */}
  <div className="flex items-center justify-between w-full h-12 bg-black px-4">
    <div className="flex gap-3 text-lg text-blue-500 relative top-2">
      <p className="hover:text-blue-400"><FaMapMarkerAlt /></p>
      <a href="https://wa.me/0347791758" className="hover:text-blue-400"><FaWhatsapp /></a>
      <a href="mailto:randrianjafyheritina7@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
      <a href="https://web.facebook.com/heritina.randrianjafy.2025" className="hover:text-blue-400"><FaFacebook /></a>
      <p className="hover:text-blue-400"><FaPhone /></p>
      <a href="www.linkedin.com/in/heritina-randrianjafy" className="hover:text-blue-400"><FaLinkedin /></a>
    </div>
    <div className="hidden lg:flex flex-row text-white text-sm xl:text-base">
      <h1 className="flex flex-row text-sm mt-3 animate-pulse">
      <RiDoubleQuotesL className="mr-2"/>
      <h3 className="text-sm">Vous avez le projet, j'ai la solution digitale</h3>
      <RiDoubleQuotesR className="ml-2"/>
      </h1>
    </div>
  </div>

  {/* Navbar principale */}
  <div className="transition-all duration-500 ease-in-out">
    {/* Bouton menu hamburger (mobile uniquement) */}
    <section className={`absolute right-5 top-2 hover:text-white lg:hidden text-blue-500 cursor-pointer text-4xl transition-all duration-500 ${navOuvert ? 'hidden' : ''}`}>
      <AiOutlineMenu onClick={() => setNavOuvert(true)} />
    </section>

    {/* Contenu navbar */}
    <section className={`fixed flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full z-40 bg-green-700 transition-all duration-500 overflow-hidden ${navOuvert ? 'h-screen lg:h-20' : 'h-0 lg:h-20'}`}>
      {/* Logo */}
      <div className={`text-3xl text-white font-bold ml-5 lg:mt-0 ${navOuvert ? 'lg:static absolute left-5 top-5' : ''}`}>
        <Link to="/"><img src={rth} alt="sary" srcset="" className='border border-white rounded-full w-12 h-12 hover:scale-150 duration-200' /></Link>
      </div>

      {/* Liens de navigation */}
      <nav 
      onClick={() =>{
        if (isMobile) setNavOuvert(false) 
      }}
      className="flex flex-col items-center overflow-auto justify-center lg:flex-row lg:h-full lg:mt-0 w-full">
        {NavLinks.map((link, index) => (
          <NavLink
            key={index}
            to={`/${link.lien}`}
            className={({ isActive }) =>
              `relative flex items-center gap-2 p-4 text-white text-lg no-underline cursor-pointer hover:bg-green-600 group ${
                isActive ? 'bg-green-600' : ''
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            <span className="font-semibold">{link.nom}</span>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full"></span>
          </NavLink>
        ))}

        {/* Bouton fermeture menu mobile */}
        <div className={`text-3xl text-white cursor-pointer lg:hidden ${navOuvert ? 'absolute top-5 right-5' : ''}`}>
          <BsXLg onClick={() => setNavOuvert(false)} />
        </div>
      </nav>
    </section>
  </div>
</div>

    );
}
