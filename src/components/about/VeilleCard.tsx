
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Cpu, Shield, Info, Lightbulb, Calendar, Brain, Eye, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const VeilleCard = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Car className="h-6 w-6 text-primary" />
          <h4 className="text-lg font-semibold">Ma veille technologique : Les voitures autonomes</h4>
        </div>

        <div className="space-y-4">

          {/* 1. INTRODUCTION */}
          <Section icon={<Lightbulb className="h-4 w-4" />} title="De quoi je parle ?" variant="primary">
            <p>
              Ma veille porte sur les <strong>voitures autonomes</strong>, c'est-à-dire des voitures capables de rouler <strong>toutes seules</strong>, sans que le conducteur ait besoin de toucher le volant.
            </p>
            <p className="mt-2 font-medium text-foreground">
              Ma question : « Comment fonctionnent les voitures autonomes et qu'est-ce qui a changé entre 2023 et 2025 ? »
            </p>
          </Section>

          {/* 2. COMMENT ÇA MARCHE */}
          <Section icon={<Eye className="h-4 w-4" />} title="Comment ça marche ? (en 4 étapes)" variant="secondary">
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>La voiture regarde autour d'elle</strong> → elle utilise des caméras, des radars et des capteurs laser (LiDAR) pour voir la route, les piétons, les panneaux…</li>
              <li><strong>L'IA analyse la situation</strong> → un ordinateur très puissant dans la voiture comprend ce qu'il se passe (feu rouge, voiture devant, piéton qui traverse…)</li>
              <li><strong>L'IA prend une décision</strong> → elle décide de freiner, accélérer, tourner ou s'arrêter</li>
              <li><strong>La voiture agit</strong> → elle contrôle le volant, les freins et l'accélérateur toute seule</li>
            </ol>
          </Section>

          {/* 3. LES 6 NIVEAUX */}
          <Section icon={<Cpu className="h-4 w-4" />} title="Les 6 niveaux d'autonomie (du moins au plus autonome)" variant="primary">
            <div className="space-y-2">
              <Level n="0" desc="Zéro autonomie – c'est le conducteur qui fait tout" />
              <Level n="1" desc="Une aide – par exemple le régulateur de vitesse adaptatif" />
              <Level n="2" desc="La voiture gère vitesse + direction, mais le conducteur doit surveiller (ex : Tesla Autopilot)" />
              <Level n="3" desc="La voiture conduit seule dans certains cas, le conducteur reprend quand elle le demande (ex : Mercedes)" />
              <Level n="4" desc="La voiture roule seule dans des zones précises, sans conducteur (ex : Waymo robotaxi)" />
              <Level n="5" desc="Autonomie totale partout – ça n'existe pas encore" />
            </div>
            <p className="mt-2 text-xs italic">Aujourd'hui, on en est au <strong>niveau 4 maximum</strong> dans certaines villes aux USA et en Chine.</p>
          </Section>

          {/* 4. LES TECHNOLOGIES */}
          <Section icon={<Eye className="h-4 w-4" />} title="Les technologies utilisées" variant="secondary">
            <div className="space-y-3">
              <div>
                <p className="font-medium text-foreground mb-1">🎯 Pour « voir » la route :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Caméras</strong> → filment la route, lisent les panneaux et feux</li>
                  <li><strong>LiDAR</strong> → laser qui crée une carte 3D autour de la voiture</li>
                  <li><strong>Radar</strong> → mesure la distance des objets, même sous la pluie</li>
                  <li><strong>GPS haute précision</strong> → localise la voiture au centimètre près</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">🧠 Pour « réfléchir » :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Intelligence Artificielle</strong> → analyse les images et prend des décisions</li>
                  <li><strong>Machine Learning</strong> → l'IA s'améliore en apprenant de millions de kilomètres de données</li>
                  <li><strong>Ordinateur embarqué</strong> → un mini super-ordinateur dans la voiture qui traite tout en temps réel</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">☁️ Pour communiquer :</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cloud</strong> → les données sont envoyées sur des serveurs pour améliorer l'IA</li>
                  <li><strong>Mises à jour à distance (OTA)</strong> → la voiture se met à jour comme un téléphone</li>
                  <li><strong>Cybersécurité</strong> → protéger la voiture contre le piratage informatique</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* 5. ÉVOLUTIONS 2023-2025 */}
          <Section icon={<Calendar className="h-4 w-4" />} title="Ce qui a changé pendant mon BTS (2023 → 2025)" variant="primary">
            <div className="space-y-3">
              <YearBlock year="2023" label="Début de mon BTS" items={[
                "Mercedes obtient le droit de rouler en niveau 3 (premier au monde !)",
                "Waymo (Google) lance des taxis sans chauffeur à Phoenix et San Francisco",
                "Tesla ouvre son système FSD (conduite autonome) à plus de conducteurs",
                "Cruise (General Motors) arrête ses taxis autonomes après un accident",
              ]} />
              <YearBlock year="2024" label="Ma 2ème année" items={[
                "Waymo fait plus de 100 000 trajets par semaine aux USA",
                "Tesla présente le Cybercab, un futur robotaxi prévu pour 2026",
                "La Chine devient un leader avec Baidu qui lance des robotaxis à Wuhan",
                "Apple abandonne son projet de voiture autonome (Projet Titan)",
                "L'Europe crée de nouvelles règles pour encadrer les voitures autonomes",
              ]} />
              <YearBlock year="2025" label="Fin de mon BTS" items={[
                "Waymo s'étend à Austin et Atlanta",
                "Tesla améliore son IA avec la version 13 du FSD",
                "Mercedes et BMW proposent le niveau 3 sur autoroute en Europe",
                "Les premiers camions autonomes roulent sur les autoroutes aux USA",
                "Gros débats sur : qui est responsable si la voiture a un accident ?",
              ]} />
            </div>
          </Section>

          {/* 6. TESLA vs WAYMO */}
          <Section icon={<Car className="h-4 w-4" />} title="Tesla vs Waymo : 2 approches différentes" variant="secondary">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 font-semibold text-foreground"></th>
                    <th className="text-left p-2 font-semibold text-foreground">Tesla</th>
                    <th className="text-left p-2 font-semibold text-foreground">Waymo (Google)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border"><td className="p-2 font-medium">Capteurs</td><td className="p-2">Caméras seulement</td><td className="p-2">LiDAR + caméras + radar</td></tr>
                  <tr className="border-b border-border"><td className="p-2 font-medium">Niveau</td><td className="p-2">Niveau 2 (conducteur obligatoire)</td><td className="p-2">Niveau 4 (sans conducteur)</td></tr>
                  <tr className="border-b border-border"><td className="p-2 font-medium">Utilisation</td><td className="p-2">Voiture perso qu'on achète</td><td className="p-2">Service de taxi</td></tr>
                  <tr><td className="p-2 font-medium">Idée</td><td className="p-2">« Les caméras suffisent, comme les yeux humains »</td><td className="p-2">« On a besoin de plusieurs capteurs pour être sûr »</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* 7. LIEN BTS SIO */}
          <Section icon={<Brain className="h-4 w-4" />} title="Le lien avec mon BTS SIO" variant="primary">
            <p className="mb-2">Les voitures autonomes utilisent plein de choses qu'on apprend en BTS SIO :</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <LinkItem emoji="💻" label="Programmation" detail="Les logiciels sont codés en Python, C++" />
              <LinkItem emoji="🗄️" label="Bases de données" detail="Stocker les données des capteurs et trajets" />
              <LinkItem emoji="🌐" label="Réseaux" detail="Communication voiture ↔ serveurs ↔ cloud" />
              <LinkItem emoji="🔒" label="Cybersécurité" detail="Protéger la voiture contre le piratage" />
              <LinkItem emoji="🤖" label="IA" detail="Algorithmes qui analysent les images" />
              <LinkItem emoji="☁️" label="Cloud" detail="Stockage et traitement des données à distance" />
            </div>
          </Section>

          {/* 8. ACTEURS PRINCIPAUX */}
          <Section icon={<MapPin className="h-4 w-4" />} title="Les entreprises principales" variant="secondary">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <p className="font-medium text-foreground mb-1">🇺🇸 USA</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Waymo</strong> – robotaxis</li>
                  <li><strong>Tesla</strong> – IA + caméras</li>
                  <li><strong>Aurora</strong> – camions autonomes</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">🇨🇳 Chine</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Baidu</strong> – robotaxis</li>
                  <li><strong>Pony.ai</strong> – conduite autonome</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">🇪🇺 Europe</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Mercedes</strong> – niveau 3 certifié</li>
                  <li><strong>BMW</strong> – autoroute autonome</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* 9. ENJEUX */}
          <Section icon={<Shield className="h-4 w-4" />} title="Les problèmes à résoudre" variant="primary">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Sécurité</strong> → la voiture doit être plus sûre qu'un humain</li>
              <li><strong>Piratage</strong> → quelqu'un pourrait pirater la voiture à distance</li>
              <li><strong>Loi</strong> → qui est responsable si la voiture a un accident ?</li>
              <li><strong>Éthique</strong> → comment l'IA choisit entre 2 dangers ? (le dilemme du tramway)</li>
              <li><strong>Emploi</strong> → les chauffeurs de taxi et routiers risquent de perdre leur travail</li>
              <li><strong>Vie privée</strong> → la voiture enregistre où on va et ce qu'on fait</li>
              <li><strong>Prix</strong> → ces technologies coûtent encore très cher</li>
            </ul>
          </Section>

          {/* 10. CONCLUSION */}
          <Section icon={<Lightbulb className="h-4 w-4" />} title="Ma conclusion" variant="secondary">
            <p>
              En 2 ans de BTS SIO, les voitures autonomes ont beaucoup évolué : on est passé des premiers tests à des <strong>vrais taxis sans chauffeur</strong> dans plusieurs villes. Ce sujet montre bien comment l'informatique (IA, réseaux, cybersécurité, cloud) change notre vie de tous les jours. C'est un domaine qui va continuer à grandir et qui est directement lié à ce qu'on apprend en BTS SIO.
            </p>
          </Section>

          {/* Bouton détails */}
          <div className="mt-4 flex justify-center">
            <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Info className="h-4 w-4" />
                  Chiffres clés et méthode de veille
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
                      <li>Waymo : <strong>+100 000 trajets par semaine</strong> aux USA</li>
                      <li>Tesla : <strong>+6 milliards de km</strong> de données collectées</li>
                      <li>Marché estimé à <strong>2 000 milliards $</strong> d'ici 2030</li>
                      <li>Plus de <strong>80 entreprises</strong> dans le monde travaillent dessus</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-semibold text-foreground mb-1">🔍 Comment j'ai fait ma veille</h6>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Sites spécialisés : The Verge, Electrek, Numerama</li>
                      <li>Chaînes YouTube tech</li>
                      <li>Newsletters et flux RSS</li>
                      <li>Annonces officielles de Tesla, Waymo, Mercedes</li>
                      <li>Suivi des nouvelles lois en Europe</li>
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

