import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface UseCustomNavigationProps {
  goBack: (steps?: number) => void;
  goTo: (pagePath: string) => void;
}

export const useCustomNavigation = (): UseCustomNavigationProps => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = (steps?: number) => {
    navigate(steps || 1);
  };

  const goTo = (pagePath: string) => {
    navigate(pagePath, { replace: true });
  };

  return {
    goBack,
    goTo,
  };
};
