import React from "react";
import { usePokemons } from "./usePokemons";

export const usePokeApi = () => {
  const pokemons = usePokemons();

  return {
    ...pokemons,
  };
};
