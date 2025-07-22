import { useNavigation } from "@eliseubatista99/react-scaffold-core";

import { type AppHeaderProps } from "./appHeader";

export const useAppHeaderHelper = ({ stepsToGoBack }: AppHeaderProps) => {
  const { goBack } = useNavigation();

  const handleOnClickBack = () => {
    goBack(stepsToGoBack);
  };

  return {
    onClickBack: handleOnClickBack,
  };
};
