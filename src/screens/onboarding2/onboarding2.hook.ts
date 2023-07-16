import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface Onboarding2HelperOutputProps {
  onClickContinue: () => void;
}

export const useOnboarding2Helper = (): Onboarding2HelperOutputProps => {
  const { goTo } = useCustomNavigation();

  const handleGoToLoginOrRegister = () => {
    goTo(ScreenPaths.loginOrRegister);
  };

  return {
    onClickContinue: handleGoToLoginOrRegister,
  };
};
