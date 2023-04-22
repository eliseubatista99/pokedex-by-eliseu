import { RegisterDataHelperOutputProps } from "./registerData.hook";
import { RegisterDataMobileScreen } from "./registerData.mobile";

export const RegisterDataDesktopScreen = (
  props: RegisterDataHelperOutputProps
) => {
  return <RegisterDataMobileScreen {...props} />;
};
