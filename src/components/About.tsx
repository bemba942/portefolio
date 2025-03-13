
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Développeur Full Stack",
    organization: "Tech Innovations",
    period: "2022 - Présent",
    description: "Développement d'applications web et mobiles pour divers clients. Utilisation de React, Node.js et MongoDB.",
    type: "experience"
  },
  {
    id: 2,
    title: "Développeur Front-end",
    organization: "Agence Digitale",
    period: "2020 - 2022",
    description: "Conception et développement d'interfaces utilisateur réactives et accessibles avec Vue.js et Tailwind CSS.",
    type: "experience"
  },
  {
    id: 3,
    title: "Master en Développement Web",
    organization: "Université de Technologie",
    period: "2018 - 2020",
    description: "Spécialisation en développement d'applications web modernes. Projets axés sur les frameworks JavaScript.",
    type: "education"
  },
  {
    id: 4,
    title: "Licence en Informatique",
    organization: "Université des Sciences",
    period: "2015 - 2018",
    description: "Formation générale en informatique couvrant les fondamentaux de la programmation, les algorithmes et les bases de données.",
    type: "education"
  }
];

const About = () => {
  const [educationItems, experienceItems] = React.useMemo(() => {
    return [
      timelineItems.filter(item => item.type === 'education'),
      timelineItems.filter(item => item.type === 'experience')
    ];
  }, []);

  return (
    <section id="about" className="page-section bg-gradient-to-b from-background to-secondary/50">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Parcours
          </span>
          <h2 className="section-heading">À propos de moi</h2>
          <p className="section-subheading">
            Découvrez mon parcours professionnel, mes études et ce qui me passionne dans le développement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-right">
            <div className="flex items-center mb-6">
              <div className="icon-container bg-primary text-primary-foreground mr-3">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Formation</h3>
            </div>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <Card key={item.id} className="overflow-hidden border-0 shadow-md animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-primary font-medium">{item.organization}</p>
                        <div className="flex items-center mt-1 mb-3 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.period}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-left">
            <div className="flex items-center mb-6">
              <div className="icon-container bg-primary text-primary-foreground mr-3">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Expérience</h3>
            </div>

            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <Card key={item.id} className="overflow-hidden border-0 shadow-md animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-primary font-medium">{item.organization}</p>
                        <div className="flex items-center mt-1 mb-3 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.period}</span>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <Button className="button-primary" asChild>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              Télécharger mon CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
