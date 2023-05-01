import { ImageAssets } from "@assets";
import { CustomButton, CustomImage, CustomLink, Typography } from "@components";
import { AppLayout } from "@structure";
import { PokedexHelperOutputProps } from "./pokedex.hook";

export const PokedexMobileScreen = ({
  onClickRegister,
  onClickAlreadyHaveAnAccount,
}: PokedexHelperOutputProps) => {
  return (
    <AppLayout
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
            containerProps={{ margin: "0 auto 15px auto" }}
          />
        </div>
      }
      screenContainerProps={{ padding: "50px 16px 37px 16px" }}
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
