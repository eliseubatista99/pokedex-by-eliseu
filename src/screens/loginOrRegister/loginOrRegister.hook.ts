import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface LoginOrRegisterHelperOutputProps {
  onClickSkip: () => void;
  onClickRegister: () => void;
  onClickAlreadyHaveAnAccount: () => void;
}

export const useLoginOrRegisterHelper =
  (): LoginOrRegisterHelperOutputProps => {
    const { goTo } = useCustomNavigation();

    const handleGoToPokedex = () => {
      goTo(ScreenPaths.pokedex);
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
