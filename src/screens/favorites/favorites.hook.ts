import { EOrder, EPokemonsTypes, ScreenPaths } from "@constants";
import { useFirebaseAuth } from "@contexts";
import { PokemonHelper } from "@helpers";
import { useCustomNavigation, usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore, useUserStore } from "@store";
import { PokemonShort } from "@types";
import { limit } from "firebase/firestore";
import React from "react";

export const useFavoritesHelper = () => {
  const { currentUser } = useFirebaseAuth();

  const userStore = useUserStore();

  const { showLoader, hideLoader } = useBaseStore();
  const { goTo } = useCustomNavigation();
  const { setSelectedPokemon } = usePokedexStore();
  const [itemsToDisplay, setItemsToDisplay] = React.useState<PokemonShort[]>(
    []
  );
  const limit = React.useRef<number>(20);

  const [typesFilterDrawerVisible, setTypesFilterDrawerVisible] =
    React.useState<boolean>(false);

  const [orderDrawerVisible, setOrderDrawerVisible] =
    React.useState<boolean>(false);

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
    setTypesFilterDrawerVisible(true);
  };

  const handleCloseTypesFilterDrawer = (type: EPokemonsTypes) => {
    selectedTypeFilter.current = type;
    setTypesFilterDrawerVisible(false);
  };

  const handleOpenOrderDrawer = () => {
    setOrderDrawerVisible(true);
  };

  const handleCloseOrderDrawer = (order: EOrder) => {
    selectedOrder.current = order;
    setOrderDrawerVisible(false);
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
      isVisible: typesFilterDrawerVisible,
      openDrawer: handleOpenTypesFilterDrawer,
      closeDrawer: handleCloseTypesFilterDrawer,
    },
    order: {
      selectedOrder: selectedOrder.current,
      isVisible: orderDrawerVisible,
      openDrawer: handleOpenOrderDrawer,
      closeDrawer: handleCloseOrderDrawer,
    },
    updateItems: handleUpdateItems,
    onIncreaseLimit: handleIncreaseLimit,
    onPokemonClicked: handleOnPokemonClicked,
  };
};
