import { PokemonHelper, TextHelper } from "@helpers";
import React from "react";
import { PokemonCardProps } from "./pokemonCard";

export const usePokemonCardHelper = ({ pokemon }: PokemonCardProps) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleOnCardHovered = () => {
    setIsHovered(true);
  };

  const handleOnCardUnhovered = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    onHover: handleOnCardHovered,
    onUnhover: handleOnCardUnhovered,
    pokemonData: {
      pokemonId: `Nº ${PokemonHelper.getPokemonId(pokemon.id)}`,
      pokemonName: TextHelper.getPascalCase(pokemon.name),
      pokemonSprite: pokemon.sprite,
      pokemonMainType: pokemon.typesNames[0],
      pokemonTypes: pokemon.typesNames,
      pokemonColor: PokemonHelper.getPokemonColor(pokemon.typesNames[0]),
    },
  };
};
