// src/config/data/servicesData.ts

import { LuInfo } from "react-icons/lu";

export interface ServiceProps {
  title: string;
  description: string[];
  link: string;
  pro?: ProService;
  subtitleDetails: string;
  descriptionDetails: string[];
  
}
export enum ProService {
  YES = 1,
  NO = 0,
}

export const serviceList: ServiceProps[] = [
  {
    title: "Sites web sur mesure",
    description: [
      "Nous créons des sites web uniques, conçus spécifiquement pour répondre aux besoins de votre entreprise.",
      "Chaque projet est réalisé avec un souci du détail, garantissant une interface utilisateur intuitive et un design qui reflète parfaitement votre identité de marque.",
    ],
    link: "developpement-sites-vitrine",
    pro: ProService.NO,
    subtitleDetails: 'Phrase de description détaillée',
    descriptionDetails: ['Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'],
   
  },
  {
    title: "Hébergement et SEO",
    description: [
      "Nos solutions d'hébergement sécurisées et performantes s'associent à des stratégies SEO avancées.",
      "Maximisez votre visibilité en ligne avec nos services d'optimisation pour les moteurs de recherche.",
    ],
    link: "refonte-sites",
    pro: ProService.NO,
    subtitleDetails: 'Phrase de description détaillée',
    descriptionDetails: ['Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'],
  },
  {
    title: "Performance et optimisation",
    description: [
      "Nous optimisons la vitesse et les performances de votre site pour offrir une expérience utilisateur fluide et rapide.",
      "Avec des temps de chargement réduits et une architecture technique de qualité, votre site sera prêt à exceller dans un environnement numérique concurrentiel.",
    ],
    link: "analyse-performance",
    pro: ProService.NO,
    subtitleDetails: 'Phrase de description détaillée',
    descriptionDetails: ['Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.','Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.', 'Nous serions ravis de discuter de votre projet. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.'],
  },
];

// Utilisation d'un objet de mappage pour les icônes
export const iconMap = {
  info: LuInfo,
};

export const tagList: string[] = [
  "Sites web sur mesure",
  "Création de sites web",
  "Refonte de sites web",
  "Design Responsive",
  "Fonctionnalités Riches",
  "Méthode Agile",
  "SEO",
  "Hébergement",
];