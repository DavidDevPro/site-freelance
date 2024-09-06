import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchFormulas, Formula } from "@/lib/api/formulaApi";
import {
  PackageHeader,
  PackageContent,
  PackageFooter,
} from "@/components/landing/package";
import { Separator } from "@/components/ui";

type Interval = "essentiel" | "premium" | "expert";

type Feature = {
  name: string;
  value: string;
  description?: string;
};

type FormulaWithFeatures = Omit<Formula, "features"> & {
  features: (Feature | string)[];
};

export function Package() {
  const [packages, setPackages] = useState<FormulaWithFeatures[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [dataFormulas, setDataFormulas] = useState<FormulaWithFeatures[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFormulas = async () => {
      try {
        const fetchedData: Formula[] = await fetchFormulas();

        // Formatage des données pour correspondre à 'FormulaWithFeatures'
        const formattedData: FormulaWithFeatures[] = fetchedData.map((pkg) => ({
          ...pkg,
          features: pkg.features.map((feature) => {
            // Si la fonctionnalité est une chaîne, la découper en 'name' et 'value'
            if (typeof feature === "string") {
              const [name, value] = (feature as string).split(":");
              return {
                name: name.trim(),
                value: value ? value.trim() : "",
                description: "",
              };
            }
            return feature as Feature; // Si déjà un objet 'Feature', le conserver tel quel
          }),
        }));

        setDataFormulas(formattedData);
        const filteredData = formattedData.filter(
          (pkg) => pkg.name !== "Prendre un rendez-vous"
        );
        setPackages(filteredData);
      } catch {
        setError(
          "Nous avons rencontré un problème pour charger les formules. Veuillez réessayer plus tard !"
        );
      } finally {
        setLoading(false);
      }
    };

    loadFormulas();
  }, []);

  const handlePackageSelection = (packageId: Interval) => {
    const formattedName = packageId.toLowerCase().replace(/\s+/g, "-");
    navigate(`/package/${formattedName}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="package"
      className="xl:container py-14 px-2 sm:px-6 transition-p ease duration-200"
    >
      <div className=" mx-auto flex max-w-screen-xl flex-col gap-8 ">
        <PackageHeader />
        {error ? (
          <p className="text-center text-lg font-medium text-red-500">
            {error}
          </p>
        ) : (
          <>
            <PackageContent
              packages={packages}
              handlePackageSelection={handlePackageSelection}
            />
            <PackageFooter dataFormulas={dataFormulas} />
          </>
        )}
      </div>
      <Separator className="mt-10 h-0.5 w-1/2 mx-auto bg-primary " />
    </section>
  );
}
