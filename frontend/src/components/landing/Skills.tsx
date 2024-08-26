import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-react";

// Définir les props pour les fonctionnalités
interface SkillsProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
}

// Créer une map pour les icônes
const iconMap = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};

// Définir la liste des fonctionnalités
const featureList: SkillsProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Sites Mobile-Friendly",
    description:
      "Des sites web parfaitement optimisés pour une expérience fluide sur tous les appareils, mobiles et tablettes.",
  },
  {
    icon: "badgeCheck",
    title: "Preuve Sociale",
    description:
      "Intégration de témoignages et d'évaluations pour renforcer la crédibilité de votre site.",
  },
  {
    icon: "goal",
    title: "Contenu Ciblé",
    description:
      "Création de contenus adaptés pour captiver votre audience et atteindre vos objectifs marketing.",
  },
  {
    icon: "pictureInPicture",
    title: "Visuels Impactants",
    description:
      "Designs modernes et attractifs pour une expérience visuelle immersive qui reflète votre identité.",
  },
  {
    icon: "mousePointerClick",
    title: "Appels à l'Action Clairs",
    description:
      "Optimisation des boutons et des éléments interactifs pour encourager les conversions.",
  },
  {
    icon: "newspaper",
    title: "Titres Clairs",
    description:
      "Des titres accrocheurs et informatifs pour capter l'attention dès les premières secondes.",
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container py-24 sm:py-32">
      <h2 className="font-bold text-center text-primary text-5xl mb-4">
        Compétences
      </h2>
      <h3 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Sites Performants et Sur-Mesure
      </h3>
      <p className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
        Optimisez votre présence en ligne avec des sites performants, bien
        référencés, accessibles et créés sur-mesure pour répondre à vos besoins.
        Je vous accompagne à chaque étape pour garantir votre succès en ligne.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map(({ icon, title, description }) => {
          const IconComponent = iconMap[icon];
          return (
            <Card
              key={title}
              className="bg-background border border-primary shadow-sm transition-shadow hover:shadow-md focus-within:ring focus-within:ring-primary/50"
            >
              <CardHeader className="flex flex-col items-center text-center">
                <div className="bg-primary/20 p-4 rounded-full ring-8 ring-primary/10 mb-4">
                  <IconComponent
                    className="w-6 h-6 text-primary"
                    aria-label={`${title} Icon`}
                  />
                </div>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
