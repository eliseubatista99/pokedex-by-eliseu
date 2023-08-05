import {
  AppLayout,
  CustomInputField,
  Iconography,
  PokedexBottomContent,
  PokemonCard,
} from "@components";
import { usePokemonsHelper } from "./pokemons.hook";

export const Pokemons = () => {
  const { pokemons, onPokemonClicked, pokemonSearch } = usePokemonsHelper();

  const pokemonList = pokemons.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      onClick={(pokemon) => onPokemonClicked(pokemon)}
    />
  ));

  return (
    <AppLayout bottomContent={<PokedexBottomContent />}>
      <CustomInputField
        name="pokemon-search"
        placeHolder="Search Pokemon"
        leftIcon={<Iconography.Search width={"15px"} height={"15px"} />}
        inputStyles={{ borderRadius: "30px" }}
        containerProps={{
          padding: "15px 0",
          margin: "0 auto",
          maxWidth: "none",
        }}
        onChange={(value) => pokemonSearch.onChange(value)}
        value={pokemonSearch.value}
      />
      <div style={{ width: "100%", flexDirection: "column", gap: "12px" }}>
        {pokemonList}
      </div>
    </AppLayout>
  );
};
