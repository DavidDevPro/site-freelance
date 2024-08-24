import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StyledButton } from "../StyledButton";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Sites web sur mesure",
    description:
      "Nous créons des sites web uniques, conçus spécifiquement pour répondre aux besoins de votre entreprise. Chaque projet est réalisé avec un souci du détail, garantissant une interface utilisateur intuitive et un design qui reflète parfaitement votre identité de marque.",
  },
  {
    title: "Hébergement et SEO",
    description:
      "Nos solutions d'hébergement sécurisées et performantes s'associent à des stratégies SEO avancées pour garantir que votre site est non seulement en ligne, mais aussi facilement trouvé par vos clients. Maximisez votre visibilité en ligne avec nos services d'optimisation pour les moteurs de recherche.",
  },
  {
    title: "Performance et optimisation",
    description:
      "Nous optimisons la vitesse et les performances de votre site pour offrir une expérience utilisateur fluide et rapide. Avec des temps de chargement réduits et une architecture technique de qualité, votre site sera prêt à exceller dans un environnement numérique concurrentiel.",
  },
];

const featureList: string[] = [
  "Sites web sur mesure",
  "Création de sites web",
  "Refonte de sites web",
  "Design Responsive",
  "Fonctionnalités Riches",
  "Méthode Agile",
  "SEO",
  "Hébergement",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Nos{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Services
        </span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-primary text-white rounded-lg shadow-md"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map(({ title, description }: FeatureProps) => (
          <Card
            key={title}
            className="shadow-xl rounded-lg border border-gray-300 dark:border-slate-700 p-8 flex flex-col justify-between h-full"
          >
            <div className="flex-grow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold text-primary mb-4">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </div>
            <CardFooter className="pt-6 flex justify-center">
              <StyledButton>
                <a href="/contact" className="text-white">
                  En savoir plus
                </a>
              </StyledButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
