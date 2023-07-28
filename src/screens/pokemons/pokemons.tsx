import { AppLayout, PokedexBottomContent, PokemonCard } from "@components";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const { pokemons } = usePokemonsHelper();

  console.log("POKE", pokemons);

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </AppLayout>
  );
};
