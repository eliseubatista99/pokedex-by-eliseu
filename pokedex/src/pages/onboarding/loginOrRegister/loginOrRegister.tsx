import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { LoginOrRegisterMobileScreen } from "./loginOrRegister.mobile";
import { LoginOrRegisterDesktopScreen } from "./loginOrRegister.desktop";
import { useLoginOrRegisterHelper } from "./loginOrRegister.hook";

export const LoginOrRegisterScreen = () => {
  const props = useLoginOrRegisterHelper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <LoginOrRegisterMobileScreen {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <LoginOrRegisterMobileScreen {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <LoginOrRegisterDesktopScreen {...props} />,
        },
      ]}
    />
  );
};
