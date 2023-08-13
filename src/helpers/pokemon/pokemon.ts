import { ImageAssets } from "@assets";
import { EOrder, EPokemonsTypes } from "@constants";
import {
  ApiEvolutionChain,
  ApiEvolutionChainItem,
  PokemonEvolutions,
  PokemonShort,
} from "@types";

export class PokemonHelper {
  static exampleChain: ApiEvolutionChain = {
    chain: {
      evolves_to: [
        {
          species: { name: "B" },
          evolves_to: [
            {
              species: { name: "E" },
              evolves_to: [{ species: { name: "Z" }, evolves_to: [] }],
            },
          ],
        },
        {
          species: { name: "R" },
          evolves_to: [
            { species: { name: "X" }, evolves_to: [] },
            { species: { name: "F" }, evolves_to: [] },
          ],
        },
        {
          species: { name: "D" },
          evolves_to: [],
        },
      ],
      species: {
        name: "A",
      },
    },
  };

  static getPokemonId = (id: number) => {
    const parsedId = `${id}`;

    if (parsedId.length < 2) {
      return `00${parsedId}`;
    } else if (parsedId.length < 3) {
      return `0${parsedId}`;
    }

    return parsedId;
  };

  static getPokemonTypeIcon = (
    pokemonType: EPokemonsTypes | null | undefined
  ) => {
    switch (pokemonType) {
      case EPokemonsTypes.Grass:
        return ImageAssets.pokemonTypes.grass;
      case EPokemonsTypes.Water:
        return ImageAssets.pokemonTypes.water;
      case EPokemonsTypes.Fire:
        return ImageAssets.pokemonTypes.fire;
      case EPokemonsTypes.Dark:
        return ImageAssets.pokemonTypes.dark;
      case EPokemonsTypes.Fairy:
        return ImageAssets.pokemonTypes.fairy;
      case EPokemonsTypes.Ice:
        return ImageAssets.pokemonTypes.ice;
      case EPokemonsTypes.Dragon:
        return ImageAssets.pokemonTypes.dragon;
      case EPokemonsTypes.Bug:
        return ImageAssets.pokemonTypes.bug;
      case EPokemonsTypes.Poison:
        return ImageAssets.pokemonTypes.poison;
      case EPokemonsTypes.Steel:
        return ImageAssets.pokemonTypes.steel;
      case EPokemonsTypes.Ground:
        return ImageAssets.pokemonTypes.ground;
      case EPokemonsTypes.Rock:
        return ImageAssets.pokemonTypes.rock;
      case EPokemonsTypes.Fighting:
        return ImageAssets.pokemonTypes.fighting;
      case EPokemonsTypes.Eletric:
        return ImageAssets.pokemonTypes.eletric;
      case EPokemonsTypes.Psychic:
        return ImageAssets.pokemonTypes.psychic;
      case EPokemonsTypes.Flying:
        return ImageAssets.pokemonTypes.flying;
      case EPokemonsTypes.Ghost:
        return ImageAssets.pokemonTypes.ghost;
      default:
        return ImageAssets.pokemonTypes.normal;
    }
  };

  static getPokemonColor = (pokemonType: EPokemonsTypes[]) => {
    let type = pokemonType[0];

    if (pokemonType.length > 1) {
      type = pokemonType.filter((type) => type !== EPokemonsTypes.Normal)[0];
    }

    switch (type) {
      case EPokemonsTypes.AllTypes:
        return "#333333";
      case EPokemonsTypes.Grass:
        return "#63BC5A";
      case EPokemonsTypes.Water:
        return "#5090D6";
      case EPokemonsTypes.Fire:
        return "#FF9D55";
      case EPokemonsTypes.Dark:
        return "#5A5465";
      case EPokemonsTypes.Fairy:
        return "#EC8FE6";
      case EPokemonsTypes.Ice:
        return "#73CEC0";
      case EPokemonsTypes.Dragon:
        return "#0B6DC3";
      case EPokemonsTypes.Bug:
        return "#91C12F";
      case EPokemonsTypes.Poison:
        return "#B567CE";
      case EPokemonsTypes.Steel:
        return "#5A8EA2";
      case EPokemonsTypes.Ground:
        return "#D97845";
      case EPokemonsTypes.Rock:
        return "#C5B78C";
      case EPokemonsTypes.Fighting:
        return "#CE416B";
      case EPokemonsTypes.Eletric:
        return "#F4D23C";
      case EPokemonsTypes.Psychic:
        return "#FA7179";
      case EPokemonsTypes.Flying:
        return "#89AAE3";
      case EPokemonsTypes.Ghost:
        return "#5269AD";
      default:
        return "#919AA2";
    }
  };

