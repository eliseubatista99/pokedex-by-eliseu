import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface PokedexState {
  pokemonsLimit: number;
}

const initialState: PokedexState = {
  pokemonsLimit: 20,
};

interface UsePokedexStoreOutput extends PokedexState {
  updatePokemonLimit: (limit: number) => void;
}

export const usePokedexStore = StoreHelper.createStore<UsePokedexStoreOutput>(
  (set) => ({
    ...initialState,
    updatePokemonLimit: function (limit: number) {
      set(
        produce((state: PokedexState) => ({
          ...state,
          pokemonsLimit: limit,
        })),
        false,
        "updatePokemonLimit"
      );
    },
  }),
  "Pokedex",
  createJSONStorage(() => sessionStorage)
);
