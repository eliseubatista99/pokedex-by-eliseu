import { LoginOrRegisterHelperOutputProps } from "./loginOrRegister.hook";
import { LoginOrRegisterMobileScreen } from "./loginOrRegister.mobile";

export const LoginOrRegisterDesktopScreen = (
  props: LoginOrRegisterHelperOutputProps
) => {
  return <LoginOrRegisterMobileScreen {...props} />;
};
