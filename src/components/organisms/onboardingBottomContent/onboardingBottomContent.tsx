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
    const marginTop = index === 0 ? 0 : 9;
    return (
      <CustomButton
        key={index}
        {...btn}
        styles={{
          height: "40px",
          margin: `${marginTop}px auto 0 auto`,
          ...btn.styles,
        }}
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
        padding: "12.75px 0px 0px 0px",
        background: "#ffffff",
        marginTop: "auto",
      }}
    >
      {title && (
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "19.5px",
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography
          styles={{
            textAlign: "center",
            fontSize: "10.5px",
            fontWeight: 400,
            margin: "12px auto 0 auto",
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
          styles={{ margin: "18px auto 0 auto" }}
        />
      )}

      <div style={{ width: "100%", margin: "18px 0 0 0" }}>{buttonsJSX}</div>
    </div>
  );
};
