import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useRegisterDoneHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleClickContinue = React.useCallback(() => {
    goTo(ScreenPaths.pokemons);
  }, [goTo]);

  return {
    onClickContinue: handleClickContinue,
  };
};
