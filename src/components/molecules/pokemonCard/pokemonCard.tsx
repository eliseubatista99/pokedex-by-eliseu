import { PokemonShort } from "@types";
import { CSSProperties } from "react";

export interface PokemonCardProps {
  pokemon: PokemonShort;
  containerProps?: CSSProperties;
}

export const PokemonCard = ({ pokemon, containerProps }: PokemonCardProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: pokemon.color,
      }}
    >
      {pokemon.name}
    </div>
  );
};
