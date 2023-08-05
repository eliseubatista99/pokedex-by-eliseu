import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useLoginOrRegisterHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToPokedex = React.useCallback(() => {
    goTo(ScreenPaths.pokemons);
  }, [goTo]);

  const handleGoToRegister = React.useCallback(() => {
    goTo(ScreenPaths.register);
  }, [goTo]);

  const handleGoToLogin = React.useCallback(() => {
    goTo(ScreenPaths.login);
  }, [goTo]);

  return {
    onClickSkip: handleGoToPokedex,
    onClickRegister: handleGoToRegister,
    onClickAlreadyHaveAnAccount: handleGoToLogin,
  };
};
