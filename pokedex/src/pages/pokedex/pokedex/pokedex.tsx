import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { PokedexMobileScreen } from "./pokedex.mobile";
import { PokedexDesktopScreen } from "./pokedex.desktop";
import { usePokedexScreenHelper } from "./pokedex.hook";

export const PokedexScreen = () => {
  const props = usePokedexScreenHelper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <PokedexMobileScreen {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <PokedexMobileScreen {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <PokedexDesktopScreen {...props} />,
        },
      ]}
    />
  );
};
