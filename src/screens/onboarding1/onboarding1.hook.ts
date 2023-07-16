import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface Onboarding1HelperOutputProps {
  onClickContinue: () => void;
}

export const useOnboarding1Helper = (): Onboarding1HelperOutputProps => {
  const { goTo } = useCustomNavigation();

  const handleGoToOnboarding2 = () => {
    goTo(ScreenPaths.onboarding2);
  };

  return {
    onClickContinue: handleGoToOnboarding2,
  };
};
