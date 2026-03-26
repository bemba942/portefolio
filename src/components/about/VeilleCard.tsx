
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Eye, Search, CheckCircle, Scale, Cpu } from 'lucide-react';

const VeilleCard = () => {
  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Car className="h-6 w-6 text-primary" />
          <h4 className="text-lg font-semibold">Les voitures autonomes</h4>
        </div>
        <p className="text-sm italic text-primary font-medium mb-4">
          Problématique : En quoi les voitures autonomes transforment-elles notre rapport à la mobilité et quels défis technologiques restent à relever ?
        </p>

        <div className="space-y-4 text-sm text-muted-foreground">
          <Section icon={<Eye className="h-4 w-4" />} title="Qu'est-ce qu'une voiture autonome ?">
            <p>Un véhicule capable de se déplacer sans intervention humaine grâce à des <strong>capteurs</strong> (caméras, radars, LiDAR) et une <strong>intelligence artificielle</strong> qui analyse l'environnement en temps réel.</p>
            <p className="mt-1">Il existe <strong>6 niveaux d'autonomie</strong> (SAE, de 0 à 5). Aujourd'hui, les voitures les plus avancées atteignent le <strong>niveau 4</strong> (ex : Waymo) — conduite autonome dans des zones définies. Le <strong>niveau 5</strong> (autonomie totale partout) n'existe pas encore.</p>
          </Section>

          <Section icon={<Cpu className="h-4 w-4" />} title="Technologies et acteurs clés">
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="bg-background/50 p-2 rounded">
                <p className="font-semibold text-foreground">Tesla (Niveau 2)</p>
                <p>Approche <strong>vision par caméras uniquement</strong>. Collecte massive de données (+6 milliards de km). Système « Full Self-Driving » en bêta.</p>
              </div>
              <div className="bg-background/50 p-2 rounded">
                <p className="font-semibold text-foreground">Waymo (Niveau 4)</p>
                <p><strong>LiDAR + caméras + radar</strong>. Service de robotaxis actif aux USA (+100 000 trajets/semaine en 2025).</p>
              </div>
            </div>
            <p className="mt-2">Autres acteurs : <strong>Mercedes</strong> (niveau 3 certifié en Europe), <strong>Baidu</strong> (robotaxis en Chine), <strong>Aurora</strong> (camions autonomes).</p>
          </Section>

          <Section icon={<Scale className="h-4 w-4" />} title="Enjeux et défis">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cybersécurité</strong> — risque de piratage et prise de contrôle à distance</li>
              <li><strong>Fiabilité de l'IA</strong> — gestion des situations imprévues (météo, travaux)</li>
              <li><strong>Responsabilité légale</strong> — qui est responsable en cas d'accident ?</li>
              <li><strong>Éthique</strong> — comment l'IA prend-elle des décisions critiques ?</li>
              <li><strong>Impact social</strong> — conséquences sur l'emploi (chauffeurs, livreurs)</li>
            </ul>
          </Section>

          <Section icon={<Search className="h-4 w-4" />} title="Ma méthode de veille (Pull)">
            <p>J'utilise une méthode de veille <strong>pull</strong> : je vais chercher l'information moi-même, de manière active et régulière.</p>
            <div className="mt-2 space-y-1">
              <p>🔎 <strong>Moteurs de recherche</strong> — Google, Google Scholar</p>
              <p>🌐 <strong>Sites spécialisés :</strong></p>
              <ul className="list-disc pl-8 space-y-1 mt-1">
                <li><a href="https://www.theverge.com/transportation" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">The Verge – Transportation</a></li>
                <li><a href="https://electrek.co/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Electrek</a></li>
                <li><a href="https://www.numerama.com/tag/voiture-autonome/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Numerama – Voiture autonome</a></li>
                <li><a href="https://www.01net.com/tag/voiture-autonome/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">01net – Voiture autonome</a></li>
              </ul>
              <p className="mt-1">📺 <strong>YouTube</strong> — chaînes tech (MKBHD, Underscore_, Léo Duff)</p>
              <p>📄 <strong>Sources officielles</strong> — <a href="https://waymo.com/blog/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Blog Waymo</a>, <a href="https://www.tesla.com/fr_fr/autopilot" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Tesla Autopilot</a></p>
            </div>
          </Section>

          <Section icon={<CheckCircle className="h-4 w-4" />} title="Synthèse">
            <p>
              Les voitures autonomes représentent une avancée majeure liée à <strong>l'IA, la cybersécurité et les réseaux</strong>, trois domaines au cœur du BTS SIO. Les technologies utilisées (capteurs, traitement de données en temps réel, communication cloud) sont en constante évolution. Des défis majeurs persistent : fiabilité de l'IA, risques de piratage, responsabilité légale et acceptation du public. Cette veille m'a permis de développer ma capacité à rechercher, analyser et synthétiser des informations techniques de manière autonome.
            </p>
          </Section>
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
