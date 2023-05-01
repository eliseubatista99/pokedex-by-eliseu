import { NavigationItem } from "@components";
import { Iconography } from "@iconography";
import { usePokedexStore } from "@store";
import { AppNavigationOutputProps } from "./appNavigation.hook";

export const AppNavigationDesktop = (props: AppNavigationOutputProps) => {
  const setPokedexStoreState = usePokedexStore(
    (state) => state.setPartialState
  );
  const pokedexPage = usePokedexStore((state) => state.pokedexPage);

  return (
    <div
      style={{
        width: "100%",
        height: "95%",
        padding: "10px",
        backgroundColor: "#ffffff",
        margin: "auto 0 auto 15px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <NavigationItem
        text={"Pokedéx"}
        icon={<Iconography.NavigationPokedex />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Pokedex" })}
        isSelected={pokedexPage === "Pokedex"}
        containerProps={{ margin: "0 auto", padding: "20px", width: "100%" }}
      />
      <NavigationItem
        text={"Regions"}
        icon={<Iconography.NavigationRegions />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Regions" })}
        isSelected={pokedexPage === "Regions"}
        containerProps={{
          margin: "15px auto 0 auto",
          padding: "20px",
          width: "100%",
        }}
      />
      <NavigationItem
        text={"Favorites"}
        icon={<Iconography.NavigationFavorite />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Favorites" })}
        isSelected={pokedexPage === "Favorites"}
        containerProps={{
          margin: "15px auto 0 auto",
          padding: "20px",
          width: "100%",
        }}
      />
      <NavigationItem
        text={"Account"}
        icon={<Iconography.NavigationAccount />}
        onClick={() => setPokedexStoreState({ pokedexPage: "Account" })}
        isSelected={pokedexPage === "Account"}
        containerProps={{
          margin: "15px auto 0 auto",
          padding: "20px",
          width: "100%",
        }}
      />
    </div>
  );
};
