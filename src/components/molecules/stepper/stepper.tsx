import { CSSProperties } from "react";

export interface StepperProps {
  numberOfSteps: number;
  currentStep: number;
  styles?: CSSProperties;
}

export const Stepper = ({
  numberOfSteps,
  currentStep,
  styles,
}: StepperProps) => {
  const stepsJSX = () => {
    const steps: JSX.Element[] = [];

    for (let i = 0; i < numberOfSteps; i++) {
      if (i === currentStep) {
        steps.push(
          <div
            key={i}
            style={{
              width: "21px",
              height: "6.75px",
              borderRadius: "11px",
              background: "#173EA5",
            }}
          />
        );
      } else {
        steps.push(
          <div
            key={i}
            style={{
              width: "6.75px",
              height: "7.75px",
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
        width: "33.75px",
        ...styles,
      }}
    >
      {stepsJSX()}
    </div>
  );
};
