import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useLoginDoneHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleClickContinue = React.useCallback(() => {
    goTo(ScreenPaths.favorites);
  }, [goTo]);

  return {
    onPointerDownContinue: handleClickContinue,
  };
};
