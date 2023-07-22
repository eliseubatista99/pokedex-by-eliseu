import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useLoginDoneHelper } from "./loginDone.hook";

export const LoginDone = () => {
  const { onClickContinue } = useLoginDoneHelper();

  return (
    <AppLayout
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
        styles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
