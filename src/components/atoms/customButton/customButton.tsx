import { Typography } from "@components";
import React from "react";
import { CSSProperties } from "react";
import { useCustomButtonHelper } from "./customButton.hook";

export interface CustomButtonProps {
  type: "primary" | "secondary" | "ghost";
  isDisabled?: boolean;
  text?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick: () => void;
  styles?: CSSProperties;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { text, startContent, endContent, onClick, styles } = props;
  const { buttonStyles, onButtonHovered, onButtonUnhovered } =
    useCustomButtonHelper(props);

  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px 20px",
        borderRadius: "50px",
        width: "90%",
        maxWidth: "328px",
        height: "50px",
        cursor: "pointer",
        ...buttonStyles,
        ...styles,
      }}
      onPointerEnter={() => onButtonHovered()}
      onPointerLeave={() => onButtonUnhovered()}
      onClick={() => onClick()}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          position: "relative",
          justifyContent: "center",
          verticalAlign: "middle",
        }}
      >
        {startContent && (
          <div
            style={{
              width: "30px",
              height: "30px",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {startContent}
          </div>
        )}
        {text && (
          <Typography
            overflowEllipsis
            styles={{
              fontFamily: "PoppinsSemiBold",
              textAlign: "center",
              flex: 1,
              maxHeight: "24px",
              margin: "auto",
            }}
          >
            {text}
          </Typography>
        )}
        {endContent && (
          <div
            style={{
              width: "30px",
              height: "30px",
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {endContent}
          </div>
        )}
      </div>
    </button>
  );
};
