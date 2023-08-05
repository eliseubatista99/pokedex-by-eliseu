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
      <form
        style={{ width: "100%" }}
        ref={pokemonSearch.formRef}
        onSubmit={pokemonSearch.onSubmitForm}
      >
        <CustomInputField
          name="pokemon-search"
          placeHolder="Search Pokemon"
          rightIcon={
            <Iconography.Search
              width={"15px"}
              height={"15px"}
              onClick={() => pokemonSearch.onChange()}
            />
          }
          inputStyles={{ borderRadius: "30px" }}
          containerProps={{
            padding: "15px 0",
            margin: "0 auto",
            maxWidth: "none",
          }}
        />
      </form>

      <div style={{ width: "100%", flexDirection: "column", gap: "12px" }}>
        {pokemonList}
      </div>
    </AppLayout>
  );
};
