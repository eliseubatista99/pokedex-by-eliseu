import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useAccountHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToUpdateName = React.useCallback(() => {
    goTo(ScreenPaths.updateName);
  }, [goTo]);

  const handleGoToUpdateEmail = React.useCallback(() => {
    goTo(ScreenPaths.updateEmail);
  }, [goTo]);

  const handleGoToUpdatePassword = React.useCallback(() => {
    goTo(ScreenPaths.updatePassword);
  }, [goTo]);

  return {
    onClickName: handleGoToUpdateName,
    onClickEmail: handleGoToUpdateEmail,
    onClickPassword: handleGoToUpdatePassword,
  };
};
