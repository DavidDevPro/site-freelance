import React, { useState, useEffect } from "react";
import { useForm, FormProvider, useWatch } from "react-hook-form"; // Importer useForm et FormProvider
import { StyledButton } from "@/components/StyledButton";
import { Step1Formule } from "./Step1Formule";
import { Step2Options } from "./Step2Options";
import { Step3SupplementalInfo } from "./Step3SupplementalInfo";
import { Step4PersonalInfo } from "./Step4PersonalInfo";
import { Step5Recap } from "./Step5Recap";
import { CalendarIframe } from "@/components/googleCalendar/CalendarIframe"; // Importer le composant pour le calendrier

interface QuestionnairePageProps {
  dataFormulas: Array<{
    name: string;
    options: Array<{ name: string; description?: string }>; // Le ? rend la description optionnelle
  }>;
}

const QuestionnairePage: React.FC<QuestionnairePageProps> = ({
  dataFormulas,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFormula, setSelectedFormula] = useState<string | null>(null);
  const [addPages, setAddPages] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // État pour gérer les messages d'erreur

  const methods = useForm(); // Initialiser useForm

  const watchedPageCount = useWatch({
    control: methods.control,
    name: "pageCount", // Surveiller la valeur de pageCount
  });

  useEffect(() => {
    if (watchedPageCount <= 5 && errorMessage) {
      setErrorMessage(null); // Effacer l'erreur lorsque la valeur de pageCount est modifiée et devient valide
    }
  }, [watchedPageCount, errorMessage]);

  const nextStep = async () => {
    if (currentStep === 0 && !selectedFormula) {
      setErrorMessage("Veuillez choisir une formule !");
      return;
    }

    // Vérifier si on est à l'étape 2 et si la valeur de pageCount est supérieure à 5
    if (currentStep === 1 && methods.getValues("pageCount") > 5) {
      setErrorMessage(
        "Le nombre de pages supplémentaires ne peut pas être supérieur à 5."
      );
      return;
    }

    const isValid = await methods.trigger(); // Valider les champs
    if (isValid) {
      if (selectedFormula === "Prendre un rendez-vous" && currentStep === 0) {
        setCurrentStep(steps.length - 1); // Aller directement à l'étape "Prendre un rendez-vous"
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
      setCurrentStep(0); // Revenir à l'étape 0 depuis "Prendre un rendez-vous"
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
      <div className="max-w-full mx-auto pt-12 pb-6 px-4">
        <div className="flex justify-center items-end max-w-full mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-center ${
                index < steps.length - 1 ? "mr-8" : ""
              }`}
            >
              <h6
                className={`text-base font-bold mb-2 text-center ${
                  currentStep >= index
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </h6>
              <div className="flex items-center w-full">
                <div
                  className={`w-8 h-8 shrink-0 ${
                    currentStep >= index ? "bg-primary" : "bg-muted"
                  } p-1.5 flex items-center justify-center rounded-full`}
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
                    <span className="w-3 h-3 bg-background rounded-full"></span>
                  )}
                </div>
                {/* Barre en dessous de chaque étape */}
                {index < steps.length && (
                  <div
                    className={`flex-grow h-1 ${
                      currentStep >= index ? "bg-primary" : "bg-muted"
                    }`}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`w-full mx-auto mt-8 ${
            currentStep === 5 ? "max-w-5xl" : "max-w-3xl"
          }`}
        >
          <div className="border-b pb-3 mb-4">
            <h2 className="tracking-tight text-lg md:text-xl font-semibold">
              {steps[currentStep].title}{" "}
              <span className="font-normal">{steps[currentStep].subtitle}</span>
            </h2>
          </div>
          <div className="mb-6 w-full mx-auto">
            {steps[currentStep].content}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <StyledButton
                variant="secondary"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Précédent
              </StyledButton>
              {currentStep < steps.length - 2 && (
                <StyledButton variant="primary" onClick={nextStep}>
                  Suivant
                </StyledButton>
              )}
              {currentStep === steps.length - 2 && ( // Vérifie si on est à l'étape 5
                <StyledButton
                  variant="primary"
                  onClick={() => alert("Formulaire soumis !")}
                >
                  Soumettre
                </StyledButton>
              )}
            </div>
            <div className="flex justify-center mt-4">
              {errorMessage && (
                <p className="text-red-500 font-semibold text-lg">
                  {errorMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default QuestionnairePage;
