import { PokemonShort } from "@types";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface PokedexState {
  pokemonsLimit: number;
  selectedPokemon?: PokemonShort;
}

const initialState: PokedexState = {
  pokemonsLimit: 20,
};

interface UsePokedexStoreOutput extends PokedexState {
  updatePokemonLimit: (limit: number) => void;
  setSelectedPokemon: (pokemon: PokemonShort | undefined) => void;
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
    setSelectedPokemon: function (pokemon: PokemonShort | undefined) {
      set(
        produce((state: PokedexState) => ({
          ...state,
          selectedPokemon: pokemon,
        })),
        false,
        "setSelectedPokemon"
      );
    },
  }),
  "Pokedex",
  createJSONStorage(() => sessionStorage)
);
