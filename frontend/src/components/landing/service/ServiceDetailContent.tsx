import React from 'react';
import { Banner, PrimaryButton } from "@/components/shared";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ServiceDetailContentProps {
  service: {
    title: string;
    description: string[];
    link: string;
    pro?: number;
  };
}

const ServiceDetailContent: React.FC<ServiceDetailContentProps> = ({ service }) => {
  const navigate = useNavigate(); // Utilisation de useNavigate pour revenir en arrière

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-4xl font-bold mb-4 text-center text-primary">
        {`Détails du Service : ${service.title}`}
      </h1>
      <p className="text-center text-muted-foreground mb-4">
        {`Description du service : ${service.description.join(", ")}`}
      </p>

      <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-16 relative z-10">
        {/* Afficher les détails du service */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Caractéristiques</h2>
          <ul className="list-disc pl-5">
            {service.description.map((desc, index) => (
              <li key={index} className="text-muted-foreground">
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
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Banner
            title="En savoir plus sur nos services"
            description="Contactez-nous pour plus de détails ou des options personnalisées."
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailContent;
