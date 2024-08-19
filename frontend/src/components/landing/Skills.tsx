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

// Définir la liste des fonctionnalités
const featureList: SkillsProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "badgeCheck",
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "goal",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "pictureInPicture",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "mousePointerClick",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "newspaper",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

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

const Skills: React.FC = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="font-bold text-center  text-[#247ba0] text-5xl">
        Compétences
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Sites Performants et Sur-Mesure
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Optimisez votre présence en ligne avec un site performant et bien
        référencé. Que ce soit pour la création ou la refonte de votre site web,
        je vous aide à atteindre vos objectifs grâce à un design sur-mesure et
        une stratégie SEO efficace.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => {
          const IconComponent = iconMap[icon];
          return (
            <Card
              key={title}
              className="h-full bg-background border-0 shadow-none"
            >
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <IconComponent className="size-6 text-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
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
