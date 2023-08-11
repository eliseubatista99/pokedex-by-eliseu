import {
  CardChipProps,
  CustomImage,
  PokedexDetailsTemplate,
} from "@components";
import { PokemonHelper } from "@helpers";
import { usePokemonDetailsHelper } from "./pokemonDetails,hook";

export const PokemonDetails = () => {
  const { pokemon, pokemonColor, pokemonTypeImage, pokemonId, pokemonName } =
    usePokemonDetailsHelper();

  const chips = (pokemon?.typesNames || []).map(
    (type): CardChipProps => ({
      text: type,
      image: (
        <CustomImage
          src={PokemonHelper.getPokemonTypeIcon(type)}
          alt={"Pokemon Type Icon"}
          imageStyles={{ width: "12px", height: "12px" }}
          containerStyles={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffffff",
          }}
        />
      ),
      styles: { background: `${PokemonHelper.getPokemonColor(type)}` },
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
      flavor={""}
      detailsChips={[]}
    />
  );
};
