import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useOnboarding1Helper } from "./onboarding1.hook";

export const Onboarding1 = () => {
  const { onClickContinue } = useOnboarding1Helper();

  return (
    <AppLayout>
      <CustomImage
        src={ImageAssets.onboarding1Figure}
        alt={"A scientis and a boy with a straw hat"}
        containerStyles={{
          margin: "auto",
          maxWidth: "267px",
          height: "auto",
        }}
      />
      <OnboardingBottomContent
        title="All Pokémon in One Place"
        description="Access a vast list of Pokémon from every generation ever made by
            Nintendo"
        stepper={{ numberOfSteps: 2, currentStep: 0 }}
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
