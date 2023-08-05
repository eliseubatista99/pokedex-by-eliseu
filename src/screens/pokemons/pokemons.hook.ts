import { ScreenPaths } from "@constants";
import { useCustomNavigation, usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import { PokemonShort } from "@types";
import React from "react";

export const usePokemonsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const formRef = React.useRef<HTMLFormElement>(null);
  const { goTo } = useCustomNavigation();
  const { pokemonsLimit, updatePokemonLimit, setSelectedPokemon } =
    usePokedexStore();
  const pokeApi = usePokeApi();
  const searchedPokemon = React.useRef<string>("");
  const screenInitialized = React.useRef<boolean>(false);
  const [pokemonsToDisplay, setPokemonsToDisplay] = React.useState<
    PokemonShort[]
  >([]);

  const handleOnPokemonClicked = (pokemon: PokemonShort) => {
    setSelectedPokemon(pokemon);
    goTo(ScreenPaths.pokemonDetails);
  };

  const updatePokemonsToDisplay = React.useCallback(async () => {
    try {
      showLoader({
        loadingText: "Retrieving pokemons",
        style: "transparent",
      });
      let pokemonResult: PokemonShort[] | undefined =
        await pokeApi.getAllPokemons(pokemonsLimit);
      if (searchedPokemon.current) {
        console.log("GETTING POKEMON", { searchedPokemon });

        pokemonResult = await pokeApi.getPokemonsByName(
          searchedPokemon.current
        );
      }

      setPokemonsToDisplay(pokemonResult || []);
      hideLoader();
    } catch (error) {
      hideLoader();
      console.error("Failed to retrieve pokemons: ", error);
    }
  }, [hideLoader, pokeApi, pokemonsLimit, searchedPokemon, showLoader]);

  const handleSearchPokemon = React.useCallback(() => {
    if (formRef.current) {
      formRef.current.requestSubmit();
    }
  }, []);

  const handleOnSubmitForm = React.useCallback(
    (event: any) => {
      // Preventing the page from reloading
      event?.preventDefault();

      const formValue = event.currentTarget.elements[0].value as string;

      searchedPokemon.current = formValue;
      updatePokemonsToDisplay();
    },
    [updatePokemonsToDisplay]
  );

  React.useEffect(() => {
    if (!screenInitialized.current) {
      screenInitialized.current = true;
      updatePokemonsToDisplay();
    }
  }, [updatePokemonsToDisplay]);

  return {
    pokemons: pokemonsToDisplay,
    pokemonSearch: {
      formRef,
      onSubmitForm: handleOnSubmitForm,
      onChange: handleSearchPokemon,
    },
    onPokemonClicked: handleOnPokemonClicked,
  };
};
