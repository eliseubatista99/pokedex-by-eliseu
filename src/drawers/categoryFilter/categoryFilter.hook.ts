import type { EItemCategory } from "@constants";
import React from "react";
import type { DrawerCategoryFilterProps } from "./categoryFilter";

export const useCategoryFilterDrawerHelper = ({
  onCategorySelected,
}: DrawerCategoryFilterProps) => {
  const handleCategorySelected = React.useCallback(
    (category: string) => {
      onCategorySelected(category as EItemCategory);
    },
    [onCategorySelected]
  );

  return {
    onCategorySelected: handleCategorySelected,
  };
};
