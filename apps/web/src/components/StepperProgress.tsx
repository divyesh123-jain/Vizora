'use client';

import React from 'react';

export interface StepItem {
  number: number;
  label: string;
  short: string;
}

interface StepperProgressProps {
  steps: StepItem[];
  currentStep: number;
  onSelectStep?: (step: number) => void;
}

export const StepperProgress: React.FC<StepperProgressProps> = ({
  steps,
  currentStep,
  onSelectStep,
}) => {
  return (
    <div className="w-full space-y-2.5 font-mono">
      {/* Progress Line Strip */}
      <div className="grid grid-cols-6 gap-1.5 h-1.5">
        {steps.map((step) => {
          const isComplete = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <div
              key={step.number}
              onClick={() => {
                if (onSelectStep && step.number <= currentStep) {
                  onSelectStep(step.number);
                }
              }}
              className={`h-full rounded-[1px] transition-colors ${
                step.number <= currentStep ? 'cursor-pointer' : 'cursor-default'
              } ${
                isComplete
                  ? 'bg-[#c2872e]' // waypoint filled
                  : isCurrent
                  ? 'bg-[#18241b] dark:bg-[#e0e4dc]' // active
                  : 'bg-[#18241b]/10 dark:bg-white/10' // datum outline
              }`}
              title={`Step ${step.number}: ${step.label}`}
            />
          );
        })}
      </div>

      {/* Step Numbers & Labels */}
      <div className="grid grid-cols-6 gap-1 text-[11px] text-[#60685c]">
        {steps.map((step) => {
          const isComplete = step.number < currentStep;
          const isCurrent = step.number === currentStep;

          return (
            <button
              key={step.number}
              onClick={() => {
                if (onSelectStep && step.number <= currentStep) {
                  onSelectStep(step.number);
                }
              }}
              disabled={step.number > currentStep}
              className={`text-left truncate transition-colors focus-visible:outline-2 focus-visible:outline-[#c2872e] ${
                isCurrent
                  ? 'text-[#18241b] dark:text-[#f1f5ee] font-bold'
                  : isComplete
                  ? 'text-[#c2872e] hover:text-[#18241b] dark:hover:text-[#f1f5ee]'
                  : 'text-[#60685c]/50 cursor-not-allowed'
              }`}
            >
              <span className="font-bold mr-1">0{step.number}</span>
              <span className="hidden sm:inline">{step.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
