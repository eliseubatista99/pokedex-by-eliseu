import { ImageAssets } from "@assets";
import {
  CustomButton,
  CustomImage,
  OnboardingHeader,
  Typography,
} from "@components";
import { Iconography } from "@iconography";
import { AppLayout } from "@structure";
import { RegisterHelperOutputProps } from "src/pages/register/register/register.hook";

export const RegisterMobileScreen = ({
  onClickBack,
  onClickApple,
  onClickGoogle,
  onClickEmail,
}: RegisterHelperOutputProps) => {
  return (
    <AppLayout
      withoutNavigation
      topContent={
        <OnboardingHeader title="Create Account" onClickBack={onClickBack} />
      }
    >
      <CustomImage
        src={ImageAssets.RegisterFigura}
        alt={"A girl with a long hair with her right hand up in the air"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
      <Typography
        size="headline_26"
        weight="medium"
        containerProps={{ margin: "0 auto", textAlign: "center" }}
      >
        Almost ready to explore this world
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
    </AppLayout>
  );
};
