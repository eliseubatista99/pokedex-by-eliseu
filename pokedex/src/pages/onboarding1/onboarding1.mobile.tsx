import { ImageAssets } from "../../assets";
import { CustomButton, CustomImage, Typography } from "../../components";
import { AppLayout } from "../../structure";

export const Onboarding1MobileScreen = () => {
  return (
    <AppLayout withoutNavigation>
      <CustomImage
        src={ImageAssets.Onboarding1Figure}
        alt={"A scientis and a boy with a straw hat"}
        containerStyles={{
          margin: "auto auto 37px auto",
          maxWidth: "342px",
          maxHeight: "265px",
        }}
      />
      <div style={{ width: "100%", margin: "auto auto 0 auto" }}>
        <Typography
          appearance="headline_100"
          containerProps={{ margin: "0 auto", textAlign: "center" }}
        >
          All Pokémon in One Place
        </Typography>
        <Typography
          appearance="body_secondary"
          containerProps={{ margin: "16px auto 0 auto", textAlign: "center" }}
        >
          Access a vast list of Pokémon from every generation ever made by
          Nintendo
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "45px",
            margin: "24px auto 0 auto",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "9px",
              borderRadius: "11px",
              background: "#173EA5",
            }}
          />

          <div
            style={{
              width: "9px",
              height: "9px",
              borderRadius: "50%",
              background: "#4565B7",
              opacity: 0.25,
            }}
          />
        </div>
        <CustomButton
          appearance={"primary"}
          middleContent={"Continuar"}
          containerProps={{ margin: "24px auto 40px auto" }}
        />
      </div>
    </AppLayout>
  );
};
