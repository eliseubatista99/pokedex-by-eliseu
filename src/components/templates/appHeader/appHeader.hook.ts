import { useCustomNavigation } from "@hooks";
import { type AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ stepsToGoBack }: AppHeaderProps) => {
  const { goBack } = useCustomNavigation();

  const handleOnClickBack = () => {
    goBack(stepsToGoBack);
  };

  return {
    onClickBack: handleOnClickBack,
  };
};
