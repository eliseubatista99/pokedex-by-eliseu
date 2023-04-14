import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { CSSProperties } from "react";
import { ResponsiveRender } from "../responsiveRender";
import { AppLayoutDesktop } from "./appLayout.desktop";
import { AppLayoutMobile } from "./appLayout.mobile";

export interface AppLayoutProps {
  withoutNavigation?: boolean;
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  screenContainerProps?: CSSProperties;
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
