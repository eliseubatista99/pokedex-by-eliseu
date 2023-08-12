import { EPokemonsTypes } from "@constants";

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
