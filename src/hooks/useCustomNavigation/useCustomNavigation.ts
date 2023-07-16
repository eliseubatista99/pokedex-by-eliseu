import { useHistoryStore } from "@store";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface UseCustomNavigationProps {
  goBack: (steps?: number) => void;
  goTo: (screenPath: string) => void;
}

export const useCustomNavigation = (): UseCustomNavigationProps => {
  const navigate = useNavigate();
  const { addToHistory, popFromHistory, history } = useHistoryStore();

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
    goBack,
    goTo,
  };
};
