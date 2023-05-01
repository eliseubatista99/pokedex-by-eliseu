import React from "react";
import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useSplashScreenHelper = () => {
  const { goTo } = useCustomNavigation();

  const goToOnboarding1 = () => {
    goTo(Pages.onboarding1);
  };

  const goToNextScreen = () => {
    goToOnboarding1();
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      goToNextScreen();
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
