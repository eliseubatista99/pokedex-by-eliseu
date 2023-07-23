import { ScreenPaths } from "@constants";
import { useCustomNavigation, useFirebase } from "@hooks";
import React from "react";

export const useAccountInfoHelper = () => {
  const { currentUser } = useFirebase();

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
    username: currentUser?.displayName,
    email: currentUser?.email,
    onClickName: handleGoToUpdateName,
    onClickEmail: handleGoToUpdateEmail,
    onClickPassword: handleGoToUpdatePassword,
  };
};
