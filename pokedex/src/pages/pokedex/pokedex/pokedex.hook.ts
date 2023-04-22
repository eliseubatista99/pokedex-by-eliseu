import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface PokedexHelperOutputProps {
  onClickRegister: () => void;
  onClickAlreadyHaveAnAccount: () => void;
}

export const usePokedexScreenHelper = (): PokedexHelperOutputProps => {
  const navigate = useNavigate();

  const handleGoToRegister = () => {
    navigate(Pages.register);
  };

  const handleGoToLogin = () => {
    navigate(Pages.login);
  };

  return {
    onClickRegister: handleGoToRegister,
    onClickAlreadyHaveAnAccount: handleGoToLogin,
  };
};
