import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Stepper, Typography } from "@components";
import { AppLayout } from "@structure";
import { Onboarding2HelperOutputProps } from "./onboarding2.hook";

export const Onboarding2DesktopScreen = ({
  onClickContinue,
}: Onboarding2HelperOutputProps) => {
  return (
    <AppLayout withoutNavigation>
      <CustomImage
        src={ImageAssets.Onboarding2Figure}
        alt={"A girl with a confident pose"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "251px",
          maxHeight: "258px",
        }}
      />
      <div style={{ width: "100%", margin: "auto auto 0 auto" }}>
        <Typography
          size="headline_26"
          weight="medium"
          containerProps={{ margin: "0 auto", textAlign: "center" }}
        >
          Keep your Pokedex updated
        </Typography>
        <Typography
          size="body_14"
          color="secondary"
          containerProps={{ margin: "16px auto 0 auto", textAlign: "center" }}
        >
          Sign up and keep your profile, favorite pokémon, settings and more,
          saved in the app, even without an internet connection.
        </Typography>
        <Stepper
          numberOfSteps={2}
          currentStep={1}
          containerProps={{ margin: "24px auto 0 auto" }}
        />
        <CustomButton
          appearance={"primary"}
          middleContent={"Continue"}
          containerProps={{ margin: "24px auto 80px auto" }}
          onClick={onClickContinue}
        />
      </div>
    </AppLayout>
  );
};
