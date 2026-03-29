
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
    id: 10,
    title: "Gestion VVA - Village Vacances",
    description: "Réservation d'hébergements • Gestion des activités • Tableau de bord admin • Suivi des clients • Statistiques en temps réel",
    image: "/lovable-uploads/vva-dashboard-admin.png",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/vva-dashboard-admin.png",
      description: "Tableau de bord administration avec statistiques des hébergements et réservations"
    },
    additionalScreenshots: [
      {
        url: "/lovable-uploads/vva-accueil-hebergements.png",
        description: "Page d'accueil avec liste des hébergements disponibles et tarifs"
      }
    ],
    pdfUrl: "/KEBE_BEMBA_VVA_1_1.pdf"
  },
  {
    id: 9,
    title: "Stage 2025: Prototype IoT & Développement Web",
    description: "Détection RFID • Soudure PCB • Calibration antennes • Site bar Vue.js/Node.js • Arduino • Environnement Linux • GitLab",
    image: "/lovable-uploads/stage-2025-table-rfid.jpeg",
    technologies: ["Linux", "Node.js", "Vue.js", "Arduino", "RFID", "Git"],
    screenshot: {
      url: "/lovable-uploads/stage-2025-table-rfid.jpeg",
      description: "Table interactive avec détection RFID et interface Blackfade"
    },
    additionalScreenshots: [
      {
        url: "/lovable-uploads/stage-2025-arduino-code.jpeg",
        description: "Code Arduino pour lecteurs RFID MFRC522"
      },
      {
        url: "/lovable-uploads/stage-2025-tag-ids.jpeg",
        description: "Enregistrement et calibration des IDs de tags RFID"
      },
      {
        url: "/lovable-uploads/stage-2025-calibrator.jpeg",
        description: "Logiciel Calibrator connecté au port COM3"
      },
      {
        url: "/lovable-uploads/stage-2025-hardware.jpeg",
        description: "Vue d'ensemble du matériel : PCB, câblage et composants électroniques"
      },
      {
        url: "/lovable-uploads/stage-2025-table-aptar.jpg",
        description: "Table interactive Aptar avec emplacements RFID lumineux"
      },
      {
        url: "/lovable-uploads/stage-2025-unity-bar.jpeg",
        description: "Site Unity Bar développé en Vue.js - Landing page avec événements et activités"
      }
    ]
  },
  {
    id: 8,
    title: "Projet de Stage: Système d'Information",
    description: "Système d'information • Gestion de ressources • Interface utilisateur • Suivi • Reporting",
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
    description: "Quiz Unity Python/Kivy • Interface type Discord • Développement web • Projets variés",
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
    description: "Liste des animaux • Ajout / Modification / Suppression • Recherche • Interface web",
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
    description: "Catalogue DVD • Recherche • Suivi des prêts • Tri / Filtrage • Statistiques",
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
    description: "Actualités temps réel • API REST NewsAPI • Authentification • Filtrage par catégorie • Favoris • Base MySQL",
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
    description: "Gestion de salles • Client lourd C# • Base de données MySQL • CRUD complet",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    technologies: ["C#", "MySQL", "XAML"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", 
      description: "Interface de gestion des salles"
    },
    pdfUrl: "/KEBE_BEMBA_RESERVATION_1.pdf"
  },
  {
    id: 5,
    title: "Gestion de site de vacances",
    description: "Site de vacances • PHP orienté objet • EasyPHP • Base MySQL • Gestion des animations",
    image: "/lovable-uploads/68516e7a-f071-408d-b2e5-72b5d86156c2.png",
    technologies: ["PHP", "HTML/CSS", "MySQL"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/68516e7a-f071-408d-b2e5-72b5d86156c2.png",
      description: "Interface de gestion des animations du centre de vacances"
    },
    pdfUrl: "/KEBE_BEMBA_VVA_1_1.pdf"
  }
];
