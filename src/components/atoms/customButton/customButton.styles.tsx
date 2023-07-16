import { CSSProperties } from "react";

export interface CustomButtonStylesProps {
  isHovered?: boolean;
  isDisabled?: boolean;
}

export const useCustomButtonStyles = ({
  isHovered,
  isDisabled,
}: CustomButtonStylesProps) => {
  const primaryButtonStyles: CSSProperties = {
    border: "2px solid #173EA5",
    background: isHovered ? "#1a2564" : "#173EA5",
    color: "#ffffff",
  };

  const secondaryButtonStyles: CSSProperties = {
    border: "2px solid #DBDCDD",
    background: isHovered ? "#DBDCDD" : "#ffffff",
    color: "#000000",
  };

  const ghostButtonStyles: CSSProperties = {
    border: "none",
    background: "none",
    color: isHovered ? "#0c112e" : "#173EA5",
  };

  const disabledStyles: CSSProperties = isDisabled
    ? {
        pointerEvents: "none",
        filter: "grayscale(100%)",
      }
    : {};

  return {
    primaryButtonStyles,
    secondaryButtonStyles,
    ghostButtonStyles,
    disabledStyles,
  };
};
