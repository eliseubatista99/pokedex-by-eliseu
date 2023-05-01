import { Pages } from "@constants";
import { useCustomNavigation } from "@hooks";

export interface RegisterDoneHelperOutputProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export const useRegisterDoneHelper = (): RegisterDoneHelperOutputProps => {
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
