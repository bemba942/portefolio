
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
    title: "Application Web E-commerce",
    description: "Une plateforme e-commerce complète avec panier d'achat, paiement sécurisé et gestion des commandes.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Application Mobile de Fitness",
    description: "Une application mobile pour suivre vos entraînements, nutrition et progrès dans votre parcours fitness.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tableau de Bord Analytique",
    description: "Un tableau de bord interactif pour visualiser les données commerciales et les métriques importantes.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="page-section bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Réalisations
          </span>
          <h2 className="section-heading">Mes projets</h2>
          <p className="section-subheading">
            Découvrez une sélection de mes réalisations récentes, illustrant mes compétences et mon expertise.
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
