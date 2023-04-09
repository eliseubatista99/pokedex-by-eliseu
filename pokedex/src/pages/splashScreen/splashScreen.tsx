import { AppLayout } from "@structure";
import { useSplashScreenHelper } from "./splashScreen.hook";

export const SplashScreen = () => {
  useSplashScreenHelper();

  return (
    <AppLayout withoutNavigation>
      <div style={{ width: "100%", height: "100%", background: "#000029" }}>
        <p
          style={{
            fontFamily: "PokemonSolid",
            fontWeight: 400,
            fontSize: "50px",
            lineHeight: "71px",
            color: "#FFFFFF",
            margin: "auto",
          }}
        >
          Poke<span style={{ color: "#CD3131" }}>dex</span>
        </p>
      </div>
    </AppLayout>
  );
};
