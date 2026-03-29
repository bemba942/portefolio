
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Github, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { projects, Project } from '@/data/projects';

const ScreenshotCarousel = ({ project }: { project: Project }) => {
  const [current, setCurrent] = useState(0);
  
  const allScreenshots = [
    ...(project.screenshot ? [project.screenshot] : []),
    ...(project.additionalScreenshots || [])
  ];

  if (allScreenshots.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + allScreenshots.length) % allScreenshots.length);
  const next = () => setCurrent((c) => (c + 1) % allScreenshots.length);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-full flex items-center justify-center min-h-[300px]">
        {allScreenshots.length > 1 && (
          <Button variant="ghost" size="icon" className="absolute left-0 z-10" onClick={prev}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        <img
          src={allScreenshots[current].url}
          alt={allScreenshots[current].description}
          className="rounded-md max-h-[60vh] max-w-full object-contain mx-auto"
        />
        {allScreenshots.length > 1 && (
          <Button variant="ghost" size="icon" className="absolute right-0 z-10" onClick={next}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        )}
      </div>
      <p className="text-sm text-muted-foreground text-center">{allScreenshots[current].description}</p>
      {allScreenshots.length > 1 && (
        <div className="flex gap-1.5">
          {allScreenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-primary' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
                
                {(project.screenshot || (project.additionalScreenshots && project.additionalScreenshots.length > 0)) && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Image className="mr-2 h-4 w-4" />
                        Images
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                      </DialogHeader>
                      <ScreenshotCarousel project={project} />
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
