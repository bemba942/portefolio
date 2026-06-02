
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Headset, FileDown, Code, Shield, Award } from 'lucide-react';
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
    id: 7,
    title: "Stage Développement & Électronique",
    organization: "Entreprise (Stage 2025)",
    period: "2025",
    description: "Participation à un projet prototype IoT : détection de produits via tags RFID, soudure de PCB, calibration d'antennes sous Linux. Développement d'un site web en Node.js avec Vue.js.",
    type: "internship"
  },
  {
    id: 6,
    title: "Veille technologique sur les Voitures Autonomes",
    organization: "Personnelle",
    period: "2023 - 2025",
    description: "Veille sur les voitures autonomes : fonctionnement, niveaux d'autonomie, technologies (IA, capteurs, cloud) et évolutions pendant mes 2 années de BTS SIO.",
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
              <a href="/CV_Bemba_KEBE.pdf" download="CV_Bemba_KEBE.pdf">
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
        <div className="mt-16 animate-fade-up">
          <div className="flex items-center mb-6">
            <div className="icon-container bg-primary text-primary-foreground mr-3">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-display font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pix */}
            <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold">Certification Pix</h4>
                  <p className="text-sm text-muted-foreground">Lycée Parc de Vilgénis · 23/02/2026</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">322 pts</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Compétences numériques — niveau <strong>Indépendant</strong>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Pourquoi : preuve officielle</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Recherche web</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Collaboration</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Bureautique</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Sécurité</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">QR vérif. Pix</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Base du métier IT</span>
              </div>
              <div className="mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <a href="/certification-pix-bemba-kebe.pdf" target="_blank" rel="noopener noreferrer">
                    <FileDown className="mr-2 h-4 w-4" />
                    Voir l'attestation
                  </a>
                </Button>
              </div>
            </div>

            {/* RGPD */}
            <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold">Certification RGPD</h4>
                  <p className="text-sm text-muted-foreground">CNIL · Atelier RGPD</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">Données</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Protection des données personnelles
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Pourquoi : obligation légale</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Consentement</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Droit d'accès</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Droit à l'oubli</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Données perso</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Utile : web + BDD</span>
              </div>
              <div className="mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://bemba942.github.io/projet/" target="_blank" rel="noopener noreferrer">
                    Voir sur mon site
                  </a>
                </Button>
              </div>
            </div>

            {/* ANSSI */}
            <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-xl font-bold">MOOC ANSSI</h4>
                  <p className="text-sm text-muted-foreground">SecNumacadémie · Cybersécurité</p>
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">Sécurité</span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                Cybersécurité — référence nationale
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Pourquoi : cyberattaques en hausse</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Mots de passe</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Phishing</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Malwares</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Sauvegardes</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Sécurité réseau</span>
                <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">Appliqué en TP</span>
              </div>
              <div className="mt-auto">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://bemba942.github.io/projet/" target="_blank" rel="noopener noreferrer">
                    Voir sur mon site
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
