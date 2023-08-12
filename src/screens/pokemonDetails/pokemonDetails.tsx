import {
  CardChip,
  CardChipProps,
  DetailChipProps,
  PokedexDetailsTemplate,
  Typography,
} from "@components";
import { PokemonHelper } from "@helpers";
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

  return (
    <PokedexDetailsTemplate
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
          {weaknesses.length > 0 && (
            <>
              <Typography
                styles={{
                  fontSize: "18px",
                  fontWeight: 700,
                  margin: "24px auto 0 0",
                }}
              >
                {"Weaknesses"}
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gap: "16px",
                  gridTemplateColumns: "1fr 1fr 1fr",
                }}
              >
                {weaknessesChips}
              </div>
            </>
          )}
          {strengths.length > 0 && (
            <>
              <Typography
                styles={{
                  fontSize: "18px",
                  fontWeight: 700,
                  margin: "24px auto 0 0",
                }}
              >
                {"Strengths"}
              </Typography>
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gap: "16px",
                  gridTemplateColumns: "1fr 1fr 1fr",
                }}
              >
                {strengthsChips}
              </div>
            </>
          )}
          {}
        </>
      }
    />
  );
};
