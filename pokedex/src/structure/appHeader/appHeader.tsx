import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { CSSProperties } from "react";
import { AppHeaderDesktop } from "./appHeader.desktop";
import { AppHeaderMobile } from "./appHeader.mobile";
import { ResponsiveRender } from "../responsiveRender";

export interface AppHeaderTitle {
  content: string;
  containerProps?: CSSProperties;
}

export interface AppHeaderProps {
  withBack?: boolean;
  onClickBack?: boolean;
  title?: AppHeaderTitle;
}

export const AppHeader = (props: AppHeaderProps) => {
  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <AppHeaderMobile {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <AppHeaderMobile {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <AppHeaderDesktop {...props} />,
        },
      ]}
    />
  );
};
