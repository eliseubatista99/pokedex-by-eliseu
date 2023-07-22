import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useAccountHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToLoginData = () => {
    goTo(ScreenPaths.loginData);
  };

  const handleLoginWithGoogle = () => {
    goTo(ScreenPaths.login);
  };

  const handleLoginWithApple = () => {
    goTo(ScreenPaths.login);
  };

  return {
    onClickGoogle: handleLoginWithGoogle,
    onClickApple: handleLoginWithApple,
    onClickEmail: handleGoToLoginData,
  };
};
