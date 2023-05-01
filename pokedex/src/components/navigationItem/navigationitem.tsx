import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { CSSProperties } from "react";
import { NavigationItemDesktop } from "./navigationItem.desktop";
import { NavigationItemMobile } from "./navigationItem.mobile";

export interface NavigationItemProps {
  text: string;
  icon: string | React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  containerProps?: CSSProperties;
}

export const NavigationItem = (props: NavigationItemProps) => {
  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <NavigationItemMobile {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <NavigationItemMobile {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <NavigationItemDesktop {...props} />,
        },
      ]}
    />
  );
};
