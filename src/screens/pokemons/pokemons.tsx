import { PokedexListTemplate, PokemonCard } from "@components";
import { DrawerTypesFilter, OrderDrawer } from "@drawers";
import { PokemonHelper } from "@helpers";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const {
    itemsToDisplay,
    onPokemonClicked,
    updateItems,
    onIncreaseLimit,
    typesFilter,
    order,
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
          filter: {
            value: typesFilter.selectedTypeFilter,
            noValueText: "All Types",
            onClick: typesFilter.openDrawer,
            styles: {
              background: PokemonHelper.getPokemonColor([
                typesFilter.selectedTypeFilter,
              ]),
            },
          },
          order: {
            value: order.selectedOrder,
            noValueText: "Lesser Number",
            onClick: order.openDrawer,
          },
        }}
      />
      <DrawerTypesFilter
        onTypeSelected={(data) => typesFilter.closeDrawer(data)}
      />
      <OrderDrawer onOrderSelected={(data) => order.closeDrawer(data)} />
    </>
  );
};
