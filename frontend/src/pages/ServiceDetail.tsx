import { useParams, useNavigate } from "react-router-dom"; // Import de useParams et useNavigate
import { PageLayoutOneScreen } from "@/components/layout";
import { ServiceDetailContent } from "@/components/landing/service/ServiceDetailContent"; // Import du composant enfant
import { serviceList } from "@/config/data/servicesData";

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>(); // Récupérer le nom du service à partir de l'URL
  const navigate = useNavigate(); // Hook pour la navigation

  // Récupérer les détails du service à partir des données
  const serviceDetail = serviceList.find(
    (service) => service.link === serviceName
  );

  // Rediriger vers une page 404 si le service n'est pas trouvé
  if (!serviceDetail) {
    navigate("/404", { replace: true }); // Redirection vers une page 404 personnalisée
    return null; // Retourne null pour éviter tout rendu supplémentaire
  }

  return (
    <PageLayoutOneScreen>
      <section className="flex-grow flex items-center justify-center px-0">
        <ServiceDetailContent serviceDetail={serviceDetail} />
      </section>
    </PageLayoutOneScreen>
  );
};

export default ServiceDetail;