  private static sortById = (pokemons: PokemonShort[], ascendant = true) => {
    const len = pokemons.length;
    let i, j, temp;
    let swapped;
    for (i = 0; i < len - 1; i++) {
      swapped = false;
      for (j = 0; j < len - i - 1; j++) {
        if (pokemons[j].id > pokemons[j + 1].id) {
          temp = pokemons[j];
          pokemons[j] = pokemons[j + 1];
          pokemons[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    if (!ascendant) {
      pokemons = pokemons.reverse();
    }

    return pokemons;
  };

  private static sortByName = (pokemons: PokemonShort[], ascendant = true) => {
    const len = pokemons.length;
    let i, j, temp;
    let swapped;
    for (i = 0; i < len - 1; i++) {
      swapped = false;
      for (j = 0; j < len - i - 1; j++) {
        if (
          pokemons[j].name.toLowerCase() > pokemons[j + 1].name.toLowerCase()
        ) {
          temp = pokemons[j];
          pokemons[j] = pokemons[j + 1];
          pokemons[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    if (!ascendant) {
      pokemons = pokemons.reverse();
    }

    return pokemons;
  };

  static sortPokemons = (pokemons: PokemonShort[], order: EOrder) => {
    let result = pokemons;

    switch (order) {
      case EOrder.BiggerNumber:
        result = this.sortById(result, false);
        break;
      case EOrder.A_Z:
        result = this.sortByName(result);
        break;
      case EOrder.Z_A:
        result = this.sortByName(result, false);
        break;
      default:
        result = this.sortById(result);
        break;
    }

    return result;
  };

  static buildEvolutionChain = (
    chain: ApiEvolutionChainItem[]
  ): PokemonEvolutions => {
    if (!chain[0]) {
      return undefined;
    }

    if (chain[0].evolves_to.length < 1) {
      return {
        name: chain[0].species.name,
        evolutions: [],
      };
    } else {
      let evolutions: PokemonEvolutions[] = [];
      chain[0].evolves_to.forEach((evolution) => {
        const nextEvolutions = this.buildEvolutionChain(evolution.evolves_to);
        evolutions = [
          ...evolutions,
          {
            name: evolution.species.name,
            evolutions: nextEvolutions ? [nextEvolutions] : [],
          },
        ];
      });

      return {
        name: chain[0].species.name,
        evolutions,
      };
    }
  };

  static buildEvolutionChainList = (
    chains: PokemonEvolutions[]
  ): Array<Array<string>> => {
    let result: Array<Array<string>> = [];
    const chainBase = chains[0]?.name;

    if (!chainBase) {
      return result;
    }

    //For each chain
    for (let i = 0; i < chains.length; i++) {
      const chain = chains[i];

      if (!chain) {
        continue;
      }

      //If this chain has no evolutions, push the current name to a evolution branch
      if (!chain.evolutions || chain.evolutions.length < 1) {
        result.push([chain.name]);
      } else {
        //If this chain has evolutions, recursively get them
        const nextEvolutions = this.buildEvolutionChainList(chain.evolutions);

        //For each possible branch, add it with the current evolution name on the start
        nextEvolutions.forEach((evolution) =>
          result.push([chain.name, ...evolution])
        );
      }
    }

    return result;
  };
}
