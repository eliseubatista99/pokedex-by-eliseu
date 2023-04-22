import { RegisterHelperOutputProps } from "src/pages/register/register/register.hook";
import { RegisterMobileScreen } from "./register.mobile";

export const RegisterDesktopScreen = (props: RegisterHelperOutputProps) => {
  return <RegisterMobileScreen {...props} />;
};
