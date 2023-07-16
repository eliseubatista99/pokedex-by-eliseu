import { useCustomNavigation } from "@hooks";

export const useAppHeaderHelper = () => {
  const { goBack } = useCustomNavigation();

  const handleOnClickBack = () => {
    goBack();
  };

  return {
    onClickBack: handleOnClickBack,
  };
};
