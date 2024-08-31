// src/pages/PackageDetail.tsx

import { useParams } from "react-router-dom";

import PackageDetailContent from "@/components/landing/package/PackageDetailContent"; // Import du composant
import { packagesData } from "@/lib/utils/packageData";
import { SiteFooter, SiteHeader } from "@/components/layout";

const PackageDetail = () => {
  const { packageName } = useParams<{ packageName: string }>();

  const packageDetail = packagesData.find(
    (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === packageName
  );

  return (
    <div className="bg-background flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center ">
        <div className="max-w-7xl mx-auto w-full">
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

      <SiteFooter />
    </div>
  );
};

export default PackageDetail;
