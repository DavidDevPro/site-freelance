// src/pages/ServiceDetail.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { ServiceDetailContent } from "@/components/landing/service/ServiceDetailContent";
import { serviceList } from "@/config/data/servicesData";
import { SiteFooter, SiteHeader } from "@/components/layout";

const ServiceDetail: React.FC = () => {
  const { serviceName } = useParams<{ serviceName: string }>();

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

  const service = serviceList.find((service) => service.link === serviceName);

  return (
    <div className="bg-background flex flex-col min-h-screen ">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center py-10 px-4 ">
        {service ? (
          <ServiceDetailContent service={service} />
        ) : (
          <p className="text-center text-muted-foreground">
            Désolé, nous n'avons pas pu trouver les détails du service demandé.
          </p>
        )}
      </div>

      <SiteFooter />
    </div>
  );
};

export default ServiceDetail;
