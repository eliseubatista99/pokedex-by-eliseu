import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useLoginHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToLoginData = React.useCallback(() => {
    goTo(ScreenPaths.loginData);
  }, [goTo]);

  const handleLoginWithGoogle = React.useCallback(() => {
    goTo(ScreenPaths.login);
  }, [goTo]);

  const handleLoginWithApple = React.useCallback(() => {
    goTo(ScreenPaths.login);
  }, [goTo]);

  return {
    onPointerDownGoogle: handleLoginWithGoogle,
    onPointerDownApple: handleLoginWithApple,
    onPointerDownEmail: handleGoToLoginData,
  };
};
