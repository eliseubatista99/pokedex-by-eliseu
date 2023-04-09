import React from "react";

export interface UseHoverProps {
  isHovered: boolean;
  hover: () => void;
  unhover: () => void;
}

export const useHover = (): UseHoverProps => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const hover = () => {
    setIsHovered(true);
  };

  const unhover = () => {
    setIsHovered(false);
  };

  return {
    isHovered,
    hover,
    unhover,
  };
};
