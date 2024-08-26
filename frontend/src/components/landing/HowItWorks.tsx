import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "@/components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon aria-label="Icone Accessibilité" />,
    title: "Accessibilité",
    description:
      "Conception de sites web accessibles à tous, respectant les normes d'accessibilité pour une expérience utilisateur optimale.",
  },
  {
    icon: <MapIcon aria-label="Icone Méthodes Agiles" />,
    title: "Méthodes Agiles",
    description:
      "Développement flexible et adaptatif avec des livraisons fréquentes et des réunions régulières avec les clients grâce aux méthodes agiles.",
  },
  {
    icon: <PlaneIcon aria-label="Icone Optimisation des Performances" />,
    title: "Optimisation des Performances",
    description:
      "Amélioration de la vitesse de chargement et des performances des sites web pour une expérience utilisateur fluide et un meilleur SEO.",
  },
  {
    icon: <GiftIcon aria-label="Icone Création sur Mesure" />,
    title: "Création sur Mesure",
    description:
      "Conception de sites web personnalisés, adaptés aux besoins spécifiques de votre entreprise, avec une approche centrée sur le client.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Comment{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nous Travaillons
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Nous combinons expertise technique et approche client pour créer des
        solutions web performantes et accessibles, tout en respectant les
        meilleures pratiques de développement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-card transition-shadow hover:shadow-lg focus-within:ring focus-within:ring-primary/50"
          >
            <CardHeader className="grid gap-4 place-items-center">
              <div className="p-4 bg-primary/10 rounded-full">{icon}</div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-md text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
