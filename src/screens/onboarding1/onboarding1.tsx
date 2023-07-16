import { ImageAssets } from "@assets";
import {
  AppLayout,
  CustomButton,
  CustomImage,
  OnboardingBottomContent,
} from "@components";
import { useOnboarding1Helper } from "./onboarding1.hook";

export const Challenge1 = () => {
  const { onClickContinue } = useOnboarding1Helper();

  return (
    <AppLayout
      header={{ type: "default", title: "Challenge 1" }}
      bottomContent={
        <OnboardingBottomContent
          title="All Pokémon in One Place"
          description="Access a vast list of Pokémon from every generation ever made by
            Nintendo"
          stepper={{ numberOfSteps: 2, currentStep: 0 }}
          buttons={[
            { type: "primary", text: "Continue", onClick: onClickContinue },
          ]}
        />
      }
    >
      <CustomImage
        src={ImageAssets.onboarding1Figure}
        alt={"A scientis and a boy with a straw hat"}
        styles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
