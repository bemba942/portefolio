import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Github } from 'lucide-react';
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
}

const projects: Project[] = [
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
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", // Image de salle de classe
    technologies: ["C#", "MySQL", "XAML"],
    githubUrl: "http://bemba942.github.io/projet/",
    screenshot: {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04", 
      description: "Interface de gestion des salles"
    }
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
    }
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
              <CardFooter className="flex justify-between">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
