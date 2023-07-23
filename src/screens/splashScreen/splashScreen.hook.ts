import React from "react";
import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import { useBaseStore, useUserStore } from "@store";

export const useSplashScreenHelper = () => {
  const { goTo } = useCustomNavigation();
  const { setLoading } = useBaseStore();
  const { firebaseUser } = useUserStore();

  const goToNextScreen = React.useCallback(() => {
    setLoading({
      isLoading: false,
      loadingText: undefined,
    });

    if (firebaseUser) {
      goTo(ScreenPaths.account);
    } else {
      goTo(ScreenPaths.onboarding1);
    }
  }, [firebaseUser, goTo, setLoading]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      goToNextScreen();
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
