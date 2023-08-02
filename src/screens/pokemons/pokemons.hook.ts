import { ScreenPaths } from "@constants";
import { useCustomNavigation, usePokeApi } from "@hooks";
import { useBaseStore, usePokeApiStore, usePokedexStore } from "@store";
import { PokemonShort } from "@types";
import React from "react";

export const usePokemonsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { goTo } = useCustomNavigation();
  const { pokemonsLimit, updatePokemonLimit, setSelectedPokemon } =
    usePokedexStore();
  const { getAllPokemons } = usePokeApi();
  const { pokemons } = usePokeApiStore();
  const screenInitialized = React.useRef<boolean>(false);

  const handleFetchPokemons = React.useCallback(async () => {
    try {
      showLoader({
        loadingText: "Retrieving pokemons",
        style: "transparent",
      });
      await getAllPokemons(pokemonsLimit);
      hideLoader();
    } catch (error) {
      hideLoader();
      console.error("Failed to retrieve pokemons: ", error);
    }
  }, [getAllPokemons, hideLoader, pokemonsLimit, showLoader]);

  const handleOnPokemonClicked = (pokemon: PokemonShort) => {
    setSelectedPokemon(pokemon);
    goTo(ScreenPaths.pokemonDetails);
  };

  React.useEffect(() => {
    if (!screenInitialized.current) {
      screenInitialized.current = true;
      handleFetchPokemons();
    }
  }, [handleFetchPokemons]);

  return {
    pokemons,
    onPokemonClicked: handleOnPokemonClicked,
  };
};
