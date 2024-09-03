// components/landing/package/PackageContent.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon } from '@radix-ui/react-icons';
import { PrimaryButton } from '@/components/shared';
import { LuInfo } from 'react-icons/lu';

type Interval = 'essentiel' | 'premium' | 'expert';

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

// Mise à jour du type avec le nouveau nom OptionType
type FormulaWithFeatures = {
  id: string;
  name: string;
  description: string;
  features: (Feature | string)[];
  options: OptionType[]; // Utiliser OptionType au lieu de Option
  isMostPopular: boolean;
};

type PackageContentProps = {
  packages: FormulaWithFeatures[];
  handlePackageSelection: (packageId: Interval) => void; // Utiliser Interval ici
};

export const PackageContent: React.FC<PackageContentProps> = ({ packages, handlePackageSelection }) => (
  <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {packages.map((pkg) => (
      <div
        key={pkg.id}
        className={cn(
          'bg-white relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-2xl border border-primary p-4 text-black dark:text-white min-h-[500px]',
          {
            'border-2 border-neutral-700 shadow-lg shadow-neutral-500 dark:border-neutral-400 dark:shadow-neutral-600':
              pkg.isMostPopular,
          }
        )}
      >
        <div className="flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="flex items-center">
              <div className="ml-4">
                <h2 className="text-3xl text-center mb-2 text-primary font-bold">{pkg.name}</h2>
                <p className="h-16 text-center border-primary border-b-2 mb-8 text-sm leading-5 text-black/70 dark:text-white">
                  {pkg.description}
                </p>
              </div>
            </div>

            <ul className="flex flex-col mb-4 gap-2 font-normal">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-sm font-medium text-black dark:text-white">
                  <CheckIcon className="h-6 w-6 shrink-0 mr-3 rounded-full bg-primary p-[2px] text-white dark:text-white" />
                  <span className="mr-1">
                    {typeof feature === 'string' ? feature : feature.name}
                  </span>
                  {typeof feature !== 'string' && feature.value && <span> : {feature.value}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl text-primary mb-2 font-bold">Options disponibles :</h3>
            <ul className="flex flex-col gap-2 font-normal">
              {pkg.options.map((option, idx) => (
                <li key={idx} className="text-xs font-medium text-black/70 dark:text-white">
                  {typeof option === 'string' ? option : `- ${option.name}`}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-4">
            <PrimaryButton
              variant="primary"
              onClick={() => handlePackageSelection(pkg.name as Interval)} // Conversion de type ici
            >
              <LuInfo className="mr-2 h-6 w-6" />
              En Savoir Plus
            </PrimaryButton>
          </div>
        </div>
      </div>
    ))}
  </div>
);
