import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";

export const useRegisterDoneHelper = () => {
  const { goTo } = useCustomNavigation();

  const handleClickContinue = () => {
    goTo(ScreenPaths.account);
  };

  return {
    onClickContinue: handleClickContinue,
  };
};
