import { EItemCategory, EOrder, EPokemonsTypes, ScreenPaths } from "@constants";
import { ItemHelper, PokemonHelper } from "@helpers";
import { useCustomNavigation, usePokeApi } from "@hooks";
import { useBaseStore, usePokedexStore } from "@store";
import { PokemonShort } from "@types";
import React from "react";
import { ItemShort } from "src/types/pokedex/items";

export const useItemsHelper = () => {
  const { showLoader, hideLoader } = useBaseStore();
  const { goTo } = useCustomNavigation();
  const { setSelectedItem } = usePokedexStore();
  const [itemsToDisplay, setItemsToDisplay] = React.useState<ItemShort[]>([]);
  const limit = React.useRef<number>(20);

  const [categoryFilterDrawerVisible, setCategoryFilterDrawerVisible] =
    React.useState<boolean>(false);

  const [orderDrawerVisible, setOrderDrawerVisible] =
    React.useState<boolean>(false);

  const selectedCategoryFilter = React.useRef<EItemCategory>(
    EItemCategory.AllCategories
  );
  const selectedOrder = React.useRef<EOrder>(EOrder.LesserNumber);

  const pokeApi = usePokeApi();

  const handleOnItemClicked = (item: ItemShort) => {
    setSelectedItem(item);
    goTo(ScreenPaths.pokemonDetails);
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

        if (!value && limit.current < itemResult.length) {
          limit.current = itemResult.length;
        }

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
    setCategoryFilterDrawerVisible(true);
  };

  const handleCloseTypesFilterDrawer = (type: EItemCategory) => {
    selectedCategoryFilter.current = type;
    setCategoryFilterDrawerVisible(false);
  };

  const handleOpenOrderDrawer = () => {
    setOrderDrawerVisible(true);
  };

  const handleCloseOrderDrawer = (order: EOrder) => {
    selectedOrder.current = order;
    setOrderDrawerVisible(false);
  };

  return {
    itemsToDisplay,
    categoryFilter: {
      selectedCategoryFilter: selectedCategoryFilter.current,
      isVisible: categoryFilterDrawerVisible,
      openDrawer: handleOpenTypesFilterDrawer,
      closeDrawer: handleCloseTypesFilterDrawer,
    },
    order: {
      selectedOrder: selectedOrder.current,
      isVisible: orderDrawerVisible,
      openDrawer: handleOpenOrderDrawer,
      closeDrawer: handleCloseOrderDrawer,
    },
    updateItems: handleUpdateItems,
    onIncreaseLimit: handleIncreaseLimit,
    onItemClicked: handleOnItemClicked,
  };
};
