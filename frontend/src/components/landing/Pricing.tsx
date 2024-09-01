import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Utilisation de useNavigate pour la redirection
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { PrimaryButton, Banner } from "@/components/shared";
import { QuoteRequestModal } from "@/components/landing/quoteRequest";
import { fetchFormulas, Formula } from "@/services/formulaApi";
import { LuInfo } from "react-icons/lu";

type Interval = "essentiel" | "premium" | "expert";

export function Pricing() {
  const [packages, setPackages] = useState<Formula[]>([]);
  const [dataFormulas, setDataFormulas] = useState<Formula[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Utilisation du hook useNavigate

  useEffect(() => {
    const loadFormulas = async () => {
      try {
        const dataFormulas = await fetchFormulas();
        setDataFormulas(dataFormulas);

        const filteredData = dataFormulas.filter(
          (pkg) => pkg.name !== "Prendre un rendez-vous"
        );
        setPackages(filteredData);
        setLoading(false);
      } catch {
        setError(
          "Nous avons rencontré un problème pour charger les formules. Veuillez réessayer plus tard !"
        );
        setPackages([
          {
            id: "1",
            name: "Essentiel",
            description:
              "L'option idéale pour les sites vitrines et les projets de petites envergures",
            features: ["Données non chargées"],
            options: [{ name: "Données non chargées", description: "" }],
            isMostPopular: false,
          },
          {
            id: "2",
            name: "Premium",
            description:
              "Idéal pour les projets de taille moyenne cherchant un impact significatif",
            features: ["Données non chargées"],
            options: [{ name: "Données non chargées", description: "" }],
            isMostPopular: true,
          },
          {
            id: "3",
            name: "Expert",
            description:
              "Pour les projets ambitieux nécessitant une expertise technique approfondie",
            features: ["Données non chargées"],
            options: [{ name: "Données non chargées", description: "" }],
            isMostPopular: false,
          },
        ]);
        setLoading(false);
      }
    };

    loadFormulas();
  }, []);

  // Fonction pour gérer la sélection de package et la redirection
  const handlePackageSelection = (packageId: Interval) => {
    const formattedName = packageId.toLowerCase().replace(/\s+/g, "-"); // Formatage du nom pour l'URL
    navigate(`/package/${formattedName}`); // Redirection vers la page spécifique mise à jour
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  text-center font-bold mb-4">
            Choisissez la formule adaptée à vos besoins
          </h2>
          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Sélectionnez une formule qui correspond à vos besoins. Chaque
            formule peut être personnalisée avec des options supplémentaires
            pour répondre à vos attentes.
          </p>
        </div>

        {error && (
          <p className="text-center text-lg font-medium text-red-500">
            {error}
          </p>
        )}

        <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-2xl border border-primary p-4 text-black dark:text-white min-h-[500px]",
                {
                  "border-2 border-neutral-700 shadow-lg shadow-neutral-500 dark:border-neutral-400 dark:shadow-neutral-600":
                    pkg.isMostPopular,
                }
              )}
            >
              <div className="flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="text-3xl text-center mb-2 text-primary font-bold">
                        {pkg.name}
                      </h2>
                      <p className="h-16 text-center border-primary border-b-2 mb-8 text-sm leading-5 text-black/70 dark:text-white">
                        {pkg.description}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-col mb-4 gap-2 font-normal">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium text-black dark:text-white"
                      >
                        <CheckIcon className="h-6 w-6 shrink-0 rounded-full bg-primary p-[2px] text-white dark:text-white" />
                        <span className="flex">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl text-primary mb-2 font-bold">
                    Options disponibles :
                  </h3>
                  <ul className="flex flex-col gap-2 font-normal">
                    {pkg.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium text-black/70 dark:text-white"
                      >
                        {typeof option === "string"
                          ? option
                          : `- ${option.name}${
                              option.description
                                ? ` : ${option.description}`
                                : ""
                            }`}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center mt-4">
                  <PrimaryButton
                    variant="primary"
                    onClick={() => handlePackageSelection(pkg.name as Interval)}
                  >
                    <LuInfo className="mr-2 h-6 w-6" />
                    En Savoir Plus
                  </PrimaryButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!error && (
          <>
            <Banner
              title="Abonnement Ultimate pour la gestion de votre site"
              description="Profitez de notre service tout-en-un : gestion de domaine, hébergement sécurisé et support technique 24/7. Simplifiez la maintenance de votre site avec notre abonnement Premium."
            />
            <div className="mt-8 text-center">
              <p className="text-lg leading-7 text-black/70 dark:text-white mb-4">
                Vous souhaitez en savoir plus ? Contactez-nous pour un devis
                personnalisé !
              </p>
              <div className="flex justify-center">
                <QuoteRequestModal dataFormulas={dataFormulas} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
