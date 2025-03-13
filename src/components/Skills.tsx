
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Layout, Server, Smartphone, Sparkles } from 'lucide-react';

interface SkillCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Développement Front-end",
    description: "Création d'interfaces utilisateur interactives et réactives",
    icon: <Layout className="h-6 w-6" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Tailwind CSS", "SASS"]
  },
  {
    id: 2,
    title: "Développement Back-end",
    description: "Architecture serveur et logique métier",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "PHP", "Laravel", "Python", "Django"]
  },
  {
    id: 3,
    title: "Bases de données",
    description: "Gestion et modélisation des données",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"]
  },
  {
    id: 4,
    title: "Développement Mobile",
    description: "Applications natives et multiplateformes",
    icon: <Smartphone className="h-6 w-6" />,
    skills: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    id: 5,
    title: "Autres compétences techniques",
    description: "Outils et technologies complémentaires",
    icon: <Code className="h-6 w-6" />,
    skills: ["Git", "Docker", "CI/CD", "AWS", "TypeScript", "GraphQL"]
  },
  {
    id: 6,
    title: "Compétences générales",
    description: "Compétences transversales essentielles",
    icon: <Sparkles className="h-6 w-6" />,
    skills: ["UX/UI Design", "Gestion de projet", "Méthode Agile", "Travail d'équipe", "Communication"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="page-section">
      <div className="container px-6">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-3">
            Expertise
          </span>
          <h2 className="section-heading">Mes compétences</h2>
          <p className="section-subheading">
            Un aperçu des technologies et des compétences que j'ai acquises tout au long de mon parcours professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
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
    </section>
  );
};

export default Skills;
