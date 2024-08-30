import React, { useState, useEffect } from "react";
import { FormProvider, useWatch, UseFormReturn } from "react-hook-form";
import { StyledButton, CalendarIframe } from "@/components/shared";
import {
  Step1Formule,
  Step2Options,
  Step3SupplementalInfo,
  Step4PersonalInfo,
  Step5Recap,
} from "@/components/landing/questionnaire";
import { validateFileName } from "@/lib/utils";
import { showProposalSuccess, showProposalError } from "@/lib/utils/toastUtils";
import { createProposalRequest } from "@/services/proposalRequestApi"; // Import API functions

interface QuestionnairePageProps {
  dataFormulas: Array<{
    name: string;
    options: Array<{ name: string; description?: string }>;
  }>;

  closeModal: () => void; // Recevoir closeModal en tant que prop
  methods: UseFormReturn; // Typage correct pour les methods
}

export const QuestionnairePage: React.FC<QuestionnairePageProps> = ({
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

  const handleSelectFormula = (formula: string) => {
    setSelectedFormula(formula);
    setErrorMessage(null);

    if (formula === "Prendre un rendez-vous") {
      setCurrentStep(5);
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

  const steps = [
    {
      title: "Étape 1 : Choisissez votre formule",
      subtitle: "",
      content: (
        <Step1Formule
          dataFormulas={dataFormulas}
          onSelectFormula={handleSelectFormula}
        />
      ),
    },
    {
      title: "Étape 2 : Sélectionnez les options",
      subtitle: "(facultatif)",
      content: (
        <Step2Options
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
      content: <Step3SupplementalInfo />,
    },
    {
      title: "Étape 4 : Informations personnelles",
      subtitle: "",
      content: <Step4PersonalInfo />,
    },
    {
      title: "Étape 5 : Récapitulatif de votre demande",
      subtitle: "",
      content: (
        <Step5Recap
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

  return (
    <FormProvider {...methods}>
      <div className="max-w-full mx-auto pt-4 pb-4 px-3 sm:pt-6 sm:pb-6 sm:px-4 md:pt-12 md:pb-6 md:px-4">
        <div className="flex flex-col lg:flex-row justify-center items-end max-w-full mx-auto mb-4 sm:mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-center ${
                index < steps.length - 1 ? "mb-2 sm:mr-4 sm:mb-0" : ""
              }`}
            >
              <h6
                className={`text-[10px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg font-bold mb-1 sm:mb-2 text-center ${
                  currentStep >= index
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </h6>
              <div className="flex items-center w-full">
                <div
                  className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 shrink-0 ${
                    currentStep >= index ? "bg-primary" : "bg-muted"
                  } p-1 flex items-center justify-center rounded-full`}
                >
                  {currentStep >= index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full fill-primary-foreground"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                    </svg>
                  ) : (
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-background rounded-full"></span>
                  )}
                </div>
                {index < steps.length && (
                  <div
                    className={`flex-grow h-0.5 sm:h-1 md:h-1.5 ${
                      currentStep >= index ? "bg-primary" : "bg-muted"
                    }`}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`w-full mx-auto mt-4 sm:mt-6 ${
            currentStep === 5
              ? "max-w-full sm:max-w-5xl"
              : "max-w-full sm:max-w-3xl"
          }`}
        >
          <div className="border-b pb-2 sm:pb-3 mb-4">
            <h2 className="tracking-tight text-sm sm:text-base md:text-lg font-semibold">
              {steps[currentStep].title}{" "}
              <span className="font-normal">{steps[currentStep].subtitle}</span>
            </h2>
          </div>
          <div className="mb-4 sm:mb-6 w-full mx-auto">
            {steps[currentStep].content}
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            <StyledButton
              variant="secondary"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="mb-4 sm:mb-0"
            >
              Précédent
            </StyledButton>
            {currentStep < steps.length - 2 && (
              <StyledButton variant="primary" onClick={nextStep}>
                Suivant
              </StyledButton>
            )}
            {currentStep === steps.length - 2 && (
              <StyledButton variant="primary" onClick={handleSubmit}>
                Soumettre
              </StyledButton>
            )}
          </div>
          {errorMessage && (
            <p className="text-center text-red-500 font-semibold text-xs sm:text-sm md:text-base mt-4">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </FormProvider>
  );
};
