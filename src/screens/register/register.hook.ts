import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useRegisterHelper = () => {
  const { goBack, goTo } = useCustomNavigation();

  const handleGoToRegisterData = () => {
    goTo(ScreenPaths.registerData);
  };

  const handleRegisterWithGoogle = () => {
    goTo(ScreenPaths.login);
  };

  const handleRegisterWithApple = () => {
    goTo(ScreenPaths.login);
  };

  return {
    onClickGoogle: handleRegisterWithGoogle,
    onClickApple: handleRegisterWithApple,
    onClickEmail: handleGoToRegisterData,
  };
};
