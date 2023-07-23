import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useOnboarding1Helper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToOnboarding2 = React.useCallback(() => {
    goTo(ScreenPaths.onboarding2);
  }, [goTo]);

  return {
    onPointerDownContinue: handleGoToOnboarding2,
  };
};
