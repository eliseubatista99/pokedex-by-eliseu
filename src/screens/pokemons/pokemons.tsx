import { AppLayout, PokedexBottomContent } from "@components";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const { pokemons } = usePokemonsHelper();

  console.log("POKE", pokemons);

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      {pokemons.map((pokemon) => (
        <p style={{ color: "#000000" }}>{pokemon.name}</p>
      ))}
    </AppLayout>
  );
};
