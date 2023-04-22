import { Onboarding1HelperOutputProps } from "./onboarding1.hook";
import { Onboarding1MobileScreen } from "./onboarding1.mobile";

export const Onboarding1DesktopScreen = (
  props: Onboarding1HelperOutputProps
) => {
  return <Onboarding1MobileScreen {...props} />;
};
