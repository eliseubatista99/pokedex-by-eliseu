import { Drawers, EOrder, EPokemonsTypes, ScreenPaths } from "@constants";
import { usePokedexFirebaseAuth } from "@contexts";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { PokemonHelper } from "@helpers";
import { usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore, useUserStore } from "@store";
import type { PokemonShort } from "@types";
import React from "react";

export const useFavoritesHelper = () => {
  const { currentUser } = usePokedexFirebaseAuth();
  const { showItem, hideItem } = useFeedback();
  const userStore = useUserStore();

  const { showLoader, hideLoader } = useBaseStore();
  const { goTo } = useNavigation();
  const { setSelectedPokemon } = usePokedexStore();
  const [itemsToDisplay, setItemsToDisplay] = React.useState<PokemonShort[]>(
    []
  );
  const limit = React.useRef<number>(20);

  const selectedTypeFilter = React.useRef<EPokemonsTypes>(
    EPokemonsTypes.AllTypes
  );
  const selectedOrder = React.useRef<EOrder>(EOrder.LesserNumber);

  const pokeApi = usePokeApi();

  const handleOnPokemonClicked = (pokemon: PokemonShort) => {
    setSelectedPokemon(pokemon);
    goTo(ScreenPaths.pokemonDetails);
  };

  const handleIncreaseLimit = (count: number) => {
    limit.current += count;
  };

  const handleUpdateItems = React.useCallback(
    async (value?: string) => {
      try {
        showLoader({
          loadingText: "Retrieving pokemons",
          style: "transparent",
        });

        let pokemonResult: PokemonShort[] = [];

        if (userStore.favorites) {
          for (let i = 0; i < userStore.favorites.length; i++) {
            const poke = await pokeApi.getPokemonShort(userStore.favorites[i]);

            pokemonResult.push(poke);
          }
        }

        if (value) {
          pokemonResult = pokemonResult.filter((poke) =>
            poke.name.includes(value)
          );
        }

        if (selectedTypeFilter.current) {
          pokemonResult = pokemonResult.filter((pokemon) => {
            let hasType = false;

            for (let i = 0; i < pokemon.typesNames.length; i++) {
              if (pokemon.typesNames[i] === selectedTypeFilter.current) {
                hasType = true;
                break;
              }
            }

            return hasType;
          });
        }

        pokemonResult = PokemonHelper.sortPokemons(
          pokemonResult,
          selectedOrder.current
        );

        setItemsToDisplay(pokemonResult || []);

        hideLoader();
      } catch (error) {
        console.error("Failed to retrieve pokemons: ", error);
        hideLoader();
      }
    },
    [hideLoader, pokeApi, showLoader, userStore.favorites]
  );

  const handleOpenTypesFilterDrawer = () => {
    showItem(Drawers.typesFilter);
  };

  const handleCloseTypesFilterDrawer = (type: EPokemonsTypes | undefined) => {
    if (type) {
      selectedTypeFilter.current = type;
    }
    hideItem(Drawers.typesFilter);
  };

  const handleOpenOrderDrawer = () => {
    showItem(Drawers.order);
  };

  const handleCloseOrderDrawer = (order: EOrder | undefined) => {
    if (order) {
      selectedOrder.current = order;
    }
    hideItem(Drawers.order);
  };

  // React.useEffect(() => {
  //   if (!screenInitialized.current) {
  //     screenInitialized.current = true;
  //     handleFetchFavorites();
  //   }
  // }, [handleFetchFavorites]);

  return {
    favoritesInStore: userStore.favorites || [],
    currentUser,
    itemsToDisplay,
    typesFilter: {
      selectedTypeFilter: selectedTypeFilter.current,
      openDrawer: handleOpenTypesFilterDrawer,
      closeDrawer: handleCloseTypesFilterDrawer,
    },
    order: {
      selectedOrder: selectedOrder.current,
      openDrawer: handleOpenOrderDrawer,
      closeDrawer: handleCloseOrderDrawer,
    },
    updateItems: handleUpdateItems,
    onIncreaseLimit: handleIncreaseLimit,
    onPokemonClicked: handleOnPokemonClicked,
  };
};
