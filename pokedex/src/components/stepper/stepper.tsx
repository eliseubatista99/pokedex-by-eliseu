import { CSSProperties } from "react";

export interface StepperProps {
  numberOfSteps: number;
  currentStep: number;
  containerProps?: CSSProperties;
}

export const Stepper = ({
  numberOfSteps,
  currentStep,
  containerProps,
}: StepperProps) => {
  const stepsJSX = () => {
    const steps: JSX.Element[] = [];

    for (let i = 0; i < numberOfSteps; i++) {
      if (i === currentStep) {
        steps.push(
          <div
            style={{
              width: "28px",
              height: "9px",
              borderRadius: "11px",
              background: "#173EA5",
            }}
          />
        );
      } else {
        steps.push(
          <div
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: "#4565B7",
              opacity: 0.25,
            }}
          />
        );
      }
    }
    return steps;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "45px",
        ...containerProps,
      }}
    >
      {stepsJSX()}
    </div>
  );
};