
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Eye, Search, CheckCircle } from 'lucide-react';

const VeilleCard = () => {
  return (
    <Card className="overflow-hidden border-0 shadow-md animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Car className="h-6 w-6 text-primary" />
          <h4 className="text-lg font-semibold">Les voitures autonomes</h4>
        </div>
        <p className="text-sm italic text-primary font-medium mb-4">
          Problématique : En quoi les voitures autonomes peuvent-elles être utiles dans le domaine de la santé ?
        </p>

        <div className="space-y-4 text-sm text-muted-foreground">
          <Section icon={<Eye className="h-4 w-4" />} title="Qu'est-ce qu'une voiture autonome ?">
            <p>Un véhicule capable de se déplacer sans intervention humaine grâce à des <strong>capteurs</strong> (caméras, radars, LiDAR) et une <strong>intelligence artificielle</strong> qui analyse l'environnement en temps réel.</p>
            <p className="mt-1">Il existe <strong>6 niveaux d'autonomie</strong> (0 à 5). Aujourd'hui, les voitures les plus avancées atteignent le <strong>niveau 4</strong> (ex : Waymo), c'est-à-dire une conduite autonome dans des zones définies.</p>
          </Section>

          <Section icon={<Search className="h-4 w-4" />} title="Ma méthode de veille (Pull)">
            <p>J'utilise une méthode de veille <strong>pull</strong> : je vais chercher l'information moi-même, de manière active.</p>
            <div className="mt-2 space-y-1">
              <p>🔎 <strong>Outils de recherche</strong> — Google, Google Scholar, YouTube</p>
              <p>🌐 <strong>Sites web spécialisés</strong> — The Verge, Electrek, Numerama, 01net</p>
              <p>📄 <strong>Pages & articles</strong> — blogs tech, publications officielles des constructeurs (Tesla, Waymo, Mercedes)</p>
              <p>📺 <strong>Vidéos</strong> — chaînes YouTube tech pour des explications visuelles</p>
            </div>
          </Section>

          <Section icon={<CheckCircle className="h-4 w-4" />} title="Synthèse">
            <p>
              Les voitures autonomes représentent une avancée majeure liée à <strong>l'IA, la cybersécurité et les réseaux</strong>, trois domaines au cœur du BTS SIO. Dans le domaine de la <strong>santé</strong>, elles pourraient permettre le <strong>transport automatisé de patients</strong> (personnes âgées, handicapées), la <strong>livraison de médicaments ou d'organes</strong> en urgence, et l'accès aux soins dans les <strong>zones rurales</strong> mal desservies. Cette veille m'a permis de développer ma capacité à rechercher, analyser et synthétiser des informations techniques de manière autonome.
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
