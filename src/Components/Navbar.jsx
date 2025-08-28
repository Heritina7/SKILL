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
import { AiOutlinePaperClip } from "react-icons/ai";
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

  {/* Navbar principale */}
  <div className="bg-white transition-all duration-500 ease-in-out">
    {/* Bouton menu hamburger (mobile uniquement) */}
    <section className={`absolute right-5 top-2 hover:text-white lg:hidden text-blue-500 cursor-pointer text-4xl transition-all duration-500 ${navOuvert ? 'hidden' : ''}`}>
      <AiOutlineMenu onClick={() => setNavOuvert(true)} />
    </section>

    {/* Contenu navbar */}
    <section className={`shadow-[0_3px_8px_#1C242D] fixed flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full z-40 bg-slate-800 transition-all duration-500 overflow-hidden ${navOuvert ? 'h-screen lg:h-20' : 'h-0 lg:h-20'}`}>
      {/* Logo */}
      <div className={`text-3xl text-white font-bold ml-5 lg:mt-0 ${navOuvert ? 'lg:static absolute left-5 top-5' : ''}`}>
        <Link to="/"><img src={rth} alt="sary" srcset="" className='border border-white rounded-full w-14 h-12 hover:scale-150 duration-200' /></Link>
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
              `relative flex items-center gap-2 p-4 text-white text-xl no-underline cursor-pointer rounded-xl hover:bg-slate-500 group ${
                isActive ? 'bg-slate-600' : ''
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
        <div className="shadow bg-slate-500 right-20 relative rounded-3xl flex flex-row">
        <div className="flex gap-2 p-1 items-center text-2xl relative ml-2 mr-2">
      <a className="text-white hover:text-slate-700"><FaMapMarkerAlt /></a>
      <a href="https://wa.me/0347791758" className="text-white hover:text-slate-700"><FaWhatsapp /></a>
      <a href="mailto:randrianjafyheritina7@gmail.com" className="text-white hover:text-slate-700"><FaEnvelope /></a>
      <a href="https://web.facebook.com/heritina.randrianjafy.2025" className="text-white text-white hover:text-slate-700"><FaFacebook /></a>
      <a className="hover:text-slate-700 text-white"><FaPhone /></a>
      <a href="www.linkedin.com/in/heritina-randrianjafy" className="hover:text-black text-white"><FaLinkedin /></a>
    </div>
        <div className="hover:bg-blue-400 shadow-black hover:bg-yellow-500 hover:border-black hover:border rounded-full w-10 h-10 bg-blue-500 border-white border flex items-center justify-center">
        <h6 className="relative top-1 text-white">CV</h6>
      </div>     
      </div>
    </section>
  </div>
</div>

    );
}
