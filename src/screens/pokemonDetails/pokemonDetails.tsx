import { PokedexDetailsTemplate } from "@components";
import { usePokemonDetailsHelper } from "./pokemonDetails,hook";

export const PokemonDetails = () => {
  const { pokemon, pokemonColor, pokemonTypeImage } = usePokemonDetailsHelper();

  return (
    <PokedexDetailsTemplate
      illustration={{
        backgroundColor: pokemonColor,
        backgroundImage: pokemonTypeImage,
        image: pokemon?.sprite || "",
      }}
    />
  );
};
