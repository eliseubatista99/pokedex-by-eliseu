import { ScreenPaths } from "@constants";
import { useCustomNavigation, usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import { PokemonShort } from "@types";
import React from "react";

export const usePokemonsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { goTo } = useCustomNavigation();
  const { pokemonsLimit, setSelectedPokemon } = usePokedexStore();
  const pokeApi = usePokeApi();

  const handleOnPokemonClicked = (pokemon: PokemonShort) => {
    setSelectedPokemon(pokemon);
    goTo(ScreenPaths.pokemonDetails);
  };

  const handleUpdateItems = React.useCallback(
    async (value: string) => {
      try {
        showLoader({
          loadingText: "Retrieving pokemons",
          style: "transparent",
        });
        let pokemonResult: PokemonShort[] | undefined =
          await pokeApi.getAllPokemons(pokemonsLimit);
        if (value) {
          console.log("GETTING POKEMON", { searchedPokemon: value });

          pokemonResult = await pokeApi.getPokemonsByName(value);
        }

        hideLoader();
        return pokemonResult || [];
      } catch (error) {
        console.error("Failed to retrieve pokemons: ", error);
        hideLoader();
        return [];
      }
    },
    [hideLoader, pokeApi, pokemonsLimit, showLoader]
  );

  return {
    updateItems: handleUpdateItems,
    onPokemonClicked: handleOnPokemonClicked,
  };
};
