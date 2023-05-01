import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface LoginHelperOutputProps {
  onClickBack: () => void;
  onClickGoogle: () => void;
  onClickApple: () => void;
  onClickEmail: () => void;
}

export const useLoginHelper = (): LoginHelperOutputProps => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToLoginData = () => {
    navigate(Pages.loginData);
  };

  const handleLoginWithGoogle = () => {
    navigate(Pages.login);
  };

  const handleLoginWithApple = () => {
    navigate(Pages.login);
  };

  return {
    onClickBack: handleGoBack,
    onClickGoogle: handleLoginWithGoogle,
    onClickApple: handleLoginWithApple,
    onClickEmail: handleGoToLoginData,
  };
};
