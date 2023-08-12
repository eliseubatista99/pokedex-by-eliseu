import { useHistoryStore } from "@store";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const useCustomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    addToHistory,
    popFromHistory,
    history,
    replaceHistory: storeReplaceHistory,
  } = useHistoryStore();

  const goTo = React.useCallback(
    (screenPath: string, alsoAddToHistory = true) => {
      if (screenPath !== location.pathname) {
        navigate(screenPath, { replace: true });
      }

      if (alsoAddToHistory) {
        addToHistory(screenPath);
      }
    },
    [addToHistory, location.pathname, navigate]
  );

  const goBack = React.useCallback(
    (steps?: number) => {
      const finalSteps = steps || 1;
      const resultScreen = history[history.length - 1 - finalSteps];

      popFromHistory(finalSteps);
      goTo(resultScreen, false);
    },
    [goTo, history, popFromHistory]
  );

  const replaceHistory = React.useCallback(
    (newHistory: string[]) => {
      storeReplaceHistory(newHistory);
    },
    [storeReplaceHistory]
  );

  return {
    currentPath: location.pathname,
    goBack,
    goTo,
    replaceHistory,
  };
};
