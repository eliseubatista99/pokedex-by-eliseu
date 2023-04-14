import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface Onboarding2HelperOutputProps {
  onClickContinue: () => void;
}

export const useOnboarding2Helper = (): Onboarding2HelperOutputProps => {
  const navigate = useNavigate();

  const handleGoToLoginOrRegister = () => {
    navigate(Pages.loginOrRegister);
  };

  return {
    onClickContinue: handleGoToLoginOrRegister,
  };
};
