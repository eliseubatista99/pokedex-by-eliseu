import { ImageAssets } from "@assets";
import {
  CustomButton,
  CustomImage,
  OnboardingHeader,
  Typography,
} from "@components";
import { Iconography } from "@iconography";
import { AppLayout } from "@structure";
import { LoginHelperOutputProps } from "./login.hook";

export const LoginMobileScreen = ({
  onClickBack,
  onClickApple,
  onClickGoogle,
  onClickEmail,
}: LoginHelperOutputProps) => {
  return (
    <AppLayout
      withoutNavigation
      topContent={<OnboardingHeader title="Log In" onClickBack={onClickBack} />}
      bottomContent={
        <div style={{ width: "100%" }}>
          <Typography
            size="headline_26"
            weight="medium"
            containerProps={{ margin: "auto auto 0 auto", textAlign: "center" }}
          >
            Good to see you again!
          </Typography>
          <Typography
            size="body_14"
            color="secondary"
            containerProps={{ margin: "16px auto 0 auto", textAlign: "center" }}
          >
            How do you wish to connect?
          </Typography>
          <CustomButton
            appearance={"secondary"}
            startContent={
              <Iconography.Apple
                width="22px"
                height="28px"
                containerProps={{ margin: "-4px 0 0 0" }}
              />
            }
            middleContent={"Continue with Apple"}
            isDisabled
            containerProps={{
              margin: "32px auto 0 auto",
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
            onClick={onClickApple}
          />
          <CustomButton
            appearance={"secondary"}
            startContent={
              <Iconography.Google
                width="26px"
                height="26px"
                containerProps={{ margin: "0 0 0 -6px" }}
              />
            }
            middleContent={"Continue with Google"}
            isDisabled
            containerProps={{
              margin: "12px auto 0 auto",
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
            onClick={onClickGoogle}
          />
          <CustomButton
            appearance={"primary"}
            middleContent={"Continue with email"}
            containerProps={{
              margin: "12px auto 40px auto",
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
            onClick={onClickEmail}
          />
        </div>
      }
      screenContainerProps={{ padding: "50px 16px" }}
    >
      <CustomImage
        src={ImageAssets.LoginFigure}
        alt={"A girl witboy pointing up"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
    </AppLayout>
  );
};
