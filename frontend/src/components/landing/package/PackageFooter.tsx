import { Banner } from "@/components/shared";
import { QuoteRequestModal } from "@/components/landing/quoteRequest";

type PackageFooterProps = {
  dataFormulas: any[];
};

export const PackageFooter: React.FC<PackageFooterProps> = ({
  dataFormulas,
}) => (
  <>
    <Banner
      title="Abonnement Ultimate pour la gestion de votre site"
      description="Profitez de notre service tout-en-un : gestion de domaine, hébergement sécurisé et support technique 24/7. Simplifiez la maintenance de votre site avec notre abonnement Premium."
    />
    <div className="mt-8 text-center">
      <p className="mx-auto text-center text-secondary font-medium text-base md:text-lg lg:text-xl  transition-text ease duration-300 mb-4 dark:text-card">
        Vous souhaitez en savoir plus ? Contactez-nous pour un devis
        personnalisé !
      </p>
      <div className="flex justify-center">
        <QuoteRequestModal dataFormulas={dataFormulas} />
      </div>
    </div>
  </>
);
