import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Typography } from "@components";
import { AppLayout } from "@structure";
import { LoginDoneHelperOutputProps } from "./loginDone.hook";

export const LoginDoneMobileScreen = ({
  onClickBack,
  onClickContinue,
}: LoginDoneHelperOutputProps) => {
  return (
    <AppLayout
      bottomContent={
        <div style={{ width: "100%" }}>
          <Typography
            size="headline_26"
            weight="medium"
            containerProps={{ margin: "0 auto", textAlign: "center" }}
          >
            Welcome back, trainer!
          </Typography>
          <Typography
            size="body_14"
            color="secondary"
            containerProps={{ margin: "16px auto 0 auto", textAlign: "center" }}
          >
            I hope you've had a long journey since you last visited us.
          </Typography>
          <CustomButton
            appearance={"primary"}
            middleContent={"Continue"}
            containerProps={{ margin: "24px auto 40px auto" }}
            onClick={onClickContinue}
          />
        </div>
      }
      withoutNavigation
      screenContainerProps={{ padding: "50px 16px 37px 16px" }}
    >
      <CustomImage
        src={ImageAssets.LoginDoneFigure}
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
