import { Pages } from "@constants";
import { useNavigate } from "react-router-dom";

export interface LoginDoneHelperOutputProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export const useLoginDoneHelper = (): LoginDoneHelperOutputProps => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-3);
  };

  const handleClickContinue = () => {
    navigate(Pages.pokedex);
  };

  return {
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
  };
};
