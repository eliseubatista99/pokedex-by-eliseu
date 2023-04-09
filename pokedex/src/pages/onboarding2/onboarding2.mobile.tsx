import { ImageAssets } from "../../assets";
import {
  CustomButton,
  CustomImage,
  Stepper,
  Typography,
} from "../../components";
import { AppLayout } from "../../structure";
import { Onboarding2HelperOutputProps } from "./onboarding2.hook";

export const Onboarding2MobileScreen = ({
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
          appearance="headline_100"
          containerProps={{ margin: "0 auto", textAlign: "center" }}
        >
          keep your pokedex updated
        </Typography>
        <Typography
          appearance="body_secondary"
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
          middleContent={"Continuar"}
          containerProps={{ margin: "24px auto 40px auto" }}
          onClick={onClickContinue}
        />
      </div>
    </AppLayout>
  );
};
