
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gestion de ZOO",
    description: "Application client léger pour la gestion des animaux, des enclos et du personnel d'un zoo permettant d'optimiser les opérations quotidiennes.",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["PHP", "HTML", "CSS"],
    githubUrl: "http://bemba942.github.io/projet/",
  },
  {
    id: 2,
    title: "Gestion d'Activités",
    description: "Système client léger pour la gestion des activités permettant de planifier, suivre et gérer efficacement différentes activités et événements.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["PHP", "HTML", "CSS"],
    githubUrl: "http://bemba942.github.io/projet/",
  },
  {
    id: 3,
    title: "Réservation de Salles",
    description: "Application client lourd en C# permettant de réserver des salles de réunion ou d'événements avec gestion des disponibilités.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "WPF", "SQL Server"],
    githubUrl: "http://bemba942.github.io/projet/",
  },
  {
    id: 4,
    title: "Gestion de DVD",
    description: "Système de gestion de collection de DVD permettant le suivi des prêts, retours et l'inventaire des DVD.",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "SQL", "Entity Framework"],
    githubUrl: "http://bemba942.github.io/projet/",
  },
  {
    id: 5,
    title: "API RESTful",
    description: "Développement d'une API RESTful en C# permettant l'accès aux données et services d'une application.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "ASP.NET Core", "Web API", "Swagger"],
    githubUrl: "http://bemba942.github.io/projet/",
  },
  {
    id: 6,
    title: "Portfolio & CV",
    description: "Site web personnel présentant mon parcours, mes compétences et mes projets réalisés pendant ma formation.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://preview--cv-adaptor-optimizer.lovable.app",
    githubUrl: "http://bemba942.github.io/projet/",
  },
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
                <p>{project.description}</p>
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
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Démo
                    </a>
                  </Button>
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
