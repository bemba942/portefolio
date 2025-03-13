
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
    organization: "Collège Rosa Parks",
    period: "2020 - Présent",
    description: "Formation en Services Informatiques aux Organisations, spécialité Solutions Logicielles et Applications Métiers.",
    type: "education"
  },
  {
    id: 2,
    title: "Baccalauréat Technologie",
    organization: "Lycée polyvalent de Cachan",
    period: "2022 - 2023",
    description: "Obtention du baccalauréat.",
    type: "education"
  },
  {
    id: 3,
    title: "Brevet",
    organization: "Collège Rosa Parks",
    period: "2019 - 2020",
    description: "Obtention du brevet avec mention bien.",
    type: "education"
  },
  {
    id: 4,
    title: "Stage agent polyvalent",
    organization: "La banque Postale Paris Pernety Plaisance",
    period: "Décembre 2019 - Janvier 2020",
    description: "Ouverture des comptes courants, réalisation des simulations des prêts immobiliers, réalisations actions commerciales, préparation des rdv, montages des dossiers.",
    type: "internship"
  },
  {
    id: 5,
    title: "Veille technologique",
    organization: "Personnelle",
    period: "Continu",
    description: "Veille sur les technologies de sécurité informatique, les réseaux informatiques et les algorithmes.",
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
            Je m'appelle Bemba KEBE, j'ai 18 ans et je suis actuellement étudiant en BTS SIO option SLAM à Gentilly.
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
              <h3 className="text-2xl font-display font-bold">Centres d'intérêt</h3>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">Voyage</h4>
                      <p className="text-primary font-medium">Guinée (Conakry)</p>
                      <p className="text-muted-foreground mt-3">Passionné par la découverte de nouvelles cultures et paysages.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">Cinéma</h4>
                      <p className="text-primary font-medium">Films d'action, Aventure, Comédie</p>
                      <p className="text-muted-foreground mt-3">Amateur de films dans divers genres.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">Sport et Loisirs</h4>
                      <p className="text-primary font-medium">Football, Lecture, Jeux laser</p>
                      <p className="text-muted-foreground mt-3">Activités sportives et récréatives variées.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

        {/* CV download button removed as requested */}
      </div>
    </section>
  );
};

export default About;
