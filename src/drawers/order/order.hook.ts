import { EOrder } from "@constants";
import React from "react";
import type { OrderDrawerProps } from "./order";

export const useOrderDrawerHelper = ({ onOrderSelected }: OrderDrawerProps) => {
  const handleOrderSelected = React.useCallback(
    (order: EOrder) => {
      onOrderSelected(order);
    },
    [onOrderSelected]
  );

  return {
    onOrderSelected: handleOrderSelected,
  };
};
