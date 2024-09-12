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
      "Je conçois des sites web uniques pensés avec soin et minutie pour répondre parfaitement à vos besoins spécifiques, qu'ils soient personnels ou professionnels.",
      "Je veille à ce que chaque projet soit exécuté avec un grand souci du détail, garantissant une expérience utilisateur intuitive et un design en parfaite harmonie avec votre identité de marque.",
    ],
    link: 'developpement-sites-vitrine',
    pro: ProService.NO,
    subtitleDetails: 'Transformez votre vision en une présence en ligne captivante.',
    descriptionDetails: [
      'Nous créons des sites vitrines modernes et élégants qui captivent l\'attention de vos visiteurs tout en reflétant l\'essence de votre marque.',
      'Chaque site est conçu pour être totalement responsive, offrant une expérience utilisateur optimale sur tous les appareils, du smartphone au grand écran.',
      'Nous mettons un point d\'honneur à optimiser votre site pour la performance, la vitesse et le référencement, vous garantissant une visibilité accrue sur le web.',
      'Nos solutions sont entièrement personnalisées, pour que votre site soit unique, comme votre entreprise.',
      'Nos experts en développement web travaillent avec vous à chaque étape pour s\'assurer que votre site répond à vos attentes et objectifs commerciaux.',
      'Nous intégrons des fonctionnalités interactives et engageantes pour maximiser l\'engagement des utilisateurs.',
      'Votre site web est livré clé en main, prêt à attirer de nouveaux clients et à développer votre activité.',
      'Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider à créer un site vitrine qui se démarque.'
    ],
  },
  {
    title: "Hébergement et SEO",
    description: [
      "Je vous propose des solutions d'hébergement sécurisées et efficaces, soigneusement associées à des techniques SEO avancées pour garantir une performance optimale de votre site web.",
      "Renforcez votre visibilité en ligne grâce à mes services d'optimisation pour les moteurs de recherche soigneusement élaborés pour maximiser votre présence et votre influence de manière stratégique.",
    ],
    link: 'seo-hebergement',
    pro: ProService.YES,
    subtitleDetails: "Boostez votre présence en ligne avec nos solutions de SEO et d'hébergement.",
    descriptionDetails: [
      'Nous fournissons des services SEO complets pour améliorer votre visibilité sur les moteurs de recherche et attirer plus de trafic qualifié.',
      'Notre équipe d\'experts optimise chaque aspect de votre site, y compris le contenu, les mots-clés, les balises et la structure technique.',
      'Nous collaborons avec des hébergeurs français renommés comme OVH pour offrir des solutions d\'hébergement fiables et sécurisées.',
      'Nos solutions d\'hébergement garantissent une haute disponibilité, des sauvegardes régulières et un support technique réactif.',
      'Nous analysons les performances de votre site pour identifier les opportunités d\'amélioration et assurer des temps de chargement rapides.',
      'Nos services incluent des audits SEO réguliers et des rapports détaillés pour suivre votre progression et ajuster les stratégies si nécessaire.',
      'Nous vous aidons à rester à jour avec les meilleures pratiques SEO et à vous adapter aux changements d\'algorithmes des moteurs de recherche.',
      'Contactez-nous pour discuter de votre stratégie SEO et découvrir comment nous pouvons vous aider à atteindre vos objectifs en ligne.'
    ],
  },
  {
    title: "Performance et optimisation",
    description: [
      "Je perfectionne la vitesse et les performances de votre site, assurant ainsi une expérience utilisateur fluide et réactive méticuleusement élaborée pour satisfaire les normes les plus rigoureuses.",
      "Grâce à des temps de chargement optimisés et à une architecture technique de premier ordre, je prépare votre site à briller dans un environnement numérique hautement performant.",
    ],
    link: 'analyse-performance',
    pro: ProService.NO,
    subtitleDetails: 'Optimisez votre site pour une performance maximale.',
    descriptionDetails: [
      'Nous réalisons une analyse approfondie de votre site pour identifier les problèmes de performance et les opportunités d\'amélioration.',
      'Nos experts vous fournissent un rapport détaillé avec des recommandations concrètes pour améliorer la vitesse, la sécurité et l\'expérience utilisateur.',
      'Nous utilisons des outils de pointe pour mesurer la rapidité de chargement, l\'accessibilité et l\'optimisation SEO.',
      'En améliorant la performance de votre site, vous augmentez non seulement la satisfaction des utilisateurs, mais aussi votre classement sur les moteurs de recherche.',
      'Nos stratégies d\'amélioration comprennent l\'optimisation des images, le minification des ressources, et la mise en cache pour réduire les temps de chargement.',
      'Nous travaillons avec vous pour prioriser les améliorations qui auront le plus grand impact sur vos objectifs commerciaux.',
      'Nos services incluent un suivi continu et des ajustements réguliers pour maintenir la performance de votre site au top niveau.',
      'Contactez-nous pour démarrer une analyse de performance complète et découvrez comment nous pouvons optimiser votre site pour de meilleurs résultats.'
    ],
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