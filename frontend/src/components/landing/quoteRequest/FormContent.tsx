import React from 'react';
import { Step } from './QuoteRequestSteps';

interface FormContentProps {
  steps: Step[];
  currentStep: number;
}

export const FormContent: React.FC<FormContentProps> = ({ steps, currentStep }) => (
  <div className={`w-full mx-auto mt-4 sm:mt-6 ${currentStep === 5 ? "max-w-full sm:max-w-5xl" : "max-w-full sm:max-w-3xl"}`}>
    <div className="border-b pb-2 sm:pb-3 mb-4">
      <h2 className="tracking-tight text-sm sm:text-base md:text-lg font-semibold">
        {steps[currentStep].title}{" "} <span className="font-normal">{steps[currentStep].subtitle}</span>
      </h2>
    </div>
    <div className="mb-4 sm:mb-6 w-full mx-auto">
      {steps[currentStep].content}
    </div>
  </div>
);
