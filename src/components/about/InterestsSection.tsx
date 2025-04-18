
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const interests = [
  {
    title: "Voyage",
    organization: "Guinée (Conakry)",
    description: "Passionné par la découverte de nouvelles cultures et paysages."
  },
  {
    title: "Cinéma",
    organization: "Films d'action, Aventure, Comédie",
    description: "Amateur de films dans divers genres."
  },
  {
    title: "Sport et Loisirs",
    organization: "Football, Lecture, Jeux laser",
    description: "Activités sportives et récréatives variées."
  }
];

const InterestsSection = () => {
  return (
    <div className="space-y-6">
      {interests.map((interest, index) => (
        <Card key={index} className="overflow-hidden border-0 shadow-md animate-fade-up">
          <CardContent className="p-6">
            <div className="flex items-start">
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{interest.title}</h4>
                <p className="text-primary font-medium">{interest.organization}</p>
                <p className="text-muted-foreground mt-3">{interest.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InterestsSection;
