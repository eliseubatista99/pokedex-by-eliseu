import { ScreenPaths } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import React from "react";

export const useOnboarding2Helper = () => {
  const { goTo } = useNavigation();

  const handleGoToLoginOrRegister = React.useCallback(() => {
    goTo(ScreenPaths.loginOrRegister);
  }, [goTo]);

  return {
    onClickContinue: handleGoToLoginOrRegister,
  };
};
