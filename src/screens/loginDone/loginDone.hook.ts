import { ScreenPaths } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import React from "react";

export const useLoginDoneHelper = () => {
  const { goTo } = useNavigation();

  const handleClickContinue = React.useCallback(() => {
    goTo(ScreenPaths.pokemons);
  }, [goTo]);

  return {
    onClickContinue: handleClickContinue,
  };
};
