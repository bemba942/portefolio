
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

        <div className="space-y-4 text-sm text-muted-foreground">
          <Section icon={<Eye className="h-4 w-4" />} title="Définition">
            <div className="flex flex-wrap gap-2 mt-1">
              <Tag>Capteurs (caméras, radar, LiDAR)</Tag>
              <Tag>Intelligence artificielle</Tag>
              <Tag>Conduite sans intervention humaine</Tag>
              <Tag>6 niveaux d'autonomie (SAE 0→5)</Tag>
              <Tag>Niveau 4 max aujourd'hui</Tag>
            </div>
          </Section>

          <Section icon={<Cpu className="h-4 w-4" />} title="Acteurs clés">
            <div className="space-y-2 mt-1">
              <div className="bg-background/50 p-2 rounded">
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Tesla — Niveau 2</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <Tag>Vision caméras uniquement</Tag>
                  <Tag>+6 milliards km de données</Tag>
                  <Tag>Full Self-Driving (bêta)</Tag>
                </div>
              </div>
              <div className="bg-background/50 p-2 rounded">
                <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Waymo (Google) — Niveau 4</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <Tag>LiDAR + caméras + radar</Tag>
                  <Tag>Robotaxis aux USA</Tag>
                  <Tag>+100 000 trajets/semaine</Tag>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Tag>Mercedes → Niveau 3 certifié</Tag>
                <Tag>Baidu → Robotaxis Chine</Tag>
                <Tag>Aurora → Camions autonomes</Tag>
              </div>
            </div>
          </Section>

          <Section icon={<Scale className="h-4 w-4" />} title="Enjeux & défis">
            <div className="flex flex-wrap gap-2 mt-1">
              <Tag>🔒 Piratage / hacking</Tag>
              <Tag>🤖 L'IA peut se tromper</Tag>
              <Tag>⚖️ Qui est responsable en cas d'accident ?</Tag>
              <Tag>👷 Moins de chauffeurs = moins d'emplois</Tag>
            </div>
          </Section>

          <Section icon={<Search className="h-4 w-4" />} title="Méthode de veille — Pull">
            <div className="space-y-2 mt-1">
              <p className="font-medium text-foreground text-xs">🔎 Sources :</p>
              <div className="flex flex-wrap gap-1.5">
                <LinkTag href="https://www.theverge.com/transportation">The Verge</LinkTag>
                <LinkTag href="https://electrek.co/">Electrek</LinkTag>
                <LinkTag href="https://www.numerama.com/tag/voiture-autonome/">Numerama</LinkTag>
                <LinkTag href="https://www.01net.com/tag/voiture-autonome/">01net</LinkTag>
                <LinkTag href="https://waymo.com/blog/">Blog Waymo</LinkTag>
                <LinkTag href="https://www.tesla.com/fr_fr/autopilot">Tesla Autopilot</LinkTag>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Tag>📺 YouTube (MKBHD, Underscore_)</Tag>
                <Tag>🔍 Google / Google Scholar</Tag>
              </div>
            </div>
          </Section>

          <Section icon={<CheckCircle className="h-4 w-4" />} title="Synthèse">
            <div className="flex flex-wrap gap-2 mt-1">
              <Tag>IA + Cybersécurité + Réseaux = cœur du BTS SIO</Tag>
              <Tag>Technologies en constante évolution</Tag>
              <Tag>Défis : fiabilité, sécurité, lois, éthique</Tag>
              <Tag>Compétence acquise : recherche & analyse autonome</Tag>
            </div>
          </Section>
        </div>
      </CardContent>
    </Card>
  );
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-2.5 py-1 rounded-md bg-primary/10 text-foreground text-xs font-medium">
    {children}
  </span>
);

const LinkTag = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-2.5 py-1 rounded-md bg-primary/15 text-primary text-xs font-medium underline hover:bg-primary/25 transition-colors"
  >
    {children}
  </a>
);

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="p-3 rounded-lg bg-primary/5 space-y-1">
    <h5 className="font-semibold flex items-center gap-2 text-foreground">{icon}{title}</h5>
    <div>{children}</div>
  </div>
);

export default VeilleCard;
