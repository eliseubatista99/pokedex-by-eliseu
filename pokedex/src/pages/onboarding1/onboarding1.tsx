import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants";
import { ResponsiveRender } from "../../structure";
import { Onboarding1DesktopScreen } from "./onboarding1.desktop";
import { Onboarding1MobileScreen } from "./onboarding1.mobile";

export const Onboarding1Screen = () => {
  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <Onboarding1MobileScreen />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <Onboarding1MobileScreen />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <Onboarding1DesktopScreen />,
        },
      ]}
    />
  );
};
