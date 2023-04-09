import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface RegisterHelperOutputProps {
  onClickGoogle: () => void;
  onClickApple: () => void;
  onClickEmail: () => void;
}

export const useRegisterHelper = (): RegisterHelperOutputProps => {
  const navigate = useNavigate();

  const handleGoToRegisterEmail = () => {
    navigate(Pages.registerEmail);
  };

  const handleRegisterWithGoogle = () => {
    navigate(Pages.login);
  };

  const handleRegisterWithApple = () => {
    navigate(Pages.login);
  };

  return {
    onClickGoogle: handleRegisterWithGoogle,
    onClickApple: handleRegisterWithApple,
    onClickEmail: handleGoToRegisterEmail,
  };
};
