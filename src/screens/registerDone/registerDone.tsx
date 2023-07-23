import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useRegisterDoneHelper } from "./registerDone.hook";

export const RegisterDone = () => {
  const { onClickContinue } = useRegisterDoneHelper();

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
      }
    >
      <CustomImage
        src={ImageAssets.registerDoneFigure}
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
