import React from "react";
import { BaseDrawerProps } from "../_baseDrawer";

export const useOrderDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const handleOrderSelected = React.useCallback(
    (order: string) => {
      onCloseDrawer(order);
    },
    [onCloseDrawer]
  );

  return {
    onOrderSelected: handleOrderSelected,
  };
};
