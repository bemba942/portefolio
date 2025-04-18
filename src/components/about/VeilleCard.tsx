
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Key, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const VeilleCard = () => {
  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h4 className="text-lg font-semibold">L'Authentification à Deux Facteurs (A2F)</h4>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ma veille technologique sur l'A2F m'a permis d'approfondir mes connaissances en sécurité informatique et de comprendre les enjeux de la protection des données.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Ce que j'ai appris
                </h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>L'importance cruciale d'une double vérification pour protéger les comptes sensibles</li>
                  <li>Les différentes méthodes d'authentification (SMS, applications, clés physiques)</li>
                  <li>Les avantages et inconvénients de chaque méthode</li>
                  <li>Les bonnes pratiques de mise en œuvre dans les projets</li>
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Mes Applications Pratiques</h5>
                <p className="text-sm text-muted-foreground">
                  Je prévois d'intégrer l'A2F dans mes projets de développement web avec Laravel et C#. J'ai notamment étudié les bibliothèques de sécurité disponibles et les meilleures pratiques d'implémentation pour offrir une expérience utilisateur optimale.
                </p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Ma Conclusion</h5>
                <p className="text-sm text-muted-foreground">
                  Cette veille m'a convaincu que l'A2F est indispensable pour tout système d'information moderne. Je continue à suivre les évolutions dans ce domaine pour rester à jour et offrir les meilleures solutions de sécurité dans mes projets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VeilleCard;
