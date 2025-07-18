import { ScreenPaths } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import React from "react";

export const useRegisterHelper = () => {
  const { goTo } = useNavigation();

  const handleGoToRegisterData = React.useCallback(() => {
    goTo(ScreenPaths.registerData);
  }, [goTo]);

  const handleRegisterWithGoogle = React.useCallback(() => {
    goTo(ScreenPaths.login);
  }, [goTo]);

  const handleRegisterWithApple = React.useCallback(() => {
    goTo(ScreenPaths.login);
  }, [goTo]);

  return {
    onClickGoogle: handleRegisterWithGoogle,
    onClickApple: handleRegisterWithApple,
    onClickEmail: handleGoToRegisterData,
  };
};
