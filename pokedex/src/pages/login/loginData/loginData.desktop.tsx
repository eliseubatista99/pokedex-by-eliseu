import { LoginDataHelperOutputProps } from "./loginData.hook";
import { LoginDataMobileScreen } from "./loginData.mobile";

export const LoginDataDesktopScreen = (props: LoginDataHelperOutputProps) => {
  return <LoginDataMobileScreen {...props} />;
};
