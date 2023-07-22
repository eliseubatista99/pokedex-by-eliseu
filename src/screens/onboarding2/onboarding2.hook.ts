import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useOnboarding2Helper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToLoginOrRegister = React.useCallback(() => {
    goTo(ScreenPaths.loginOrRegister);
  }, [goTo]);

  return {
    onClickContinue: handleGoToLoginOrRegister,
  };
};
