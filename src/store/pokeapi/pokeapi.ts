import type {
  ApiItemListItem,
  ApiPokemonListItem,
  ItemShort,
  PokemonShort,
} from "@types";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface PokeApiState {
  pokemonList: ApiPokemonListItem[];
  pokemons: PokemonShort[];
  itemsList: ApiItemListItem[];
  items: ItemShort[];
}

const initialState: PokeApiState = {
  pokemonList: [],
  pokemons: [],
  itemsList: [],
  items: [],
};

interface UsePokeApiStoreOutput extends PokeApiState {
  savePokemonList: (list: ApiPokemonListItem[]) => void;
  updatePokemon: (newPokemon: PokemonShort) => void;
  saveItemsList: (list: ApiItemListItem[]) => void;
  updateItem: (newItem: ItemShort) => void;
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
    saveItemsList: function (list: ApiItemListItem[]) {
      set(
        produce((state: PokeApiState) => ({
          ...state,
          itemsList: list,
        })),
        false,
        "saveItemsList"
      );
    },
    updateItem: function (newItem: ItemShort) {
      set(
        produce((state: PokeApiState) => {
          const newResult: ItemShort[] = [];
          let itemAlreadyInList = false;

          state.items.forEach((item) => {
            if (item.name === newItem.name) {
              itemAlreadyInList = true;
            }

            newResult.push(item);
          });

          if (!itemAlreadyInList) {
            newResult.push(newItem);
          }

          return {
            ...state,
            items: newResult,
          };
        }),
        false,
        "updateItem"
      );
    },
  }),
  "PokeApi",
  createJSONStorage(() => localStorage)
);
