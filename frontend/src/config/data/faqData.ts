// src/data/faqData.ts

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQList: FAQProps[] = [
  {
    question: "Quels sont vos services de développement web sur mesure ?",
    answer:
      "Je propose la création de sites web sur mesure, optimisés pour les performances, le SEO, et l'accessibilité, en suivant les meilleures pratiques du développement moderne.",
    value: "item-1",
  },
  {
    question: "Offrez-vous des services d'optimisation SEO ?",
    answer:
      "Oui, chaque site que je développe inclut une stratégie SEO pour améliorer votre visibilité sur les moteurs de recherche et attirer plus de visiteurs qualifiés.",
    value: "item-2",
  },
  {
    question: "Travaillez-vous en méthode agile avec des réunions régulières ?",
    answer:
      "Absolument. J'utilise la méthode agile pour rester aligné sur vos besoins, avec des réunions régulières pour ajuster le projet en fonction de vos retours.",
    value: "item-3",
  },
  {
    question: "Quelles sont vos pratiques pour garantir l'accessibilité ?",
    answer:
      "Tous mes projets respectent les standards d'accessibilité web (WCAG) pour garantir que vos sites soient utilisables par tous, y compris les personnes en situation de handicap.",
    value: "item-4",
  },
  {
    question: "Proposez-vous des services d'hébergement et de maintenance ?",
    answer:
      "Oui, je propose des solutions d'hébergement performantes et une maintenance régulière pour assurer que votre site reste sécurisé et à jour.",
    value: "item-5",
  },
];