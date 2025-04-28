
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Headset, FileDown, Code, Shield } from 'lucide-react';
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
          <div className="section-subheading space-y-4 max-w-3xl mx-auto">
            <p>
              Je suis <strong>Bemba KEBE</strong>, étudiant en 2<sup>e</sup> année de <strong>BTS SIO</strong> (Services Informatiques aux Organisations), option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) au lycée Parc de Vilgénis à Massy.
            </p>
            <p>
              Tout au long de ma formation, j'ai appris à concevoir, développer et maintenir des applications modernes, fonctionnelles et adaptées aux besoins réels des utilisateurs. J'ai mené plusieurs projets en autonomie ou en équipe, en utilisant des technologies variées du web et du développement logiciel.
            </p>
            <p>
              Mes compétences principales incluent : HTML, CSS, JavaScript, PHP, SQL, Python et C#. Je maîtrise également la gestion de bases de données relationnelles, la modélisation (MCD/MLD) et la structuration de projets.
            </p>
            <p>
              Curieux, rigoureux, autonome et passionné par les technologies, je suis toujours prêt à relever de nouveaux défis dans le domaine du développement informatique.
            </p>
          </div>
          
          <div className="mt-6">
            <Button className="button-primary" asChild>
              <a href="https://preview--cv-adaptor-optimizer.lovable.app" target="_blank" rel="noopener noreferrer">
                <FileDown className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </a>
            </Button>
          </div>
        </div>

        {/* BTS SIO Presentation Section */}
        <div className="mt-16 animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">La Formation BTS SIO</h3>
          <p className="text-xl max-w-5xl mx-auto leading-relaxed mb-12">
            Le <strong>BTS Services Informatiques aux Organisations (SIO)</strong> est un diplôme en deux ans destiné à former des professionnels capables de gérer des projets informatiques, de développer des applications, ou d'administrer des systèmes et des réseaux. Cette formation s'adresse aux passionnés de technologie souhaitant intégrer rapidement le marché du travail ou poursuivre leurs études.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* SLAM */}
            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="icon-container bg-primary text-primary-foreground">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-primary ml-3">Option SLAM</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'option <strong>SLAM (Solutions Logicielles et Applications Métiers)</strong> forme à la conception et au développement de programmes, sites web, applications mobiles et à la gestion de bases de données. Les étudiants apprennent à coder, tester, déployer et maintenir des solutions numériques sur mesure.
              </p>
            </div>
            
            {/* SISR */}
            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="icon-container bg-primary text-primary-foreground">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-primary ml-3">Option SISR</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L'option <strong>SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</strong> prépare aux métiers de l'administration réseau et de la cybersécurité. Elle enseigne la configuration de serveurs, le déploiement de systèmes, la gestion des droits utilisateurs, et le maintien de la sécurité informatique.
              </p>
            </div>
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
