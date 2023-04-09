import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants";
import { ResponsiveRender } from "../../structure";
import { Onboarding1DesktopScreen } from "./onboarding1.desktop";
import { useOnboarding1Helper } from "./onboarding1.hook";
import { Onboarding1MobileScreen } from "./onboarding1.mobile";

export const Onboarding1Screen = () => {
  const props = useOnboarding1Helper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <Onboarding1MobileScreen {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <Onboarding1MobileScreen {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <Onboarding1DesktopScreen {...props} />,
        },
      ]}
    />
  );
};
