import { ScreenPaths } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import React from "react";

export const useOnboarding1Helper = () => {
  const { goTo } = useNavigation();

  const handleGoToOnboarding2 = React.useCallback(() => {
    goTo(ScreenPaths.onboarding2);
  }, [goTo]);

  return {
    onClickContinue: handleGoToOnboarding2,
  };
};
