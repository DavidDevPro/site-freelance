import React from 'react';
import { PrimaryButton } from '@/components/shared';
import { LuArrowRightCircle, LuArrowLeftCircle } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";

interface FormFooterProps {
  currentStep: number;
  stepsLength: number;
  prevStep: () => void;
  nextStep: () => void;
  handleSubmit: () => void;
  errorMessage: string | null;
}

export const FormFooter: React.FC<FormFooterProps> = ({ currentStep, stepsLength, prevStep, nextStep, handleSubmit, errorMessage }) => (
  <div>
    <div className="flex flex-col sm:flex-row justify-between">
      <PrimaryButton variant="secondary" onClick={prevStep} disabled={currentStep === 0} className="mb-4 sm:mb-0">
        <LuArrowLeftCircle className="mr-2 h-6 w-6" />
        Précédent
      </PrimaryButton>
      {currentStep < stepsLength - 2 && (
        <PrimaryButton variant="primary" onClick={nextStep}>
          Suivant
          <LuArrowRightCircle className="ml-2 h-6 w-6" />
        </PrimaryButton>
      )}
      {currentStep === stepsLength - 2 && (
        <PrimaryButton variant="primary" onClick={handleSubmit}>
          Soumettre
          <FaPaperPlane className="ml-2 h-6 w-6" />
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
