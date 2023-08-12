import { EPokemonsTypes } from "@constants";

export type PokemonEvolutions =
  | {
      name: string;
      evolutions: PokemonEvolutions[];
    }
  | undefined;

// export type PokemonEvolutions = Record<string, PokemonEvolutions>;

export interface PokemonType {
  name: EPokemonsTypes;
  doubleFrom?: EPokemonsTypes[];
  doubleTo?: EPokemonsTypes[];
  halfFrom?: EPokemonsTypes[];
  halfTo?: EPokemonsTypes[];
  noneFrom?: EPokemonsTypes[];
  noneTo?: EPokemonsTypes[];
}

export interface PokemonFull extends PokemonShort {
  abilities: string[];
  evolutionChain: PokemonEvolutions;
  flavor: string;
  genus: string;
  stats: Record<string, number>;
  typesData: PokemonType[];
}

export interface PokemonShort {
  id: number;
  name: string;
  sprite: string;
  typesNames: EPokemonsTypes[];
}
