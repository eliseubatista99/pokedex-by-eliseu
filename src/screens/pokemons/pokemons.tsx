import {
  AppLayout,
  CustomInputField,
  Iconography,
  PokedexBottomContent,
  PokedexListTemplate,
  PokemonCard,
} from "@components";
import { PokemonShort } from "@types";
import React from "react";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const { onPokemonClicked, updateItems } = usePokemonsHelper();

  const mapListItems = React.useCallback(
    (items: any[]) => {
      return items.map((item) => {
        const pokemon = item as PokemonShort;

        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={(pokemon) => onPokemonClicked(pokemon)}
          />
        );
      });
    },
    [onPokemonClicked]
  );

  return (
    <PokedexListTemplate
      mapListItems={mapListItems}
      updateItems={updateItems}
      input={{ placeholder: "Search pokemon" }}
    />
  );
};
