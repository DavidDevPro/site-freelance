import React from 'react';
import { Banner } from '@/components/shared';
import { QuoteRequestModal } from '@/components/landing/quoteRequest';

type PackageFooterProps = {
  dataFormulas: any[];
};

export const PackageFooter: React.FC<PackageFooterProps> = ({ dataFormulas }) => (
  <>
    <Banner
      title="Abonnement Ultimate pour la gestion de votre site"
      description="Profitez de notre service tout-en-un : gestion de domaine, hébergement sécurisé et support technique 24/7. Simplifiez la maintenance de votre site avec notre abonnement Premium."
    />
    <div className="mt-8 text-center">
      <p className="text-lg leading-7 text-black/70 dark:text-white mb-4">
        Vous souhaitez en savoir plus ? Contactez-nous pour un devis personnalisé !
      </p>
      <div className="flex justify-center">
        <QuoteRequestModal dataFormulas={dataFormulas} />
      </div>
    </div>
  </>
);
