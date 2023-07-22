import { useCustomNavigation } from "@hooks";
import React from "react";

export const usePokedexBottomContentHelper = () => {
  const { currentPath, goTo } = useCustomNavigation();
  const handleOnItemClicked = React.useCallback(
    (screenPath: string) => {
      goTo(screenPath);
    },
    [goTo]
  );

  return {
    currentPath,
    onItemClicked: handleOnItemClicked,
  };
};
