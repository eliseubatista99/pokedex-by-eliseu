import { RegisterDoneHelperOutputProps } from "./registerDone.hook";
import { RegisterDoneMobileScreen } from "./registerDone.mobile";

export const RegisterDoneDesktopScreen = (
  props: RegisterDoneHelperOutputProps
) => {
  return <RegisterDoneMobileScreen {...props} />;
};
