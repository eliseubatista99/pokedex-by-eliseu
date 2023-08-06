import { EOrder, EPokemonsTypes, ScreenPaths } from "@constants";
import { PokemonHelper } from "@helpers";
import { useCustomNavigation, usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import { PokemonShort } from "@types";
import React from "react";

export const usePokemonsHelper = () => {
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

        let pokemonResult: PokemonShort[] | undefined =
          await pokeApi.getAllPokemons(limit.current);

        if (value) {
          pokemonResult = await pokeApi.getPokemonsByName(value);
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
    [hideLoader, pokeApi, selectedTypeFilter, showLoader]
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

  return {
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
