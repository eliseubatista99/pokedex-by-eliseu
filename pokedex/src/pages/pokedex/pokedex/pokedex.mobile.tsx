import { usePokedexStore } from "@store";
import { AppLayout } from "@structure";
import { PokedexHelperOutputProps } from "./pokedex.hook";
import { PokedexSection } from "./sections";

export const PokedexMobileScreen = (props: PokedexHelperOutputProps) => {
  const pokedexPage = usePokedexStore((state) => state.pokedexPage);

  const renderPokedexPage = () => {
    switch (pokedexPage) {
      case "Regions":
        return <PokedexSection />;
      case "Favorites":
        return <PokedexSection />;
      case "Account":
        return <PokedexSection />;
      default:
        return <PokedexSection />;
    }
  };

  return (
    <AppLayout screenContainerProps={{ padding: "0 16px 37px 16px" }}>
      {renderPokedexPage()}
    </AppLayout>
  );
};
