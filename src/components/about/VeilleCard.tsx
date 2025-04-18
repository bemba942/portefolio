import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Key, BookOpen, Info } from 'lucide-react';
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
              <h4 className="text-lg font-semibold">L'Authentification à Deux Facteurs (A2F)</h4>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ma veille technologique sur l'A2F m'a permis de comprendre les principes et l'importance de la sécurité informatique, bien que je n'aie pas encore eu l'occasion de l'implémenter concrètement dans mes projets personnels.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Mes Connaissances Actuelles
                </h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Compréhension théorique des mécanismes d'authentification à deux facteurs</li>
                  <li>Identification des différentes méthodes : SMS, applications, clés physiques</li>
                  <li>Conscience des avantages en termes de sécurité des systèmes d'information</li>
                  <li>Connaissance des principes de base de l'implémentation</li>
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Mes Perspectives</h5>
                <p className="text-sm text-muted-foreground">
                  Mon objectif est d'intégrer l'A2F dans mes futurs projets de développement web avec Laravel et C#. Je souhaite acquérir une expérience pratique et renforcer la sécurité de mes applications.
                </p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Ma Motivation</h5>
                <p className="text-sm text-muted-foreground">
                  Bien que je n'aie pas encore mis en pratique l'A2F, je suis convaincu de son importance cruciale dans la sécurisation des systèmes d'information modernes. Je continue d'approfondir mes connaissances et me prépare à son implémentation future.
                </p>
              </div>

              <div className="mt-4 flex justify-center">
                <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Info className="h-4 w-4" />
                      Plus de détails sur mon parcours A2F
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Mon Parcours d'Apprentissage sur l'A2F</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Mon intérêt pour l'Authentification à Deux Facteurs (A2F) est né de ma compréhension des défis croissants en cybersécurité. 
                        Bien que je n'aie pas encore implementé cette technologie, je suis convaincu de son importance.
                      </p>
                      <p>
                        J'ai étudié les différentes méthodes d'authentification : SMS, applications authenticator, clés physiques. 
                        Chacune présente des avantages uniques en termes de sécurisation des systèmes d'information.
                      </p>
                      <p>
                        Mon objectif est de transformer cette compréhension théorique en compétence pratique, 
                        en intégrant l'A2F dans mes futurs projets web avec Laravel et C#.
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
