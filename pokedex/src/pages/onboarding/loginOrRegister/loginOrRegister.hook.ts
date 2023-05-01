import { Pages } from "@constants";
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
      goTo(Pages.pokedex);
    };

    const handleGoToRegister = () => {
      goTo(Pages.register);
    };

    const handleGoToLogin = () => {
      goTo(Pages.login);
    };

    return {
      onClickSkip: handleGoToPokedex,
      onClickRegister: handleGoToRegister,
      onClickAlreadyHaveAnAccount: handleGoToLogin,
    };
  };
