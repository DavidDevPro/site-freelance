//Routes spécifiques pour le footer// footerRoutes.ts
import { socialMediaIcons  } from '@/config/data/socialLinks';

// Définir le type pour chaque élément de route du footer
type FooterRouteItem = {
  href: string;
  name: string;
  external?: boolean;
};

// Définir le type pour chaque section de route dans la navigation du footer
type FooterRouteSection = {
  label: string;
  items: FooterRouteItem[];
};

// Définir les routes pour la navigation du footer
export const footerRoutes: FooterRouteSection[] = [
  {
    label: "Produits",
    items: [
      { href: "/#services", name: "Services" },
      { href: "/#pricing", name: "Tarifs" },
      { href: "/#testimonials", name: "Témoignages" },
    ],
  },
  {
    label: "Contact",
    items: [
      { href: socialMediaIcons.find(icon => icon.label === "Linkedin")?.href || "", name: "Linkedin", external: true },
      { href: socialMediaIcons.find(icon => icon.label === "Facebook")?.href || "", name: "Facebook", external: true },
      { href: socialMediaIcons.find(icon => icon.label === "Twitter")?.href || "", name: "Twitter", external: true },
      { href: socialMediaIcons.find(icon => icon.label === "Instagram")?.href || "", name: "Instagram", external: true },
      { href: "/contact", name: "Contact" },
    ],
  },
  {
    label: "Legal",
    items: [
      { href: "/mentions-legales", name: "Mentions Légales" },
      { href: "/politique-confidentialite", name: "Politique de Confidentialité" },
    ],
  },
];