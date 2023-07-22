import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useLoginOrRegisterHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleGoToPokedex = () => {
    goTo(ScreenPaths.account);
  };

  const handleGoToRegister = () => {
    goTo(ScreenPaths.register);
  };

  const handleGoToLogin = () => {
    goTo(ScreenPaths.login);
  };

  return {
    onClickSkip: handleGoToPokedex,
    onClickRegister: handleGoToRegister,
    onClickAlreadyHaveAnAccount: handleGoToLogin,
  };
};
