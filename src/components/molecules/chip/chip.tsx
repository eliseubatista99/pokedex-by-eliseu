import { Typography } from "@components";
import { CSSProperties } from "react";

export interface ChipProps {
  text: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  styles?: CSSProperties;
}

export const Chip = ({
  text,
  leftIcon,
  rightIcon,
  onClick,
  styles,
}: ChipProps) => {
  return (
    <div
      data-testid="chip"
      style={{
        padding: "8px 12px",
        background: "#333333",
        flexDirection: "row",
        gap: "8px",
        cursor: "pointer",
        borderRadius: "50px",
        color: "#ffffff",
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      {leftIcon && (
        <div
          style={{
            alignItems: "flex-start",
            maxHeight: "24px",
          }}
        >
          {leftIcon}
        </div>
      )}

      <Typography
        styles={{
          flex: 1,
          fontSize: "14px",
          fontWeight: 600,
          maxWidth: "70%",
          margin: "0 auto",
        }}
        overflowEllipsis={true}
      >
        {text}
      </Typography>
      {rightIcon && (
        <div
          style={{
            alignItems: "flex-end",
            maxHeight: "24px",
          }}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};
