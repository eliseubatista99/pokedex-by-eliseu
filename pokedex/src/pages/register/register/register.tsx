import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { RegisterMobileScreen } from "./register.mobile";
import { useRegisterHelper } from "./register.hook";
import { RegisterDesktopScreen } from "./register.desktop";

export const RegisterScreen = () => {
  const props = useRegisterHelper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <RegisterMobileScreen {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <RegisterMobileScreen {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <RegisterDesktopScreen {...props} />,
        },
      ]}
    />
  );
};
