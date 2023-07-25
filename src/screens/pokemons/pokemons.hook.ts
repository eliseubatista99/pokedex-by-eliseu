import { usePokeApi } from "@hooks";
import { usePokeApiStore } from "@store";
import React from "react";

export const usePokemonsHelper = () => {
  const { getAllPokemons } = usePokeApi();
  const { pokemons } = usePokeApiStore();
  const screenInitialized = React.useRef<boolean>(false);

  React.useEffect(() => {
    if (!screenInitialized.current) {
      screenInitialized.current = true;
      getAllPokemons();
    }
  }, [getAllPokemons]);

  return {
    pokemons,
  };
};
