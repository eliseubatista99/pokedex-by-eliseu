import { PokedexListTemplate, PokemonCard } from "@components";
import { DrawerTypesFilter } from "@drawers";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const {
    itemsToDisplay,
    onPokemonClicked,
    updateItems,
    onIncreaseLimit,
    typesFilter,
  } = usePokemonsHelper();

  const itemsJSX = itemsToDisplay.map((item) => (
    <PokemonCard
      key={item.id}
      pokemon={item}
      onClick={(pokemon) => onPokemonClicked(pokemon)}
    />
  ));

  return (
    <>
      <PokedexListTemplate
        items={itemsJSX}
        updateItems={updateItems}
        increaseLimit={onIncreaseLimit}
        input={{ placeholder: "Search pokemon" }}
        options={{
          filter: typesFilter.selectedTypeFilter,
          noFilterText: "All Types",
          onClickFilter: typesFilter.openDrawer,
        }}
      />
      <DrawerTypesFilter
        isVisible={typesFilter.isVisible}
        onCloseDrawer={(data) => typesFilter.closeDrawer(data as string)}
      />
    </>
  );
};
