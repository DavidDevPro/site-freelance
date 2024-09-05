import React, { useState, useEffect } from "react";
import { FormProvider, useWatch, UseFormReturn } from "react-hook-form";
import { validateFileName } from "@/lib/utils";
import { createProposalRequest } from "@/lib/api/proposalRequestApi"; // Import API functions
import {
  showProposalError,
  showProposalSuccess,
} from "@/notifications/toastMessages";
import {
  QuoteRequestHeader,
  QuoteRequestContent,
  QuoteRequestFooter,
  getQuoteRequestSteps,
  Step,
} from "@/components/landing/quoteRequest";
interface QuoteRequestFormProps {
  dataFormulas: Array<{
    name: string;
    options: Array<{ name: string; description?: string }>;
  }>;
  closeModal: () => void; // Recevoir closeModal en tant que prop
  methods: UseFormReturn; // Typage correct pour les methods
}
export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({
  dataFormulas,
  closeModal,
  methods,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);
  const [addPages, setAddPages] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const watchedPageCount = useWatch({
    control: methods.control,
    name: "pageCount",
  });
  useEffect(() => {
    if (watchedPageCount >= 1 && watchedPageCount <= 5) {
      setErrorMessage(null);
    }
  }, [watchedPageCount]);
  useEffect(() => {
    const handleFileCommentValid = () => {
      setErrorMessage(null);
    };
    window.addEventListener("fileCommentValid", handleFileCommentValid);
    return () => {
      window.removeEventListener("fileCommentValid", handleFileCommentValid);
    };
  }, []);
  const handleSelectFormula = (formula: string) => {
    setSelectedFormula(formula);
    setErrorMessage(null);
    if (formula === "Prendre un rendez-vous") {
      setCurrentStep(steps.length - 1); // Directement vers la dernière étape
    }
  };
  const steps: Step[] = getQuoteRequestSteps({
    dataFormulas,
    handleSelectFormula,
    addPages,
    setAddPages,
    pageCount,
    setPageCount,
    selectedFormula,
  });
  const nextStep = async () => {
    if (currentStep === 0 && !selectedFormula) {
      setErrorMessage("Veuillez choisir une formule !");
      return;
    }
    if (currentStep === 1) {
      if (methods.getValues("pageCount") === 0) {
        setErrorMessage("Le nombre de pages supplémentaires est égal à 0.");
        return;
      } else if (methods.getValues("pageCount") > 5) {
        setErrorMessage(
          "Le nombre de pages supplémentaires ne peut pas être supérieur à 5."
        );
        return;
      }
    }
    if (currentStep === 2) {
      const fileInputs = methods.getValues([
        "fileInput0",
        "fileInput1",
        "fileInput2",
      ]);
      const fileComments = methods.getValues([
        "fileComment0",
        "fileComment1",
        "fileComment2",
      ]);
      for (let i = 0; i < fileInputs.length; i++) {
        if (fileInputs[i]) {
          if (!fileComments[i] || fileComments[i].trim() === "") {
            setErrorMessage(
              `Vous devez définir un nom pour le fichier ${i + 1}.`
            );
            return;
          }
          const validation = validateFileName(fileComments[i]);
          if (validation !== true) {
            setErrorMessage(`Erreur pour le fichier ${i + 1}: ${validation}`);
            return;
          }
        }
      }
    }
    const isValid = await methods.trigger();
    if (isValid) {
      if (selectedFormula === "Prendre un rendez-vous" && currentStep === 0) {
        setCurrentStep(steps.length - 1);
      } else {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      }
    }
  };
  const prevStep = () => {
    if (
      currentStep === steps.length - 1 &&
      selectedFormula === "Prendre un rendez-vous"
    ) {
      setCurrentStep(0);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 0));
    }
  };
  const handleSubmit = async () => {
    try {
      const values = methods.getValues();
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value instanceof FileList) {
          Array.from(value).forEach((file) => {
            formData.append(key, file);
          });
        } else if (value !== undefined && value !== null) {
          if (key.startsWith("option_")) {
            const optionName = key.replace("option_", "");
            formData.append(`options[${optionName}]`, value as string);
          } else {
            formData.append(key, value as string);
          }
        }
      });
      await createProposalRequest(formData);
      showProposalSuccess();
      // Réinitialiser le formulaire après soumission réussie
      methods.reset();
      closeModal();
    } catch {
      showProposalError();
    }
  };
  return (
    <FormProvider {...methods}>
      <div className="sm:max-w-full sm:w-full mx-auto w-11/12 pt-4 pb-4 px-1 sm:pt-6 sm:pb-6 sm:px-4 md:pt-12 md:pb-6 md:px-4">
        <QuoteRequestHeader steps={steps} currentStep={currentStep} />
        <QuoteRequestContent steps={steps} currentStep={currentStep} />
        <QuoteRequestFooter
          currentStep={currentStep}
          stepsLength={steps.length}
          prevStep={prevStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
      </div>
    </FormProvider>
  );
};
