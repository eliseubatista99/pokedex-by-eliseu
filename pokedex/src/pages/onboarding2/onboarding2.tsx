import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { Onboarding2DesktopScreen } from "./onboarding2.desktop";
import { useOnboarding2Helper } from "./onboarding2.hook";
import { Onboarding2MobileScreen } from "./onboarding2.mobile";

export const Onboarding2Screen = () => {
  const props = useOnboarding2Helper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <Onboarding2MobileScreen {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <Onboarding2MobileScreen {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <Onboarding2DesktopScreen {...props} />,
        },
      ]}
    />
  );
};
