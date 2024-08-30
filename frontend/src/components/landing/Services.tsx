import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MagnifierIcon,
  WalletIcon,
  ChartIcon,
} from "@/components/shared/Icons";
import cubeLeg from "@/assets/images/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Collaboration en temps réel sur le code, facilitant le travail d'équipe et la révision du code.",
    icon: <ChartIcon aria-label="Code Collaboration Icon" />,
  },
  {
    title: "Project Management",
    description:
      "Gestion de projet efficace avec des outils de suivi des tâches et des jalons.",
    icon: <WalletIcon aria-label="Project Management Icon" />,
  },
  {
    title: "Task Automation",
    description:
      "Automatisation des tâches répétitives pour améliorer l'efficacité et la productivité.",
    icon: <MagnifierIcon aria-label="Task Automation Icon" />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Découvrez nos services centrés sur le client pour répondre à vos
            besoins spécifiques avec une expertise inégalée.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card
                key={title}
                className="border-primary transition-shadow hover:shadow-lg"
              >
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div
                    className="mt-1 bg-primary/20 p-2 rounded-2xl"
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Illustration of services offered"
          loading="lazy"
        />
      </div>
    </section>
  );
};
