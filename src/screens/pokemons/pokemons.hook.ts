import { ScreenPaths } from "@constants";
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

  const selectedTypeFilter = React.useRef<string>("");
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

        console.log("ZAU", selectedTypeFilter.current);
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

        if (!value && limit.current < pokemonResult.length) {
          limit.current = pokemonResult.length;
        }

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

  const handleCloseTypesFilterDrawer = (type: string) => {
    selectedTypeFilter.current = type;
    setTypesFilterDrawerVisible(false);
    handleUpdateItems();
  };

  return {
    itemsToDisplay,
    typesFilter: {
      selectedTypeFilter: selectedTypeFilter.current,
      isVisible: typesFilterDrawerVisible,
      openDrawer: handleOpenTypesFilterDrawer,
      closeDrawer: handleCloseTypesFilterDrawer,
    },
    updateItems: handleUpdateItems,
    onIncreaseLimit: handleIncreaseLimit,
    onPokemonClicked: handleOnPokemonClicked,
  };
};
