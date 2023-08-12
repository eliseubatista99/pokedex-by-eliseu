import { EPokemonsTypes } from "@constants";
import { PokemonHelper, TextHelper } from "@helpers";
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

  const getWeaknesses = React.useCallback(() => {
    const typesList = pokemonFullData?.typesData || [];
    const weaknesses: EPokemonsTypes[] = [];

    if (!pokemonFullData) {
      return weaknesses;
    }

    for (let i = 0; i < typesList.length; i++) {
      const typeData = pokemonFullData?.typesData[i];

      if (!typeData) {
        continue;
      }

      const doubleFrom = typeData.doubleFrom || [];
      const halfTo = typeData.doubleFrom || [];

      for (let j = 0; j < doubleFrom.length; j++) {
        const weakDefense = doubleFrom[j];
        if (!weaknesses.includes(weakDefense)) {
          weaknesses.push(weakDefense);
        }
      }

      for (let j = 0; j < halfTo.length; j++) {
        const weakAttack = doubleFrom[j];
        if (!weaknesses.includes(weakAttack)) {
          weaknesses.push(weakAttack);
        }
      }
    }

    return weaknesses;
  }, [pokemonFullData]);

  const getStrengths = React.useCallback(() => {
    const typesList = pokemonFullData?.typesData || [];
    const strengths: EPokemonsTypes[] = [];

    for (let i = 0; i < typesList.length; i++) {
      const typeData = pokemonFullData?.typesData[i];

      if (!typeData) {
        continue;
      }

      const doubleTo = typeData.doubleTo || [];
      const halfFrom = typeData.halfFrom || [];

      for (let j = 0; j < doubleTo.length; j++) {
        const strongAttack = doubleTo[j];
        if (!strengths.includes(strongAttack)) {
          strengths.push(strongAttack);
        }
      }

      for (let j = 0; j < halfFrom.length; j++) {
        const strongDefense = halfFrom[j];
        if (!strengths.includes(strongDefense)) {
          strengths.push(strongDefense);
        }
      }
    }

    return strengths;
  }, [pokemonFullData]);

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
    pokemonId: PokemonHelper.getPokemonId(pokemonFullData?.id || 0),
    pokemonName: TextHelper.getPascalCase(pokemonFullData?.name || ""),
    pokemonColor: PokemonHelper.getPokemonColor(pokemonFullData?.typesNames[0]),
    pokemonTypeImage: PokemonHelper.getPokemonTypeIcon(
      pokemonFullData?.typesNames[0]
    ),
    weaknesses: getWeaknesses(),
    strengths: getStrengths(),
  };
};
