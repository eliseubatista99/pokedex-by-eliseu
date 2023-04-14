import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface RegisterHelperOutputProps {
  onClickBack: () => void;
  onClickGoogle: () => void;
  onClickApple: () => void;
  onClickEmail: () => void;
}

export const useRegisterHelper = (): RegisterHelperOutputProps => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToRegisterData = () => {
    navigate(Pages.registerData);
  };

  const handleRegisterWithGoogle = () => {
    navigate(Pages.login);
  };

  const handleRegisterWithApple = () => {
    navigate(Pages.login);
  };

  return {
    onClickBack: handleGoBack,
    onClickGoogle: handleRegisterWithGoogle,
    onClickApple: handleRegisterWithApple,
    onClickEmail: handleGoToRegisterData,
  };
};
