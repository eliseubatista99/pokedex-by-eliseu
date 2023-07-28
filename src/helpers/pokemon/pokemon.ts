export class PokemonHelper {
  static getPokemonColor = (pokemonType: string | null | undefined) => {
    switch (pokemonType) {
      case "grass":
        return "#87fa8d";
      case "water":
        return "#45bff7";
      case "fire":
        return "#f55b5b";
      case "dark":
        return "#9449fc";
      case "fairy":
        return "#f5affa";
      case "ice":
        return "#c1f0f7";
      case "dragon":
        return "#725ef7";
      case "bug":
        return "#b7d450";
      case "poison":
        return "#ac65fc";
      case "steel":
        return "#8a848c";
      case "ground":
        return "#c7831e";
      case "rock":
        return "#a85f05";
      case "fighting":
        return "#f57c20";
      case "electric":
        return "#fce060";
      case "psychic":
        return "#f7659d";
      case "flying":
        return "#bad4e0";
      default:
        return "#ffffff";
    }
  };
}
