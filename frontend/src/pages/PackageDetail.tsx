// src/pages/PackageDetail.tsx

import { useParams } from "react-router-dom";

import { PackageDetailContent } from "@/components/landing/package/PackageDetailContent"; // Import du composant
import { packagesData } from "@/config/data/packageData";
import { PageLayout } from "@/components/layout";

const PackageDetail = () => {
  const { packageName } = useParams<{ packageName: string }>();

  // Trouver le package correspondant en normalisant le nom du package pour correspondre à l'URL
  const packageDetail = packagesData.find(
    (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  return (
    <PageLayout>
      <div className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="max-w-7xl mx-auto w-full flex ">
          {packageDetail ? (
            <PackageDetailContent packageDetail={packageDetail} />
          ) : (
            <p className="text-center text-muted-foreground">
              Désolé, nous n’avons pas pu trouver les détails du package
              demandé.
            </p>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default PackageDetail;
