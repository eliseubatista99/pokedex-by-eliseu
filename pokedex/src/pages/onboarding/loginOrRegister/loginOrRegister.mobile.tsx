import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, CustomLink, Typography } from "@components";
import { AppLayout } from "@structure";
import { LoginOrRegisterHelperOutputProps } from "./loginOrRegister.hook";

export const LoginOrRegisterMobileScreen = ({
  onClickRegister,
  onClickAlreadyHaveAnAccount,
}: LoginOrRegisterHelperOutputProps) => {
  return (
    <AppLayout withoutNavigation>
      <CustomImage
        src={ImageAssets.LoginOrRegisterFigure}
        alt={"A boy and a girl"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "356px",
          maxHeight: "272px",
        }}
      />
      <div style={{ width: "100%", margin: "auto auto 0 auto" }}>
        <Typography
          appearance="headline_100"
          containerProps={{ margin: "0 auto 16px auto", textAlign: "center" }}
        >
          Are you ready for this adventure?
        </Typography>
        <Typography
          appearance="body_secondary"
          containerProps={{ margin: "0 auto 32px auto", textAlign: "center" }}
        >
          Just create an account and start exploring the world of Pokémon today!
        </Typography>
        <CustomButton
          appearance={"primary"}
          middleContent="Register"
          containerProps={{ margin: "0px auto 20px auto" }}
          onClick={onClickRegister}
        />
        <CustomLink
          middleContent="I already have and account"
          onClick={onClickAlreadyHaveAnAccount}
          containerProps={{ margin: "0 auto 55px auto" }}
        />
      </div>
    </AppLayout>
  );
};
