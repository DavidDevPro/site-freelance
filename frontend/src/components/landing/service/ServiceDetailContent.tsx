import React from "react";
import { Banner, PrimaryButton } from "@/components/shared";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { RiMailSendFill } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { ServiceProps, ProService } from "@/config/data/servicesData";
import { Badge } from "@/components/ui/badge";

interface ServiceDetailContentProps {
  serviceDetail: ServiceProps;
}

export const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({
  serviceDetail,
}) => {
  const navigate = useNavigate(); // Utilisation de useNavigate pour revenir en arrière

  const handleBackClick = () => {
    if (window.history.length > 1) {
      // Revenir à la page précédente si l'historique est disponible
      navigate(-1);
    } else {
      // Rediriger vers une page par défaut (ex: page d'accueil) si l'utilisateur est venu directement
      navigate("/");
    }
  };

  return (
    <section className="container mx-auto py-10 relative z-10">
      {/* Titre et description */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-primary">
        {`Détails du Service : ${serviceDetail.title}`}
      </h1>
      <p className="text-center text-muted-foreground mb-8">
        {serviceDetail.description.join(" ")}
      </p>

      {/* Conteneur de détails du service */}
      <div className="bg-card p-2 sm:p-6 lg:p-8 rounded-lg shadow-lg flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-16 relative z-10 items-center">
        {/* Afficher les détails du service */}
        <div className="w-full xl:w-1/2 lg:w-10/12 space-y-4">
          <h2 className="text-primary text-2xl font-bold">Caractéristiques</h2>
          <ul className="list-none pl-5 text-muted-foreground">
            {serviceDetail.descriptionDetails.map((desc, index) => (
              <li key={index} className="flex items-start mb-1">
                <RiCheckboxBlankCircleFill className="h-4 w-4 mt-1 shrink-0 text-primary mr-2" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          {serviceDetail.pro === ProService.YES && (
            <div className="mt-4">
              <Badge variant="secondary">Service PRO</Badge>
            </div>
          )}

          {/* Bouton de retour positionné en bas à gauche du contenant */}
          <div className="mt-6 flex justify-center xl:justify-start">
            <PrimaryButton
              variant="primary"
              onClick={handleBackClick}
              className="mt-4 flex items-center tracking-wide font-bold mb-6 sm:mb-0 space-x-2 text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5 shrink-0" />
              <span>Retour</span>
            </PrimaryButton>
          </div>
        </div>

        {/* Afficher un composant banner ou autre contenu */}
        <div className="w-full xl:w-1/2 md:mb-0 ">
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
                <RiMailSendFill className="mt-1 mr-2 h-6 w-6 shrink-0" />
                Nous Contacter
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
