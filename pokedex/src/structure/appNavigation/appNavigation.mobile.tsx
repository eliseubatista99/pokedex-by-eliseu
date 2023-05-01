import { NavigationItem } from "@components";
import { Iconography } from "@iconography";
import { usePokedexStore } from "@store";
import { AppNavigationOutputProps } from "./appNavigation.hook";

export const AppNavigationMobile = (props: AppNavigationOutputProps) => {
  const setPokedexStoreState = usePokedexStore(
    (state) => state.setPartialState
  );
  const pokedexPage = usePokedexStore((state) => state.pokedexPage);

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
      <NavigationItem
        text={"Pokedéx"}
        icon={<Iconography.NavigationPokedex />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Pokedex" })}
        isSelected={pokedexPage === "Pokedex"}
      />
      <NavigationItem
        text={"Regions"}
        icon={<Iconography.NavigationRegions />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Regions" })}
        isSelected={pokedexPage === "Regions"}
      />
      <NavigationItem
        text={"Favorites"}
        icon={<Iconography.NavigationFavorite />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Favorites" })}
        isSelected={pokedexPage === "Favorites"}
      />
      <NavigationItem
        text={"Account"}
        icon={<Iconography.NavigationAccount />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Account" })}
        isSelected={pokedexPage === "Account"}
      />
    </div>
  );
};
