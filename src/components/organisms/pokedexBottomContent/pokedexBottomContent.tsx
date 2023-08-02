import { Iconography } from "@components";
import { ScreenPaths } from "@constants";
import { Blocks } from "./blocks";
import { usePokedexBottomContentHelper } from "./pokedexBottomContent.hook";

export const PokedexBottomContent = () => {
  const { currentPath, onItemClicked } = usePokedexBottomContentHelper();

  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        height: "54px",
        borderTop: "1px solid #E6E6E6",
        backgroundColor: "#ffffff",
        gridTemplateColumns: "repeat(4, 1fr)",
        position: "relative",
      }}
    >
      <Blocks.NavigationItem
        text={"Pokémons"}
        icon={<Iconography.NavigationPokedex />}
        onClick={() => onItemClicked(ScreenPaths.pokemons)}
        isSelected={currentPath === ScreenPaths.pokemons}
      />
      <Blocks.NavigationItem
        text={"Regions"}
        icon={<Iconography.NavigationRegions />}
        onClick={() => onItemClicked(ScreenPaths.regions)}
        isSelected={currentPath === ScreenPaths.regions}
      />
      <Blocks.NavigationItem
        text={"Favorites"}
        icon={<Iconography.NavigationFavorite />}
        onClick={() => onItemClicked(ScreenPaths.favorites)}
        isSelected={currentPath === ScreenPaths.favorites}
      />
      <Blocks.NavigationItem
        text={"Account"}
        icon={<Iconography.NavigationAccount />}
        onClick={() => onItemClicked(ScreenPaths.account)}
        isSelected={currentPath === ScreenPaths.account}
      />
    </div>
  );
};
