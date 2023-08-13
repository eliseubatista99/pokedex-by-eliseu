import { PokedexListTemplate, PokemonCard } from "@components";
import { EOrder, EPokemonsTypes } from "@constants";
import { DrawerTypesFilter, OrderDrawer } from "@drawers";
import { PokemonHelper } from "@helpers";
import { Blocks } from "./Blocks";
import { useFavoritesHelper } from "./favorites.hook";

export const Favorites = () => {
  const {
    favoritesInStore,
    currentUser,
    itemsToDisplay,
    onPokemonClicked,
    updateItems,
    onIncreaseLimit,
    typesFilter,
    order,
  } = useFavoritesHelper();

  const itemsJSX = itemsToDisplay.map((item) => (
    <PokemonCard
      key={item.id}
      pokemon={item}
      onClick={(pokemon) => onPokemonClicked(pokemon)}
    />
  ));

  return (
    <>
      {!currentUser && <Blocks.Guest />}
      {currentUser && favoritesInStore.length < 1 && <Blocks.Empty />}
      {currentUser && favoritesInStore.length > 0 && (
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
            isVisible={typesFilter.isVisible}
            onCloseDrawer={(data) =>
              typesFilter.closeDrawer(data as EPokemonsTypes)
            }
          />
          <OrderDrawer
            isVisible={order.isVisible}
            onCloseDrawer={(data) => order.closeDrawer(data as EOrder)}
          />
        </>
      )}
    </>
  );
};
