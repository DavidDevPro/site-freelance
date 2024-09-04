import { useParams } from "react-router-dom"; // Import de useParams et useNavigate
import { PageLayoutOneScreen, PageLayoutFullScreen } from "@/components/layout";
import { ServiceDetailContent } from "@/components/landing/service/ServiceDetailContent"; // Import du composant enfant
import { serviceList } from "@/config/data/servicesData";

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>(); // Récupérer le nom du service à partir de l'URL

  // Vérifiez que serviceName est défini avant de l'utiliser
  if (!serviceName) {
    return (
      <PageLayoutOneScreen>
        <section
          id="contact"
          className="container flex-grow flex items-center justify-center px-0"
        >
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-center text-muted-foreground">
              Aucun service sélectionné.
            </p>
          </div>
        </section>
      </PageLayoutOneScreen>
    );
  }

  // Récupérer les détails du service à partir des données
  const service = serviceList.find((service) =>
    service.link.includes(serviceName)
  );

  return (
    <>
      {service ? (
        <PageLayoutFullScreen>
          <div className="flex-grow flex items-center justify-center px-0">
            <ServiceDetailContent service={service} />
          </div>
        </PageLayoutFullScreen>
      ) : (
        <PageLayoutOneScreen>
          <section
            id="contact"
            className="container flex-grow flex items-center justify-center px-0"
          >
            <div className="max-w-7xl mx-auto w-full">
              <p className="text-center text-muted-foreground">
                Désolé, nous n'avons pas pu trouver les détails du service
                demandé.
              </p>
            </div>
          </section>
        </PageLayoutOneScreen>
      )}
    </>
  );
};

export default ServiceDetail;
