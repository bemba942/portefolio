import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Github, FileText, Smartphone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Project {
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

const projects: Project[] = [
  {
    id: 7,
    title: "Application Mobile de Quiz",
    description: "Développement en équipe d'une application mobile de quiz interactive. Ce projet collaboratif permet aux utilisateurs de tester leurs connaissances dans différentes catégories tout en offrant une interface intuitive et engageante.",
    image: "/lovable-uploads/fb235090-a067-40b8-97ac-52124b5940d0.png",
    technologies: ["React Native", "JavaScript", "API REST", "Mobile UI/UX"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "/lovable-uploads/fb235090-a067-40b8-97ac-52124b5940d0.png",
      description: "Interface principale de l'application mobile de quiz"
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
      url: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80", 
      description: "Interface de l'application avec menu principal"
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

const Projects = () => {
  return (
    <section id="projects" className="page-section bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Projets Scolaires
          </span>
          <h2 className="section-heading">Mes projets</h2>
          <p className="section-subheading">
            Découvrez une sélection de mes projets réalisés pendant ma formation BTS SIO option SLAM.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-hover overflow-hidden border-0 shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.technologies.join(" • ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-between gap-2">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                
                {project.pdfUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      Documentation
                    </a>
                  </Button>
                )}
                
                {project.screenshot && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Image className="mr-2 h-4 w-4" />
                        Capture d'écran
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>
                          {project.screenshot.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center justify-center p-4">
                        <img
                          src={project.screenshot.url}
                          alt={project.screenshot.description}
                          className="rounded-md max-h-[70vh] w-auto"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
                
                {project.additionalScreenshots && project.additionalScreenshots.length > 0 && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Image className="mr-2 h-4 w-4" />
                        Plus d'images
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{project.title} - Captures supplémentaires</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {project.additionalScreenshots.map((screenshot, index) => (
                          <div key={index} className="flex flex-col space-y-2">
                            <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                            <div className="flex items-center justify-center p-2">
                              <img
                                src={screenshot.url}
                                alt={screenshot.description}
                                className="rounded-md max-h-[70vh] w-auto"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
