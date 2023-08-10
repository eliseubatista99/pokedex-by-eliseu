import { PokemonHelper } from "@helpers";
import { usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import { PokemonFull, PokemonShort } from "@types";
import React from "react";

export const usePokemonDetailsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { selectedPokemon } = usePokedexStore();
  const { getPokemonFull } = usePokeApi();
  const screenInitialized = React.useRef<boolean>(false);

  const [pokemonFullData, setPokemonFullData] = React.useState<
    PokemonFull | undefined
  >(undefined);

  const handleFetchPokemonFull = React.useCallback(
    async (pokemon: PokemonShort) => {
      try {
        showLoader({
          loadingText: "Retrieving pokemon full",
          style: "transparent",
        });
        const data = await getPokemonFull(pokemon.name);

        setPokemonFullData(data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error("Failed to retrieve pokemon full: ", error);
      }
    },
    [getPokemonFull, hideLoader, showLoader]
  );

  React.useEffect(() => {
    if (!screenInitialized.current) {
      if (selectedPokemon) {
        screenInitialized.current = true;
        handleFetchPokemonFull(selectedPokemon);
      }
    }
  }, [handleFetchPokemonFull, selectedPokemon]);

  return {
    pokemon: pokemonFullData,
    pokemonColor: PokemonHelper.getPokemonColor(pokemonFullData?.typesNames[0]),
    pokemonTypeImage: PokemonHelper.getPokemonTypeIcon(
      pokemonFullData?.typesNames[0]
    ),
  };
};
