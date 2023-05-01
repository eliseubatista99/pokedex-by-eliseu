import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { LoginMobileScreen } from "./login.mobile";
import { useLoginHelper } from "./login.hook";
import { LoginDesktopScreen } from "./login.desktop";

export const LoginScreen = () => {
  const props = useLoginHelper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <LoginMobileScreen {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <LoginMobileScreen {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <LoginDesktopScreen {...props} />,
        },
      ]}
    />
  );
};
