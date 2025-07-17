import { EItemCategory, POKE_API_BASE_URL } from "@constants";
import { useFetch } from "@hooks";
import { usePokeApiStore } from "@store";
import type {
  ApiItem,
  ApiItemList,
  ItemEffect,
  ItemFull,
  ItemShort,
} from "@types";
import React from "react";

export const useItems = () => {
  const fetch = useFetch();
  const {
    items: itemsInStore,
    itemsList,
    updateItem: updateItemInStore,
    saveItemsList,
  } = usePokeApiStore();

  const getItemShort = React.useCallback(
    async (name: string) => {
      const itemInStore = itemsInStore.find((item) => item.name === name);

      if (itemInStore) {
        return itemInStore;
      }

      const item = await fetch<ApiItem>(`${POKE_API_BASE_URL}item/${name}`);

      const result: ItemShort = {
        id: item.id,
        name: item.name,
        sprite: item.sprites.default,
        category: item.category.name as EItemCategory,
      };

      updateItemInStore(result);

      return result;
    },
    [fetch, itemsInStore, updateItemInStore]
  );

  const getItemFull = React.useCallback(
    async (name: string) => {
      const item = await fetch<ApiItem>(`${POKE_API_BASE_URL}item/${name}`);
      const attributes: string[] = [];
      const effects: ItemEffect[] = [];
      item.attributes.forEach((attribute) => attributes.push(attribute.name));
      item.effect_entries
        .filter((effect) => effect.language.name === "en")
        .forEach((effect) =>
          effects.push({ short: effect.short_effect, full: effect.effect })
        );
      const flavor = item.flavor_text_entries.find(
        (flavor) => flavor.language.name === "en"
      );

      const result: ItemFull = {
        id: item.id,
        name: item.name,
        sprite: item.sprites.default,
        category: item.category.name as EItemCategory,
        attributes,
        effects,
        flavor: flavor?.text || "",
      };

      updateItemInStore(result);

      return result;
    },
    [fetch, updateItemInStore]
  );

  const getItemList = React.useCallback(async () => {
    if (itemsList.length > 0) {
      return itemsList;
    }

    const listResult = await fetch<ApiItemList>(`${POKE_API_BASE_URL}item`, {
      limit: 100000,
      offset: 0,
    });

    saveItemsList(listResult.results);
    return listResult.results;
  }, [fetch, itemsList, saveItemsList]);

  const getItemByName = React.useCallback(
    async (name: string) => {
      const itemList = await getItemList();

      const mappedItems: ItemShort[] = [];

      const filteredList = itemList.filter((item) =>
        item.name.toUpperCase().includes(name.toUpperCase())
      );

      for (let i = 0; i < filteredList.length; i++) {
        const result = await getItemShort(filteredList[i].name);
        mappedItems.push(result);
      }

      return mappedItems;
    },
    [getItemList, getItemShort]
  );

  const getAllItems = React.useCallback(
    async (limit = 20, offset = 0) => {
      const itemList = await getItemList();

      let mappedItems: ItemShort[] = [];

      for (let i = offset; i < limit; i++) {
        const result = await getItemShort(itemList[i].name);
        mappedItems.push(result);
      }

      return mappedItems;
    },
    [getItemList, getItemShort]
  );

  return {
    getItemShort,
    getItemFull,
    getItemByName,
    getAllItems,
  };
};
