import { LoginDoneHelperOutputProps } from "./loginDone.hook";
import { LoginDoneMobileScreen } from "./loginDone.mobile";

export const LoginDoneDesktopScreen = (props: LoginDoneHelperOutputProps) => {
  return <LoginDoneMobileScreen {...props} />;
};
