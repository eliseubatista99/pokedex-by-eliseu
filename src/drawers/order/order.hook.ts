import { PokemonsOrder } from "@constants";
import React from "react";
import { BaseDrawerProps } from "../_baseDrawer";

export const useOrderDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const handleOrderSelected = React.useCallback(
    (order: PokemonsOrder) => {
      onCloseDrawer(order);
    },
    [onCloseDrawer]
  );

  return {
    onOrderSelected: handleOrderSelected,
  };
};
