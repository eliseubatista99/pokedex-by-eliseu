import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../constants";
import { ResponsiveRender } from "../responsiveRender";
import { AppLayoutDesktop } from "./appLayout.desktop";
import { AppLayoutMobile } from "./appLayout.mobile";

export interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <AppLayoutMobile>{children}</AppLayoutMobile>,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <AppLayoutMobile>{children}</AppLayoutMobile>,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <AppLayoutDesktop>{children}</AppLayoutDesktop>,
        },
      ]}
    />
  );
};
