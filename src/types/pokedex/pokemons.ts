import { EPokemonsTypes } from "@constants";

export interface PokemonType {
  name: EPokemonsTypes;
  doubleFrom: string[];
  doubleTo: string[];
  halfFrom: string[];
  halfTo: string[];
  noneFrom: string[];
  noneTo: string[];
}

export interface PokemonFull extends PokemonShort {
  abilities: string[];
  evolutionChain: string[];
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
