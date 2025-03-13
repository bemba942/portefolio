
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Layout, Server, Heart, Users, Brain, Shield } from 'lucide-react';

interface SkillCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  type: 'hard' | 'soft';
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Sécurité Informatique",
    description: "Protection des systèmes informatiques",
    icon: <Shield className="h-6 w-6" />,
    skills: ["Compétences en sécurité informatique", "Maintenance informatique", "MAJ antivirus"],
    type: 'hard'
  },
  {
    id: 2,
    title: "Réseaux",
    description: "Gestion des réseaux informatiques",
    icon: <Server className="h-6 w-6" />,
    skills: ["Compétences en réseaux informatiques", "Configuration", "Maintenance"],
    type: 'hard'
  },
  {
    id: 3,
    title: "Programmation",
    description: "Langages de programmation",
    icon: <Code className="h-6 w-6" />,
    skills: ["Notions d'algorithme (C++)", "Pack office"],
    type: 'hard'
  },
  {
    id: 4,
    title: "Support Technique",
    description: "Résolution de problèmes",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Personne ressource pour résoudre les problèmes informatiques", "Support utilisateur"],
    type: 'hard'
  },
  {
    id: 5,
    title: "Qualités Personnelles",
    description: "Atouts personnels",
    icon: <Heart className="h-6 w-6" />,
    skills: ["Déterminé", "Responsable", "Dynamique", "Souriant"],
    type: 'soft'
  },
  {
    id: 6,
    title: "Travail d'équipe",
    description: "Collaboration et communication",
    icon: <Users className="h-6 w-6" />,
    skills: ["Esprit d'équipe", "Communication", "Collaboration"],
    type: 'soft'
  },
  {
    id: 7,
    title: "Compétences Personnelles",
    description: "Autres compétences",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Adaptabilité", "Prise de décision", "Mathématique"],
    type: 'soft'
  },
  {
    id: 8,
    title: "Compétences Linguistiques",
    description: "Langues étrangères",
    icon: <Layout className="h-6 w-6" />,
    skills: ["Anglais", "Espagnol"],
    type: 'soft'
  }
];

const Skills = () => {
  const hardSkills = skillCategories.filter(category => category.type === 'hard');
  const softSkills = skillCategories.filter(category => category.type === 'soft');

  return (
    <section id="skills" className="page-section">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Compétences
          </span>
          <h2 className="section-heading">Mes compétences</h2>
          <p className="section-subheading">
            Un aperçu des compétences techniques et personnelles que j'ai développées.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 animate-fade-up">Hard Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardSkills.map((category, index) => (
              <Card 
                key={category.id} 
                className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 icon-container bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 animate-fade-up">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((category, index) => (
              <Card 
                key={category.id} 
                className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 icon-container bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
