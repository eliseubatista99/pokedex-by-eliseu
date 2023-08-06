export interface ApiItemSprites {
  default: string;
}

export interface ApiItemFlavorEntry {
  language: {
    name: string;
  };
  text: string;
}

export interface ApiItemEffectEntry {
  effect: string;
  language: {
    name: string;
  };
  short_effect: string;
}

export interface ApiItemCategory {
  name: string;
  url: string;
}

export interface ApiItemAttribute {
  name: string;
  url: string;
}

export interface ApiItem {
  id: number;
  name: string;
  attributes: ApiItemAttribute[];
  category: ApiItemCategory;
  effect_entries: ApiItemEffectEntry[];
  flavor_text_entries: ApiItemFlavorEntry[];
  sprites: ApiItemSprites;
}

export interface ApiItemListItem {
  name: string;
  url: string;
}

export interface ApiItemList {
  results: ApiItemListItem[];
}
