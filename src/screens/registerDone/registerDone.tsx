import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useRegisterDoneHelper } from "./registerDone.hook";

export const RegisterDone = () => {
  const { onClickContinue } = useRegisterDoneHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        hideBack: true,
        stepsToGoBack: 3,
      }}
    >
      <CustomImage
        src={ImageAssets.registerDoneFigure}
        alt={"Two trainers posing"}
        containerStyles={{
          margin: "auto",
          maxWidth: "267px",
          height: "auto",
        }}
      />
      <OnboardingBottomContent
        title="Your account was successfully created!"
        description="Welcome, trainer! We are excited to follow your journey."
        buttons={[
          {
            type: "primary",
            text: "Continue",
            onClick: onClickContinue,
          },
        ]}
      />
    </AppLayout>
  );
};
