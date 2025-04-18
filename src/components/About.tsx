import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, GraduationCap, Briefcase, Search, Headset, FileDown, ShieldCheck, Key } from 'lucide-react';

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
                        
                        {item.id === 5 && (
                          <div className="mt-4 p-4 bg-secondary/20 rounded-lg">
                            <h5 className="font-semibold mb-2">Rapport de stage</h5>
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>Formation :</strong> BTS SIO (Services Informatiques aux Organisations) option SLAM (Solutions Logicielles et Applications Métiers)
                            </p>
                            
                            <h6 className="font-medium mt-3 mb-1">Introduction</h6>
                            <p className="text-sm text-muted-foreground">
                              Dans le cadre de ma formation en BTS SIO option SLAM, j'ai effectué un stage chez Digital Factory Paris, à Antony. 
                              Ce stage, d'une durée de 6 semaines, avait pour but de me faire découvrir le monde professionnel du développement logiciel, 
                              et surtout d'apprendre un nouveau langage de programmation : le JavaScript.
                            </p>
                            
                            <h6 className="font-medium mt-3 mb-1">Présentation de l'entreprise</h6>
                            <p className="text-sm text-muted-foreground">
                              <strong>Nom :</strong> Digital Factory Paris<br />
                              <strong>Localisation :</strong> Antony, France<br />
                              <strong>Secteur :</strong> Développement de solutions numériques<br />
                              <strong>Effectif :</strong> Environ 30 employés<br />
                              <strong>Activités :</strong> Création de sites web, développement d'applications, consultation en stratégie digitale
                            </p>
                            
                            <h6 className="font-medium mt-3 mb-1">Missions réalisées</h6>
                            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                              <li>Création d'une page web complète pour une entreprise fictive (HTML, CSS, JavaScript)</li>
                              <li>Participation à l'amélioration d'une application interne en JavaScript</li>
                              <li>Aide à la gestion des projets via Trello et GitHub</li>
                            </ul>
                            
                            <h6 className="font-medium mt-3 mb-1">Compétences acquises</h6>
                            <p className="text-sm text-muted-foreground">
                              Ce stage m'a permis de renforcer mes compétences en développement web (HTML, CSS, JavaScript),
                              d'améliorer mon organisation de travail, et de développer ma capacité à résoudre des problèmes techniques.
                              Malgré les difficultés rencontrées, notamment avec l'apprentissage de JavaScript, j'ai progressé grâce au travail 
                              personnel et à l'aide de mon tuteur.
                            </p>
                          </div>
                        )}
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
                <Headset className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-display font-bold">Veille Technologique</h3>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <h4 className="text-lg font-semibold">L'Authentification à Deux Facteurs (2FA)</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          J'ai choisi l'authentification à deux facteurs comme sujet de veille technologique, une mesure de sécurité devenue essentielle dans notre environnement numérique.
                        </p>
                        
                        <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                          <h5 className="font-semibold flex items-center gap-2">
                            <Key className="h-4 w-4" />
                            Points Clés
                          </h5>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                            <li>Protection renforcée : Ajout d'une deuxième couche de sécurité en plus du mot de passe</li>
                            <li>Méthodes variées : SMS, applications d'authentification, clés physiques</li>
                            <li>Adoption croissante : Utilisé par la majorité des plateformes importantes</li>
                            <li>Expérience personnelle : Importance réalisée suite à un piratage de compte</li>
                          </ul>
                        </div>
                        
                        <div className="bg-secondary/20 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Applications Pratiques</h5>
                          <p className="text-sm text-muted-foreground">
                            Intégration prévue dans mes projets de développement (Laravel, C#) pour renforcer la sécurité des utilisateurs.
                          </p>
                        </div>

                        <Button className="w-full" variant="outline">
                          <a href="#about" className="flex items-center justify-center gap-2">
                            <ShieldCheck className="h-4 w-4" />
                            En savoir plus sur la 2FA
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
