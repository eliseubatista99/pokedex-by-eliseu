import { ScreenPaths } from "@constants";
import { useCustomNavigation, useFirebaseAuth } from "@hooks";
import { useBaseStore } from "@store";
import React from "react";

export const useLogoutHelper = () => {
  const { currentUser, logout } = useFirebaseAuth();
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

      cleanAndGoTo(ScreenPaths.loginOrRegister);
    } catch (error: unknown) {
      console.error("Failed to login. Error: ", error);
      hideLoader();
    }
  }, [cleanAndGoTo, hideLoader, logout, showLoader]);

  return {
    username: currentUser?.displayName,
    onClickLogout: handleLogout,
  };
};
