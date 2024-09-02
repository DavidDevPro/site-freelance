// config/data/packagesData.ts

// Définir les types pour les données de package
type PackageFeature = {
  name: string;
  description: string;
};

type PackageOption = string;

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
    features: [
      { 
        name: "Type de site : Vitrine", 
        description: "Un site vitrine conçu pour présenter votre activité ou vos services de manière simple et élégante. Idéal pour ceux qui souhaitent une présence en ligne sans fonctionnalités complexes."
      },
      { 
        name: "Nombre de pages incluses : 3",
        description: "Trois pages clés pour structurer l'information de manière concise, comme une page d'accueil, une page de services et une page de contact."
      },
      { 
        name: "Page de contact : Simple",
        description: "Un formulaire de contact fonctionnel et sécurisé pour permettre aux visiteurs de vous joindre facilement."
      },
      { 
        name: "SEO : Essentiel",
        description: "Optimisation basique pour les moteurs de recherche, afin de garantir que votre site soit bien indexé et visible sur Google."
      },
      { 
        name: "Cycle(s) de révision : 1",
        description: "Une révision gratuite pour ajuster le contenu ou la mise en page après la livraison du site, selon vos retours."
      },
      { 
        name: "Support par : email",
        description: "Assistance technique par email pour répondre à vos questions et résoudre d'éventuels problèmes."
      }
    ],
    options: 
      [ 
      "Ajout de pages supplémentaires pour étendre votre site.",
      "Référencement Local pour améliorer votre visibilité dans les résultats de recherche géolocalisés.",
      "Google My Business pour gérer la présence de votre entreprise sur Google.",
      "Suivi Analytics pour analyser les performances de votre site.",
      "Révision des contenus tous les 6 mois pour garantir leur pertinence."
    ],
  },
  {
    name: 'Premium',
    description: "Idéal pour les projets de taille moyenne cherchant un impact significatif",
    features: [
      { 
        name: "Type de site : Professionnel", 
        description: "Un site web conçu pour les entreprises cherchant une présence en ligne sophistiquée avec des fonctionnalités avancées. Parfait pour les projets de taille moyenne qui nécessitent une présentation professionnelle et un impact notable." 
      },
      { 
        name: "Nombre de pages incluses : 5", 
        description: "Cinq pages essentielles couvrant tous les aspects de votre activité, incluant une page d'accueil, une page de services, une page de contact, une page d'équipe ou d'entreprise, et une page de témoignages ou d'études de cas." 
      },
      { 
        name: "Page de contact : Professionnel", 
        description: "Un formulaire de contact avancé avec des champs personnalisés et une intégration de réponse automatique pour améliorer l'expérience utilisateur et faciliter les interactions commerciales." 
      },
      { 
        name: "SEO : Premium", 
        description: "Optimisation approfondie pour les moteurs de recherche, incluant des recherches de mots-clés stratégiques, des optimisations techniques, et des analyses concurrentielles pour maximiser la visibilité de votre site sur Google." 
      },
      { 
        name: "Cycle(s) de révision : 2", 
        description: "Deux révisions incluses pour ajuster le contenu, la mise en page, ou d'autres aspects du site selon vos besoins et retours, garantissant que le résultat final soit à la hauteur de vos attentes." 
      },
      { 
        name: "Support par : email et téléphone", 
        description: "Assistance technique via email et téléphone, permettant une communication rapide pour résoudre tout problème ou répondre à vos questions en temps réel." 
      },
      { 
        name: "Accès administrateur pour gestion des contenus", 
        description: "Un accès administrateur complet pour que vous puissiez gérer, ajouter, modifier ou supprimer vos contenus en toute autonomie." 
      },
      { 
        name: "Intégration API", 
        description: "Intégration API basique pour connecter votre site à d'autres services ou applications, offrant des fonctionnalités supplémentaires et des automatisations." 
      }
    ],
    options: 
      [ 
      "Ajout de pages supplémentaires pour étendre votre site.",
      "Référencement Local pour améliorer votre visibilité dans les résultats de recherche géolocalisés.",
      "Google My Business pour gérer la présence de votre entreprise sur Google.",
      "Suivi Analytics pour analyser les performances de votre site.",
      
    ],
  },  
  {
    name: 'Expert',
    description: "Pour les projets ambitieux nécessitant une expertise technique approfondie",
    features: [
      { 
        name: "Type de site : Professionnel", 
        description: "Un site web professionnel, robuste et évolutif, conçu pour les entreprises nécessitant une présence en ligne puissante et flexible, avec des capacités de personnalisation avancées et un développement sur mesure." 
      },
      { 
        name: "Nombre de pages incluses : 8", 
        description: "Huit pages complètes pour une couverture détaillée de votre entreprise, incluant des pages d'accueil, de services, de contact, de blog, de témoignages, de portfolio, d'équipe, et de FAQ, offrant une présentation exhaustive de vos offres et compétences." 
      },
      { 
        name: "Page de contact : Professionnel", 
        description: "Formulaire de contact avancé et sécurisé avec options de personnalisation, intégration de CRM et fonctionnalités de suivi, permettant une gestion efficace des leads et des demandes clients." 
      },
      { 
        name: "SEO : Expert", 
        description: "Optimisation SEO complète incluant des recherches avancées de mots-clés, des stratégies de contenu, des backlinks de qualité, et un suivi de performance SEO pour garantir une visibilité maximale et un classement élevé dans les résultats de recherche." 
      },
      { 
        name: "Cycle(s) de révision : Illimité", 
        description: "Révisions illimitées pour s'assurer que chaque détail du site correspond parfaitement à vos attentes et aux besoins de votre entreprise, offrant un ajustement continu pendant le processus de développement." 
      },
      { 
        name: "Support par : email, téléphone, et chat en direct", 
        description: "Support technique multicanal disponible par email, téléphone, et chat en direct, assurant une assistance immédiate et complète pour tous vos besoins techniques et stratégiques." 
      },
      { 
        name: "Accès Clients pour gestion des devis, factures, etc.", 
        description: "Portail client dédié permettant à vos clients de gérer leurs devis, factures, paiements, et documents en ligne, simplifiant la gestion et améliorant l'expérience client." 
      },
      { 
        name: "Intégration API avancée et performante", 
        description: "Intégration API avancée avec des fonctionnalités personnalisées, permettant des connexions robustes avec des applications tierces, des plateformes de gestion, ou des outils spécifiques à votre activité pour une automatisation et une interopérabilité optimales." 
      }
    ],
    options: 
      [ 
      "Ajout de pages supplémentaires pour étendre votre site.",
      
    ],
  }  
];
