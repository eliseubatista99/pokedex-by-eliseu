import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { LoginDoneMobileScreen } from "./loginDone.mobile";
import { LoginDoneDesktopScreen } from "./loginDone.desktop";
import { useLoginDoneHelper } from "./loginDone.hook";

export const LoginDoneScreen = () => {
  const props = useLoginDoneHelper();

  return (
    <>
      <ResponsiveRender
        elements={[
          {
            breakpoint: 0,
            content: <LoginDoneMobileScreen {...props} />,
          },
          {
            breakpoint: TABLET_BREAKPOINT,
            content: <LoginDoneMobileScreen {...props} />,
          },
          {
            breakpoint: DESKTOP_BREAKPOINT,
            content: <LoginDoneDesktopScreen {...props} />,
          },
        ]}
      />
    </>
  );
};
