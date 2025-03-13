
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Layout, Server, Smartphone, Sparkles, Heart, Users, Brain, Globe } from 'lucide-react';

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
    title: "Développement Web",
    description: "Création de sites web et d'applications web",
    icon: <Layout className="h-6 w-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "WordPress"],
    type: 'hard'
  },
  {
    id: 2,
    title: "Programmation",
    description: "Langages de programmation et frameworks",
    icon: <Code className="h-6 w-6" />,
    skills: ["Java", "C#", "Python", ".NET", "React"],
    type: 'hard'
  },
  {
    id: 3,
    title: "Bases de données",
    description: "Gestion et modélisation des données",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "SQL Server", "MongoDB"],
    type: 'hard'
  },
  {
    id: 4,
    title: "Systèmes et Réseaux",
    description: "Configuration et maintenance",
    icon: <Server className="h-6 w-6" />,
    skills: ["Windows Server", "Linux", "Active Directory", "DHCP", "DNS"],
    type: 'hard'
  },
  {
    id: 5,
    title: "Travail d'équipe",
    description: "Collaboration et communication",
    icon: <Users className="h-6 w-6" />,
    skills: ["Communication", "Collaboration", "Gestion de conflits", "Partage de connaissances"],
    type: 'soft'
  },
  {
    id: 6,
    title: "Résolution de problèmes",
    description: "Analyse et solutions",
    icon: <Brain className="h-6 w-6" />,
    skills: ["Analyse critique", "Créativité", "Persévérance", "Gestion du stress"],
    type: 'soft'
  },
  {
    id: 7,
    title: "Adaptabilité",
    description: "Apprentissage continu",
    icon: <Globe className="h-6 w-6" />,
    skills: ["Veille technologique", "Curiosité", "Autoformation", "Flexibilité"],
    type: 'soft'
  },
  {
    id: 8,
    title: "Leadership",
    description: "Gestion et motivation",
    icon: <Heart className="h-6 w-6" />,
    skills: ["Initiative", "Organisation", "Motivation", "Responsabilité"],
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
