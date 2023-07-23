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
        height: "72px",
        borderTop: "1px solid #E6E6E6",
        backgroundColor: "#ffffff",
        gridTemplateColumns: "repeat(4, 1fr)",
        zIndex: 10,
      }}
    >
      <Blocks.NavigationItem
        text={"Pokedéx"}
        icon={<Iconography.NavigationPokedex />}
        onPointerDown={() => onItemClicked(ScreenPaths.pokedex)}
        isSelected={currentPath === ScreenPaths.pokedex}
      />
      <Blocks.NavigationItem
        text={"Regions"}
        icon={<Iconography.NavigationRegions />}
        onPointerDown={() => onItemClicked(ScreenPaths.regions)}
        isSelected={currentPath === ScreenPaths.regions}
      />
      <Blocks.NavigationItem
        text={"Favorites"}
        icon={<Iconography.NavigationFavorite />}
        onPointerDown={() => onItemClicked(ScreenPaths.favorites)}
        isSelected={currentPath === ScreenPaths.favorites}
      />
      <Blocks.NavigationItem
        text={"Account"}
        icon={<Iconography.NavigationAccount />}
        onPointerDown={() => onItemClicked(ScreenPaths.account)}
        isSelected={currentPath === ScreenPaths.account}
      />
    </div>
  );
};
