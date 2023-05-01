import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, CustomLink, Typography } from "@components";
import { Iconography } from "@iconography";
import { AppLayout } from "@structure";
import { ArrowRight } from "src/iconography/icons";
import { LoginOrRegisterHelperOutputProps } from "./loginOrRegister.hook";

export const LoginOrRegisterMobileScreen = ({
  onClickSkip,
  onClickRegister,
  onClickAlreadyHaveAnAccount,
}: LoginOrRegisterHelperOutputProps) => {
  return (
    <AppLayout
      withoutNavigation
      bottomContent={
        <div style={{ width: "100%" }}>
          <Typography
            size="headline_26"
            weight="medium"
            containerProps={{ margin: "0 auto 16px auto", textAlign: "center" }}
          >
            Are you ready for this adventure?
          </Typography>
          <Typography
            size="body_14"
            color="secondary"
            containerProps={{ margin: "0 auto 32px auto", textAlign: "center" }}
          >
            Just create an account and start exploring the world of Pokémon
            today!
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
      }
      topContent={
        <div style={{ width: "100%" }}>
          <CustomLink
            middleContent={
              <Typography size="body_14" color="link">
                Skip
              </Typography>
            }
            endContent={
              <Iconography.ArrowRight
                width="27px"
                height="27px"
                stroke="#173EA5"
              />
            }
            onClick={onClickSkip}
            containerProps={{ margin: "40px 16px 0 auto" }}
          />
        </div>
      }
      screenContainerProps={{ padding: "40px 16px 0 16px" }}
    >
      <CustomImage
        src={ImageAssets.LoginOrRegisterFigure}
        alt={"A boy and a girl"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "356px",
          maxHeight: "272px",
        }}
      />
    </AppLayout>
  );
};
