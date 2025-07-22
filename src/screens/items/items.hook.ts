import { Drawers, EItemCategory, EOrder, ScreenPaths } from "@constants";
import {
  useFeedback,
  useNavigation,
} from "@eliseubatista99/react-scaffold-core";
import { ItemHelper } from "@helpers";
import { usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import React from "react";
import type { ItemShort } from "../../types";

export const useItemsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { goTo } = useNavigation();
  const { setSelectedItem } = usePokedexStore();
  const { showItem, hideItem } = useFeedback();

  const [itemsToDisplay, setItemsToDisplay] = React.useState<ItemShort[]>([]);
  const limit = React.useRef<number>(20);

  const selectedCategoryFilter = React.useRef<EItemCategory>(
    EItemCategory.AllCategories
  );
  const selectedOrder = React.useRef<EOrder>(EOrder.LesserNumber);

  const pokeApi = usePokeApi();

  const handleOnItemClicked = (item: ItemShort) => {
    setSelectedItem(item);
    goTo(ScreenPaths.itemDetails);
  };

  const handleIncreaseLimit = (count: number) => {
    limit.current += count;
  };

  const handleUpdateItems = React.useCallback(
    async (value?: string) => {
      try {
        showLoader({
          loadingText: "Retrieving items",
          style: "transparent",
        });
        let itemResult: ItemShort[] | undefined = await pokeApi.getAllItems(
          limit.current
        );

        if (value) {
          itemResult = await pokeApi.getItemByName(value);
        }

        if (selectedCategoryFilter.current) {
          itemResult = itemResult.filter((item) => {
            let hasCategory = false;

            for (let i = 0; i < item.category.length; i++) {
              if (item.category === selectedCategoryFilter.current) {
                hasCategory = true;
                break;
              }
            }

            return hasCategory;
          });
        }

        itemResult = ItemHelper.sortItems(itemResult, selectedOrder.current);

        // if (!value && limit.current < itemResult.length) {
        //   limit.current = itemResult.length;
        // }

        setItemsToDisplay(itemResult || []);

        hideLoader();
      } catch (error) {
        console.error("Failed to retrieve items: ", error);
        hideLoader();
      }
    },
    [hideLoader, pokeApi, selectedCategoryFilter, showLoader]
  );

  const handleOpenTypesFilterDrawer = () => {
    showItem(Drawers.categoryFilter);
  };

  const handleCloseTypesFilterDrawer = (type: EItemCategory | undefined) => {
    if (type) {
      selectedCategoryFilter.current = type;
    }
    hideItem(Drawers.categoryFilter);
  };

  const handleOpenOrderDrawer = () => {
    showItem(Drawers.order);
  };

  const handleCloseOrderDrawer = (order: EOrder | undefined) => {
    if (order) {
      selectedOrder.current = order;
    }
    hideItem(Drawers.order);
  };

  return {
    itemsToDisplay,
    categoryFilter: {
      selectedCategoryFilter: selectedCategoryFilter.current,
      openDrawer: handleOpenTypesFilterDrawer,
      closeDrawer: handleCloseTypesFilterDrawer,
    },
    order: {
      selectedOrder: selectedOrder.current,
      openDrawer: handleOpenOrderDrawer,
      closeDrawer: handleCloseOrderDrawer,
    },
    updateItems: handleUpdateItems,
    onIncreaseLimit: handleIncreaseLimit,
    onItemClicked: handleOnItemClicked,
  };
};
