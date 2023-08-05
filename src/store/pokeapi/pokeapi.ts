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
  updatePokemon: (newPokemon: PokemonShort) => void;
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
    updatePokemon: function (newPokemon: PokemonShort) {
      set(
        produce((state: PokeApiState) => {
          const newResult: PokemonShort[] = [];
          let pokemonAlreadyInList = false;

          state.pokemons.forEach((pokemon) => {
            if (pokemon.name === newPokemon.name) {
              pokemonAlreadyInList = true;
            }

            newResult.push(pokemon);
          });

          if (!pokemonAlreadyInList) {
            newResult.push(newPokemon);
          }

          return {
            ...state,
            pokemons: newResult,
          };
        }),
        false,
        "updatePokemon"
      );
    },
  }),
  "PokeApi",
  createJSONStorage(() => localStorage)
);
