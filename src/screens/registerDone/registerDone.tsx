import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useRegisterDoneHelper } from "./registerDone.hook";

export const RegisterDone = () => {
  const { onPointerDownContinue } = useRegisterDoneHelper();

  return (
    <AppLayout
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
              onPointerDown: onPointerDownContinue,
            },
          ]}
        />
      }
    >
      <CustomImage
        src={ImageAssets.registerDoneFigure}
        alt={"Two trainers posing"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
