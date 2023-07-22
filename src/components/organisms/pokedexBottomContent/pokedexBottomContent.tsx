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
        position: "fixed",
        bottom: 0,
        height: "72px",
        borderTop: "1px solid #E6E6E6",
        backgroundColor: "#ffffff",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      <Blocks.NavigationItem
        text={"Pokedéx"}
        icon={<Iconography.NavigationPokedex />}
        onClick={() => onItemClicked(ScreenPaths.pokedex)}
        isSelected={currentPath === ScreenPaths.pokedex}
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
