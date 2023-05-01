import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export type PokedexPage = "Pokedex" | "Regions" | "Favorites" | "Account";

export interface PokedexState {
  pokedexPage: PokedexPage;
}

export const initialPokedexState: PokedexState = { pokedexPage: "Pokedex" };

interface UsePokedexStoreOutput extends PokedexState {
  setPartialState: (data: Partial<PokedexState>) => void;
}

export const usePokedexStore = StoreHelper.createStore<UsePokedexStoreOutput>(
  (set) => ({
    ...initialPokedexState,
    setPartialState: function (data: Partial<PokedexState>) {
      set(
        produce((state: PokedexState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Pokedex",
  createJSONStorage(() => localStorage)
);
