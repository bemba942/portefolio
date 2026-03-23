
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Cpu, Eye, Brain, Shield, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const VeilleCard = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Car className="h-6 w-6 text-primary" />
          <h4 className="text-lg font-semibold">Les voitures autonomes</h4>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          <Section icon={<Eye className="h-4 w-4" />} title="Principe">
            <p>Des voitures capables de rouler seules grâce à des <strong>caméras, radars, LiDAR</strong> et une <strong>intelligence artificielle</strong> qui analyse la route et prend les décisions en temps réel.</p>
            <p className="mt-1">Le fonctionnement suit <strong>4 étapes</strong> : perception (capteurs), analyse (IA), décision (freiner, tourner…), action (contrôle du véhicule).</p>
          </Section>

          <Section icon={<Cpu className="h-4 w-4" />} title="Les 6 niveaux d'autonomie (SAE)">
            <div className="space-y-1">
              <p><strong>Niveau 0</strong> : aucune aide, le conducteur fait tout</p>
              <p><strong>Niveau 1-2</strong> : aides à la conduite (régulateur, maintien de voie). Ex : Tesla Autopilot (niveau 2)</p>
              <p><strong>Niveau 3</strong> : la voiture conduit seule dans certaines conditions, le conducteur reprend si demandé. Ex : Mercedes Drive Pilot</p>
              <p><strong>Niveau 4</strong> : autonomie complète dans des zones définies, sans conducteur. Ex : Waymo robotaxis</p>
              <p><strong>Niveau 5</strong> : autonomie totale partout — n'existe pas encore</p>
            </div>
          </Section>

          <Section icon={<Car className="h-4 w-4" />} title="Tesla vs Waymo">
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-background/50 p-2 rounded">
                <p className="font-semibold text-foreground">Tesla</p>
                <p>Caméras uniquement, niveau 2, voiture personnelle. Approche : « les caméras suffisent, comme les yeux humains »</p>
              </div>
              <div className="bg-background/50 p-2 rounded">
                <p className="font-semibold text-foreground">Waymo (Google)</p>
                <p>LiDAR + caméras + radar, niveau 4, service de taxi. Approche : « plusieurs capteurs pour plus de sécurité »</p>
              </div>
            </div>
          </Section>

          <Section icon={<Brain className="h-4 w-4" />} title="Lien avec le BTS SIO">
            <div className="grid grid-cols-2 gap-2 mt-1">
              <p>💻 <strong>Programmation</strong> — Python, C++</p>
              <p>🗄️ <strong>BDD</strong> — données capteurs/trajets</p>
              <p>🌐 <strong>Réseaux</strong> — voiture ↔ cloud</p>
              <p>🔒 <strong>Cybersécurité</strong> — anti-piratage</p>
              <p>🤖 <strong>IA</strong> — analyse d'images</p>
              <p>☁️ <strong>Cloud</strong> — traitement à distance</p>
            </div>
          </Section>

          <Section icon={<Shield className="h-4 w-4" />} title="Enjeux et problèmes">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Sécurité</strong> — la voiture doit être plus fiable qu'un humain</li>
              <li><strong>Piratage</strong> — risque de prise de contrôle à distance</li>
              <li><strong>Responsabilité</strong> — qui est coupable en cas d'accident ?</li>
              <li><strong>Éthique</strong> — dilemme du tramway : comment l'IA choisit ?</li>
              <li><strong>Emploi</strong> — impact sur les chauffeurs de taxi/routiers</li>
            </ul>
          </Section>

          <div className="mt-4 flex justify-center">
            <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Info className="h-4 w-4" />
                  Plus de détail sur ma veille
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Infos complémentaires</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h6 className="font-semibold text-foreground mb-1">📊 Chiffres clés (2025)</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Waymo : <strong>+100 000 trajets/semaine</strong> aux USA</li>
                      <li>Tesla : <strong>+6 milliards de km</strong> de données collectées</li>
                      <li>Marché estimé à <strong>2 000 milliards $</strong> d'ici 2030</li>
                      <li>Plus de <strong>80 entreprises</strong> dans le monde</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-foreground mb-1">🏢 Acteurs principaux</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>🇺🇸 <strong>Waymo</strong> (robotaxis), <strong>Tesla</strong> (IA + caméras), <strong>Aurora</strong> (camions)</li>
                      <li>🇨🇳 <strong>Baidu</strong> (robotaxis), <strong>Pony.ai</strong></li>
                      <li>🇪🇺 <strong>Mercedes</strong> (niveau 3 certifié), <strong>BMW</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-foreground mb-1">🔍 Ma méthode de veille</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Sites : The Verge, Electrek, Numerama</li>
                      <li>Chaînes YouTube tech</li>
                      <li>Newsletters et flux RSS</li>
                      <li>Annonces officielles des constructeurs</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="p-3 rounded-lg bg-primary/5 space-y-1">
    <h5 className="font-semibold flex items-center gap-2 text-foreground">{icon}{title}</h5>
    <div>{children}</div>
  </div>
);

export default VeilleCard;
