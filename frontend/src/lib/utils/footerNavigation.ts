import { socialIcons } from "./socialLinks";

// Define the type for each navigation item
type FooterNavItem = {
  href: string;
  name: string;
  external?: boolean;
};

// Define the type for each section in the footer navigation
type FooterNavSection = {
  label: string;
  items: FooterNavItem[];
};

export const footerNavigation: FooterNavSection[] = [
  {
    label: "Produits",
    items: [
      { href: "/#features", name: "Services" },
      { href: "/#pricing", name: "Tarifs" },
      { href: "/#testimonials", name: "Témoignages" },
    ],
  },
  {
    label: "Contact",
    items: [
      { href: socialIcons.find(icon => icon.label === "Linkedin")?.href || "", name: "Linkedin", external: true },
      { href: socialIcons.find(icon => icon.label === "Facebook")?.href || "", name: "Facebook", external: true },
      { href: socialIcons.find(icon => icon.label === "Twitter")?.href || "", name: "Twitter", external: true },
      { href: socialIcons.find(icon => icon.label === "Instagram")?.href || "", name: "Instagram", external: true },
      { href: "/contact", name: "Contact" },
    ],
  },
  {
    label: "Legal",
    items: [
      { href: "/mentions-legales", name: "Mentions Légales" },
      { href: "/politique-de-confidentialite", name: "Politique de Confidentialité" },
    ],
  },
];