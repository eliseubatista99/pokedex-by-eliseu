import { AppLayout, PokedexBottomContent } from "@components";
import { usePokemonDetailsHelper } from "./pokemonDetails,hook";

export const PokemonDetails = () => {
  const { pokemon } = usePokemonDetailsHelper();

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      <div style={{ width: "100%", flexDirection: "column", gap: "12px" }}>
        {pokemon?.name}
      </div>
    </AppLayout>
  );
};
