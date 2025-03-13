
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, GraduationCap, Briefcase, Search } from 'lucide-react';

interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'internship' | 'veille';
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "BTS SIO option SLAM",
    organization: "Lycée / Centre de formation",
    period: "2022 - Présent",
    description: "Formation en Services Informatiques aux Organisations, spécialité Solutions Logicielles et Applications Métiers.",
    type: "education"
  },
  {
    id: 2,
    title: "Baccalauréat",
    organization: "Lycée",
    period: "2021 - 2022",
    description: "Obtention du baccalauréat avec mention.",
    type: "education"
  },
  {
    id: 3,
    title: "Stage en développement",
    organization: "Entreprise d'accueil",
    period: "2023",
    description: "Développement d'applications métier pour l'entreprise, mise en place de bases de données, maintenance et support.",
    type: "internship"
  },
  {
    id: 4,
    title: "Job étudiant",
    organization: "Entreprise locale",
    period: "Été 2022",
    description: "Assistance technique et support utilisateur. Maintenance du parc informatique.",
    type: "experience"
  },
  {
    id: 5,
    title: "Veille technologique",
    organization: "Personnelle",
    period: "Continu",
    description: "Veille sur les technologies web et mobiles, les frameworks JavaScript et les bonnes pratiques de développement.",
    type: "veille"
  }
];

const About = () => {
  const educationItems = timelineItems.filter(item => item.type === 'education');
  const experienceItems = timelineItems.filter(item => item.type === 'experience');
  const internshipItems = timelineItems.filter(item => item.type === 'internship');
  const veilleItems = timelineItems.filter(item => item.type === 'veille');

  return (
    <section id="about" className="page-section bg-gradient-to-b from-background to-secondary/50">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Parcours
          </span>
          <h2 className="section-heading">À propos de moi</h2>
          <p className="section-subheading">
            Je m'appelle Bemba KEBE, j'ai 19 ans et je suis actuellement étudiant en BTS SIO option SLAM.
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

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-right">
            <div className="flex items-center mb-6">
              <div className="icon-container bg-primary text-primary-foreground mr-3">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Stages</h3>
            </div>

            <div className="space-y-6">
              {internshipItems.map((item, index) => (
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
                <Search className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Veille Technologique</h3>
            </div>

            <div className="space-y-6">
              {veilleItems.map((item, index) => (
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
