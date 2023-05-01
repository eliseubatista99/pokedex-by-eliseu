import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface LoginHelperOutputProps {
  onClickBack: () => void;
  onClickGoogle: () => void;
  onClickApple: () => void;
  onClickEmail: () => void;
}

export const useLoginHelper = (): LoginHelperOutputProps => {
  const { goBack, goTo } = useCustomNavigation();

  const handleGoBack = () => {
    goBack(-1);
  };

  const handleGoToLoginData = () => {
    goTo(Pages.loginData);
  };

  const handleLoginWithGoogle = () => {
    goTo(Pages.login);
  };

  const handleLoginWithApple = () => {
    goTo(Pages.login);
  };

  return {
    onClickBack: handleGoBack,
    onClickGoogle: handleLoginWithGoogle,
    onClickApple: handleLoginWithApple,
    onClickEmail: handleGoToLoginData,
  };
};
