// components/landing/package/PackageContent.tsx
import React from "react";
import { cn } from "@/lib/utils";
import { LuInfo } from "react-icons/lu";
import { PrimaryButton } from "@/components/shared";
import { FaAngleDoubleRight, FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

type Interval = "essentiel" | "premium" | "expert";

type OptionType = {
  name: string;
  value?: string;
  description?: string;
};

type Feature = {
  name: string;
  value: string;
  description?: string;
};

type FormulaWithFeatures = {
  id: string;
  name: string;
  description: string;
  features: (Feature | string)[];
  options: OptionType[];
  isMostPopular: boolean;
};

type PackageContentProps = {
  packages: FormulaWithFeatures[];
  handlePackageSelection: (packageId: Interval) => void;
};

export const PackageContent: React.FC<PackageContentProps> = ({
  packages,
  handlePackageSelection,
}) => {
  // Filtrer les packages 1, 2 et 3 pour comparaison
  const packagesToCompare = packages.filter((pkg) =>
    ["package_1", "package_2", "package_3"].includes(pkg.id)
  );

  // Trouver toutes les features uniques pour les packages 1, 2 et 3 (basé uniquement sur le name)
  const allFeatures = packagesToCompare.reduce((acc, pkg) => {
    pkg.features.forEach((feature) => {
      if (
        typeof feature !== "string" &&
        !acc.find((item) => item.name === feature.name)
      ) {
        acc.push({ ...feature, common: false });
      }
    });
    return acc;
  }, [] as Array<{ name: string; value: string; description?: string; common: boolean }>);

  // Vérifier la présence de chaque feature dans tous les packages
  packagesToCompare.forEach((pkg) => {
    pkg.features.forEach((feature) => {
      if (typeof feature !== "string") {
        const featureInAll = allFeatures.find(
          (item) => item.name === feature.name
        );
        if (featureInAll) {
          featureInAll.common = true;
        }
      }
    });
  });

  // Trouver toutes les options uniques pour les packages 1, 2 et 3 (basé uniquement sur le name)
  const allOptions = packagesToCompare.reduce((acc, pkg) => {
    pkg.options.forEach((option) => {
      if (!acc.find((item) => item.name === option.name)) {
        acc.push({ ...option, common: false });
      }
    });
    return acc;
  }, [] as Array<{ name: string; value?: string; description?: string; common: boolean }>);

  // Vérifier la présence de chaque option dans tous les packages
  packagesToCompare.forEach((pkg) => {
    pkg.options.forEach((option) => {
      const optionInAll = allOptions.find((item) => item.name === option.name);
      if (optionInAll) {
        optionInAll.common = true;
      }
    });
  });

  return (
    <div className="mx-auto w-full grid gap-8">
      {/* Grid Layout pour les packages 1, 2, 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
        {packagesToCompare.map((pkg) => (
          <div
            key={pkg.id}
            className={cn(
              "bg-card relative flex flex-col w-11/12 sm:w-10/12 md:w-9/12 lg:w-full lg:max-w-[400px] overflow-hidden rounded-2xl border border-primary p-4 shadow-lg text-black dark:text-white min-h-[500px]",
              {
                "border-2 border-neutral-700 shadow-lg shadow-neutral-500 dark:border-neutral-400 dark:shadow-neutral-600":
                  pkg.isMostPopular,
              }
            )}
          >
            {/* Utilisation de Flexbox pour aligner les éléments */}
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-center justify-center">
                  <div className="w-11/12">
                    <h2 className="text-4xl lg:text-3xl text-center mb-4 lg:mb-2 text-primary font-bold">
                      {pkg.name}
                    </h2>
                    <p className="w-full h-16 text-center border-primary border-b-2 mb-8 text:md lg:text-sm leading-5 text-black/70 dark:text-white">
                      {pkg.description}
                    </p>
                  </div>
                </div>

                {/* Affichage de toutes les features */}
                <ul className="flex flex-col mb-4 gap-2 font-normal sm:pl-2">
                  {allFeatures.map((feature, idx) => {
                    const packageFeature = pkg.features.find(
                      (f) => typeof f !== "string" && f.name === feature.name
                    );
                    return (
                      <li
                        key={idx}
                        className={cn(
                          "flex items-start text-md lg:text-sm font-medium",
                          packageFeature
                            ? "text-secondary dark:text-card"
                            : "text-gray-400"
                        )}
                      >
                        {packageFeature ? (
                          <FaCheckCircle className="h-6 w-6 shrink-0 mr-3 text-primary " />
                        ) : (
                          <FaCircleXmark className="h-6 w-6 shrink-0 mr-3 rounded-full bg-gray-300 p-[2px] text-card dark:text-gray-600" />
                        )}
                        <p className="mr-1">
                          {feature.name}
                          {packageFeature &&
                            (packageFeature as Feature).value && (
                              <span>
                                {" "}
                                : {(packageFeature as Feature).value}
                              </span>
                            )}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Section "Options disponibles" alignée en bas */}
              <div className="mt-auto">
                <h3 className="text-xl text-primary mb-2 font-bold text-center">
                  Options disponibles :
                </h3>
                <ul className="flex flex-col gap-2 font-normal">
                  {allOptions.map((option, idx) => {
                    const packageOption = pkg.options.find(
                      (o) => o.name === option.name
                    );
                    return (
                      <li
                        key={idx}
                        className={cn(
                          "text-md lg:text-sm font-medium",
                          packageOption
                            ? "text-secondary dark:text-white"
                            : "text-transparent"
                        )}
                      >
                        {packageOption ? (
                          <p className="break-words inline-flex items-center">
                            <span className="text-primary mr-2">
                              <FaAngleDoubleRight className="h-4 w-4 lg:h-3 lg:w-3 shrink-0" />
                            </span>
                            {option.name}
                          </p>
                        ) : (
                          "-"
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Bouton "En Savoir Plus" toujours en bas */}
              <div className="flex justify-center mt-4">
                <PrimaryButton
                  variant="primary"
                  onClick={() => handlePackageSelection(pkg.name as Interval)} // Conversion de type ici
                >
                  <LuInfo className="mr-2 h-6 w-6 shrink-0" />
                  En Savoir Plus
                </PrimaryButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
