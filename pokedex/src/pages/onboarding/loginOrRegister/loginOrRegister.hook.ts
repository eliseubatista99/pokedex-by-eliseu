import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface LoginOrRegisterHelperOutputProps {
  onClickRegister: () => void;
  onClickAlreadyHaveAnAccount: () => void;
}

export const useLoginOrRegisterHelper =
  (): LoginOrRegisterHelperOutputProps => {
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
