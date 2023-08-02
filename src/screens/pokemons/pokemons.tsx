import { AppLayout, PokedexBottomContent, PokemonCard } from "@components";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const { pokemons } = usePokemonsHelper();

  const pokemonList = pokemons.map((pokemon) => (
    <PokemonCard pokemon={pokemon} />
  ));

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      <div style={{ width: "100%", flexDirection: "column", gap: "12px" }}>
        {pokemonList}
      </div>
    </AppLayout>
  );
};
