import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface Onboarding1HelperOutputProps {
  onClickContinue: () => void;
}

export const useOnboarding1Helper = (): Onboarding1HelperOutputProps => {
  const navigate = useNavigate();

  const handleGoToOnboarding2 = () => {
    navigate(Pages.onboarding2);
  };

  return {
    onClickContinue: handleGoToOnboarding2,
  };
};
