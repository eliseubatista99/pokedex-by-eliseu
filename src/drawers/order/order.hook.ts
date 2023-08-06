import { EPokemonsOrder } from "@constants";
import React from "react";
import { BaseDrawerProps } from "../_baseDrawer";

export const useOrderDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const handleOrderSelected = React.useCallback(
    (order: EPokemonsOrder) => {
      onCloseDrawer(order);
    },
    [onCloseDrawer]
  );

  return {
    onOrderSelected: handleOrderSelected,
  };
};
