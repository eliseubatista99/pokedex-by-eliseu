import { LoginHelperOutputProps } from "./login.hook";
import { LoginMobileScreen } from "./login.mobile";

export const LoginDesktopScreen = (props: LoginHelperOutputProps) => {
  return <LoginMobileScreen {...props} />;
};
