
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Glasses, Monitor, Building2, Info, Lightbulb } from 'lucide-react';
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
              <Glasses className="h-6 w-6 text-primary" />
              <h4 className="text-lg font-semibold">Ma veille sur les casques VR et réalité mixte</h4>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ma veille technologique porte sur la différence entre les casques de réalité virtuelle (VR) et les casques de réalité mixte/augmentée (AR/MR), ainsi que leurs usages en entreprise.
              </p>

              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Monitor className="h-4 w-4" />
                  Réalité Virtuelle (VR)
                </h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Immersion totale dans un monde 100% virtuel</li>
                  <li>L'utilisateur ne voit plus le monde réel</li>
                  <li>Exemples : Meta Quest, PlayStation VR, HTC Vive</li>
                  <li>Utilisé pour le gaming, les simulations, la formation immersive</li>
                </ul>
              </div>

              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Glasses className="h-4 w-4" />
                  Réalité Mixte / Augmentée (AR/MR)
                </h5>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Superposition d'éléments virtuels sur le monde réel</li>
                  <li>L'utilisateur voit toujours son environnement réel</li>
                  <li>Exemples : Apple Vision Pro, Microsoft HoloLens, Magic Leap</li>
                  <li>Permet l'interaction avec des objets virtuels dans l'espace réel</li>
                </ul>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4" />
                  Usages en entreprise
                </h5>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Réalité Virtuelle :</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Formation des employés (simulations de situations dangereuses)</li>
                      <li>Conception et prototypage de produits</li>
                      <li>Réunions virtuelles immersives</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Réalité Mixte :</p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Maintenance industrielle avec instructions superposées</li>
                      <li>Collaboration à distance avec des hologrammes</li>
                      <li>Visualisation de données 3D dans l'espace de travail</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 p-4 rounded-lg">
                <h5 className="font-semibold flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  Ma conclusion
                </h5>
                <p className="text-sm text-muted-foreground">
                  La VR est idéale pour une immersion totale, tandis que la réalité mixte permet de garder le contact avec le monde réel. Les entreprises choisissent selon leurs besoins : formation immersive (VR) ou assistance en temps réel (AR/MR).
                </p>
              </div>

              <div className="mt-4 flex flex-col items-center gap-3">
                <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Info className="h-4 w-4" />
                      Plus de détails sur ma veille
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Ma veille sur VR vs Réalité Mixte</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Problématique</h6>
                        <p>
                          Comprendre la différence entre les casques de réalité virtuelle et les casques de réalité mixte/augmentée, et identifier dans quels cas les entreprises les utilisent.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Différences techniques</h6>
                        <p>
                          La VR crée un environnement entièrement numérique où l'utilisateur est coupé du monde réel. La réalité mixte, elle, superpose des éléments virtuels sur le monde réel grâce à des caméras et capteurs.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Cas d'usage en entreprise</h6>
                        <p>
                          Les entreprises utilisent la VR principalement pour la formation (simulations de situations dangereuses, onboarding) et la conception de produits. La réalité mixte est privilégiée pour l'assistance à distance, la maintenance industrielle et la collaboration avec des modèles 3D.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Exemples concrets</h6>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Airbus utilise HoloLens pour la maintenance d'avions</li>
                          <li>Walmart forme ses employés avec des casques VR</li>
                          <li>Les architectes visualisent leurs projets en réalité mixte</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Conclusion</h6>
                        <p>
                          Le choix entre VR et réalité mixte dépend du besoin : immersion totale ou interaction avec l'environnement réel. Les deux technologies sont complémentaires et continueront d'évoluer dans le monde professionnel.
                        </p>
                      </div>
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
