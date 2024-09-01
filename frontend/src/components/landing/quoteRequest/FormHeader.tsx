import React from 'react';
import { Step } from './QuoteRequestSteps';

interface FormHeaderProps {
  steps: Step[];
  currentStep: number;
}

export const FormHeader: React.FC<FormHeaderProps> = ({ steps, currentStep }) => (
  <div className="flex flex-col lg:flex-row justify-center items-end max-w-full mx-auto mb-4 sm:mb-8">
    {steps.map((step, index) => (
      <div key={index} className={`w-full flex flex-col items-center ${index < steps.length - 1 ? "mb-2 sm:mr-4 sm:mb-0" : ""}`}>
        <h6 className={`text-[10px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg font-bold mb-1 sm:mb-2 text-center ${currentStep >= index ? "text-primary" : "text-muted-foreground"}`}>
          {step.title}
        </h6>
        <div className="flex items-center w-full">
          <div className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 shrink-0 ${currentStep >= index ? "bg-primary" : "bg-muted"} p-1 flex items-center justify-center rounded-full`}>
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
            <div className={`flex-grow h-0.5 sm:h-1 md:h-1.5 ${currentStep >= index ? "bg-primary" : "bg-muted"}`}></div>
          )}
        </div>
      </div>
    ))}
  </div>
);
