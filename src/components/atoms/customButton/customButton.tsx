import { Typography } from "@components";
import React from "react";
import { CSSProperties } from "react";

export interface CustomButtonProps {
  type: "primary" | "secondary";
  isDisabled?: boolean;
  text?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  onClick: () => void;
  styles?: CSSProperties;
}

export const CustomButton = (props: CustomButtonProps) => {
  const { text, startContent, endContent, onClick, styles } = props;
  const [buttonHovered, setButtonHovered] = React.useState<boolean>(false);

  const primaryButtonStyles: CSSProperties = {
    border: "2px solid #173EA5",
    background: buttonHovered ? "#1a2564" : "#173EA5",
    color: "#ffffff",
  };

  const secondaryButtonStyles: CSSProperties = {
    border: "2px solid #DBDCDD",
    background: buttonHovered ? "#DBDCDD" : "#ffffff",
    color: "#000000",
  };

  const disabledStyles: CSSProperties = props.isDisabled
    ? {
        pointerEvents: "none",
        filter: "grayscale(100%)",
      }
    : {};

  const buttonStyles =
    props.type === "primary" ? primaryButtonStyles : secondaryButtonStyles;

  return (
    <button
      style={{
        display: "flex",
        flexDirection: "row",
        border: "2px solid #173EA5",
        background: buttonHovered ? "#1a2564" : "#173EA5",
        padding: "10px 8px",
        borderRadius: "50px",
        color: "#ffffff",
        width: "90%",
        maxWidth: "328px",
        height: "58px",
        cursor: "pointer",
        ...buttonStyles,
        ...disabledStyles,
        ...styles,
      }}
      onPointerEnter={() => setButtonHovered(true)}
      onPointerLeave={() => setButtonHovered(false)}
      onClick={() => onClick()}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          justifyContent: "center",
          verticalAlign: "middle",
          ...disabledStyles,
        }}
      >
        {startContent && (
          <div style={{ maxWidth: "30px", maxHeight: "30px", margin: "auto" }}>
            {startContent}
          </div>
        )}
        {text && (
          <Typography
            styles={{
              fontFamily: "PoppinsSemiBold",
              textAlign: "center",
              flex: 1,
              maxHeight: "24px",
              fontSize: "16px",
              fontStyle: "normal",
              lineHeight: "normal",
              color: "inherit",
            }}
          >
            {text}
          </Typography>
        )}
        {endContent && (
          <div style={{ maxWidth: "30px", maxHeight: "30px", margin: "auto" }}>
            {endContent}
          </div>
        )}
      </div>
    </button>
  );
};
