import { Typography } from "@components";
import { CSSProperties } from "react";

export interface CardChipProps {
  text: string;
  image?: React.ReactNode;
  styles?: CSSProperties;
}

export const CardChip = ({ text, image, styles }: CardChipProps) => {
  return (
    <div
      style={{
        flexDirection: "row",
        padding: "3px 6px",
        gap: "6px",
        borderRadius: "48px",
        ...styles,
      }}
    >
      {image}
      <Typography styles={{ fontSize: "11px", margin: "auto 0 auto 0" }}>
        {text}
      </Typography>
    </div>
  );
};
