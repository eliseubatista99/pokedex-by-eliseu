import { usePokeApi } from "@hooks";
import { useBaseStore, usePokeApiStore, usePokedexStore } from "@store";
import React from "react";

export const usePokemonsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { pokemonsLimit, updatePokemonLimit } = usePokedexStore();
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

  React.useEffect(() => {
    if (!screenInitialized.current) {
      screenInitialized.current = true;
      handleFetchPokemons();
    }
  }, [handleFetchPokemons]);

  return {
    pokemons,
  };
};
