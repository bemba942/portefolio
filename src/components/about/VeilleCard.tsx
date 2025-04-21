
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Key, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const VeilleCard = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h4 className="text-lg font-semibold">Ma veille sur l'A2F</h4>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                J'ai appris le principe de l'Authentification à Deux Facteurs (A2F). Même si je ne l'ai pas encore employée dans mes propres projets, je comprends qu'elle ajoute une étape pour rendre les connexions plus sûres.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Ce que je sais aujourd'hui
                </h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>L'A2F demande deux preuves pour se connecter, comme un mot de passe et un code reçu par SMS</li>
                  <li>Il y a plusieurs méthodes : SMS, applications spéciales, clés USB</li>
                  <li>Elle sert à mieux protéger les comptes</li>
                  <li>Je sais les bases pour l'utiliser mais je n'ai jamais essayé pour le moment</li>
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Mes projets</h5>
                <p className="text-sm text-muted-foreground">
                  Plus tard, je veux ajouter l'A2F dans mes futurs sites web, par exemple en utilisant Laravel ou C#. Cela me permettra de rendre mes applications plus protégées.
                </p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Pourquoi c'est important ?</h5>
                <p className="text-sm text-muted-foreground">
                  Même si je n'ai pas encore utilisé l'A2F moi-même, je sais qu'elle est très importante pour éviter que des personnes non autorisées accèdent aux comptes. Je continue d'apprendre pour l'utiliser bientôt.
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center gap-3">
                <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Info className="h-4 w-4" />
                      Plus de detail sur ma veille
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Ma veille sur l'A2F</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        L'A2F veut dire qu'il faut deux preuves pour se connecter : par exemple, un mot de passe et un code qu'on reçoit par SMS ou par une application.
                      </p>
                      <p>
                        J'ai compris que cela sert à rendre l'accès à nos comptes plus difficile pour les pirates. Il y a plusieurs moyens de faire l'A2F, comme les SMS ou des clés USB spéciales.
                      </p>
                      <p>
                        Je n'ai pas encore eu l'occasion de l'ajouter dans mes projets, mais j'aimerais beaucoup le faire pour mieux protéger mes futures applications.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VeilleCard;

