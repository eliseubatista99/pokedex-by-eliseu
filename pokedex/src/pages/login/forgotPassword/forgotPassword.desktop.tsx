import { ForgotPasswordHelperOutputProps } from "./forgotPassword.hook";
import { ForgotPasswordMobileScreen } from "./forgotPassword.mobile";

export const ForgotPasswordDesktopScreen = (
  props: ForgotPasswordHelperOutputProps
) => {
  return <ForgotPasswordMobileScreen {...props} />;
};
