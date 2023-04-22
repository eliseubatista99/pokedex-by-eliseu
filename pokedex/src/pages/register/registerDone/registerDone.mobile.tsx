import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, Typography } from "@components";
import { AppLayout } from "@structure";
import { RegisterDoneHelperOutputProps } from "./registerDone.hook";

export const RegisterDoneMobileScreen = ({
  onClickBack,
  onClickContinue,
}: RegisterDoneHelperOutputProps) => {
  return (
    <AppLayout
      bottomContent={
        <div style={{ width: "100%" }}>
          <Typography
            size="headline_26"
            weight="medium"
            containerProps={{ margin: "0 auto", textAlign: "center" }}
          >
            Your account was successfully created!
          </Typography>
          <Typography
            size="body_14"
            color="secondary"
            containerProps={{ margin: "16px auto 0 auto", textAlign: "center" }}
          >
            Welcome, trainer! We are excited to follow your journey.
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
        src={ImageAssets.RegisterDoneFigure}
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
