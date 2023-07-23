import React from "react";
import { ScreenPaths } from "@constants";
import { useCustomNavigation, useFirebaseFirestore } from "@hooks";
import { useBaseStore, useUserStore } from "@store";

export const useSplashScreenHelper = () => {
  const { goTo } = useCustomNavigation();
  const { hideLoader } = useBaseStore();
  const { firebaseUser } = useUserStore();
  const { getUser } = useFirebaseFirestore();

  const goToNextScreen = React.useCallback(() => {
    hideLoader();

    if (firebaseUser) {
      goTo(ScreenPaths.favorites);
    } else {
      goTo(ScreenPaths.onboarding1);
    }
  }, [firebaseUser, goTo, hideLoader]);

  const initializeApp = React.useCallback(async () => {
    if (firebaseUser) {
      getUser();
    }
    goToNextScreen();
  }, [firebaseUser, getUser, goToNextScreen]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      initializeApp();
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
