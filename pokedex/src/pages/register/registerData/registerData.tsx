import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { RegisterDataMobileScreen } from "./registerData.mobile";
import { RegisterDataDesktopScreen } from "./registerData.desktop";
import { useRegisterDataHelper } from "./registerData.hook";

export const RegisterDataScreen = () => {
  const props = useRegisterDataHelper();

  return (
    <>
      <ResponsiveRender
        elements={[
          {
            breakpoint: 0,
            content: <RegisterDataMobileScreen {...props} />,
          },
          {
            breakpoint: TABLET_BREAKPOINT,
            content: <RegisterDataMobileScreen {...props} />,
          },
          {
            breakpoint: DESKTOP_BREAKPOINT,
            content: <RegisterDataDesktopScreen {...props} />,
          },
        ]}
      />
    </>
  );
};
