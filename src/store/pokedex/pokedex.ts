import { PokemonShort } from "@types";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface PokedexState {
  selectedPokemon?: PokemonShort;
}

const initialState: PokedexState = {};

interface UsePokedexStoreOutput extends PokedexState {
  setSelectedPokemon: (pokemon: PokemonShort | undefined) => void;
}

export const usePokedexStore = StoreHelper.createStore<UsePokedexStoreOutput>(
  (set) => ({
    ...initialState,
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
