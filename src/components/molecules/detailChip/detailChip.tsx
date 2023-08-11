import { CSSProperties } from "react";
import { CustomImage, Typography } from "@components";

export interface DetailChipProps {
  icon?: string;
  title: string;
  content: string;
  styles?: CSSProperties;
}

export const DetailChip = ({
  icon,
  title,
  content,
  styles,
}: DetailChipProps) => {
  return (
    <div style={{ flexDirection: "column", ...styles }}>
      <div style={{ width: "100%", flexDirection: "row" }}>
        {icon && <CustomImage src={icon} />}
        <Typography>{title}</Typography>
      </div>
    </div>
  );
};
