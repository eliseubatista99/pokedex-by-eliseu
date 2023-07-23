import { useCustomNavigation } from "@hooks";
import { AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ stepsToGoBack }: AppHeaderProps) => {
  const { goBack } = useCustomNavigation();

  const handleonClickBack = () => {
    goBack(stepsToGoBack);
  };

  return {
    onClickBack: handleonClickBack,
  };
};
