import { useFetch } from "@hooks";
import { usePokeApiStore } from "@store";
import {
  ApiEvolutionChain,
  ApiPokemon,
  ApiPokemonList,
  ApiPokemonSpecies,
  ApiPokemonType,
  Pokemon,
  PokemonType,
} from "@types";
import React from "react";

export const usePokeApi = () => {
  const baseUrl = "https://pokeapi.co/api/v2/";
  const fetch = useFetch();
  const { pokemons: pokemonsInStore, updatePokemons: updatePokemonsInStore } =
    usePokeApiStore();

  const getEvolutionChain = React.useCallback(
    async (id: string) => {
      const result = await fetch<ApiEvolutionChain>(
        `${baseUrl}evolution-chain/${id}`
      );

      return result;
    },
    [fetch]
  );

  const getPokemonSpecies = React.useCallback(
    async (name: string) => {
      const result = await fetch<ApiPokemonSpecies>(
        `${baseUrl}pokemon-species/${name}`
      );

      return result;
    },
    [fetch]
  );

  const getPokemonType = React.useCallback(
    async (name: string) => {
      const result = await fetch<ApiPokemonType>(`${baseUrl}type/${name}`);

      return result;
    },
    [fetch]
  );

  const getPokemon = React.useCallback(
    async (name: string) => {
      const pokemon = await fetch<ApiPokemon>(`${baseUrl}pokemon/${name}`);

      const types: PokemonType[] = [];
      for (let i = 0; i < pokemon.types.length; i++) {
        const t = await getPokemonType(pokemon.types[i].type.name);
        types.push({
          name: pokemon.types[i].type.name,
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

      const result: Pokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.front_default,
        abilities: pokemon.abilities.map((ability) => ability.ability.name),
        color: species.color.name,
        evolutionChain: evolutionChain.evolves_to?.map(
          (evolveTarget) => evolveTarget.species.name
        ),
        flavor: englishFlavor?.flavor_text || "",
        genus: englishGenus?.genus || "",
        stats: pokemon.stats.reduce(
          (acc, stat) => ({ ...acc, [stat.stat.name]: stat.base_state }),
          {}
        ),
        types,
      };

      return result;
    },
    [fetch, getEvolutionChain, getPokemonSpecies, getPokemonType]
  );

  const getAllPokemons = React.useCallback(
    async (limit = 20, offset = 0) => {
      if (pokemonsInStore.length > 0) {
        return;
      }
      const pokemonList = await fetch<ApiPokemonList>(`${baseUrl}pokemon`, {
        limit,
        offset,
      });

      const mappedPokemons: Pokemon[] = [];

      for (let i = 0; i < pokemonList.results.length; i++) {
        const result = await getPokemon(pokemonList.results[i].name);
        mappedPokemons.push(result);
      }

      updatePokemonsInStore(mappedPokemons);
    },
    [fetch, getPokemon, pokemonsInStore.length, updatePokemonsInStore]
  );

  return {
    getPokemon,
    getAllPokemons,
  };
};