/* --- Sous-composants --- */

const Section = ({ icon, title, variant, children }: { icon: React.ReactNode; title: string; variant: 'primary' | 'secondary'; children: React.ReactNode }) => (
  <div className={`p-4 rounded-lg space-y-2 ${variant === 'primary' ? 'bg-primary/5' : 'bg-secondary/20'}`}>
    <h5 className="font-semibold flex items-center gap-2">{icon}{title}</h5>
    <div className="text-sm text-muted-foreground">{children}</div>
  </div>
);

const Level = ({ n, desc }: { n: string; desc: string }) => (
  <div className="flex gap-2 items-start">
    <span className="font-bold text-primary min-w-[70px]">Niveau {n}</span>
    <span>{desc}</span>
  </div>
);

const YearBlock = ({ year, label, items }: { year: string; label: string; items: string[] }) => (
  <div>
    <p className="font-medium text-foreground">📅 {year} – {label} :</p>
    <ul className="list-disc pl-5 mt-1 space-y-1">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  </div>
);

const LinkItem = ({ emoji, label, detail }: { emoji: string; label: string; detail: string }) => (
  <div className="flex items-start gap-2 bg-background/50 p-2 rounded">
    <span>{emoji}</span>
    <div><strong>{label}</strong> → {detail}</div>
  </div>
);

export default VeilleCard;
