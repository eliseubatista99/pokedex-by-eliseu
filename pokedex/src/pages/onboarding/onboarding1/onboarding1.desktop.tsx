import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Stepper, Typography } from "@components";
import { AppLayout } from "@structure";
import { Onboarding1HelperOutputProps } from "./onboarding1.hook";

export const Onboarding1DesktopScreen = ({
  onClickContinue,
}: Onboarding1HelperOutputProps) => {
  return (
    <AppLayout
      bottomContent={
        <div style={{ width: "100%" }}>
          <Typography
            size="headline_26"
            weight="medium"
            containerProps={{ margin: "0 auto", textAlign: "center" }}
          >
            All Pokémon in One Place
          </Typography>
          <Typography
            size="body_14"
            color="secondary"
            containerProps={{ margin: "16px auto 0 auto", textAlign: "center" }}
          >
            Access a vast list of Pokémon from every generation ever made by
            Nintendo
          </Typography>
          <Stepper
            numberOfSteps={2}
            currentStep={0}
            containerProps={{ margin: "24px auto 0 auto" }}
          />
          <CustomButton
            appearance={"primary"}
            middleContent={"Continue"}
            containerProps={{ margin: "24px auto 80px auto" }}
            onClick={onClickContinue}
          />
        </div>
      }
      withoutNavigation
      screenContainerProps={{ paddingTop: "50px" }}
    >
      <CustomImage
        src={ImageAssets.Onboarding1Figure}
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
