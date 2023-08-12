import { EPokemonsTypes } from "@constants";
import { useFirebaseAuth } from "@contexts";
import { PokemonHelper, TextHelper } from "@helpers";
import { useFirebaseFirestore, usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore, useUserStore } from "@store";
import { PokemonFull, PokemonShort } from "@types";
import React from "react";

export const usePokemonDetailsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { currentUser } = useFirebaseAuth();
  const { addOrRemoveFromFavorites } = useFirebaseFirestore();
  const { favorites } = useUserStore();
  const { selectedPokemon, setSelectedPokemon } = usePokedexStore();
  const pokeApi = usePokeApi();
  const screenInitialized = React.useRef<boolean>(false);
  const isFetching = React.useRef<boolean>(false);

  const [pokemonFullData, setPokemonFullData] = React.useState<
    PokemonFull | undefined
  >(undefined);

  const [pokemonEvolutions, setPokemonEvolutions] = React.useState<
    Array<Array<PokemonShort>>
  >([]);

  const getEvolutions = React.useCallback(
    async (pokemon: PokemonFull) => {
      const chain = pokemon.evolutionChain;

      const chainList = PokemonHelper.buildEvolutionChainList([chain]);

      const chainPokemonsList: Array<Array<PokemonShort>> = [];

      for (let i = 0; i < chainList.length; i++) {
        const branchShortList: PokemonShort[] = [];

        for (let j = 0; j < chainList[i].length; j++) {
          const pokemonShortData = await pokeApi.getPokemonShort(
            chainList[i][j]
          );
          branchShortList.push(pokemonShortData);
        }

        chainPokemonsList.push(branchShortList);
      }

      setPokemonEvolutions(chainPokemonsList);
    },
    [pokeApi]
  );

  const handleFetchPokemonFull = React.useCallback(
    async (pokemon: PokemonShort) => {
      if (isFetching.current) {
        return;
      }
      try {
        isFetching.current = true;
        showLoader({
          loadingText: "Retrieving pokemon full",
          style: "transparent",
        });
        const data = await pokeApi.getPokemonFull(pokemon.name);

        await getEvolutions(data);

        setPokemonFullData(data);

        hideLoader();
        await new Promise((res) => setTimeout(res, 100));
        window.scrollTo({ top: 0, behavior: "smooth" });
        isFetching.current = false;
      } catch (error) {
        hideLoader();
        isFetching.current = false;

        console.error("Failed to retrieve pokemon full: ", error);
      }
    },
    [getEvolutions, hideLoader, pokeApi, showLoader]
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

  const handleClickEvolution = React.useCallback(
    (pokemon: PokemonShort) => {
      setSelectedPokemon(pokemon);
    },
    [setSelectedPokemon]
  );

  const handleClickFavorite = React.useCallback(() => {
    if (currentUser && pokemonFullData) {
      addOrRemoveFromFavorites(currentUser, pokemonFullData.name);
    }
  }, [addOrRemoveFromFavorites, currentUser, pokemonFullData]);

  const isFavorite = React.useCallback(() => {
    if (!pokemonFullData) {
      return false;
    }
    return favorites?.includes(pokemonFullData?.name);
  }, [favorites, pokemonFullData]);

  React.useEffect(() => {
    if (
      !screenInitialized.current ||
      selectedPokemon?.id !== pokemonFullData?.id
    ) {
      if (selectedPokemon) {
        screenInitialized.current = true;
        handleFetchPokemonFull(selectedPokemon);
      }
    }
  }, [
    handleFetchPokemonFull,
    pokemonFullData,
    pokemonFullData?.id,
    selectedPokemon,
  ]);

  return {
    pokemon: pokemonFullData,
    pokemonId: PokemonHelper.getPokemonId(pokemonFullData?.id || 0),
    pokemonName: TextHelper.getPascalCase(pokemonFullData?.name || ""),
    pokemonColor: PokemonHelper.getPokemonColor(pokemonFullData?.typesNames[0]),
    pokemonTypeImage: PokemonHelper.getPokemonTypeIcon(
      pokemonFullData?.typesNames[0]
    ),
    pokemonEvolutions,
    onClickEvolution: handleClickEvolution,
    favorite: {
      isFavorite: isFavorite(),
      onClickFavorite: handleClickFavorite,
    },
    weaknesses: getWeaknesses(),
    strengths: getStrengths(),
  };
};
