export interface PokemonType {
  name: string;
  doubleFrom: string[];
  doubleTo: string[];
  halfFrom: string[];
  halfTo: string[];
  noneFrom: string[];
  noneTo: string[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprite: string;
  abilities: string[];
  color: string;
  evolutionChain: string[];
  flavor: string;
  genus: string;
  stats: Record<string, number>;
  types: PokemonType[];
}
