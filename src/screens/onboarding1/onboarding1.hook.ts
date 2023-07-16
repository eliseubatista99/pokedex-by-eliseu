import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useOnboarding1Helper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToOnboarding2 = () => {
    goTo(ScreenPaths.onboarding2);
  };

  return {
    onClickContinue: handleGoToOnboarding2,
  };
};
