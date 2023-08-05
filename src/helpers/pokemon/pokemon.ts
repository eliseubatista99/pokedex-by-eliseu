import { ImageAssets } from "@assets";

export class PokemonHelper {
  static getPokemonId = (id: number) => {
    const parsedId = `${id}`;

    if (parsedId.length < 2) {
      return `00${parsedId}`;
    } else if (parsedId.length < 3) {
      return `0${parsedId}`;
    }

    return parsedId;
  };

  static getPokemonTypeIcon = (pokemonType: string | null | undefined) => {
    switch (pokemonType) {
      case "grass":
        return ImageAssets.pokemonTypes.grass;
      case "water":
        return ImageAssets.pokemonTypes.water;
      case "fire":
        return ImageAssets.pokemonTypes.fire;
      case "dark":
        return ImageAssets.pokemonTypes.dark;
      case "fairy":
        return ImageAssets.pokemonTypes.fairy;
      case "ice":
        return ImageAssets.pokemonTypes.ice;
      case "dragon":
        return ImageAssets.pokemonTypes.dragon;
      case "bug":
        return ImageAssets.pokemonTypes.bug;
      case "poison":
        return ImageAssets.pokemonTypes.poison;
      case "steel":
        return ImageAssets.pokemonTypes.steel;
      case "ground":
        return ImageAssets.pokemonTypes.ground;
      case "rock":
        return ImageAssets.pokemonTypes.rock;
      case "fighting":
        return ImageAssets.pokemonTypes.fighting;
      case "electric":
        return ImageAssets.pokemonTypes.eletric;
      case "psychic":
        return ImageAssets.pokemonTypes.psychic;
      case "flying":
        return ImageAssets.pokemonTypes.flying;
      case "ghost":
        return ImageAssets.pokemonTypes.ghost;
      default:
        return ImageAssets.pokemonTypes.normal;
    }
  };

  static getPokemonColor = (pokemonType: string | null | undefined) => {
    switch (pokemonType) {
      case "grass":
        return "#63BC5A";
      case "water":
        return "#5090D6";
      case "fire":
        return "#FF9D55";
      case "dark":
        return "#5A5465";
      case "fairy":
        return "#EC8FE6";
      case "ice":
        return "#73CEC0";
      case "dragon":
        return "#0B6DC3";
      case "bug":
        return "#91C12F";
      case "poison":
        return "#B567CE";
      case "steel":
        return "#5A8EA2";
      case "ground":
        return "#D97845";
      case "rock":
        return "#C5B78C";
      case "fighting":
        return "#CE416B";
      case "electric":
        return "#F4D23C";
      case "psychic":
        return "#FA7179";
      case "flying":
        return "#89AAE3";
      case "ghost":
        return "#5269AD";
      default:
        return "#919AA2";
    }
  };
}
