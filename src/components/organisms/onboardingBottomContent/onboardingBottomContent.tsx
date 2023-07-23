import {
  CustomButton,
  CustomButtonProps,
  Stepper,
  StepperProps,
  Typography,
} from "@components";

export interface OnboardingBottomContentProps {
  title?: string;
  description?: string;
  stepper?: Omit<StepperProps, "styles">;
  buttons?: CustomButtonProps[];
}

export const OnboardingBottomContent = ({
  title,
  description,
  stepper,
  buttons,
}: OnboardingBottomContentProps) => {
  const buttonsJSX = buttons?.map((btn, index) => {
    const marginTop = index === 0 ? 0 : 12;
    return (
      <CustomButton
        key={index}
        {...btn}
        styles={{ margin: `${marginTop}px auto 0 auto`, ...btn.styles }}
      />
    );
  });

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        padding: "17px 17px 40px 17px",
        background: "#ffffff",
      }}
    >
      {title && (
        <Typography
          styles={{ textAlign: "center", fontSize: "26px", fontWeight: 800 }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
            margin: "16px auto 0 auto",
            color: "#666666",
          }}
        >
          {description}
        </Typography>
      )}
      {stepper && (
        <Stepper
          numberOfSteps={stepper.numberOfSteps}
          currentStep={stepper.currentStep}
          styles={{ margin: "24px auto 0 auto" }}
        />
      )}

      <div style={{ width: "100%", margin: "24px 0 0 0" }}>{buttonsJSX}</div>
    </div>
  );
};
