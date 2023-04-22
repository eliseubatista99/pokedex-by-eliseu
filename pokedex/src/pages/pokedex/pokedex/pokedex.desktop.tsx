import { PokedexHelperOutputProps } from "./pokedex.hook";
import { PokedexMobileScreen } from "./pokedex.mobile";

export const PokedexDesktopScreen = (props: PokedexHelperOutputProps) => {
  return <PokedexMobileScreen {...props} />;
};
