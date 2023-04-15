import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { RegisterDataMobileScreen } from "./registerData.mobile";
import { RegisterDataDesktopScreen } from "./registerData.desktop";

export const RegisterDataScreen = () => {
  return (
    <>
      <ResponsiveRender
        elements={[
          {
            breakpoint: 0,
            content: <RegisterDataMobileScreen />,
          },
          {
            breakpoint: TABLET_BREAKPOINT,
            content: <RegisterDataMobileScreen />,
          },
          {
            breakpoint: DESKTOP_BREAKPOINT,
            content: <RegisterDataDesktopScreen />,
          },
        ]}
      />
    </>
  );
};
