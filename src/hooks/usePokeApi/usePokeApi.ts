import { useItems } from "./useItems";
import { usePokemons } from "./usePokemons";

export const usePokeApi = () => {
  const pokemons = usePokemons();
  const items = useItems();

  return {
    ...pokemons,
    ...items,
  };
};
