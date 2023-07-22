import { useHistoryStore } from "@store";
import React from "react";
import { useNavigate } from "react-router-dom";

export const useCustomNavigation = () => {
  const navigate = useNavigate();
  const { addToHistory, popFromHistory, clearHistory, history } =
    useHistoryStore();

  const cleanAndGoTo = React.useCallback(
    (screenPath: string, alsoAddToHistory = true) => {
      clearHistory();
      goTo(screenPath, alsoAddToHistory);
    },
    [addToHistory, navigate]
  );

  const goTo = React.useCallback(
    (screenPath: string, alsoAddToHistory = true) => {
      navigate(screenPath, { replace: true });

      if (alsoAddToHistory) {
        addToHistory(screenPath);
      }
    },
    [addToHistory, navigate]
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

  return {
    cleanAndGoTo,
    goBack,
    goTo,
  };
};
