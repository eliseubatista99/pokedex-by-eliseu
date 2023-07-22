import { useCustomNavigation } from "@hooks";
import { AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ stepsToGoBack }: AppHeaderProps) => {
  const { goBack } = useCustomNavigation();

  const handleOnClickBack = () => {
    goBack(stepsToGoBack);
  };

  return {
    onClickBack: handleOnClickBack,
  };
};
