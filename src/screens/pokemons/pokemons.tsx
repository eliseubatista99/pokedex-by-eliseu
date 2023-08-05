import {
  Chip,
  Iconography,
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
      filters={
        <div
          style={{
            display: "grid",
            width: "100%",
            gridTemplateColumns: "repeat(2, calc(50% - 6px))",
            gridGap: "12px",
            padding: "8px 0 12px 0",
          }}
        >
          <Chip
            text={"All types"}
            rightIcon={
              <Iconography.NavLeft
                stroke="#ffffff"
                width="18px"
                containerProps={{ transform: "rotateZ(-90deg)" }}
              />
            }
          />
          <Chip
            text={"Lowest Number"}
            rightIcon={
              <Iconography.NavLeft
                stroke="#ffffff"
                width="18px"
                containerProps={{ transform: "rotateZ(-90deg)" }}
              />
            }
          />
        </div>
      }
    />
  );
};
