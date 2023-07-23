import { ImageAssets } from "@assets";
import { AppLayout, CustomImage, OnboardingBottomContent } from "@components";
import { useOnboarding1Helper } from "./onboarding1.hook";

export const Onboarding1 = () => {
  const { onPointerDownContinue } = useOnboarding1Helper();

  return (
    <AppLayout
      bottomContent={
        <OnboardingBottomContent
          title="All Pokémon in One Place"
          description="Access a vast list of Pokémon from every generation ever made by
            Nintendo"
          stepper={{ numberOfSteps: 2, currentStep: 0 }}
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
        src={ImageAssets.onboarding1Figure}
        alt={"A scientis and a boy with a straw hat"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
