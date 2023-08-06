import { EItemCategory } from "@constants";

export interface ItemEffect {
  short: string;
  full: string;
}

export interface ItemFull extends ItemShort {
  attributes: string[];
  effects: ItemEffect[];
  flavor: string;
}

export interface ItemShort {
  id: number;
  name: string;
  sprite: string;
  category: EItemCategory;
}
