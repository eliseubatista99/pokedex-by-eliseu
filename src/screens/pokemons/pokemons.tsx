import { PokedexListTemplate, PokemonCard } from "@components";
import { DrawerTypesFilter, OrderDrawer } from "@drawers";
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
          filter: typesFilter.selectedTypeFilter,
          noFilterText: "All Types",
          onClickFilter: typesFilter.openDrawer,
          order: order.selectedOrder,
          noOrderText: "Lesser Number",
          onClickOrder: order.openDrawer,
        }}
      />
      <DrawerTypesFilter
        isVisible={typesFilter.isVisible}
        onCloseDrawer={(data) => typesFilter.closeDrawer(data as string)}
      />
      <OrderDrawer
        isVisible={order.isVisible}
        onCloseDrawer={(data) => order.closeDrawer(data as string)}
      />
    </>
  );
};
