import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import React from "react";

export const usePokedexBottomContentHelper = () => {
  const { currentPath, goTo } = useNavigation();
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
