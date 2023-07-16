import React from "react";
import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useSplashScreenHelper = () => {
  const { goTo } = useCustomNavigation();

  const goToNextScreen = () => {
    goTo(ScreenPaths.onboarding1);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      goToNextScreen();
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
