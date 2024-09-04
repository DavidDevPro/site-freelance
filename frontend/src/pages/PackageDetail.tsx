import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PackageDetailContent } from "@/components/landing/package/PackageDetailContent";
import { fetchFormulas, Formula } from "@/lib/api/formulaApi";
import { PageLayoutFullScreen } from "@/components/layout";

const PackageDetail = () => {
  const { packageName } = useParams<{ packageName: string }>();
  const [packageDetail, setPackageDetail] = useState<Formula | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPackageDetail = async () => {
      try {
        const fetchedData = await fetchFormulas();

        // Trouver le package correspondant en normalisant le nom du package pour correspondre à l'URL
        const matchedPackage = fetchedData.find(
          (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === packageName
        );

        if (matchedPackage) {
          setPackageDetail(matchedPackage);
        } else {
          throw new Error("Package non trouvé dans l'API.");
        }
      } catch {
        setError(
          "Désolé, nous n'avons pas pu trouver les détails de la formule demandée. Veuillez réessayer plus tard !"
        );
      } finally {
        setLoading(false);
      }
    };

    loadPackageDetail();
  }, [packageName]);

  if (loading) {
    return <div>Chargement...</div>;
  }
  return (
    <PageLayoutFullScreen>
      <section className=" container flex-grow flex items-center justify-center px-0"></section>
      <div className="max-w-7xl mx-auto w-full flex ">
        {packageDetail ? (
          <PackageDetailContent
            packageDetail={packageDetail}
            error={error || undefined}
          />
        ) : (
          <p className="text-center text-muted-foreground">
            Désolé, nous n’avons pas pu trouver les détails du package demandé.
          </p>
        )}
      </div>
    </PageLayoutFullScreen>
  );
};

export default PackageDetail;
