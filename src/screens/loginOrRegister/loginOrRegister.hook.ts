import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useLoginOrRegisterHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToPokedex = React.useCallback(() => {
    goTo(ScreenPaths.favorites);
  }, [goTo]);

  const handleGoToRegister = React.useCallback(() => {
    goTo(ScreenPaths.register);
  }, [goTo]);

  const handleGoToLogin = React.useCallback(() => {
    goTo(ScreenPaths.login);
  }, [goTo]);

  return {
    onPointerDownSkip: handleGoToPokedex,
    onPointerDownRegister: handleGoToRegister,
    onPointerDownAlreadyHaveAnAccount: handleGoToLogin,
  };
};
