import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useRegisterDoneHelper } from "./registerDone.hook";

export const RegisterDone = () => {
  const { onClickContinue } = useRegisterDoneHelper();

  return (
    <AppLayout
      header={{
        type: "default",
        title: "Create Account",
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
        styles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
