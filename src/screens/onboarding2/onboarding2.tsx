import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useOnboarding2Helper } from "./onboarding2.hook";

export const Onboarding2 = () => {
  const { onClickContinue } = useOnboarding2Helper();

  return (
    <AppLayout
      styles={{ height: "100%" }}
      screen={{
        styles: { overflow: "hidden" },
      }}
      bottomContent={
        <OnboardingBottomContent
          title="Keep your Pokedex updated"
          description="Sign up and keep your profile, favorite pokémon, settings and more,
            saved in the app, even without an internet connection."
          stepper={{ numberOfSteps: 2, currentStep: 1 }}
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
        src={ImageAssets.onboarding2Figure}
        alt={"A girl with a confident pose"}
        containerStyles={{
          margin: "auto",
          maxWidth: "356px",
          height: "auto",
        }}
      />
    </AppLayout>
  );
};
