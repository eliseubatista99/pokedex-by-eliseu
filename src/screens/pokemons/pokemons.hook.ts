import { Drawers, EOrder, EPokemonsTypes, ScreenPaths } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { PokemonHelper } from "@helpers";
import { usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import type { PokemonShort } from "@types";
import React from "react";

export const usePokemonsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { showItem, hideItem } = useFeedback();

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

  return {
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
