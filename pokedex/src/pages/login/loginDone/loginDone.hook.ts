import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface LoginDoneHelperOutputProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export const useLoginDoneHelper = (): LoginDoneHelperOutputProps => {
  const { goTo } = useCustomNavigation();

  const handleGoBack = () => {
    goTo(Pages.loginOrRegister);
  };

  const handleClickContinue = () => {
    goTo(Pages.pokedex);
  };

  return {
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
  };
};
