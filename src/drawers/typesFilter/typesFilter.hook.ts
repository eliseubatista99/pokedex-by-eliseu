import React from "react";
import { type BaseDrawerProps } from "../_baseDrawer";

export const useTypesFilterDrawerHelper = ({
  onCloseDrawer,
}: BaseDrawerProps) => {
  const handleTypeSelected = React.useCallback(
    (type: string) => {
      onCloseDrawer(type);
    },
    [onCloseDrawer]
  );

  return {
    onTypeSelected: handleTypeSelected,
  };
};
