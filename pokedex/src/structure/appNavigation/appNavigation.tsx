import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "../responsiveRender";
import { AppNavigationDesktop } from "./appNavigation.desktop";
import { useAppNavigationHelper } from "./appNavigation.hook";
import { AppNavigationMobile } from "./appNavigation.mobile";

export const AppNavigation = () => {
  const appNavigationProps = useAppNavigationHelper();

  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <AppNavigationMobile {...appNavigationProps} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <AppNavigationMobile {...appNavigationProps} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <AppNavigationDesktop {...appNavigationProps} />,
        },
      ]}
    />
  );
};
