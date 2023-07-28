import { ApiPokemonListItem, PokemonShort } from "@types";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface PokeApiState {
  pokemonList: ApiPokemonListItem[];
  pokemons: PokemonShort[];
}

const initialState: PokeApiState = {
  pokemonList: [],
  pokemons: [],
};

interface UsePokeApiStoreOutput extends PokeApiState {
  savePokemonList: (list: ApiPokemonListItem[]) => void;
  updatePokemons: (newPokemons: PokemonShort[]) => void;
}

export const usePokeApiStore = StoreHelper.createStore<UsePokeApiStoreOutput>(
  (set) => ({
    ...initialState,
    savePokemonList: function (list: ApiPokemonListItem[]) {
      set(
        produce((state: PokeApiState) => ({
          ...state,
          pokemonList: list,
        })),
        false,
        "savePokemonList"
      );
    },
    updatePokemons: function (newPokemons: PokemonShort[]) {
      set(
        produce((state: PokeApiState) => ({
          ...state,
          pokemons: newPokemons,
        })),
        false,
        "updatePokemons"
      );
    },
  }),
  "PokeApi",
  createJSONStorage(() => localStorage)
);
