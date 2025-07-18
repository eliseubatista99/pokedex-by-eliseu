import { ScreenPaths } from "@constants";
import { usePokedexFirebaseAuth } from "@contexts";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import React from "react";

export const useAccountInfoHelper = () => {
  const { currentUser } = usePokedexFirebaseAuth();

  const { goTo } = useNavigation();

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
