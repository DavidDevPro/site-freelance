import React from "react";
import { PrimaryButton } from "@/components/shared";
import { LuArrowRightCircle, LuArrowLeftCircle } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";

interface QuoteRequestFooterProps {
  currentStep: number;
  stepsLength: number;
  prevStep: () => void;
  nextStep: () => void;
  handleSubmit: () => void;
  errorMessage: string | null;
}

export const QuoteRequestFooter: React.FC<QuoteRequestFooterProps> = ({
  currentStep,
  stepsLength,
  prevStep,
  nextStep,
  handleSubmit,
  errorMessage,
}) => (
  <div>
    <div className="flex flex-col mb-4 mt-14 sm:flex-row justify-around">
      <PrimaryButton
        variant="secondary"
        onClick={prevStep}
        disabled={currentStep === 0}
        className="mb-4 sm:mb-0 w-1/2 sm:w-auto mx-auto sm:mx-0 tracking-wide font-bold"
      >
        <LuArrowLeftCircle className="mr-2 h-6 w-6 shrink-0" />
        Précédent
      </PrimaryButton>
      {currentStep < stepsLength - 2 && (
        <PrimaryButton
          className="w-1/2 sm:w-auto mx-auto sm:mx-0 tracking-wide font-bold"
          variant="primary"
          onClick={nextStep}
        >
          Suivant
          <LuArrowRightCircle className="ml-2 h-6 w-6 shrink-0" />
        </PrimaryButton>
      )}
      {currentStep === stepsLength - 2 && (
        <PrimaryButton
          className="w-1/2 sm:w-auto mx-auto sm:mx-0 tracking-wide font-bold"
          variant="primary"
          onClick={handleSubmit}
        >
          Soumettre
          <FaPaperPlane className="ml-2 h-6 w-6 shrink-0" />
        </PrimaryButton>
      )}
    </div>
    {errorMessage && (
      <p className="text-center text-red-500 font-semibold text-xs sm:text-sm md:text-base mt-4">
        {errorMessage}
      </p>
    )}
  </div>
);
