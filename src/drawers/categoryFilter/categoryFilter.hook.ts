import React from "react";
import { BaseDrawerProps } from "../_baseDrawer";

export const useCategoryFilterDrawerHelper = ({
  onCloseDrawer,
}: BaseDrawerProps) => {
  const handleCategorySelected = React.useCallback(
    (category: string) => {
      onCloseDrawer(category);
    },
    [onCloseDrawer]
  );

  return {
    onCategorySelected: handleCategorySelected,
  };
};
