import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { ForgotPasswordMobileScreen } from "./forgotPassword.mobile";
import { ForgotPasswordDesktopScreen } from "./forgotPassword.desktop";
import { useForgotPasswordHelper } from "./forgotPassword.hook";

export const ForgotPasswordScreen = () => {
  const props = useForgotPasswordHelper();

  return (
    <>
      <ResponsiveRender
        elements={[
          {
            breakpoint: 0,
            content: <ForgotPasswordMobileScreen {...props} />,
          },
          {
            breakpoint: TABLET_BREAKPOINT,
            content: <ForgotPasswordMobileScreen {...props} />,
          },
          {
            breakpoint: DESKTOP_BREAKPOINT,
            content: <ForgotPasswordDesktopScreen {...props} />,
          },
        ]}
      />
    </>
  );
};
