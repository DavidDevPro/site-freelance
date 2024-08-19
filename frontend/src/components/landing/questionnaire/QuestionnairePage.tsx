import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form"; // Importer useForm et FormProvider
import { Button } from "@/components/ui/button";
import { StyledButton } from "@/components/StyledButton";
import { Step1Formule } from "./Step1Formule";
import { Step2Options } from "./Step2Options";
import { Step3SupplementalInfo } from "./Step3SupplementalInfo";
import { Step4PersonalInfo } from "./Step4PersonalInfo";
import { CalendarIframe } from "../../googleCalendar/CalendarIframe"; // Importer le composant pour le calendrier

const QuestionnairePage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [addPages, setAddPages] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const methods = useForm(); // Initialiser useForm

  const steps = [
    {
      title: "Étape 1 : Choisissez votre formule",
      content: <Step1Formule setCurrentStep={setCurrentStep} />, // Passer setCurrentStep pour gérer la navigation
    },
    {
      title: "Étape 2 : Sélectionnez les options",
      content: (
        <Step2Options
          addPages={addPages}
          setAddPages={setAddPages}
          pageCount={pageCount}
          setPageCount={setPageCount}
        />
      ),
    },
    {
      title: "Étape 3 : Informations supplémentaires",
      content: <Step3SupplementalInfo />,
    },
    {
      title: "Étape 4 : Informations personnelles",
      content: <Step4PersonalInfo />,
    },
    {
      title: "Prendre un rendez-vous",
      content: <CalendarIframe />, // Nouvelle étape pour le calendrier
    },
  ];

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <FormProvider {...methods}>
      {" "}
      {/* Envelopper avec FormProvider */}
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="flex justify-center items-end max-w-screen-lg mx-auto mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`w-full ${index < steps.length - 1 ? "mr-8" : ""}`}
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
                  className={`w-8 h-8 shrink-0 mx-[-1px] ${
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
                {index < steps.length - 1 && (
                  <div
                    className={`w-full h-1 ${
                      currentStep >= index ? "bg-primary" : "bg-muted"
                    }`}
                  ></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
        </div>
        <div className="mb-6">{steps[currentStep].content}</div>
        <div className="flex justify-between">
          <Button
            variant="secondary"
            onClick={prevStep}
            disabled={currentStep === 0}
          >
            Précédent
          </Button>
          {currentStep < steps.length - 1 ? (
            <StyledButton variant="primary" onClick={nextStep}>
              Suivant
            </StyledButton>
          ) : (
            <StyledButton
              variant="primary"
              onClick={() => alert("Formulaire soumis !")}
            >
              Soumettre
            </StyledButton>
          )}
        </div>
      </div>
    </FormProvider>
  );
};

export default QuestionnairePage;
