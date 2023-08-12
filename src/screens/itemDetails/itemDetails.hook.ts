import { ItemHelper, TextHelper } from "@helpers";
import { usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import { ItemFull, ItemShort } from "@types";
import React from "react";

export const useItemDetailsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { selectedItem } = usePokedexStore();
  const { getItemFull } = usePokeApi();
  const screenInitialized = React.useRef<boolean>(false);

  const [itemFullData, setItemFullData] = React.useState<ItemFull | undefined>(
    undefined
  );

  const handleFetchItemFull = React.useCallback(
    async (item: ItemShort) => {
      try {
        showLoader({
          loadingText: "Retrieving item full",
          style: "transparent",
        });
        const data = await getItemFull(item.name);

        setItemFullData(data);
        hideLoader();
      } catch (error) {
        hideLoader();
        console.error("Failed to retrieve item full: ", error);
      }
    },
    [getItemFull, hideLoader, showLoader]
  );

  React.useEffect(() => {
    if (!screenInitialized.current) {
      if (selectedItem) {
        screenInitialized.current = true;
        handleFetchItemFull(selectedItem);
      }
    }
  }, [handleFetchItemFull, selectedItem]);

  return {
    item: itemFullData,
    itemId: ItemHelper.getItemId(itemFullData?.id || 0),
    itemName: TextHelper.getPascalCase(itemFullData?.name || ""),
    itemColor: ItemHelper.getItemColor(itemFullData?.category),
  };
};
