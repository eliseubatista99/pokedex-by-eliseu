import {
  CardChip,
  CardChipProps,
  DetailChipProps,
  EvolutionBranch,
  PokedexDetailsTemplate,
} from "@components";
import { PokemonHelper } from "@helpers";
import { Blocks } from "./blocks";
import { usePokemonDetailsHelper } from "./pokemonDetails,hook";

export const PokemonDetails = () => {
  const {
    pokemon,
    pokemonColor,
    pokemonTypeImage,
    pokemonId,
    pokemonName,
    weaknesses,
    strengths,
    pokemonEvolutions,
    onClickEvolution,
    onClickFavorite,
  } = usePokemonDetailsHelper();

  const chips = (pokemon?.typesNames || []).map(
    (type): CardChipProps => ({
      text: type,
      image: PokemonHelper.getPokemonTypeIcon(type),
      styles: { background: `${PokemonHelper.getPokemonColor(type)}` },
    })
  );

  const weaknessesChips = weaknesses.map((weakness) => (
    <CardChip
      key={weakness}
      text={weakness}
      image={PokemonHelper.getPokemonTypeIcon(weakness)}
      styles={{
        zoom: 1.2,
        background: `${PokemonHelper.getPokemonColor(weakness)}`,
      }}
    />
  ));

  const strengthsChips = strengths.map((strength) => (
    <CardChip
      key={strength}
      text={strength}
      image={PokemonHelper.getPokemonTypeIcon(strength)}
      styles={{
        zoom: 1.2,
        background: `${PokemonHelper.getPokemonColor(strength)}`,
      }}
    />
  ));

  const stats = Object.keys(pokemon?.stats || {}).map(
    (stat): DetailChipProps => ({
      title: stat,
      content: `${pokemon?.stats[stat]}`,
    })
  );

  const evolutions = pokemonEvolutions.map((branch, index) => (
    <EvolutionBranch
      key={index}
      branch={branch}
      onClickPokemon={onClickEvolution}
    />
  ));

  return (
    <PokedexDetailsTemplate
      onClickFavorite={onClickFavorite}
      illustration={{
        backgroundColor: pokemonColor,
        backgroundImage: pokemonTypeImage,
        image: pokemon?.sprite || "",
      }}
      title={pokemonName}
      id={pokemonId}
      chips={chips}
      flavor={pokemon?.flavor || ""}
      detailsChips={stats}
      freeContent={
        <>
          <Blocks.FreeContentWrapper
            title="Weaknesses"
            renderCondition={weaknesses.length > 0}
          >
            <div
              style={{
                width: "100%",
                display: "grid",
                gap: "16px",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginTop: "16px",
              }}
            >
              {weaknessesChips}
            </div>
          </Blocks.FreeContentWrapper>
          <Blocks.FreeContentWrapper
            title="Strengths"
            renderCondition={strengths.length > 0}
          >
            <div
              style={{
                width: "100%",
                display: "grid",
                gap: "16px",
                gridTemplateColumns: "1fr 1fr 1fr",
                marginTop: "16px",
              }}
            >
              {strengthsChips}
            </div>
          </Blocks.FreeContentWrapper>
          <Blocks.FreeContentWrapper
            title="Evolutions"
            renderCondition={pokemonEvolutions.length > 0}
          >
            <div
              style={{
                width: "100%",
                flexDirection: "column",
                gap: "8px",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              {evolutions}
            </div>
          </Blocks.FreeContentWrapper>
        </>
      }
    />
  );
};
