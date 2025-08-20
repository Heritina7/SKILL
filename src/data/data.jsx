// import projet from "../assets/test.png"
// import projet1 from "../assets/pdp.jpg"
// import video1 from "../assets/Video/video.mp4"
// projet monitoring 
import boky1 from "../assets/experience/monitoring/boky1.png"
import boky2 from "../assets/experience/monitoring/boky2.png"
import boky3 from "../assets/experience/monitoring/boky3.png"
import boky4 from "../assets/experience/monitoring/boky4.png"
import boky5 from "../assets/experience/monitoring/boky5.png"
import boky6 from "../assets/experience/monitoring/boky6.png"
import boky7 from "../assets/experience/monitoring/boky7.png"
//standart
import stand1  from "../assets/experience/Standart/stand1.png"
import stand2 from "../assets/experience/Standart/stand2.png"
import stand3 from "../assets/experience/Standart/stand3.png"
import stand4 from "../assets/experience/Standart/stand4.png"
import stand5 from "../assets/experience/Standart/stand5.png"
import stand6 from "../assets/experience/Standart/stand6.png"
import stand7 from "../assets/experience/Standart/stand7.png"
import stand8 from "../assets/experience/Standart/stand8.png"
const donner = [
  {
    id: 1,
    titre: " Création site web Stand'Art",
    date: "Juillet 2025",
    type: "",
    detail: "Création d’un Site web avec React et TailwindCSS, site vitrine et Catalogue.",
    image: stand1,
    carouselImages: [stand1, stand2, stand3, stand4, stand5, stand6, stand7, stand8],
    description1: "Mise en place du frontend avec React.js.",
    description2: "Utilisation de TailwindCSS pour le style.",
    description3: "Gestion d’état avec React Hooks.",
    description4: "Optimisation responsive pour mobile et desktop.",
    description5: "Le site vitrine de Stand’Art est développé afin de mettre en lumière les œuvres et événements artistiques. Le design moderne et l’ergonomie soignée permettent une navigation fluide tout en reflétant l’univers créatif de la marque.",
  },
  {
    id: 2,
    titre: "Monitoring Téléphonique",
    date: "Mai 2024 - juillet 2024",
    type: "Stage en entreprise NP AKADIN",
    detail: "Participation au installation equipement informatique. Creation application web, monitoring telephonique.",
    image: boky2,
    carouselImages: [boky1, boky2, boky3, boky4, boky5, boky6, boky7],
    description1: "Mise en place du frontend et backend avec Django.",
    description2: "Création d’un système d’authentification par session.",
    description3: "",
    description4: "Monitoring téléphonique permettant de suivre et d’analyser en temps réel les appels entrants et sortants. Ce projet assure un suivi précis des performances, optimise la gestion des contacts et fournit des statistiques claires pour améliorer la productivité",
    description5: "",
  },
    {
    id: 3,
    titre: "application web point de vente",
    date: "",
    type: "Projet d'étude",
    detail: "Création d'un application web pour une magasin de point de vente.",
    image: "",
    carouselImages: [
      "/images/django-1.jpg",
      "/images/django-2.jpg",
      "/images/django-3.jpg",
      "/images/django-4.jpg",
      "/images/django-5.jpg",
    ],
    description1: "Mise en place du Frontend avec React et tailwindcss et le backend avec Django REST Framework et une base de donner avec MySQL.",
    description2: "Création d’un système d’authentification par session.",
    description3: "Gestion des modèles pour les produits.",
    description4: "Mise en place de la pagination API.",
    description5: "Cette application web et conçu pour un magasin, permettant de gérer les produits, les ventes et les promotions de manière intuitive. L’interface ergonomique et moderne offre une expérience fluide aux utilisateurs tout en optimisant la gestion du point de vente.",
  },
  {
    id: 4,
    titre: "Suivi des Taches",
    date: "",
    type: "Projet d'étude",
    detail: "Création d'un application web avec Python avec le framwork Django, sur le thème suivi des taches des clients pour une entreprise",
    image: "",
    carouselImages: [
      "/images/django-1.jpg",
      "/images/django-2.jpg",
      "/images/django-3.jpg",
      "/images/django-4.jpg",
      "/images/django-5.jpg",
    ],
    description1: "Mise en place du Frontend avec React et tailwindcss et du Backend avec Django et une base de donner avec MySQL",
    description2: "Création d’un système d’authentification par session.",
    description3: "Gestion des modèles pour les produits.",
    description4: "Mise en place de la pagination API.",
    description5: "Une application web de suivi de tâches permettant de créer, gérer et suivre l’avancement des projets en temps réel. L’interface intuitive et responsive facilite l’organisation des équipes et améliore la productivité tout en offrant un suivi clair des priorités et échéances.",
  },
];

export default donner;


// data.js
export const videos = [
  {
    id: 1,
    title: "Ma vidéo",
    // src: video1// chemin vers ta vidéo
  }
];

export const photo = [
  {
    id: 1,
    title: "Ma photo",
    // src: projet1
  }
];

export const profile = [
  {
    id:1,
    name:"fb",
    // photo: projet1
  }
]
