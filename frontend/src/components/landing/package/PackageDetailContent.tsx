import React from "react";
import { Banner, PrimaryButton } from "@/components/shared";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, PlusCircle } from "lucide-react";
import { BiMailSend } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";

interface PackageDetailContentProps {
  packageDetail: {
    name: string;
    description: string;
    features: { name: string; description?: string }[];
    options: string[];
  };
}

export const PackageDetailContent: React.FC<PackageDetailContentProps> = ({
  packageDetail,
}) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Titre et description */}
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">
        {`Détails du Package : ${packageDetail.name}`}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {packageDetail.description}
      </p>

      {/* Conteneur principal qui fusionne les détails du package et les options */}
      <div className="bg-card p-2 sm:p-6 lg:p-8 rounded-lg shadow-lg space-y-8 relative z-10">
        {/* Contenu en deux colonnes */}
        <div className="flex flex-col xl:gap-6 gap-10 xl:flex-row items-center ">
          <div className="w-full  space-y-4">
            {/* Afficher les détails du package */}
            <h2 className="text-primary text-2xl font-bold sm:pl-5 space-y-2">
              Détails de la formule :
            </h2>
            <ul className="sm:pl-5 space-y-2">
              {packageDetail.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-black dark:text-white"
                >
                  <FiCheckCircle className="h-6 w-6 shrink-0 rounded-full text-primary p-[2px] bg-white dark:text-white" />
                  <div className="flex flex-col">
                    <span className="font-bold text-lg">{feature.name}</span>
                    {feature.description && (
                      <span className="text-muted-foreground text-base">
                        {feature.description}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Afficher un composant banner ou autre contenu */}
          <div className="w-full   md:mb-0 space-y-4">
            <Banner
              className="mt-0 mb-10"
              title="En savoir plus sur nos services"
              description="Contactez-nous pour plus de détails ou des options personnalisées."
            />
            <div className="flex justify-center">
              <Link to="/contact">
                <PrimaryButton
                  variant="primary"
                  className="text-base md:text-xl py-4 md:py-6 px-8 md:px-12 flex items-center"
                >
                  <BiMailSend className="mr-2 h-6 w-6" />
                  Nous Contacter
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Séparateur de contenu sur toute la largeur */}
        <hr className="my-8 border-t border-muted-foreground" />

        {/* Options disponibles */}
        <div className="text-center">
          <h3 className="text-primary text-xl font-bold mb-4">
            Options disponibles
          </h3>
          <ul className="inline-block text-left sm:pl-5 space-y-2">
            {packageDetail.options.map((option, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <PlusCircle className="h-5 w-5 shrink-0 text-primary" />
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bouton de retour en bas de la carte */}
        <div className="mt-6 flex justify-center">
          <PrimaryButton
            variant="primary"
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-white bg-primary hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Retour</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
