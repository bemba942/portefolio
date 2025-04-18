import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Headset, FileDown } from 'lucide-react';
import TimelineSection from './about/TimelineSection';
import VeilleCard from './about/VeilleCard';
import InterestsSection from './about/InterestsSection';

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
    organization: "Lycée Parc Vilgénis à Massy",
    period: "Depuis 2023",
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
    title: "Stage développement web",
    organization: "Digital Factory Paris, Antony",
    period: "27/05/2024 - 05/07/2024",
    description: "Stage en développement web avec apprentissage du JavaScript, création de pages web et participation à des projets d'entreprise.",
    type: "internship"
  },
  {
    id: 6,
    title: "Veille technologique sur l'Authentification à Deux Facteurs (2FA)",
    organization: "Personnelle",
    period: "Continu",
    description: "Veille sur les systèmes d'authentification à deux facteurs, leur importance dans la sécurité des comptes et leur implémentation dans les projets de développement.",
    type: "veille"
  }
];

const About = () => {
  const educationItems = timelineItems.filter(item => item.type === 'education');
  const experienceItems = timelineItems.filter(item => item.type === 'experience');
  const internshipItems = timelineItems.filter(item => item.type === 'internship');

  return (
    <section id="about" className="page-section bg-gradient-to-b from-background to-secondary/50">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Parcours
          </span>
          <h2 className="section-heading">À propos de moi</h2>
          <p className="section-subheading">
            Je m'appelle Bemba KEBE, j'ai 19 ans et je suis né en 2005. Je suis actuellement étudiant en BTS SIO option SLAM à Massy.
          </p>
          
          <div className="mt-6">
            <Button className="button-primary" asChild>
              <a href="https://preview--cv-adaptor-optimizer.lovable.app" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <TimelineSection
            title="Formation"
            icon={<GraduationCap className="h-5 w-5" />}
            items={educationItems}
          />
          <div className="animate-fade-left">
            <div className="flex items-center mb-6">
              <div className="icon-container bg-primary text-primary-foreground mr-3">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Centres d'intérêt</h3>
            </div>
            <InterestsSection />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <TimelineSection
            title="Stages"
            icon={<Briefcase className="h-5 w-5" />}
            items={internshipItems}
          />
          <div className="animate-fade-left">
            <div className="flex items-center mb-6">
              <div className="icon-container bg-primary text-primary-foreground mr-3">
                <Headset className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Veille Technologique</h3>
            </div>
            <div className="space-y-6">
              <VeilleCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
