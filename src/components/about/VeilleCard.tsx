
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Cpu, Shield, Wifi, Info, Lightbulb, Calendar, Brain, Eye, MapPin } from 'lucide-react';
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
              <Car className="h-6 w-6 text-primary" />
              <h4 className="text-lg font-semibold">Ma veille sur les voitures autonomes</h4>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ma veille technologique porte sur les <strong>voitures autonomes</strong> : comment elles fonctionnent, les niveaux d'autonomie, les technologies utilisées (capteurs, IA, logiciels) et leur évolution pendant mes 2 années de BTS SIO (2023-2025).
              </p>

              {/* Problématique */}
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Problématique
                </h5>
                <p className="text-sm text-muted-foreground">
                  <strong>Comment les voitures autonomes fonctionnent-elles et quelles avancées technologiques ont eu lieu entre 2023 et 2025 ?</strong>
                </p>
              </div>

              {/* C'est quoi une voiture autonome */}
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  C'est quoi une voiture autonome ?
                </h5>
                <p className="text-sm text-muted-foreground">
                  Une voiture autonome est un véhicule capable de se déplacer <strong>sans intervention humaine</strong>. Elle utilise des capteurs, des caméras, du GPS et de l'intelligence artificielle pour percevoir son environnement et prendre des décisions de conduite toute seule.
                </p>
              </div>

              {/* Les 6 niveaux d'autonomie */}
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  Les 6 niveaux d'autonomie (SAE)
                </h5>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-primary min-w-[70px]">Niveau 0</span>
                      <span>Aucune autonomie – le conducteur fait tout (accélération, freinage, direction)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-primary min-w-[70px]">Niveau 1</span>
                      <span>Assistance au conducteur – aide sur une tâche (ex : régulateur adaptatif ou aide au maintien de voie)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-primary min-w-[70px]">Niveau 2</span>
                      <span>Automatisation partielle – la voiture gère direction + vitesse, mais le conducteur doit surveiller (ex : Tesla Autopilot)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-primary min-w-[70px]">Niveau 3</span>
                      <span>Automatisation conditionnelle – la voiture conduit seule dans certaines situations, le conducteur reprend quand demandé (ex : Mercedes Drive Pilot)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-primary min-w-[70px]">Niveau 4</span>
                      <span>Haute automatisation – conduite autonome complète dans des zones définies, sans intervention humaine (ex : Waymo robotaxis)</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-primary min-w-[70px]">Niveau 5</span>
                      <span>Autonomie totale – la voiture peut aller partout, dans toutes les conditions, sans conducteur. N'existe pas encore.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies utilisées */}
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Les technologies utilisées
                </h5>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">🎯 Capteurs et perception :</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>LiDAR</strong> : capteur laser qui crée une carte 3D de l'environnement (utilisé par Waymo, pas par Tesla)</li>
                      <li><strong>Caméras</strong> : détectent les panneaux, feux, piétons, autres voitures (Tesla utilise surtout les caméras)</li>
                      <li><strong>Radar</strong> : mesure la distance et la vitesse des objets, fonctionne même sous la pluie ou le brouillard</li>
                      <li><strong>Ultrasons</strong> : capteurs courte portée pour le stationnement</li>
                      <li><strong>GPS + cartographie HD</strong> : localisation précise au centimètre</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">🧠 Intelligence Artificielle :</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Machine Learning</strong> : l'IA apprend à reconnaître les situations de conduite grâce à des millions de données</li>
                      <li><strong>Deep Learning</strong> : réseaux de neurones qui analysent les images des caméras en temps réel</li>
                      <li><strong>Prise de décision</strong> : l'IA décide quand freiner, accélérer, tourner, s'arrêter</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">💻 Logiciels et informatique :</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li><strong>Système embarqué</strong> : ordinateur très puissant dans la voiture qui traite les données en temps réel</li>
                      <li><strong>Mises à jour OTA</strong> : mises à jour à distance (Over The Air), comme un smartphone</li>
                      <li><strong>Cloud computing</strong> : les données de conduite sont envoyées dans le cloud pour améliorer l'IA</li>
                      <li><strong>Cybersécurité</strong> : protection contre le piratage des systèmes de la voiture</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Lien avec le BTS SIO */}
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  Lien avec le BTS SIO
                </h5>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Les voitures autonomes utilisent beaucoup de concepts qu'on apprend en BTS SIO :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Programmation</strong> : les logiciels de conduite sont codés en Python, C++, Java</li>
                    <li><strong>Bases de données</strong> : stockage des données de capteurs, historique de conduite</li>
                    <li><strong>Réseaux</strong> : communication entre la voiture, le cloud et les serveurs</li>
                    <li><strong>Cybersécurité</strong> : protection des données personnelles et contre le piratage</li>
                    <li><strong>Intelligence Artificielle</strong> : algorithmes de machine learning pour la reconnaissance d'images</li>
                    <li><strong>Cloud et serveurs</strong> : hébergement des données et traitement à distance</li>
                  </ul>
                </div>
              </div>

              {/* Évolutions 2023-2025 */}
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <h5 className="font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Évolutions pendant mon BTS (2023-2025)
                </h5>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">📅 2023 - Début de mon BTS :</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Mercedes obtient l'<strong>homologation niveau 3</strong> en Allemagne et aux USA (premier constructeur au monde)</li>
                      <li>Waymo (Google) déploie ses <strong>robotaxis sans chauffeur</strong> à Phoenix et San Francisco</li>
                      <li>Tesla lance la version bêta de son <strong>FSD (Full Self-Driving)</strong> à plus grande échelle</li>
                      <li>Cruise (General Motors) lance puis suspend ses robotaxis à San Francisco après un accident</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">📅 2024 - Ma 2ème année :</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Waymo dépasse les <strong>100 000 trajets par semaine</strong> aux États-Unis</li>
                      <li>Tesla annonce son <strong>Cybercab</strong> (robotaxi prévu pour 2026)</li>
                      <li>La Chine devient leader avec <strong>Baidu Apollo</strong> et ses robotaxis à Wuhan</li>
                      <li>L'Union Européenne adopte de nouvelles <strong>réglementations</strong> pour les véhicules autonomes</li>
                      <li>Apple abandonne son projet de voiture autonome (<strong>Projet Titan</strong>)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">📅 2025 - Fin de mon BTS :</p>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Waymo s'étend à <strong>de nouvelles villes</strong> américaines (Austin, Atlanta)</li>
                      <li>Tesla déploie le FSD v13 avec des améliorations majeures de l'IA</li>
                      <li>Mercedes et BMW proposent le <strong>niveau 3 sur autoroute</strong> en Europe</li>
                      <li>Les premiers <strong>camions autonomes</strong> circulent sur des autoroutes aux USA (Aurora, TuSimple)</li>
                      <li>Débats croissants sur la <strong>responsabilité en cas d'accident</strong> et l'assurance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Acteurs principaux */}
              <div className="bg-primary/5 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Les acteurs principaux
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">🇺🇸 États-Unis :</p>
                    <ul className="list-disc pl-5">
                      <li><strong>Waymo</strong> (Google) – Leader des robotaxis</li>
                      <li><strong>Tesla</strong> – IA basée sur caméras</li>
                      <li><strong>Cruise</strong> (GM) – Robotaxis urbains</li>
                      <li><strong>Aurora</strong> – Camions autonomes</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">🇨🇳 Chine :</p>
                    <ul className="list-disc pl-5">
                      <li><strong>Baidu Apollo</strong> – Robotaxis en Chine</li>
                      <li><strong>Pony.ai</strong> – Conduite autonome</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-foreground">🇪🇺 Europe :</p>
                    <ul className="list-disc pl-5">
                      <li><strong>Mercedes-Benz</strong> – Niveau 3 certifié</li>
                      <li><strong>BMW</strong> – Conduite autonome autoroute</li>
                      <li><strong>Renault</strong> – Navettes autonomes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Enjeux et défis */}
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <h5 className="font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Enjeux et défis
                </h5>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Sécurité</strong> : les voitures autonomes doivent être plus sûres que les conducteurs humains</li>
                    <li><strong>Cybersécurité</strong> : risque de piratage du véhicule à distance</li>
                    <li><strong>Réglementation</strong> : les lois doivent s'adapter (qui est responsable en cas d'accident ?)</li>
                    <li><strong>Éthique</strong> : comment l'IA doit réagir en cas de dilemme (ex : le problème du tramway)</li>
                    <li><strong>Emploi</strong> : impact sur les chauffeurs de taxi, livreurs, routiers</li>
                    <li><strong>Données personnelles</strong> : les voitures collectent énormément de données (localisation, habitudes)</li>
                    <li><strong>Coût</strong> : les technologies sont encore très chères pour le grand public</li>
                  </ul>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-primary/5 p-4 rounded-lg">
                <h5 className="font-semibold flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  Ma conclusion
                </h5>
                <p className="text-sm text-muted-foreground">
                  Les voitures autonomes sont en pleine évolution. En 2 ans de BTS SIO (2023-2025), on est passé des premiers robotaxis limités à quelques villes aux déploiements à grande échelle. Les technologies utilisées (IA, capteurs, cloud, cybersécurité) sont directement liées à ce qu'on apprend en BTS SIO. C'est un domaine qui va continuer à grandir et qui montre bien comment l'informatique transforme notre quotidien.
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
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Ma veille : Les voitures autonomes (2023-2025)</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Problématique</h6>
                        <p>
                          Comment les voitures autonomes fonctionnent-elles et quelles avancées majeures ont eu lieu pendant mes 2 années de BTS SIO (2023-2025) ?
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Méthode de veille</h6>
                        <p>
                          Pour me tenir informé, j'ai utilisé plusieurs sources : des sites spécialisés (The Verge, Electrek, Numerama), des chaînes YouTube tech, des newsletters et des flux RSS. J'ai aussi suivi les annonces des constructeurs (Tesla, Waymo, Mercedes) et les évolutions réglementaires en Europe.
                        </p>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Fonctionnement technique simplifié</h6>
                        <ol className="list-decimal pl-5 mt-1 space-y-1">
                          <li><strong>Perception</strong> : les capteurs (caméras, LiDAR, radar) voient l'environnement autour de la voiture</li>
                          <li><strong>Analyse</strong> : l'IA traite toutes les données et comprend la situation (piétons, feux, autres voitures)</li>
                          <li><strong>Décision</strong> : l'algorithme choisit l'action à faire (freiner, tourner, accélérer)</li>
                          <li><strong>Action</strong> : le système contrôle le volant, l'accélérateur et les freins</li>
                          <li><strong>Apprentissage</strong> : les données sont envoyées dans le cloud pour améliorer l'IA</li>
                        </ol>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Comparaison Tesla vs Waymo</h6>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm border-collapse mt-2">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left p-2 font-semibold text-foreground">Critère</th>
                                <th className="text-left p-2 font-semibold text-foreground">Tesla</th>
                                <th className="text-left p-2 font-semibold text-foreground">Waymo</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="p-2 font-medium">Capteurs</td>
                                <td className="p-2">Caméras uniquement</td>
                                <td className="p-2">LiDAR + caméras + radar</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2 font-medium">Approche IA</td>
                                <td className="p-2">Vision par ordinateur (deep learning)</td>
                                <td className="p-2">Fusion de capteurs multiples</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2 font-medium">Niveau</td>
                                <td className="p-2">Niveau 2 (conducteur obligatoire)</td>
                                <td className="p-2">Niveau 4 (sans conducteur dans zones définies)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="p-2 font-medium">Disponibilité</td>
                                <td className="p-2">Vendu au grand public</td>
                                <td className="p-2">Service de robotaxi uniquement</td>
                              </tr>
                              <tr>
                                <td className="p-2 font-medium">Prix</td>
                                <td className="p-2">~8 000€ (option FSD)</td>
                                <td className="p-2">Gratuit (service de taxi)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Chiffres clés (2025)</h6>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          <li>Waymo : <strong>+100 000 trajets/semaine</strong> aux USA</li>
                          <li>Tesla : <strong>+6 milliards de km</strong> de données collectées avec Autopilot</li>
                          <li>Le marché des voitures autonomes est estimé à <strong>2 000 milliards $ d'ici 2030</strong></li>
                          <li>Plus de <strong>80 entreprises</strong> dans le monde travaillent sur la conduite autonome</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-foreground mb-1">Conclusion</h6>
                        <p>
                          En suivant cette veille pendant mes 2 ans de BTS SIO, j'ai pu voir l'évolution rapide de cette technologie. Les voitures autonomes combinent toutes les compétences de l'informatique : programmation, IA, réseaux, cybersécurité et bases de données. C'est un sujet parfait pour montrer le lien entre ma formation et le monde professionnel.
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
