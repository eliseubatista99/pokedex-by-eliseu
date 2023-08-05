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
        padding: "8px 16px",
        background: "#333333",
        flexDirection: "row",
        gap: "8px",
        cursor: "pointer",
        ...styles,
      }}
      onClick={() => onClick?.()}
    >
      {leftIcon && <div>{leftIcon}</div>}
      <Typography styles={{ fontSize: "14px", fontWeight: 600 }}>
        {text}
      </Typography>
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};
