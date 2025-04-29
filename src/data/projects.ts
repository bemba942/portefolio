
// Define Project interface
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  details?: string;
  screenshot?: {
    url: string;
    description: string;
  };
  additionalScreenshots?: {
    url: string;
    description: string;
  }[];
  pdfUrl?: string;
}

// Project data
export const projects: Project[] = [
  {
    id: 8,
    title: "Projet de Stage: Système d'Information",
    description: "Projet réalisé en stage portant sur la création d'un système d'information pour la gestion de ressources. Mise en place d'interfaces utilisateur intuitives et développement de fonctionnalités de suivi et de reporting.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://bemba942.github.io/projet/stage_projet/index.html",
    screenshot: {
      url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "Interface du système d'information développé en stage"
    },
  },
  {
    id: 6,
    title: "Stage Développement Web",
    description: "Expérience professionnelle en développement web avec plusieurs projets, dont une application de quiz Unity avec Python et Kivy, ainsi qu'une interface de communication de type Discord.",
    image: "/lovable-uploads/bf5739fb-4d70-4573-b7ed-216578b83b45.png",
    technologies: ["Python", "Kivy", "Unity", "HTML/CSS", "JavaScript"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/bf5739fb-4d70-4573-b7ed-216578b83b45.png",
      description: "Interface Discord avec salons vocaux et conversation"
    },
    additionalScreenshots: [
      {
        url: "/lovable-uploads/fb235090-a067-40b8-97ac-52124b5940d0.png", 
        description: "Application Unity Quiz développée avec Python et Kivy"
      }
    ]
  },
  {
    id: 1,
    title: "Gestion d'un zoo",
    description: "Application web permettant de gérer un zoo avec affichage de la liste des animaux, modifications de leurs informations, recherche et suppression d'un animal.",
    image: "/lovable-uploads/0b161f11-61e3-4eef-ada0-83062db2140d.png",
    technologies: ["PHP", "MySQL", "HTML/CSS"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/04b64bd0-552b-4355-b4aa-cdc76baee76c.png",
      description: "Interface de gestion des animaux et tableau de bord"
    }
  },
  {
    id: 2,
    title: "Gestion de DVD",
    description: "Application de gestion de collection de DVD permettant de cataloguer, rechercher et suivre les prêts de DVDs. Inclut des fonctionnalités de tri, filtrage et statistiques développées avec XAML.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "MySQL", "XAML"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/272555f8-0dc8-4571-bf17-6b2dd74d8717.png", 
      description: "Menu principal de l'application de gestion de DVD avec options de gestion des clients, DVD, locations et statistiques"
    }
  },
  {
    id: 3,
    title: "Actualité en ligne (News API)",
    description: `Application WPF en C# intégrant l'API NewsAPI pour fournir des actualités en temps réel. Fonctionnalités clés :
    - Authentification des utilisateurs
    - Filtrage par catégorie et recherche par mots-clés
    - Intégration API REST avec NewsAPI
    - Système de favoris avec persistance MySQL`,
    image: "/lovable-uploads/c73df2c8-ae75-48e4-a5e5-af6410a7089f.png",
    technologies: ["C#", "NewsAPI", "MySQL", "XAML", "REST API"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/c73df2c8-ae75-48e4-a5e5-af6410a7089f.png",
      description: "Interface de recherche d'actualités avec intégration API"
    }
  },
  {
    id: 4,
    title: "Gestion des salles",
    description: "Application client lourd développée en C# pour gérer une chaîne de salles avec gestion de la base de données MySQL.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    technologies: ["C#", "MySQL", "XAML"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", 
      description: "Interface de gestion des salles"
    },
    pdfUrl: "https://drive.google.com/file/d/13NNRYuFo13Gr2MjB5x-opLgeZ--qijHw/view?usp=drive_link"
  },
  {
    id: 5,
    title: "Gestion de site de vacances",
    description: "Réalisation d'une application web en PHP qui gère un site de vacances. Développée en Programmation Orientée Objet avec EasyPHP et gestion de la base de données MySQL.",
    image: "/lovable-uploads/68516e7a-f071-408d-b2e5-72b5d86156c2.png",
    technologies: ["PHP", "HTML/CSS", "MySQL"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/68516e7a-f071-408d-b2e5-72b5d86156c2.png",
      description: "Interface de gestion des animations du centre de vacances"
    },
    pdfUrl: "https://drive.google.com/file/d/1jtLl50xpZDalNipQ6B2k-lK_ltEaKVqr/view?usp=sharing"
  }
];
