import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { LoginDataMobileScreen } from "./loginData.mobile";
import { LoginDataDesktopScreen } from "./loginData.desktop";
import { useLoginDataHelper } from "./loginData.hook";

export const LoginDataScreen = () => {
  const props = useLoginDataHelper();

  return (
    <>
      <ResponsiveRender
        elements={[
          {
            breakpoint: 0,
            content: <LoginDataMobileScreen {...props} />,
          },
          {
            breakpoint: TABLET_BREAKPOINT,
            content: <LoginDataMobileScreen {...props} />,
          },
          {
            breakpoint: DESKTOP_BREAKPOINT,
            content: <LoginDataDesktopScreen {...props} />,
          },
        ]}
      />
    </>
  );
};
