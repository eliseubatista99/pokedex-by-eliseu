import { ImageAssets } from "@assets";
import { EItemCategory, EOrder, EPokemonsTypes } from "@constants";
import { PokemonShort } from "@types";
import { ItemShort } from "src/types/pokedex/items";
import { TextHelper } from "../text";

export class ItemHelper {
  static getItemId = (id: number) => {
    const parsedId = `${id}`;

    if (parsedId.length < 2) {
      return `00${parsedId}`;
    } else if (parsedId.length < 3) {
      return `0${parsedId}`;
    }

    return parsedId;
  };

  static getItemColor = (category: EItemCategory | null | undefined) => {
    switch (category) {
      case EItemCategory.AllCategories:
        return "#333333";
      case EItemCategory.StandardBall:
        return "#63BC5A";
      default:
        return "#919AA2";
    }
  };

  private static sortById = (items: ItemShort[], ascendant = true) => {
    const len = items.length;
    let i, j, temp;
    let swapped;
    for (i = 0; i < len - 1; i++) {
      swapped = false;
      for (j = 0; j < len - i - 1; j++) {
        if (items[j].id > items[j + 1].id) {
          temp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    if (!ascendant) {
      items = items.reverse();
    }

    return items;
  };

  private static sortByName = (items: ItemShort[], ascendant = true) => {
    const len = items.length;
    let i, j, temp;
    let swapped;
    for (i = 0; i < len - 1; i++) {
      swapped = false;
      for (j = 0; j < len - i - 1; j++) {
        if (items[j].name.toLowerCase() > items[j + 1].name.toLowerCase()) {
          temp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = temp;
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    if (!ascendant) {
      items = items.reverse();
    }

    return items;
  };

  static sortItems = (items: ItemShort[], order: EOrder) => {
    let result = items;

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

  static parseItemNames = (name: string) => {
    const split = name.split("-");
    const splitPascalCase = split.map((word) => TextHelper.getPascalCase(word));
    const result = splitPascalCase.join(" ");

    return result;
  };
}
