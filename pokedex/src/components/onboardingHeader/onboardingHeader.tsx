import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import { ResponsiveRender } from "@structure";
import { OnboardingHeaderDesktop } from "./onboardingHeader.desktop";
import { OnboardingHeaderMobile } from "./onboardingHeader.mobile";

export interface OnboardingHeaderProps {
  title: string;
  onClickBack: () => void;
}

export const OnboardingHeader = (props: OnboardingHeaderProps) => {
  return (
    <ResponsiveRender
      elements={[
        {
          breakpoint: 0,
          content: <OnboardingHeaderMobile {...props} />,
        },
        {
          breakpoint: TABLET_BREAKPOINT,
          content: <OnboardingHeaderMobile {...props} />,
        },
        {
          breakpoint: DESKTOP_BREAKPOINT,
          content: <OnboardingHeaderDesktop {...props} />,
        },
      ]}
    />
  );
};
