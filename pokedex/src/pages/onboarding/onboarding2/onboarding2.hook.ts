import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface Onboarding2HelperOutputProps {
  onClickContinue: () => void;
}

export const useOnboarding2Helper = (): Onboarding2HelperOutputProps => {
  const { goBack, goTo } = useCustomNavigation();

  const handleGoToLoginOrRegister = () => {
    goTo(Pages.loginOrRegister);
  };

  return {
    onClickContinue: handleGoToLoginOrRegister,
  };
};
