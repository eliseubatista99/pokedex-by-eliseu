import { ScreenPaths } from "@constants";
import { usePokedexFirebaseAuth } from "@contexts";
import {
  useNavigation,
  type DrawerProps,
} from "@eliseubatista99/react-scaffold-core";

import { useBaseStore } from "@store";
import React from "react";

export const useLogoutDrawerHelper = ({
  onCloseDrawer,
}: Omit<DrawerProps, "id">) => {
  const { logout } = usePokedexFirebaseAuth();
  const { showLoader, hideLoader } = useBaseStore();
  const { replaceHistory, goTo } = useNavigation();

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
