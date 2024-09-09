import { Banner, PrimaryButton } from "@/components/shared";
import { Link, useNavigate } from "react-router-dom";
import { PackageOption, PackageFeature } from "@/lib/api/formulaApi"; // Importez vos types
import { FaCheckCircle } from "react-icons/fa";
import {
  FaArrowLeftLong,
  FaCirclePlus,
  FaEnvelopeCircleCheck,
} from "react-icons/fa6";
import { LuArrowBigLeftDash } from "react-icons/lu";

interface PackageDetailContentProps {
  packageDetail?: {
    // Utilisation du type optionnel avec le "?"
    name: string;
    description: string;
    features: PackageFeature[];
    options: PackageOption[];
  };
  error?: string; // Ajout de la propriété error pour gérer les erreurs d'API
}

export const PackageDetailContent: React.FC<PackageDetailContentProps> = ({
  packageDetail,
  error,
}) => {
  const navigate = useNavigate();

  // Fonction pour gérer le bouton de retour
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
    <section className="container mx-auto pt-16 pb-10 relative z-10">
      {/* Si une erreur est présente, afficher le message d'erreur */}
      {error && <div className="text-center text-red-500 mt-10">{error}</div>}

      {!packageDetail && (
        <>
          {/* Afficher la bannière et le bouton de retour en cas d'erreur ou de packageDetail non disponible */}
          <Banner
            className="mt-8"
            title="En savoir plus sur nos services"
            description="Contactez-nous pour plus de détails ou des options personnalisées."
          />
          <div className="mt-6 flex justify-center">
            <PrimaryButton
              variant="primary"
              onClick={handleBackClick}
              className="flex items-center mb-6 sm:mb-0 space-x-2 font-bold tracking-wide text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              <FaArrowLeftLong className="h-5 w-5 shrink-0 mr-2" />
              <span>Retour</span>
            </PrimaryButton>
          </div>
        </>
      )}

      {packageDetail && (
        <>
          {/* Titre et description */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
            {`Détails du Package : ${packageDetail.name}`}
          </h1>
          <h2 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-8 transition-text ease duration-300">
            {packageDetail.description}
          </h2>

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
                      <FaCheckCircle className="h-6 w-6 shrink-0 rounded-full text-primary mt-1  bg-card dark:text-white" />
                      <div className="flex flex-col">
                        <span className="font-bold text-lg">
                          {feature.name} : {feature.value}
                        </span>
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
              <div className="w-full md:mb-0 space-y-4">
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
                      <FaEnvelopeCircleCheck className=" mr-2 h-6 w-6 shrink-0" />
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
                    <FaCirclePlus className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{option.description}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-center">
                <PrimaryButton
                  variant="primary"
                  onClick={handleBackClick}
                  className="flex items-center mb-6 sm:mb-0 space-x-2 font-bold tracking-wide text-white bg-primary hover:bg-primary-dark transition-colors"
                >
                  <LuArrowBigLeftDash className="h-5 w-5 shrink-0 mr-2" />
                  <span>Retour</span>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
