export interface PokemonType {
  name: string;
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
}

export interface PokemonShort {
  id: number;
  name: string;
  sprite: string;
  color: string;
  types: PokemonType[];
}
