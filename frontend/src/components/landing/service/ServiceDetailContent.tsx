import React from "react";
import { Banner, PrimaryButton } from "@/components/shared";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BiMailSend } from "react-icons/bi";

interface ServiceDetailContentProps {
  service: {
    title: string;
    subtitleDetails: string;
    descriptionDetails: string[];
    pro?: number;
  };
}

export const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({
  service,
}) => {
  const navigate = useNavigate(); // Utilisation de useNavigate pour revenir en arrière

  return (
    <div className="max-w-7xl mx-auto w-full">
      {/* Titre et description */}
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">
        {`Détails du Service : ${service.title}`}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {`${service.subtitleDetails}`}
      </p>

      {/* Conteneur de détails du service */}
      <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 relative z-10 items-center">
        {/* Afficher les détails du service */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Caractéristiques</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            {service.descriptionDetails.map((desc, index) => (
              <li key={index} className="mb-1">
                {desc}
              </li>
            ))}
          </ul>

          {/* Bouton de retour positionné en bas à gauche du contenant */}
          <div className="mt-6 flex">
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

        {/* Afficher un composant banner ou autre contenu */}
        <div className="w-full md:w-1/2 md:mb-0 space-y-4">
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
    </div>
  );
};
