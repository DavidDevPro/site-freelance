import { useParams } from "react-router-dom"; // Import de useParams et useNavigate
import { SiteFooter, SiteHeader } from "@/components/layout";
import ServiceDetailContent from "@/components/landing/service/ServiceDetailContent"; // Import du composant enfant
import servicesData from "../data/dataServices.json"; // Importer les données des services

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>(); // Récupérer le nom du service à partir de l'URL

  // Vérifiez que serviceName est défini avant de l'utiliser
  if (!serviceName) {
    return (
      <div className="bg-background flex flex-col min-h-screen">
        <SiteHeader />
        <div className="flex-grow flex items-center justify-center ">
          <p className="text-center text-muted-foreground">
            Aucun service sélectionné.
          </p>
        </div>

        <SiteFooter />
      </div>
    );
  }

  // Récupérer les détails du service à partir des données
  const service = servicesData.find((service) =>
    service.link.includes(serviceName)
  );

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center ">
        {service ? (
          <ServiceDetailContent service={service} />
        ) : (
          <p className="text-center text-muted-foreground">
            Désolé, nous n’avons pas pu trouver les détails du service demandé.
          </p>
        )}
      </div>

      <SiteFooter />
    </div>
  );
};

export default ServiceDetail;
