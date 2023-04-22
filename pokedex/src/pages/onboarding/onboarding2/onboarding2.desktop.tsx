import { Onboarding2HelperOutputProps } from "./onboarding2.hook";
import { Onboarding2MobileScreen } from "./onboarding2.mobile";

export const Onboarding2DesktopScreen = (
  props: Onboarding2HelperOutputProps
) => {
  return <Onboarding2MobileScreen {...props} />;
};
