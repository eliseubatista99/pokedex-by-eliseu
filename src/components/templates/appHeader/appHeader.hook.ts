import { useCustomNavigation } from "@hooks";
import { AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ stepsToGoBack }: AppHeaderProps) => {
  const { goBack } = useCustomNavigation();

  const handleonPointerDownBack = () => {
    goBack(stepsToGoBack);
  };

  return {
    onPointerDownBack: handleonPointerDownBack,
  };
};
