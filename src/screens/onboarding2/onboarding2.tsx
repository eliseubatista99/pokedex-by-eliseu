import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useOnboarding2Helper } from "./onboarding2.hook";

export const Onboarding2 = () => {
  const { onClickContinue } = useOnboarding2Helper();

  return (
    <AppLayout
      bottomContent={
        <OnboardingBottomContent
          title="Keep your Pokedex updated"
          description="Sign up and keep your profile, favorite pokémon, settings and more,
            saved in the app, even without an internet connection."
          stepper={{ numberOfSteps: 2, currentStep: 1 }}
          buttons={[
            { type: "primary", text: "Continue", onClick: onClickContinue },
          ]}
        />
      }
    >
      <CustomImage
        src={ImageAssets.onboarding2Figure}
        alt={"A girl with a confident pose"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "251px",
          maxHeight: "258px",
        }}
      />
    </AppLayout>
  );
};
