import { ScreenPaths } from "@constants";
import { useCustomNavigation } from "@hooks";
import React from "react";

export const useAppHelper = () => {
  const { currentPath, replaceHistory, goTo } = useCustomNavigation();

  const appInitialized = React.useRef<boolean>(false);

  const handleInitialPath = React.useCallback(() => {
    if (currentPath !== ScreenPaths.splash) {
      replaceHistory([]);
      goTo(ScreenPaths.splash, false);
    }
  }, [currentPath, goTo, replaceHistory]);

  React.useEffect(() => {
    if (!appInitialized.current) {
      handleInitialPath();
      appInitialized.current = true;
    }
  }, [currentPath, goTo, handleInitialPath, replaceHistory]);

  return {
    currentPath,
  };
};
