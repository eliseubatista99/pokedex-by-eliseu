import { Pokemon } from "@types";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface PokeApiState {
  pokemons: Pokemon[];
}

const initialState: PokeApiState = {
  pokemons: [],
};

interface UsePokeApiStoreOutput extends PokeApiState {
  updatePokemons: (newPokemons: Pokemon[]) => void;
}

export const usePokeApiStore = StoreHelper.createStore<UsePokeApiStoreOutput>(
  (set) => ({
    ...initialState,
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
