import { useNavigate } from "react-router-dom";
import { Pages } from "@constants";

export interface RegisterDataHelperOutputProps {
  onClickBack: () => void;
  onClickContinue: () => void;
}

export const useRegisterDataHelper = (): RegisterDataHelperOutputProps => {
  const navigate = useNavigate();

  // const [email, setEmail] = React.useState<string | undefined>(undefined);
  // const [name, setName] = React.useState<string | undefined>(undefined);
  // const [password, setPassword] = React.useState<string | undefined>(undefined);
  // const [confirmPassword, setConfirmPassword] = React.useState<
  //   string | undefined
  // >(undefined);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClickContinue = () => {
    navigate(Pages.login);
  };

  return {
    onClickBack: handleGoBack,
    onClickContinue: handleClickContinue,
  };
};
