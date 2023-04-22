import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { RegisterDoneMobileScreen } from "./registerDone.mobile";
import { RegisterDoneDesktopScreen } from "./registerDone.desktop";
import { useRegisterDoneHelper } from "./registerDone.hook";

export const RegisterDoneScreen = () => {
  const props = useRegisterDoneHelper();

  return (
    <>
      <ResponsiveRender
        elements={[
          {
            breakpoint: 0,
            content: <RegisterDoneMobileScreen {...props} />,
          },
          {
            breakpoint: TABLET_BREAKPOINT,
            content: <RegisterDoneMobileScreen {...props} />,
          },
          {
            breakpoint: DESKTOP_BREAKPOINT,
            content: <RegisterDoneDesktopScreen {...props} />,
          },
        ]}
      />
    </>
  );
};
