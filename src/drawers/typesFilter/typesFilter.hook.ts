import type { EPokemonsTypes } from "@constants";
import React from "react";
import type { DrawerTypesFilterProps } from "./typesFilter";

export const useTypesFilterDrawerHelper = ({
  onTypeSelected,
}: DrawerTypesFilterProps) => {
  const handleTypeSelected = React.useCallback(
    (type: string) => {
      onTypeSelected(type as EPokemonsTypes);
    },
    [onTypeSelected]
  );

  return {
    onTypeSelected: handleTypeSelected,
  };
};
