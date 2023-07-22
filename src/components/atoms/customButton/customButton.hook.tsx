import React, { CSSProperties } from "react";
import { CustomButtonProps } from "./customButton";
import { useCustomButtonStyles } from "./customButton.styles";

export const useCustomButtonHelper = ({
  type,
  isDisabled,
}: CustomButtonProps) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const {
    primaryButtonStyles,
    secondaryButtonStyles,
    ghostButtonStyles,
    disabledStyles,
  } = useCustomButtonStyles({ isHovered, isDisabled });

  const handleButtonHovered = () => {
    setIsHovered(true);
  };

  const handleButtonUnhovered = () => {
    setIsHovered(false);
  };

  const getButtonStyle = () => {
    let style: CSSProperties = {};
    switch (type) {
      case "secondary":
        style = secondaryButtonStyles;
        break;
      case "ghost":
        style = ghostButtonStyles;
        break;
      default:
        style = primaryButtonStyles;
        break;
    }

    if (isDisabled) {
      style = { ...style, ...disabledStyles };
    }

    return style;
  };

  return {
    buttonStyles: getButtonStyle(),
    isHovered,
    onButtonHovered: handleButtonHovered,
    onButtonUnhovered: handleButtonUnhovered,
  };
};
