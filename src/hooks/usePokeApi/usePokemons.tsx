import { EPokemonsTypes, POKE_API_BASE_URL } from "@constants";
import { useFetch } from "@hooks";
import { usePokeApiStore } from "@store";
import {
  ApiEvolutionChain,
  ApiPokemon,
  ApiPokemonList,
  ApiPokemonSpecies,
  ApiPokemonType,
  PokemonShort,
  PokemonFull,
  PokemonType,
} from "@types";
import React from "react";

export const usePokemons = () => {
  const fetch = useFetch();
  const {
    pokemons: pokemonsInStore,
    pokemonList,
    updatePokemon: updatePokemonInStore,
    savePokemonList,
  } = usePokeApiStore();

  const mergePokemonsLists = (
    sourceList: PokemonShort[],
    targetList: PokemonShort[]
  ) => {
    const newResult: PokemonShort[] = [...targetList];
    let alreadyInList = false;

    sourceList.forEach((source) => {
      alreadyInList = false;
      newResult.forEach((target) => {
        if (source.name === target.name) {
          alreadyInList = true;
        }
      });

      if (!alreadyInList) {
        newResult.push(source);
      }
    });

    return newResult;
  };

  const getEvolutionChain = React.useCallback(
    async (id: string) => {
      const result = await fetch<ApiEvolutionChain>(
        `${POKE_API_BASE_URL}evolution-chain/${id}`
      );

      return result;
    },
    [fetch]
  );

  const getPokemonSpecies = React.useCallback(
    async (name: string) => {
      const result = await fetch<ApiPokemonSpecies>(
        `${POKE_API_BASE_URL}pokemon-species/${name}`
      );

      return result;
    },
    [fetch]
  );

  const getPokemonType = React.useCallback(
    async (name: string) => {
      const result = await fetch<ApiPokemonType>(
        `${POKE_API_BASE_URL}type/${name}`
      );

      return result;
    },
    [fetch]
  );

  const getPokemonShort = React.useCallback(
    async (name: string) => {
      const pokemonInStore = pokemonsInStore.find(
        (pokemon) => pokemon.name === name
      );

      if (pokemonInStore) {
        return pokemonInStore;
      }

      const pokemon = await fetch<ApiPokemon>(
        `${POKE_API_BASE_URL}pokemon/${name}`
      );

      const types: EPokemonsTypes[] = [];
      for (let i = 0; i < pokemon.types.length; i++) {
        types.push(pokemon.types[i].type.name as EPokemonsTypes);
      }

      const result: PokemonShort = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        typesNames: types,
      };

      updatePokemonInStore(result);

      return result;
    },
    [fetch, pokemonsInStore, updatePokemonInStore]
  );

  const getPokemonFull = React.useCallback(
    async (name: string) => {
      const pokemon = await fetch<ApiPokemon>(
        `${POKE_API_BASE_URL}pokemon/${name}`
      );

      const typesData: PokemonType[] = [];
      const typesNames: EPokemonsTypes[] = [];
      for (let i = 0; i < pokemon.types.length; i++) {
        const t = await getPokemonType(pokemon.types[i].type.name);
        typesNames.push(pokemon.types[i].type.name as EPokemonsTypes);
        typesData.push({
          name: pokemon.types[i].type.name as EPokemonsTypes,
          doubleFrom: t.double_damage_from?.map((entry) => entry.name),
          doubleTo: t.double_damage_to?.map((entry) => entry.name),
          halfFrom: t.half_damage_from?.map((entry) => entry.name),
          halfTo: t.half_damage_to?.map((entry) => entry.name),
          noneFrom: t.no_damage_from?.map((entry) => entry.name),
          noneTo: t.no_damage_to?.map((entry) => entry.name),
        });
      }

      const species = await getPokemonSpecies(pokemon.species.name);

      const evolutionChainSplitUrl = species.evolution_chain.url.split("/");

      const evolutionChain = await getEvolutionChain(
        evolutionChainSplitUrl[evolutionChainSplitUrl.length - 2]
      );

      const englishFlavor = species.flavor_text_entries.find(
        (flavor) => flavor.language.name === "en"
      );

      const englishGenus = species.genera.find(
        (genus) => genus.language.name === "en"
      );

      const result: PokemonFull = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        abilities: pokemon.abilities.map((ability) => ability.ability.name),
        evolutionChain: evolutionChain.evolves_to?.map(
          (evolveTarget) => evolveTarget.species.name
        ),
        flavor: englishFlavor?.flavor_text || "",
        genus: englishGenus?.genus || "",
        stats: pokemon.stats.reduce(
          (acc, stat) => ({ ...acc, [stat.stat.name]: stat.base_state }),
          {}
        ),
        typesNames,
        typesData,
      };

      return result;
    },
    [fetch, getEvolutionChain, getPokemonSpecies, getPokemonType]
  );

  const getPokemonList = React.useCallback(async () => {
    if (pokemonList.length > 0) {
      return pokemonList;
    }

    const listResult = await fetch<ApiPokemonList>(
      `${POKE_API_BASE_URL}pokemon`,
      {
        limit: 100000,
        offset: 0,
      }
    );

    savePokemonList(listResult.results);
    return listResult.results;
  }, [fetch, pokemonList, savePokemonList]);

  const getPokemonsByName = React.useCallback(
    async (name: string) => {
      const pokemonList = await getPokemonList();

      const filteredPokemons = pokemonList.filter((pokemon) =>
        pokemon.name.includes(name)
      );
      let mappedPokemons: PokemonShort[] = [];

      for (let i = 0; i < filteredPokemons.length; i++) {
        const result = await getPokemonShort(filteredPokemons[i].name);
        mappedPokemons.push(result);
      }

      mappedPokemons = mergePokemonsLists(mappedPokemons, pokemonsInStore);

      return mappedPokemons;
    },
    [getPokemonList, getPokemonShort, pokemonsInStore]
  );

  const getAllPokemons = React.useCallback(
    async (limit = 20, offset = 0) => {
      const pokemonList = await getPokemonList();

      let mappedPokemons: PokemonShort[] = [];

      for (let i = offset; i < limit; i++) {
        const result = await getPokemonShort(pokemonList[i].name);
        mappedPokemons.push(result);
      }

      return mappedPokemons;
    },
    [getPokemonList, getPokemonShort]
  );

  return {
    getPokemonShort,
    getPokemonFull,
    getPokemonsByName,
    getAllPokemons,
  };
};
