import { useFirebaseAuth } from "@contexts";
import React from "react";

export const useLogoutHelper = () => {
  const { currentUser } = useFirebaseAuth();

  const [logoutDrawerVisible, setLogoutDrawerVisible] =
    React.useState<boolean>(false);

  const handleOpenLogoutDrawer = () => {
    setLogoutDrawerVisible(true);
  };

  const handleCloseLogoutDrawer = () => {
    setLogoutDrawerVisible(false);
  };

  return {
    username: currentUser?.displayName,
    logoutDrawerVisible,
    onClickOpenLogoutDrawer: handleOpenLogoutDrawer,
    onCloseLogoutDrawer: handleCloseLogoutDrawer,
  };
};
