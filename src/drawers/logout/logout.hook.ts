import React from "react";
import { useBaseStore } from "@store";
import { useFirebaseAuth } from "@contexts";
import { BaseDrawerProps } from "../_baseDrawer";
import { useCustomNavigation } from "@hooks";
import { ScreenPaths } from "@constants";

export const useLogoutDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const { logout } = useFirebaseAuth();
  const { showLoader, hideLoader } = useBaseStore();
  const { cleanAndGoTo } = useCustomNavigation();

  const handleLogout = React.useCallback(async () => {
    try {
      showLoader({
        loadingText: "Logging out...",
        style: "opaque",
      });
      await logout?.();
      hideLoader();

      onCloseDrawer?.();
      cleanAndGoTo(ScreenPaths.loginOrRegister);
    } catch (error: unknown) {
      console.error("Failed to logout. Error: ", error);
      hideLoader();
    }
  }, [cleanAndGoTo, hideLoader, logout, onCloseDrawer, showLoader]);

  return {
    onClickLogout: handleLogout,
  };
};
