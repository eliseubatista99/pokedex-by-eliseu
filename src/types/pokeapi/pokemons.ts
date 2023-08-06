export interface ApiEvolutionChain {
  evolves_to: ApiEvolutionChain[];
  species: {
    name: string;
  };
}

export interface ApiGenera {
  genus: string;
  language: {
    name: string;
  };
}

export interface ApiFlavorText {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface ApiPokemonSpecies {
  color: {
    name: string;
  };
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: ApiFlavorText[];
  genera: ApiGenera[];
}

export interface ApiPokemonDamageRelationItem {
  name: string;
  urL: string;
}

export interface ApiPokemonType {
  double_damage_from: ApiPokemonDamageRelationItem[];
  double_damage_to: ApiPokemonDamageRelationItem[];
  half_damage_from: ApiPokemonDamageRelationItem[];
  half_damage_to: ApiPokemonDamageRelationItem[];
  no_damage_from: ApiPokemonDamageRelationItem[];
  no_damage_to: ApiPokemonDamageRelationItem[];
}

export interface ApiPokemonStats {
  base_state: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface ApiPokemonSprites {
  front_default: string;
}

export interface ApiPokemonAbilities {
  ability: {
    name: string;
    urL: string;
  };
}

export interface ApiPokemon {
  id: number;
  name: string;
  abilities: ApiPokemonAbilities[];
  sprites: ApiPokemonSprites;
  species: {
    name: string;
    url: string;
  };
  stats: ApiPokemonStats[];
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
}

export interface ApiPokemonListItem {
  name: string;
  url: string;
}

export interface ApiPokemonList {
  results: ApiPokemonListItem[];
}
