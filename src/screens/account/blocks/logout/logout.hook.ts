import { Drawers } from "@constants";
import { usePokedexFirebaseAuth } from "@contexts";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";

export const useLogoutHelper = () => {
  const { currentUser } = usePokedexFirebaseAuth();
  const { showItem, hideItem } = useFeedback();

  const handleOpenLogoutDrawer = () => {
    showItem(Drawers.logout);
  };

  const handleCloseLogoutDrawer = () => {
    hideItem(Drawers.logout);
  };

  return {
    username: currentUser?.displayName,
    onClickOpenLogoutDrawer: handleOpenLogoutDrawer,
    onCloseLogoutDrawer: handleCloseLogoutDrawer,
  };
};
