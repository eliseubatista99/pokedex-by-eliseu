import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "@constants";
import React from "react";

export type Device = "mobile" | "tablet" | "desktop";

export const useResponsive = () => {
  const [device, setDevice] = React.useState<Device>("desktop");

  React.useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        setDevice("mobile");
      } else if (window.innerWidth <= TABLET_BREAKPOINT) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return {
    device,
  };
};
