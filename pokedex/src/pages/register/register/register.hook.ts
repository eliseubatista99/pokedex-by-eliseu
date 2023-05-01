import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface RegisterHelperOutputProps {
  onClickBack: () => void;
  onClickGoogle: () => void;
  onClickApple: () => void;
  onClickEmail: () => void;
}

export const useRegisterHelper = (): RegisterHelperOutputProps => {
  const { goBack, goTo } = useCustomNavigation();

  const handleGoBack = () => {
    goBack(-1);
  };

  const handleGoToRegisterData = () => {
    goTo(Pages.registerData);
  };

  const handleRegisterWithGoogle = () => {
    goTo(Pages.login);
  };

  const handleRegisterWithApple = () => {
    goTo(Pages.login);
  };

  return {
    onClickBack: handleGoBack,
    onClickGoogle: handleRegisterWithGoogle,
    onClickApple: handleRegisterWithApple,
    onClickEmail: handleGoToRegisterData,
  };
};
