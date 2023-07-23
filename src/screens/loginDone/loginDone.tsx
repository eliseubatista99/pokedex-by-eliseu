import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useLoginDoneHelper } from "./loginDone.hook";

export const LoginDone = () => {
  const { onClickContinue } = useLoginDoneHelper();

  return (
    <AppLayout
      styles={{ height: "100%" }}
      screen={{
        styles: { overflow: "hidden" },
      }}
      header={{
        type: "default",
        hideBack: true,
        stepsToGoBack: 3,
      }}
      bottomContent={
        <OnboardingBottomContent
          title="Welcome back, trainer!"
          description="I hope you've had a long journey since you last visited us."
          buttons={[
            {
              type: "primary",
              text: "Continue",
              onClick: onClickContinue,
            },
          ]}
        />
      }
    >
      <CustomImage
        src={ImageAssets.loginDoneFigure}
        alt={"Two trainers posing"}
        containerStyles={{
          margin: "auto",
          maxWidth: "356px",
          height: "auto",
        }}
      />
    </AppLayout>
  );
};
