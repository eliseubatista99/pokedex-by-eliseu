import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants";
import { ResponsiveRender } from "../responsiveRender";
import { AppLayoutDesktop } from "./appLayout.desktop";
import { AppLayoutMobile } from "./appLayout.mobile";

export interface AppLayoutProps {
  withoutNavigation?: boolean;
  children?: React.ReactNode;
}

export const AppLayout = ({ children, ...props }: AppLayoutProps) => {
  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <AppLayoutMobile {...props}>{children}</AppLayoutMobile>,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <AppLayoutMobile {...props}>{children}</AppLayoutMobile>,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <AppLayoutDesktop {...props}>{children}</AppLayoutDesktop>,
        },
      ]}
    />
  );
};
