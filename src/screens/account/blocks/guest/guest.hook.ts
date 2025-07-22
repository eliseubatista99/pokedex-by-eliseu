import { ScreenPaths } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";

export const useGuestHook = () => {
  const { replaceHistory, goTo } = useNavigation();

  const handleClickLoginOrRegister = () => {
    replaceHistory([ScreenPaths.onboarding1, ScreenPaths.onboarding2]);
    goTo(ScreenPaths.loginOrRegister);
  };

  return {
    onClickLoginOrRegister: handleClickLoginOrRegister,
  };
};
