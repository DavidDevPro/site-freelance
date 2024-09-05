import React from "react";
import {
  Step1ChoosePackage,
  Step2SelectOptions,
  Step3AdditionalInfo,
  Step4PersonalDetails,
  Step5ReviewSubmit,
} from "@/components/landing/quoteRequest";
import { CalendarIframe } from "@/components/shared";

// Définir les types pour les props nécessaires aux étapes
interface QuoteRequestStepsProps {
  dataFormulas: Array<{
    name: string;
    options: Array<{ name: string; description?: string }>;
  }>;
  handleSelectFormula: (formula: string) => void;
  addPages: boolean;
  setAddPages: React.Dispatch<React.SetStateAction<boolean>>;
  pageCount: number;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  selectedFormula: string | null;
}

// Définir les types pour les étapes
export interface Step {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export const getQuoteRequestSteps = ({
  dataFormulas,
  handleSelectFormula,
  addPages,
  setAddPages,
  pageCount,
  setPageCount,
  selectedFormula,
}: QuoteRequestStepsProps): Step[] => [
  {
    title: "Étape 1 : Choisissez votre formule",
    subtitle: "",
    content: (
      <Step1ChoosePackage
        dataFormulas={dataFormulas}
        onSelectFormula={handleSelectFormula}
      />
    ),
  },
  {
    title: "Étape 2 : Sélectionnez les options",
    subtitle: "(facultatif)",
    content: (
      <Step2SelectOptions
        addPages={addPages}
        setAddPages={setAddPages}
        pageCount={pageCount}
        setPageCount={setPageCount}
        selectedFormula={selectedFormula}
        dataFormulas={dataFormulas}
      />
    ),
  },
  {
    title: "Étape 3 : Informations supplémentaires",
    subtitle: "(facultatif)",
    content: <Step3AdditionalInfo />,
  },
  {
    title: "Étape 4 : Informations personnelles",
    subtitle: "",
    content: <Step4PersonalDetails />,
  },
  {
    title: "Étape 5 : Récapitulatif de votre demande",
    subtitle: "",
    content: (
      <Step5ReviewSubmit
        selectedFormula={selectedFormula}
        dataFormulas={dataFormulas}
      />
    ),
  },
  {
    title: "Prendre un rendez-vous",
    subtitle: "",
    content: <CalendarIframe />,
  },
];
