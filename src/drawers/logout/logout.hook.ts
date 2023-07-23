import React from "react";
import { useBaseStore } from "@store";
import { useFirebaseAuth } from "@contexts";
import { BaseDrawerProps } from "../_baseDrawer";
import { useCustomNavigation } from "@hooks";
import { ScreenPaths } from "@constants";

export const useLogoutDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const { logout } = useFirebaseAuth();
  const { showLoader, hideLoader } = useBaseStore();
  const { replaceHistory, goTo } = useCustomNavigation();

  const handleLogout = React.useCallback(async () => {
    try {
      showLoader({
        loadingText: "Logging out...",
        style: "opaque",
      });
      await logout?.();
      hideLoader();

      onCloseDrawer?.();
      replaceHistory([ScreenPaths.onboarding1, ScreenPaths.onboarding2]);
      goTo(ScreenPaths.loginOrRegister);
    } catch (error: unknown) {
      console.error("Failed to logout. Error: ", error);
      hideLoader();
    }
  }, [goTo, hideLoader, logout, onCloseDrawer, replaceHistory, showLoader]);

  return {
    onClickLogout: handleLogout,
  };
};
