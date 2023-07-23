import { ScreenPaths } from "@constants";
import { useFirebaseContext } from "@contexts";
import { useCustomNavigation } from "@hooks";
import { useBaseStore, useUserStore } from "@store";
import React from "react";

export const useLogoutHelper = () => {
  const { currentUser, logout } = useFirebaseContext();
  const { setLoading } = useBaseStore();
  const { setPartialState: setUserData } = useUserStore();
  const { cleanAndGoTo } = useCustomNavigation();

  const handleLogout = React.useCallback(async () => {
    try {
      setLoading({
        isLoading: true,
        loadingText: "Logging out...",
        style: "opaque",
      });
      await logout?.();
      setLoading({
        isLoading: false,
        loadingText: undefined,
      });

      setUserData({
        firebaseUser: undefined,
      });

      cleanAndGoTo(ScreenPaths.loginOrRegister);
    } catch (error: unknown) {
      console.error("Failed to login. Error: ", error);
      setLoading({
        isLoading: false,
        loadingText: undefined,
      });
    }
  }, [cleanAndGoTo, logout, setLoading, setUserData]);

  return {
    username: currentUser?.displayName,
    onClickLogout: handleLogout,
  };
};
