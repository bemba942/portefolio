
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Cpu, Eye, Brain, Shield } from 'lucide-react';

const VeilleCard = () => {
  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Car className="h-6 w-6 text-primary" />
          <h4 className="text-lg font-semibold">Les voitures autonomes</h4>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          {/* Définition */}
          <Section icon={<Eye className="h-4 w-4" />} title="Principe">
            <p>Des voitures capables de rouler seules grâce à des <strong>caméras, radars, LiDAR</strong> et une <strong>intelligence artificielle</strong> qui analyse la route et prend les décisions en temps réel.</p>
          </Section>

          {/* Niveaux */}
          <Section icon={<Cpu className="h-4 w-4" />} title="Niveaux d'autonomie">
            <p><strong>Niveau 0 à 5</strong> : du conducteur qui fait tout (0) à l'autonomie totale (5). Aujourd'hui on atteint le <strong>niveau 4</strong> (Waymo, robotaxis sans conducteur).</p>
          </Section>

          {/* Tesla vs Waymo */}
          <Section icon={<Car className="h-4 w-4" />} title="Tesla vs Waymo">
            <p><strong>Tesla</strong> : caméras uniquement, niveau 2, voiture personnelle. <strong>Waymo</strong> : LiDAR + caméras + radar, niveau 4, service de taxi.</p>
          </Section>

          {/* Lien BTS */}
          <Section icon={<Brain className="h-4 w-4" />} title="Lien avec le BTS SIO">
            <p>Programmation, bases de données, réseaux, cybersécurité, cloud — des compétences directement liées à ma formation.</p>
          </Section>

          {/* Enjeux */}
          <Section icon={<Shield className="h-4 w-4" />} title="Enjeux">
            <p>Sécurité routière, piratage informatique, responsabilité légale, éthique de l'IA et impact sur l'emploi.</p>
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
