import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useOnboarding2Helper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToLoginOrRegister = () => {
    goTo(ScreenPaths.loginOrRegister);
  };

  return {
    onClickContinue: handleGoToLoginOrRegister,
  };
};
