import { Typography } from "@components";
import { useSplashScreenHelper } from "./splashScreen.hook";

export const HomeScreen = () => {
  useSplashScreenHelper();

  return (
    <div style={{ width: "100%", height: "100%", background: "#000029" }}>
      <Typography
        styles={{
          fontFamily: "PokemonSolid",
          fontWeight: 400,
          fontSize: "37.5px",
          color: "#FFFFFF",
          margin: "auto",
          verticalAlign: "middle",
          paddingBottom: "20px",
        }}
      >
        Poke<span style={{ color: "#CD3131" }}>dex</span>
      </Typography>
    </div>
  );
};
