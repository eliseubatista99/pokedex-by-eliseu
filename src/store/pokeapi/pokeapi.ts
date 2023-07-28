import { ApiPokemonListItem, Pokemon } from "@types";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface PokeApiState {
  pokemonList: ApiPokemonListItem[];
  pokemons: Pokemon[];
}

const initialState: PokeApiState = {
  pokemonList: [],
  pokemons: [],
};

interface UsePokeApiStoreOutput extends PokeApiState {
  savePokemonList: (list: ApiPokemonListItem[]) => void;
  updatePokemons: (newPokemons: Pokemon[]) => void;
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
    updatePokemons: function (newPokemons: Pokemon[]) {
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
