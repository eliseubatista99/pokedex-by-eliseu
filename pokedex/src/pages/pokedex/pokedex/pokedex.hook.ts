import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface PokedexHelperOutputProps {
  onClickRegister: () => void;
  onClickAlreadyHaveAnAccount: () => void;
}

export const usePokedexScreenHelper = (): PokedexHelperOutputProps => {
  const { goBack, goTo } = useCustomNavigation();

  const handleGoToRegister = () => {
    goTo(Pages.register);
  };

  const handleGoToLogin = () => {
    goTo(Pages.login);
  };

  return {
    onClickRegister: handleGoToRegister,
    onClickAlreadyHaveAnAccount: handleGoToLogin,
  };
};
