import React from "react";
import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import { useBaseStore, useUserStore } from "@store";
import { useFirebaseContext } from "@contexts";

export const useSplashScreenHelper = () => {
  const { goTo } = useCustomNavigation();
  const { setLoading } = useBaseStore();
  const { currentUser } = useFirebaseContext();
  const { setPartialState: setUserData } = useUserStore();

  const goToNextScreen = () => {
    setLoading({
      isLoading: false,
      loadingText: undefined,
    });

    if (currentUser) {
      setUserData({
        name: currentUser.displayName,
        email: currentUser.email,
      });
      goTo(ScreenPaths.account);
    } else {
      goTo(ScreenPaths.onboarding1);
    }

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
