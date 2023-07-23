import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useGuestHook = () => {
  const { replaceHistory, goTo } = useCustomNavigation();

  const handleClickLoginOrRegister = () => {
    replaceHistory([ScreenPaths.onboarding1, ScreenPaths.onboarding2]);
    goTo(ScreenPaths.loginOrRegister);
  };

  return {
    onClickLoginOrRegister: handleClickLoginOrRegister,
  };
};
