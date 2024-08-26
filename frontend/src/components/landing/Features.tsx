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
    <section id="features" className="container py-14 space-y-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Nos{" "}
        <span className="bg-gradient-primary text-primary bg-clip-text">
          Services
        </span>
      </h2>

      <p className="text-xl leading-8 text-black/80 dark:text-white text-center mx-auto max-w-4xl">
        Découvrez nos services conçus pour répondre aux besoins spécifiques de
        votre entreprise. Chaque service est conçu avec une attention
        particulière aux détails et à l'efficacité.
      </p>

      <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description }: FeatureProps) => (
          <Card
            key={title}
            className="relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-2xl border border-primary p-6 text-black dark:text-white min-h-[400px] shadow-lg"
          >
            <div className="flex-grow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold mb-4">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-center leading-relaxed text-black/70 dark:text-white">
                  {description}
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex justify-center mt-6">
              <StyledButton variant="primary">
                <a href="/contact" className="text-white">
                  En savoir plus
                </a>
              </StyledButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
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
    </section>
  );
};
