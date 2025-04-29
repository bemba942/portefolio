
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Key, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { toast } from '@/hooks/use-toast';

const VeilleCard = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [showProof, setShowProof] = useState(false);

  const handleShowProof = () => {
    setShowProof(true);
    toast({
      title: "Preuves affichées",
      description: "Les preuves de tentative de piratage ont été chargées.",
    });
  };

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
                J'ai appris ce qu'est l'Authentification à Deux Facteurs (A2F). J'ai constaté son importance après avoir été victime de tentatives de piratage sur mes comptes.
              </p>
              
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Key className="h-4 w-4" />
                  Ce que je sais aujourd'hui
                </h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>L'A2F demande deux choses pour se connecter, comme un mot de passe et un code par SMS</li>
                  <li>On peut recevoir le code par SMS, par application ou avec une clé USB spéciale</li>
                  <li>Ça protège mieux nos comptes contre les pirates</li>
                  <li>J'ai expérimenté l'A2F lors de tentatives de piratage sur mes comptes personnels</li>
                </ul>
              </div>
              
              <div className="bg-secondary/20 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Mes projets</h5>
                <p className="text-sm text-muted-foreground">
                  Plus tard, je veux ajouter l'A2F dans mes sites web, avec Laravel ou C#. Ça les rendra plus sécurisés.
                </p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Pourquoi c'est important ?</h5>
                <p className="text-sm text-muted-foreground">
                  Après avoir constaté des tentatives de piratage sur mes propres comptes, j'ai compris l'importance de l'A2F pour empêcher les personnes non autorisées d'accéder aux comptes même si le mot de passe est compromis.
                </p>
              </div>

              <div className="bg-destructive/10 p-4 rounded-lg">
                <h5 className="font-semibold flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  Mon expérience personnelle
                </h5>
                <p className="text-sm text-muted-foreground mb-3">
                  J'ai été la cible de tentatives de piratage sur mon compte Snapchat, ce qui m'a permis de comprendre l'importance cruciale de l'A2F dans la protection des comptes en ligne.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full" 
                  onClick={handleShowProof}
                >
                  Voir les preuves
                </Button>
              </div>

              {showProof && (
                <div className="mt-4">
                  <h5 className="font-semibold mb-3">Preuves de tentatives de piratage</h5>
                  <Carousel className="w-full max-w-xs mx-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <AspectRatio ratio={9/16} className="bg-muted">
                          <img 
                            src="/lovable-uploads/3d92b3ec-e1f7-4204-8a89-1c465f2a3e0e.png" 
                            alt="Code de connexion à Snapchat" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                      <CarouselItem>
                        <AspectRatio ratio={9/16} className="bg-muted">
                          <img 
                            src="/lovable-uploads/6487e009-ea47-48cf-b630-baa2ec492f9d.png" 
                            alt="Tentative de connexion échouée" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                      <CarouselItem>
                        <AspectRatio ratio={9/16} className="bg-muted">
                          <img 
                            src="/lovable-uploads/0dbb492f-79ac-460e-b671-a3424eb94823.png" 
                            alt="Multiples codes de connexion reçus" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                      <CarouselItem>
                        <AspectRatio ratio={9/16} className="bg-muted">
                          <img 
                            src="/lovable-uploads/deb79c48-a20e-4e8e-8508-74223ebfc29f.png" 
                            alt="Alerte de nouvelle connexion" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                      <CarouselItem>
                        <AspectRatio ratio={9/16} className="bg-muted">
                          <img 
                            src="/lovable-uploads/abb64afe-0a91-4087-916a-f70981e44248.png" 
                            alt="Compte temporairement bloqué" 
                            className="object-cover w-full h-full rounded-md"
                          />
                        </AspectRatio>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                  </Carousel>
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Ces captures d'écran montrent des tentatives de piratage sur mon compte Snapchat et l'importance de l'A2F
                  </p>
                </div>
              )}

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
                        L'A2F veut dire qu'il faut deux preuves pour se connecter : par exemple, un mot de passe et un code reçu par SMS ou par une application.
                      </p>
                      <p>
                        J'ai pu constater par moi-même l'importance de l'A2F lorsque mon compte Snapchat a été la cible de tentatives de piratage. J'ai reçu plusieurs codes de connexion par SMS et des alertes de connexions non autorisées.
                      </p>
                      <p>
                        Grâce à l'A2F, les attaquants n'ont pas réussi à accéder à mon compte malgré leurs nombreuses tentatives, car ils ne possédaient pas mon téléphone pour recevoir les codes.
                      </p>
                      <p>
                        Cette expérience m'a convaincu de l'importance d'implémenter cette fonctionnalité dans mes futures applications pour protéger les données des utilisateurs.
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
