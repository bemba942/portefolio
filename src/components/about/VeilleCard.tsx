
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Key } from 'lucide-react';

const VeilleCard = () => {
  return (
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
  );
};

export default VeilleCard;
