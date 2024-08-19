import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";

import { useState } from "react";

import { QuestionnaireModal } from "./questionnaire/QuestionnaireModal";
import { StyledButton } from "../StyledButton";
import Banner from "../Banner";

type Interval = "basic" | "standard" | "premium";

const demoPackages = [
  {
    id: "package_1",
    name: "Starter",
    description: "Idéal pour les sites vitrines et les projets simples",
    features: [
      "Développement web front-end",
      "Design responsive basique",
      "1 cycle de révision",
      "Support par email et/ou Discord",
      "Nombre minimum de pages : 3",
      "Page de contact incluse",
    ],
    options: [
      "Ajout de pages supplémentaires",
      "Fonctionnalités spécifiques",
      "Intégration API basique",
    ],
    isMostPopular: false,
  },
  {
    id: "package_2",
    name: "Standard",
    description: "Parfait pour les projets de taille moyenne",
    features: [
      "Développement web full-stack",
      "Design responsive avancé",
      "2 cycles de révision",
      "Intégration API basique",
      "Support par email, Discord et téléphone",
      "Nombre minimum de pages : 5",
      "Page de contact incluse",
    ],
    options: [
      "Ajout de pages supplémentaires",
      "Fonctionnalités spécifiques",
      "Optimisation SEO",
      "Création de contenu",
    ],
    isMostPopular: true,
  },
  {
    id: "package_3",
    name: "Premium",
    description:
      "Pour les projets complexes nécessitant une attention particulière",
    features: [
      "Développement web full-stack",
      "Design personnalisé",
      "Cycles de révision illimités",
      "Intégration API avancée",
      "Optimisation des performances",
      "Support prioritaire 24/7",
      "Nombre minimum de pages : 8",
      "Page de contact incluse",
    ],
    options: [
      "Ajout de pages supplémentaires",
      "Fonctionnalités spécifiques",
      "Optimisation SEO avancée",
      "Maintenance continue",
    ],
    isMostPopular: false,
  },
];

export function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState<Interval>("basic");

  const handlePackageSelection = (packageId: Interval) => {
    setSelectedPackage(packageId);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Choisissez{" "}
            <span className="bg-gradient-primary">votre formule</span> idéale.
          </h2>

          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Sélectionnez une formule qui correspond à vos besoins. Chaque
            formule peut être personnalisée avec des options supplémentaires
            pour répondre à vos attentes.
          </p>
        </div>

        <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {demoPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-2xl border p-4 text-black dark:text-white min-h-[500px]", // Ajout de min-h pour définir une hauteur minimale
                {
                  "border-2 border-neutral-700 shadow-lg shadow-neutral-500 dark:border-neutral-400 dark:shadow-neutral-600":
                    pkg.isMostPopular,
                }
              )}
            >
              <div className="flex flex-col flex-grow">
                {" "}
                {/* Flex-grow pour équilibrer l'espace */}
                <div className="flex-grow">
                  {" "}
                  {/* Div de croissance pour assurer l'alignement */}
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="text-base font-semibold leading-7">
                        {pkg.name}
                      </h2>
                      <p className="h-16 text-sm leading-5 text-black/70 dark:text-white">
                        {pkg.description}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-2 font-normal">
                    {pkg.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                      >
                        <CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-primary p-[2px] text-white dark:text-white" />
                        <span className="flex">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold">
                    Options disponibles :
                  </h3>
                  <ul className="flex flex-col gap-2 font-normal">
                    {pkg.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium text-black/70 dark:text-white"
                      >
                        - {option}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center mt-4">
                  <StyledButton
                    variant="primary"
                    onClick={() => handlePackageSelection(pkg.name as Interval)}
                  >
                    Choisir cette formule
                  </StyledButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Banner
          title="Abonnement Premium pour la gestion de votre site"
          description="Profitez de notre service tout-en-un : gestion de domaine, hébergement sécurisé et support technique 24/7. Simplifiez la maintenance de votre site avec notre abonnement Premium."
        />

        <div className="mt-8 text-center">
          {" "}
          {/* Centrage du texte et du bouton */}
          <p className="text-lg leading-7 text-black/70 dark:text-white mb-4">
            Vous souhaitez en savoir plus ? Contactez-nous pour un devis
            personnalisé !
          </p>
          <div className="flex justify-center">
            {" "}
            {/* Centrage du bouton */}
            <QuestionnaireModal />
          </div>
        </div>
      </div>
    </section>
  );
}
