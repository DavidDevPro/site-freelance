// config/data/packagesData.ts

// Définir les types pour les données de package
type PackageFeature = string;

type PackageOption = {
  name: string;
  description: string;
};

type Package = {
  name: string;
  description: string;
  features: PackageFeature[];
  options: PackageOption[];
};

// Définir les données des packages
export const packagesData: Package[] = [
  {
    name: 'Essentiel',
    description: "L'option idéale pour les sites vitrines et les projets de petites envergures",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    options: [{ name: "Option 1", description: "Description de l'option 1" }],
  },
  {
    name: 'Premium',
    description: "Idéal pour les projets de taille moyenne cherchant un impact significatif",
    features: ["Feature A", "Feature B", "Feature C"],
    options: [{ name: "Option 2", description: "Description de l'option 2" }],
  },
  {
    name: 'Expert',
    description: "Pour les projets ambitieux nécessitant une expertise technique approfondie",
    features: ["Feature X", "Feature Y", "Feature Z"],
    options: [{ name: "Option 3", description: "Description de l'option 3" }],
  },
];
