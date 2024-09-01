// src/config/data/stepsData.ts

export type StepData = {
  title: string;
  subtitle?: string;
  componentName: string; // Nom du composant en tant que chaîne
};

// Données des étapes
export const stepsData: StepData[] = [
  {
    title: "Étape 1 : Choisissez votre formule",
    subtitle: "",
    componentName: "Step1ChoosePackage",
  },
  {
    title: "Étape 2 : Sélectionnez les options",
    subtitle: "(facultatif)",
    componentName: "Step2SelectOptions",
  },
  {
    title: "Étape 3 : Informations supplémentaires",
    subtitle: "(facultatif)",
    componentName: "Step3AdditionalInfo",
  },
  {
    title: "Étape 4 : Informations personnelles",
    subtitle: "",
    componentName: "Step4PersonalDetails",
  },
  {
    title: "Étape 5 : Récapitulatif de votre demande",
    subtitle: "",
    componentName: "Step5ReviewSubmit",
  },
  {
    title: "Prendre un rendez-vous",
    subtitle: "",
    componentName: "CalendarIframe",
  },
];
