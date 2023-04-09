import React from "react";
import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export const useSplashScreenHelper = () => {
  const navigate = useNavigate();

  const goToOnboarding1 = () => {
    navigate(Pages.onboarding1);
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
